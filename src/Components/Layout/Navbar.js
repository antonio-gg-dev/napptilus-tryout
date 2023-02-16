import styles from "./Navbar.module.scss";
import {Link} from "react-router-dom";

export function Navbar () {
    return (
        <nav className={styles['navbar__navbar']}>
            <div className={styles['navbar__container']}>
                <Link to="/">
                    <img
                        src="/logo.svg"
                        alt="AG Mobile"
                        className={ styles['navbar__logo'] }
                    />
                </Link>
            </div>
        </nav>
    )
}
