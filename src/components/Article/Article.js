import React from 'react';

function Article (props) {
  const {id, title, abstract, byline, image, created_date} = props
    return (
      <div>
        <h2>{title}</h2>
        <p>{created_date}</p>
        <h3>{byline ? byline: null}</h3>
        {image ? <img src='image'></img> : null}
        <p>{abstract}</p>
      </div>
    );
  }
  

export default Article;
