

import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navBar}>
                <a href='/'><span className='fa fa-bars'></span></a>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/favorite'>Favorite</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;