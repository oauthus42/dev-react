import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
console.log(s);

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profiles">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;