import * as React from "react";
import {Routes, Route} from "react-router-dom";
import {ProductListPage} from "./Pages/ProductListPage";
import {NotFound} from "./Pages/NotFound";
import {ProductDetailPage} from "./Pages/ProductDetailPage";
import {Layout} from "./Components/Layout/Layout";
import {CartCountContext} from "./Contexts/CartCountContext";
import {useState} from "react";

export default function App() {
    const [cartCount, setCartCount] = useState(0)
    return (
        <CartCountContext.Provider value={{ cartCount, setCartCount }}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={<ProductListPage />}
                    />
                    <Route
                        path="products/:productId"
                        element={<ProductDetailPage />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </CartCountContext.Provider>
    );
}
