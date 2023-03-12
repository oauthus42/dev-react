import s from './MyPosts.module.css'
import Post from './Post/Post';


let postsData = [
  {id: '1', message: 'Hi, how are you?', likesCount: '12'},
  {id: '2', message: "It's my first post", likesCount: '10'},
  {id: '3', message: 'Marina Z', likesCount: 'лучше всех'}
]

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
        <Post message = {postsData[0].message} likesCount = {postsData[0].likesCount}/>
        <Post message = {postsData[1].message} likesCount = {postsData[1].likesCount}/>
        <Post message = {postsData[2].message} likesCount = {postsData[2].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;