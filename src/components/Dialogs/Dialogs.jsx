import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' ' + s.active}>
          Polina
        </div>
        <div className={s.dialog}>
          Sasha
        </div>
        <div className={s.dialog}>
          Andrey
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is you?</div>
        <div className={s.message}>Yo!</div>
      </div>
    </div>
  )
}

export default Dialogs;