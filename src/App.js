import React, { Component, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import OtpInputV3 from "./components/OtpInputV3/OtpInputV3";
import Button from "./components/Button/Button";
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import SearchBox from "./components/SearchBox/SearchBox";

const lightTheme = {
  "--color-primary": "#485922",
  "--color-secondary": "#798c35",
  "--color-surface": "#ffffff",
  "--color-background": "#ffffff",
  "--color-border": "#121212",

  "--color-on-primary": "#ffffff",
  "--color-on-secondary": "#000000",
  "--color-on-surface": "#485922",
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

const applyTheme = (nextTheme = "light", cb=()=>{}) => {
  const theme = nextTheme === "light" ? lightTheme : darkTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
};

const App = () => {
  const [currentTheme, setTheme] = React.useState("light");

  useEffect(()=>{
    applyTheme();
  }, []);

  const onClick = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme, () => setTheme(nextTheme));
  };

  return (
    <div className="App">
      {/* <h1>{currentTheme === "light" ? "Light theme" : "Dark theme"}</h1>
      <Button onClick={onClick}>Toggle theme</Button>
      <br/>
      <SearchBox/>
      <br/>
      <Header />
      <br/>
      <OtpInputV3 length={6} />
      <br/>
      <Button>
        Click me
      </Button>
      <br/>
      <SearchBox list={[]} /> */}
      
      <BrowserRouter>
      
        <Link to="/btn"> btn </Link>
        <Switch>
          <Route path="/btn">
            <Demo></Demo>
          </Route>
        </Switch>
      </BrowserRouter>
      <br/>
      <br/>
    </div>
  );
};

function Demo() {
  const match = useRouteMatch();
  console.log(match.url, match.path);
  return <Button>
    Push me
  </Button>
}

export default App;
