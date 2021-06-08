import { StrictMode , useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
    const theme = useState("darkblue");
    return (
        // anything inside of ThemeContext will be available to components
        <ThemeContext.Provider value={theme}>
        <div>
            <Router>
                <header>
                    <Link to="/">
                        <h1>Adopt Me!</h1>
                    </Link>
                </header>
                <Switch>
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route path="/">
                        <SearchParams />
                    </Route>
                </Switch>
            </Router>

        </div>
        </ThemeContext.Provider>
    )

}
// Call createElement here to create an instance of the App component
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root"));
