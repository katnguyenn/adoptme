import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement(
        "div",
        // attributes (id, class, aria, etc.)
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Dog",
                breed: "Havanese",
            }),
            React.createElement(Pet, {
                name: "Pepper",
                animal: "Bird",
                breed: "Cockatiel",
            }),
            React.createElement(Pet, {
                name: "Sudo",
                animal: "Dog",
                breed: "Wheaton Terrier",
            }),
        ]
    );
};
// Call createElement here to create an instance of the App component
ReactDOM.render(React.createElement(App), document.getElementById("root"));
