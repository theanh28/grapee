const axios = require('axios');

const { key, oauth, token } = require('../configs/trelloConfig');

const trello = axios.create({
  baseURL: 'https://api.trello.com/1',
  params: {
    key,
    token,
    oauth,
  },
});

export const getBoard = async (boardId) => {
  try {
    const { data } = await trello.get(`/board/${boardId}`);
    return data;
  } catch (err) {
    console.log('GET BOARD FAILED WITH \n', err);
  }
};

export const getBoardActions = async (boardId) => {
  try {
    const { data } = await trello.get(`/boards/${boardId}/actions`, {
      params: {

      },
    });
    return data;
  } catch (err) {
    console.log('GET BOARD ACTION FAILED WITH \n', err);
  }
};

export const getBoardCard = async (boardId) => {
  try {
    const { data } = await trello.get(`/boards/${boardId}/cards`, {
      params: {

      },
    });
    return data;
  } catch (err) {
    console.log('GET BOARD CARD FAILED WITH \n', err);
  }
};

export const getLatestBoardCard = async (boardId) => {
  try {
    const res = await getBoardCard(boardId);
    const card = await res.reduce(
      (acc, e) => {
        return (e.due && Date.parse(e.due) > Date.parse(acc.due))
          ? e
          : acc;
      },
      { due: new Date(0) },
    );
    return card;
  } catch (err) {
    console.log('GET LATEST BOARD CARD FAILED WITH \n', err);
  }
};

export const getCardActions = async (cardId) => {
  try {
    const { data } = await trello.get(`/cards/${cardId}/actions`);
    return data;
  } catch (err) {
    console.log('GET LATEST CARD COMMENT FAILED WITH ', err);
  }
}

export const getLatestCardComment = async (cardId) => {
  try {
    const data = await getCardActions(cardId);
    return data.filter(({ type }) => type === 'commentCard');
  } catch (err) {
    console.log('GET LATEST CARD COMMENT FAILED WITH ', err);
  }
};

export const postCommentToCard = async (cardId, text) => {
  try {
    const { data } = await trello.post(`/cards/${cardId}/actions/comments`, {}, {
      params: {
        text,
      },
    });

    return data;
  } catch (err) {
    console.log('POST COMMENT FAILED WITH ', err);
  }
};


const saveToStorage = (name) => (value) => localStorage.setItem(name, value);

export const checkTrello = () => {
  const {
    i50, i60, i50p, i60p, admin,
  } = require('../configs/trelloConfig');

  let last50, last60, lastAd50;
  
  const prep = () => {
    last50 = [Date.parse(localStorage.getItem('last50') || new Date(0))];
    last60 = [Date.parse(localStorage.getItem('last60') || new Date(0))];
    lastAd50 = [Date.parse(localStorage.getItem('lastAd50') || new Date(0))];
  }

  const dodo = async (cls, students, last, save) => {
    const cardId = (await getLatestBoardCard(cls)).id;
    const actions = await getCardActions(cardId);
    actions.forEach((e) => {
      const { id, fullName } = e.memberCreator;
      const { text } = e.data;
      students.forEach(async (std, index) => {
        if (std.id === id && (new Date() - last[index]) / (1000 * 60 * 60) > 2 && text.includes('https')) {
          last[index] = new Date();
          save(last[index]);
          await postCommentToCard(cardId, `@${std.name} Homework all done`);
          console.log(`${fullName} checked`);
        }
      });
    });
    return null;
  };


  setInterval(() => {
    prep();
    dodo(i50, admin, lastAd50, saveToStorage('lastAd50'));
    dodo(i50, i50p, last50, saveToStorage('last50'));
    dodo(i60, i60p, last60, saveToStorage('last60'));
  }, 10 * 1000);
}