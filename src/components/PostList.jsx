import React from 'react';
import PostItem from "./PostItem";
import classes from './css/PostList.module.css'

const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h2 className={classes.post__list__title}>{title}</h2>
      {posts.map((post, index) =>
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      )}
    </div>
  );
};

export default PostList;