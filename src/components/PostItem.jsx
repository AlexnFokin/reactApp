import React from 'react';
import classes from "./css/PostItem.module.css";
import MyButton from "./UI/button/MyButton";
import {useHistory} from "react-router-dom";

const PostItem = (props) => {
  const router = useHistory()
  return (
    <div className={classes.list__item}>
      <div className={classes.list__item__title}>
        {props.post.id} - {props.post.title}
      </div>
      <div className={classes.list__item__content}>
        <div>{props.post.body}</div>
        <div className={classes.list__item__btns}>
          <MyButton onClick={() => {router.push(`/posts/${props.post.id}`)}}>Open</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Remove post</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;