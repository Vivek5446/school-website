import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import stores from "../store/stores";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"]
});


const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
    },
    sizes: {
      xl: {
        h: "56px",
        fontSize: "lg",
        px: "32px",
      },
    },
    variants: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "300", // Might be overriding your component styles
      },
    },
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: "FFFFFA",
      fontFamily: "var(--font-lato), sans-serif", // Apply Lato globally
      color: props.colorMode === "light" ? "brand.900" : "darkBrand.50", // Dynamic text color
    },
  }),
};

const colors = {
  brand:{
  50: "#FAF5FF",
  100: "#E9D8FD",
  200: "#D6BCFA",
  300: "#B794F4",
  400: "#9F7AEA",
  500: "#805AD5",
  600: "#6B46C1",
  700: "#5A3DC4",
  800: "#4A21A4",
  900: "#3B006F",
  1000:"#2B004A",
  1100:"#1A0033"
},
  darkBrand: {
    50: "#1b1f2d",
    100: "#2f3342",
    200: "#4a5066",
    300: "#5e6882",
    400: "#78829c",
    500: "#92a1b3",
    600: "#b1b8ca",
    700: "#c4ccd9",
    800: "#d7e1e8",
    900: "#eaf3f9",
  },
}


const fonts = {
  heading: "Montserrat, sans-serif",
  body: "var(--font-lato), sans-serif", // Set Lato as body font globally
};



// const theme = extendTheme({
//   colors,
//   fonts,
//   breakpoints,
//   components,
//   styles,
//   config,
// });

// export { theme, lato };


const {
  themeStore: { themeConfig },
} = stores;

const theme = extendTheme({...themeConfig,colors, fonts,breakpoints,components,styles});
export { theme, lato };
export default theme;
