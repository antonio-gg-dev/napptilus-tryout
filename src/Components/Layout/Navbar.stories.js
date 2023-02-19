import {Navbar} from "./Navbar";
import {withReactContext} from "storybook-react-context";
import {CartCountContext} from "../../Contexts/CartCountContext";
import {BreadcrumbContext} from "../../Contexts/BreadcrumbContext";
import {withRouter} from "storybook-addon-react-router-v6";
import {Breadcrumb} from "../../Entities/VO/Breadcrumb";

export default {
    component: Navbar,
    decorators: [
        withRouter,
        withReactContext({
            Context: CartCountContext,
            initialState: {
                cartCount: 0,
                setCartCount: () => {}
            }
        }),
        withReactContext({
            Context: BreadcrumbContext,
            initialState: {
                breadcrumbs: [],
                setBreadcrumbs: () => {}
            }
        })
    ],
}

const Builder = () => {
    return <Navbar />
}

export const Default = (args) => Builder(args)
Default.args = {
    cartCount: 0,
    breadcrumbs: [
        new Breadcrumb('Primer Nivel'),
        new Breadcrumb('Segundo Nivel'),
    ],
}
Default.parameters = {
    reactContext: {
        useProviderValue: (state, args) => args
    },
}

export const EmptyBreadcrumb = (args) => Builder(args)
EmptyBreadcrumb.args = {
    cartCount: 0,
    breadcrumbs: [],
}
EmptyBreadcrumb.parameters = {
    reactContext: {
        useProviderValue: (state, args) => args
    },
}

export const CartCount = (args) => Builder(args)
CartCount.args = {
    cartCount: 42,
    breadcrumbs: [
        new Breadcrumb('Primer Nivel'),
        new Breadcrumb('Segundo Nivel'),
    ],
}
CartCount.parameters = {
    reactContext: {
        useProviderValue: (state, args) => args
    },
}
