import {Link, Outlet} from "react-router-dom";

export function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
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
