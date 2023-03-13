import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

let refTextNewPost = React.createRef();
let textNewPost = () => {
  let text = refTextNewPost.current.value;
  alert (text)
}

  return (
    <div className={s.postsWrap}>
      <h2>My posts</h2>
      <div>
        <textarea ref={refTextNewPost}></textarea>
      </div>
      <div>
        <button onClick={textNewPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;