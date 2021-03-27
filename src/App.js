import './App.css';
import HomePage from './pages/HomePage';
import "antd/dist/antd.css";
import { GoogleLoginProvider } from "./store/GoogleLogin"
require("dotenv").config();

function App() {

  return (
    <GoogleLoginProvider>
      <div className="App">
        <HomePage />
      </div>
    </GoogleLoginProvider>
  );
}

export default App;
