import React from "react"
import FriendsItem from "./FriendsItem"
import s from './FriendsItem.module.css'
    const Friends = (props) => {
      
      let friendsBlock = props.state.dialogs.map(d => <FriendsItem name={d.name} id={d.id} avatar={d.avatar} />);
      return (
        <div className={s.my_flex_cont}>
          {friendsBlock}
        </div>
      )
    }
export default Friends;