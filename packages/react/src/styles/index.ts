import { createStitches } from "@stitches/react";
import {
    colors,
    fontSize,
    fontWeight,
    fonts,
    radius,
    spacing
} from 'spottokens/src'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    theme,
    createTheme,
    getCssText,
    config,
} = createStitches({
    theme: {
        colors,
        fontSizes: fontSize,
        fontWeights: fontWeight,
        fonts: fonts,
        radii: radius,
        space: spacing
    }
});