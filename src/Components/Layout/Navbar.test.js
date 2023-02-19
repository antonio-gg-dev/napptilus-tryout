import {render, screen} from "@testing-library/react";
import {Navbar} from "./Navbar";
import {BreadcrumbContext} from "../../Contexts/BreadcrumbContext";
import {CartCountContext} from "../../Contexts/CartCountContext";
import {BrowserRouter} from "react-router-dom";
import {Breadcrumb} from "../../Entities/VO/Breadcrumb";

describe('src/Components/Layout/Navbar.js', () => {
    it('should render as links breadcrumbs with urls', () => {
        const breadcrumbs = [
            new Breadcrumb('First Breadcrumb', 'http://first.url'),
            new Breadcrumb('Second Breadcrumb'),
            new Breadcrumb('Third Breadcrumb', 'http://third.url'),
        ]

        render(
            <BrowserRouter>
                <BreadcrumbContext.Provider value={{ breadcrumbs }}>
                    <CartCountContext.Provider value={{ cartCount: 0 }}>
                        <Navbar />
                    </CartCountContext.Provider>
                </BreadcrumbContext.Provider>
            </BrowserRouter>
        )

        const breadcrumbLinks = screen.getAllByTestId('breadcrumb-link')

        expect(breadcrumbLinks.length).toEqual(2)
        expect(breadcrumbLinks[0]).toHaveAttribute('href', 'http://first.url')
        expect(breadcrumbLinks[1]).toHaveAttribute('href', 'http://third.url')
    })
})
