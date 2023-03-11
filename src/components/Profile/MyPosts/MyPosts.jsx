import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.postsWrap}>
      <h2>My posts</h2>
      <div>
      <textarea></textarea>
      </div>
      <div>
      <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message = 'Hi, how are you?' />
        <Post message = "It's my first post" />
        <Post name = 'Marina Z' />
      </div>
    </div>
  )
}

export default MyPosts;