import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  //отрисовка постов
  let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  //создание ссылки на объект, в котором находится значение нового поста
  let newPostElement = React.createRef();

  //функция добавления нового поста
  let textNewPost = () => {
    props.addPost();
  }

  //функция захвата изменения вводимого в textarea поля и отправка данных в state.js для отрисовки
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsWrap}>
      <h2>My posts</h2>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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