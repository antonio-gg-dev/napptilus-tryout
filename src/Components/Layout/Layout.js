import {Link, Outlet} from "react-router-dom";
import styles from './Layout.module.scss'

export function Layout() {
    return (
        <div>
            <nav className={styles.layout__navbar}>
                <ul>
                    <li>
                        <Link to="/">
                            <img
                                src="/logo.svg"
                                alt="AG Mobile"
                                className={ styles.layout__logo }
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/test">Test Product</Link>
                    </li>
                    <li>
                        <Link to="/error">404!</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}
