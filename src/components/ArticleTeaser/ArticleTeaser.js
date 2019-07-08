import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    return (
      <div>
        <a href='New_Article' onClick={this.props.handleTitleClick(this.props.id)}>{this.props.title}</a>
        <hr/>
        <p>{this.props.created_date}</p>
      </div>
    );
  }
}

export default ArticleTeaser;
