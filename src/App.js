import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import generateRandomInCss from "./utils/generateRandomInCss";
import SignUpLogIn from "./pages/SignUpLogIn/SignUpLogIn";
import Profile from "./pages/Profile/Profile";
import Yearbook from "./pages/Yearbook/Yearbook";
import Threads from "./pages/Threads/Threads";
import Expo from "./pages/Expo/Expo";
import Chat from "./pages/Chat/Chat";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
function App() {
  generateRandomInCss();
  const [selectedUserType, setSelectedUserType] = useState("");
  const [user, setUser] = useState({
    type: "",
    name: "",
    username: "",
    id: "",
  });
  return (
    <Router className="app">
      <Header />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<SignUpLogIn user={user} setUser={setUser} />}
          />
          <Route
            path="/login"
            element={<SignUpLogIn user={user} setUser={setUser} />}
          />
          <Route
            path="/signup"
            element={<SignUpLogIn user={user} setUser={setUser} />}
          />
          <Route
            path="/users/:username"
            element={<Profile selectedUserType={selectedUserType} setSelectedUserType={setSelectedUserType} user={user} />}
          />
          <Route
            path="/users/:username/edit"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route path="/yearbook/:yearbookId" element={<Yearbook />} />
          <Route path="/threads/:threadId" element={<Threads />} />
          <Route
            path="/expo"
            element={<Expo selectedUserType={selectedUserType} setSelectedUserType={setSelectedUserType} />}
          />
          <Route path="/chat/:chatId" element={<Chat />} />
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
