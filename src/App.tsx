import logo from "./logo.svg";
import "./App.scss";

import React, { useState, Suspense } from "react";
import { ThemeContext, themes } from "./context";
import Tabs from "./components/Tabs";
import Form from "./components/Form";
import Error from "./components/Error";
import ErrorBoundary from "./components/ErrorBoundary";
import withNotififation from "./components/withNotification";

const FormWithNotofication = withNotififation(Form);
const Calendar = React.lazy(() => import("./components/Calendar"));

function App() {
  const [date, setDate] = useState(new Date());
  const [theme, setTheme] = useState(themes.dark);
  //@ts-ignore
  const handleThemeChange = (e) => {
    setTheme(e.target.checked ? themes.light : themes.dark);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ThemeContext.Provider value={theme}>
        <main className="App-main">
          <div className="App-theme">
            <label htmlFor="theme">light theme: </label>
            <input
              id="theme"
              type="checkbox"
              onChange={handleThemeChange}
            ></input>
          </div>
          <Tabs
            names={["Message", "Calendar", "Error"]}
            tabs={[
              <FormWithNotofication />,
              <Suspense fallback={<div>Загрузка . . .</div>}>
                <Calendar date={date} setDate={setDate} />
              </Suspense>,
              <ErrorBoundary>
                <Error />
              </ErrorBoundary>,
            ]}
          />
        </main>
      </ThemeContext.Provider>
      <div className="App-notification"></div>
    </div>
  );
}

export default App;
