import React from 'react';
import './tweets.css';
import { withRouter } from 'react-router-dom';

const decideDate = (date) => {
  let result = '';
  const diffMS = new Date().getTime() - new Date(date).getTime();
  const min = parseInt(diffMS / 1000 / 60) // miniute
  const hour = parseInt(min / 60); //hour
  const day = parseInt(hour/24); // day

  if(min < 1) {
    result = 'about 1 minute ago';
  }else {
    if (hour < 1) {
      result = min + ' minute ago';
    }else {
      if (day < 1) {
        result = hour + ' hours ago';
      }else {
      result = day + ' day ago';
      }
    }
  }
  return result;
}

const Tweet = ({ tweet, history }) => {
  return (

    <div className="tweet-wrapper event"
          onClick = {() => {
            history.push({
              pathname: './editTweet',
              state: {
                tweet
              }
            });
          }}>
      <div className="content">
        <div className="summary">
            {tweet.email}
          <div className="date">
            {decideDate(tweet.date)}
          </div>
        </div>
        <div className="extra text">
          {tweet.tweet}
        </div>
      </div>
    </div>

  )
}

export default withRouter (Tweet);
