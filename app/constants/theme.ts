import { COLORS } from "./colors";

export const LightTheme = {
    dark: false,
    colors: {
        background: COLORS.white,
        primary: COLORS.white,
        text: '#333',
        card: COLORS.white,
        border: COLORS.black,
        notification: COLORS.white,
    }
}

export const DarkTheme = {
    dark: true,
    colors: {
        background: COLORS.black,
        primary: COLORS.black,
        text: '#ccc',
        card: COLORS.black,
        border: COLORS.white,
        notification: COLORS.black,
    }
}