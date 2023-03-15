import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);
  let messages = props.state.messages.map(m => <Message message={m.message} />);

  let refTextNewMessage = React.createRef();
  let textNewMessage = () => {
    let textMessage = refTextNewMessage.current.value;
    alert (textMessage);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
      <div>
      <textarea ref={refTextNewMessage}></textarea>
      </div>
      
      <div>
      <button onClick = {textNewMessage}>Отправить сообщение</button>
      </div>
      
    </div>
  )
}

export default Dialogs;