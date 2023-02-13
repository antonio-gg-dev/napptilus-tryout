import * as React from "react";
import {Routes, Route} from "react-router-dom";
import {ProductListPage} from "./Pages/ProductListPage";
import {NotFound} from "./Pages/NotFound";
import {ProductDetailPage} from "./Pages/ProductDetailPage";
import {Layout} from "./Components/Layout/Layout";

export default function App() {
    return (
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
    );
}
