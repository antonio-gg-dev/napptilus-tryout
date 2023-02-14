import {Link, Outlet} from "react-router-dom";
import styles from './Layout.module.scss'

export function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li className={ styles.layout__test }>
                        <Link to="/">Home</Link>
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
