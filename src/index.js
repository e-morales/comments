import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import './App.css';

ReactDOM.render(
  <Post 
    className='post'
    title={'A Day in the Life of a React Developer'}
    author={'Disgruntled Dev'}
    body={'There is so much about React so much'}
    comments={[
      'Great blog!',
      'This blog sucks'
    ]}
    />,
  document.getElementById('root')
)
