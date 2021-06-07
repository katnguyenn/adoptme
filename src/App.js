// Anything capitalized, React assumes you created. Anything lowercase is an actual name of html element.

// props: property passed from one parent component to child component (one way data flow). Makes it easy and flexible to dynamically generate content
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};




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
