import { swiss, dark } from "@theme-ui/presets"

let defaultSettings = {
  initialColorMode: "dark",
  ...swiss,
  styles: {
    ...swiss.styles,
  },
}

const customColors = {
  ...swiss.colors,
  ...{
    primary: "#ea9215",
    secondary: "#e0f",
  },
}

const customSettings = {
  ...customColors,
  modes: {
    dark: {
      ...dark.colors,
      primary: "#ea9215",
      secondary: "#e0f",
    },
  },
}

defaultSettings.colors = { ...customSettings }

export default defaultSettings
