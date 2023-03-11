import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://i.pinimg.com/originals/a4/2b/1f/a42b1f99d2873b605629e175238b21f6.jpg'></img>
      </div>

      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile;