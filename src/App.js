import { Redirect, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
