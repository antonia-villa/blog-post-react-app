import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let post = {
  title: "Ponies are the bomb",
  body: "Check out these ponies bby!",
  comments: ["Brown!", "Blue", "Spotted!"]
}

class Post extends Component {
  render() {
    return (
      <div className="Post"> 
        <h1> {post.title} </h1> 
        <h2> Written by the famous: {post.author} </h2>
        <p> {post.body} </p>
        All the comments:
        <ul>
          <li>{post.comments[0]}</li> 
        </ul>
        <ul>
          <Author authors={this.props.allAuthors}/>
        </ul>
      </div>
    );
  }
}

class Author extends Component {
  render() {
    return (
      <div>
        {this.props.authors.map(author => <li>Written by: {author}</li>)}
      </div>
    );
  }
}

export default Post;
