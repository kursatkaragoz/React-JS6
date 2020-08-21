import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import TweetListReducer from './tweetListReducer';
import MyTweetListReducer from './MyTweetListReducer';

export default combineReducers({
  auth: AuthReducer,
  tweetList: TweetListReducer,
  myTweetList: MyTweetListReducer
});
