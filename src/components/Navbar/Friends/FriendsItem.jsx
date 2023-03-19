import React from 'react';
import s from './FriendsItem.module.css'

const FriendsItem = (props) => {
  return (
    <div className={s.my_flex_box}>
      <img className={s.avatar} src={props.avatar}></img>
      <div className='name'>{props.name}</div>
    </div>
  )
}

export default FriendsItem;