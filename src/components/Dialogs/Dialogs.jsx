import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Polina</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialogs/2'>Sasha</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialogs/3'>Andrey</NavLink>
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