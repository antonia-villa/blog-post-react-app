import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './App'; // import ____ from app.js
import registerServiceWorker from './registerServiceWorker';

let authors = ["author1", "author2", "author3"];

ReactDOM.render(<Post allAuthors={authors}/>, document.getElementById('root'));
registerServiceWorker();
