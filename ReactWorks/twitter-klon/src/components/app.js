import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Menu from './menu/menu';
import Tweets from './tweet/tweets';
import Mytweets from './tweet/myTweets';
import NewTweet from './tweet/newTweet/newTweet';
import Login from './login/login';
import firebase from 'firebase/app';
import history from '../history.js';
import { isLoggedIn } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCiyEtObcrNV5uCnbIRkcLPZggNlMmtfYg",
      authDomain: "twitterklon-react-d9f2a.firebaseapp.com",
      databaseURL: "https://twitterklon-react-d9f2a.firebaseio.com",
      projectId: "twitterklon-react-d9f2a",
      storageBucket: "twitterklon-react-d9f2a.appspot.com",
      messagingSenderId: "31653938682",
      appId: "1:31653938682:web:7bcf5552c886fa0a9e5043",
      measurementId: "G-TN3CKZ61DR"
    });
      this.props.isLoggedIn();
  }

  render(){
    return (
        <Router history={history}>
          <div>
            <Menu />
            <Switch>
              <Route path='/' exact component = {Tweets} />
              <Route path='/myTweets'  component = {Mytweets} />
              <Route path='/newTweet'  component = {NewTweet} />
              <Route path='/editTweet'  component = {NewTweet} />
              <Route path='/login'  component = {Login} />
            </Switch>
          </div>
        </Router>
    )
  }

}

export default connect(null, { isLoggedIn }) (App);
