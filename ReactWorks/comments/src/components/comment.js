import React from 'react';



const Comment = (props) => {
  /*const name = props.name;
  const timeAgo =props.timeAgo;
  const start = props.start;
  const comment = props.comment;
  Farklı Yeni Kullanım
  veya parametreleri props yerine yazarakta aynı işlem yapılabilir.
  {name, timeAgo, star, comment} ====> props*/
  const {name, timeAgo, star, avatar, comment} = props;

  return(
    <div className="comment">
      <a className="avatar" href='/'>
        <img alt='avatar' src = {avatar}/>
      </a>
      <div className="content">
        <a className="author" href='/'>{name}</a>
        <div className="metadata">
          <div className="date">{timeAgo} gün önce</div>
          <div className="rating">
            <i className="star icon"></i>
            {star} Favori
          </div>
        </div>
        <div className="text">
          {comment}
        </div>
      </div>
    </div>
  );
}

export default Comment;
