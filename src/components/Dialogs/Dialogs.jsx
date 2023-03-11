import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name='Polina' id='1' />
        <DialogItem name='Sasha' id='2' />
        <DialogItem name='Andrey' id='3' />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is you?" />
        <Message message="Yo!" />
      </div>
    </div>
  )
}

export default Dialogs;