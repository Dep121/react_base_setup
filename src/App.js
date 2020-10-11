import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import OtpInputV3 from "./components/OtpInputV3/OtpInputV3";
import Button from "./components/Button/Button";
import SearchBox from "./components/SearchBox/SearchBox";
import TopRestaurant from "./views/TopRestaurant";

const lightTheme = {
  "--color-primary": "#485922",
  "--color-secondary": "#798c35",
  "--color-surface": "#ffffff",
  "--color-background": "#ffffff",
  "--color-border": "#121212",

  "--color-on-primary": "#ffffff",
  "--color-on-secondary": "#000000",
  "--color-on-surface": "#000000",
  "--color-on-background": "#000000",

  // states
  "--color-error": "#b00020",
  "--color-on-error": "#ffffff",
};

const darkTheme = {
  "--color-primary": "#485922",
  "--color-secondary": "#798c35",
  "--color-surface": "#121212",
  "--color-background": "#121212",
  "--color-border": "#363636",

  "--color-on-primary": "#000000",
  "--color-on-secondary": "#000000",
  "--color-on-surface": "#ffffff",
  "--color-on-background": "#ffffff",

  // states
  "--color-error": "#b00020",
  "--color-on-error": "#000000",
};

const applyTheme = (nextTheme, cb) => {
  const theme = nextTheme === "light" ? lightTheme : darkTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
};

const App = () => {
  const [currentTheme, setTheme] = React.useState("light");

  const onClick = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme, () => setTheme(nextTheme));
  };

  return (
    <div className="App">
      {/* <h1>{currentTheme === "light" ? "Light theme" : "Dark theme"}</h1>
      <Button onClick={onClick}>Toggle theme</Button>
      <Header />
      <br/>
      <OtpInputV3 length={6} />
      <br/>
      <Button>
        Click me
      </Button>
      <br/>
      <SearchBox list={[]} /> */}
      <TopRestaurant/>
    </div>
  );
};

export default App;
