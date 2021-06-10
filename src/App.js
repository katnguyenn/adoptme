import { StrictMode , useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./Components/SearchParams";
import Details from "./Components/Details";
import ThemeContext from "./Components/ThemeContext";

const App = () => {
    const theme = useState("darkblue");
    return (
        // anything inside of ThemeContext will be available to components
        <ThemeContext.Provider value={theme}>
        <div className="p-0 m-0"
            style={{
                background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
            }}
            >
            <Router>
                <header
                    className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 "
                >
                    <Link to="/" className="text-6xl text-white hover:text-gray-200 ">
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
