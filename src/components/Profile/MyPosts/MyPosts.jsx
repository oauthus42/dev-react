import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
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
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;