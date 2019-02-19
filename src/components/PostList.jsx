import React from 'react';
import PropTypes from 'prop-types'
// import {v4} from 'uuid'
import Post from './Post'

function PostList(props){
  return(
    <div>
      {props.masterPostList.map((post)=>
        <Post title = {post.title}
          image = {post.image}
          score = {post.score}
          key = {post.id}
        />
      )}
    </div>
  )
}

PostList.propTypes={
  masterPostList: PropTypes.array.isRequired
};

export default PostList;