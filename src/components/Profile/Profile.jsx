import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://catherineasquithgallery.com/uploads/posts/2021-12/thumbs/1639732741_62-catherineasquithgallery-com-p-rozovii-fon-dlya-kanala-99.jpg'></img>
      </div>

      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile;