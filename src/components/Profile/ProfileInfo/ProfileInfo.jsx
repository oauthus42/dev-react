import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://i.pinimg.com/originals/a4/2b/1f/a42b1f99d2873b605629e175238b21f6.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo;