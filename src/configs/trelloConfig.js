[
  'REACT_APP_TRELLO_API_KEY',
  'REACT_APP_TRELLO_OAUTH_KEY',
  'REACT_APP_TRELLO_TOKEN',
  'REACT_APP_TRELLO_50',
  'REACT_APP_TRELLO_60',
].forEach(
  (name) => {
    if (!process.env[name]) {
      throw new Error(`Environment variable ${name} missing`);
    }
  },
);

const config = {
  key: process.env.REACT_APP_TRELLO_API_KEY,
  oauth: process.env.REACT_APP_TRELLO_OAUTH_KEY,
  token: process.env.REACT_APP_TRELLO_TOKEN,
  i50: process.env.REACT_APP_TRELLO_50,
  i50p: [{ id: '5fd25c99f9120a1c412e2ce1', name: 'nguyenquanghieu1' }],
  i60: process.env.REACT_APP_TRELLO_60,
  i60p: [{ id: '5aca45c70450f4421b7d9d4e', name: 'trnghoaidong' }],
  admin: [{ id: '5f7a0e80719d0981abacd8b7', name: 'thanhvu117' }],
};

module.exports = config;
