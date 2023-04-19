
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navBar}>
                <Link to="/"><span className='fa fa-bars'></span></Link>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;