import s from './MyPosts.module.css'
import Post from './Post/Post';


let postsData = [
  {id: '1', message: 'Hi, how are you?', likesCount: '12'},
  {id: '2', message: "It's my first post", likesCount: '10'},
  {id: '3', message: 'Marina Z', likesCount: 'лучше всех'},
]

let posts = postsData.map(p => <Post message = {p.message} likesCount = {p.likesCount}/>);

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
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;