import React from 'react';
import PostItem from "./PostItem";
import classes from './css/PostList.module.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}
      >
        Posts not found
      </h1>
    )
  }
  return (
    <div>
      <h2 className={classes.post__list__title}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}

            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;