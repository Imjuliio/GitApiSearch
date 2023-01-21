import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeContextProps {
  changeTheme: () => void;
  lightMode: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = (props: any) => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const darkTheme: object = {
    colors: {
      background: "radial-gradient(circle, rgba(30,29,51,1) 0%, rgba(10,4,27,1) 100%);",
      themeBtn: "#fff",
      card: "linear-gradient(0deg, rgba(17,3,36,1) 0%, rgba(0,7,31,0.9920343137254902) 100%);",
      textNorm: "#fff",
      textBolded: "#FFF",
    },
  };
  const lightTheme: object = {
    colors: {
      background: "#F6F8FF",
      themeBtn: "#4B6A9B",
      card: "#FEFEFE",
      textNorm: "#697C9A",
      textBolded: "#2B3442",
    },
  };

  function changeTheme(): void {
    setLightMode(prev => !prev);
  }

  useEffect(() => {
    localStorage.getItem("theme") === "light" && setLightMode(true);

  }, [])

  useEffect(() => {
    const mode = lightMode ? "light" : "dark"

    localStorage.setItem("theme", mode)
  })

  return (
    <ThemeContext.Provider value={{ changeTheme, lightMode}}>
        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
            {props.children}
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};
