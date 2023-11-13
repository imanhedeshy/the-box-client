"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var generateRandomInCss_1 = require("./utils/generateRandomInCss");
var SignUpLogIn_1 = require("./pages/SignUpLogIn/SignUpLogIn");
var Profile_1 = require("./pages/Profile/Profile");
var Yearbook_1 = require("./pages/Yearbook/Yearbook");
var Threads_1 = require("./pages/Threads/Threads");
var Expo_1 = require("./pages/Expo/Expo");
var Chat_1 = require("./pages/Chat/Chat");
var NotFound_1 = require("./components/NotFound/NotFound");
var Header_1 = require("./components/Header/Header");
var Footer_1 = require("./components/Footer/Footer");
require("./App.scss");
function App() {
    (0, generateRandomInCss_1.default)();
    var _a = (0, react_1.useState)(""), selectedUserType = _a[0], setSelectedUserType = _a[1];
    var _b = (0, react_1.useState)({
        type: "",
        name: "",
        username: "",
        id: "",
    }), user = _b[0], setUser = _b[1];
    return (<react_router_dom_1.BrowserRouter>
      <Header_1.default />
      <div className="pages">
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<SignUpLogIn_1.default user={user} setUser={setUser}/>}/>
          <react_router_dom_1.Route path="/login" element={<SignUpLogIn_1.default user={user} setUser={setUser}/>}/>
          <react_router_dom_1.Route path="/signup" element={<SignUpLogIn_1.default user={user} setUser={setUser}/>}/>
          <react_router_dom_1.Route path="/users/:username" element={<Profile_1.default selectedUserType={selectedUserType} user={user}/>}/>
          <react_router_dom_1.Route path="/users/:username/edit" element={<Profile_1.default user={user} selectedUserType={selectedUserType}/>}/>
          <react_router_dom_1.Route path="/yearbook/:yearbookId" element={<Yearbook_1.default />}/>
          <react_router_dom_1.Route path="/threads/:threadId" element={<Threads_1.default />}/>
          <react_router_dom_1.Route path="/expo" element={<Expo_1.default selectedUserType={selectedUserType} setSelectedUserType={setSelectedUserType}/>}/>
          <react_router_dom_1.Route path="/chat/:chatId" element={<Chat_1.default />}/>
          <react_router_dom_1.Route path="/*" element={<NotFound_1.default />}/>
        </react_router_dom_1.Routes>
      </div>
      <Footer_1.default />
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
// import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import generateRandomInCss from "./utils/generateRandomInCss";
// import SignUpLogIn from "./pages/SignUpLogIn/SignUpLogIn";
// import Profile from "./pages/Profile/Profile";
// import Yearbook from "./pages/Yearbook/Yearbook";
// import Threads from "./pages/Threads/Threads";
// import Expo from "./pages/Expo/Expo";
// import Chat from "./pages/Chat/Chat";
// import NotFound from "./components/NotFound/NotFound";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import "./App.scss";
// function App() {
//   generateRandomInCss();
//   const [selectedUserType, setSelectedUserType] = useState("");
//   const [user, setUser] = useState({
//     type: "",
//     name: "",
//     username: "",
//     id: "",
//   });
//   return (
//     <Router className="app">
//       <Header />
//       <div className="pages">
//         <Routes>
//           <Route
//             path="/"
//             element={<SignUpLogIn user={user} setUser={setUser} />}
//           />
//           <Route
//             path="/login"
//             element={<SignUpLogIn user={user} setUser={setUser} />}
//           />
//           <Route
//             path="/signup"
//             element={<SignUpLogIn user={user} setUser={setUser} />}
//           />
//           <Route
//             path="/users/:username"
//             element={<Profile selectedUserType={selectedUserType} setSelectedUserType={setSelectedUserType} user={user} />}
//           />
//           <Route
//             path="/users/:username/edit"
//             element={<Profile user={user} setUser={setUser} />}
//           />
//           <Route path="/yearbook/:yearbookId" element={<Yearbook />} />
//           <Route path="/threads/:threadId" element={<Threads />} />
//           <Route
//             path="/expo"
//             element={<Expo selectedUserType={selectedUserType} setSelectedUserType={setSelectedUserType} />}
//           />
//           <Route path="/chat/:chatId" element={<Chat />} />
//           <Route path="/*" element={<NotFound />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }
// export default App;
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
