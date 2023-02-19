import {ProductDetailColorPicker} from "./ProductDetailColorPicker";
import {Color} from "../../Entities/VO/Color";
import {useArgs} from "@storybook/client-api";

export default {
    component: ProductDetailColorPicker,
    argTypes: {
        colors: { control: 'object' },
        activeColorCode: { type: 'number' },
    },
}

const Builder = (args) => {
    const [{activeColorCode}, updateArgs] = useArgs()
    const setActiveColorCode = (activeColorCode) => updateArgs({ activeColorCode })
    const colors = args.colors.map((color, index) => new Color(index, color))

    return <div className="w-[30rem]">
        <ProductDetailColorPicker
            colors={colors}
            activeColorCode={activeColorCode}
            setActiveColorCode={setActiveColorCode}
        />
    </div>
}

export const Default = (args) => Builder(args)
Default.args = {
    colors: [
        'Silver',
        'Gold',
        'Wolfram',
    ],
    activeColorCode: 0,
}

export const NonSupportedColors = (args) => Builder(args)
NonSupportedColors.args = {
    colors: [
        'Cold Blue',
        'Warm Red',
    ],
    activeColorCode: 0,
}

export const SupportedColors = (args) => Builder(args)
SupportedColors.args = {
    colors: [
        'Orange',
        'Tomato',
        'Plum',
    ],
    activeColorCode: 0,
}

export const HexColors = (args) => Builder(args)
HexColors.args = {
    colors: [
        '#add',
        '#ba11ad',
        '#707a15',
    ],
    activeColorCode: 0,
}

export const SecondColorActivated = (args) => Builder(args)
SecondColorActivated.args = {
    colors: [
        'First Color',
        'Second Color',
    ],
    activeColorCode: 1,
}

export const Wrapping = (args) => Builder(args)
Wrapping.args = {
    colors: [
        'Cyan',
        'Magenta',
        'Yellow',
        'Black',
    ],
    activeColorCode: 0,
}

export const AllSupportedColors = (args) => Builder(args)
AllSupportedColors.args = {
    colors: [ // NOTE: From https://www.w3.org/wiki/CSS/Properties/color/keywords
        'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow',
        'navy', 'blue', 'teal', 'aqua', 'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque',
        'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate',
        'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
        'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred',
        'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
        'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen',
        'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew',
        'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon',
        'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey',
        'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
        'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine',
        'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen',
        'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite',
        'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
        'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple',
        'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna',
        'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal',
        'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen',
    ],
    activeColorCode: 0,
}
