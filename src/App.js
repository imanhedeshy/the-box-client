import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import generateRandomInCss from "./utils/generateRandomInCss";

import SignUpLogIn from "./pages/SignUpLogIn/SignUpLogIn";
import Profile from "./pages/Profile/Profile";
import Yearbook from "./pages/Yearbook/Yearbook";
import Threads from "./pages/Threads/Threads";
import Expo from "./pages/Expo/Expo";
import NotFound from "./components/NotFound/NotFound";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  generateRandomInCss();

  return (
    <Router className="app">
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<SignUpLogIn />} />
          <Route path="/login" element={<SignUpLogIn />} />
          <Route path="/signup" element={<SignUpLogIn />} />
          <Route path="/users/:username" element={<Profile />} />
          <Route path="/yearbook" element={<Yearbook />} />
          <Route path="/threads" element={<Threads />} />
          <Route path="/expo" element={<Expo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
