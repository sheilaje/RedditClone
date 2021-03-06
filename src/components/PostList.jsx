import React from 'react';
import PropTypes from 'prop-types';
// import {v4} from 'uuid'
import Post from './Post';

const postListStyle = {

};

function PostList(props){
  return(
    <div style={postListStyle}>
      {props.masterPostList.map((post)=>
        <Post title = {post.title}
          image = {post.image}
          score = {post.score}
          id = {post.id}
          onDownvote = {props.onDownvote}
          onUpvote = {props.onUpvote}
          key = {post.id}/>
      )}
    </div>
  );
}

PostList.propTypes={
  masterPostList: PropTypes.array.isRequired,
  onDownvote: PropTypes.func.isRequired,
  onUpvote: PropTypes.func.isRequired
};

export default PostList;
