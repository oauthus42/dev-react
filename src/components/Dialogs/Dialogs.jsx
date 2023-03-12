import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

let dialogData = [
  { id: '1', name: 'Polina' },
  { id: '2', name: 'Sasha' },
  { id: '3', name: 'Andrey' }
]

let messagesData = [
  {id: '1', message: 'Hi'},
  {id: '2', message: 'How is you?'},
  {id: '3', message: 'Yo!'}
]

let dialogs = dialogData.map (d => <DialogItem name={d.name} id={d.id} />);
let messages = messagesData.map (m => <Message message={m.message} />);


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
    </div>
  )
}

export default Dialogs;