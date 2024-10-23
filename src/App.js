import './App.css';
import React from "react";
import Header from './Components/HeaderF/Header';
import Navbar from './Components/HeaderF/Navbar';
import AllFriendsM from './Components/FriendsF/AllFriendsM';
import SingleFriend from './Components/FriendsF/SingleFriend';
import CurrentFriend from './Components/CurrentF/CurrentFriend';
import VisitedFriends from './Components/CurrentF/VisitedFriends';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Navbar></Navbar>

        <Routes>
        <Route path='/all' element={<AllFriendsM/>} ></Route>
        <Route path='/friends/:name/:id' element={<SingleFriend/>} ></Route>
        <Route path='/current' element={<CurrentFriend/>} ></Route>
        <Route path='/visited' element={<VisitedFriends/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
