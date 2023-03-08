import s from './Post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://i.pinimg.com/75x75_RS/c5/0e/24/c50e24ba9836d8584fe7023489388bcb.jpg'></img>
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;