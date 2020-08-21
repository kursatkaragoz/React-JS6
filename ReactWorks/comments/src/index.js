import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/comment';
import ApprovalCard from './components/approvalCard';
import faker from 'faker';

const App = () => {
  return(
    <div className="ui comments" style={{
      paddingTop: '10px',
      paddingLeft: '10px',
    }}>
      <ApprovalCard>
        <Comment name='Kürşad KARAGÖZ'
               timeAgo='2'
               star = '5'
               avatar = {faker.image.avatar()}
               comment = 'Merhaba React'/>
      </ApprovalCard>

      <ApprovalCard>
        <Comment name='Rıza Olak'
              timeAgo='3'
              star = '3'
              avatar = {faker.image.avatar()}
              comment = 'Merhaba React2'/>
      </ApprovalCard>

      <ApprovalCard>
        <Comment name='Ebru Yasar'
              timeAgo='8'
              star = '2'
              avatar = {faker.image.avatar()}
              comment = 'Merhaba React2'/>
      </ApprovalCard>

      <ApprovalCard>
        <Comment name='Mehmet Tan'
              timeAgo='4'
              star = '1'
              avatar = {faker.image.avatar()}
              comment = 'Merhaba React2'/>
      </ApprovalCard>

      <ApprovalCard>
        <Comment name='Ali Efendi'
              timeAgo='2'
              star = '9'
              avatar = {faker.image.avatar()}
              comment = 'Merhaba React2'/>
      </ApprovalCard>

      <ApprovalCard>
        Merhaba
      </ApprovalCard>

  </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
