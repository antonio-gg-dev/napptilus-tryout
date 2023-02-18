import styles from "./Navbar.module.scss";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartCountContext} from "../../Contexts/CartCountContext";

export function Navbar () {
    const {cartCount} = useContext(CartCountContext);

    return (
        <nav className={styles['navbar__navbar']}>
            <div className={styles['navbar__container']}>
                <Link
                    className={styles['navbar__logo-link']}
                    to="/"
                >
                    <img
                        src="/logo.svg"
                        alt="AG Mobile"
                        className={ styles['navbar__logo'] }
                    />
                </Link>


                <div className={styles['navbar__cart-container']}>
                    <img
                        src={'/shopping-cart.svg'}
                        alt="Productos en el carrito"
                        className={styles['navbar__cart-icon']}
                    />
                    <span className={styles['navbar__cart-label']}>
                        {cartCount}
                    </span>

                </div>
            </div>
        </nav>
    )
}
