// Anything capitalized, React assumes you created. Anything lowercase is an actual name of html element.

const Pet = () => {
    return React.createElement('div', {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Havanese"),
    ])
}

const App = () => {
    return React.createElement(
        'div',
        // attributes (id, class, aria, etc.)
        {},
        [
            React.createElement('h1', {}, 'Adopt Me!'),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
};
// Call createElement here to create an instance of the App component
ReactDOM.render(React.createElement(App), document.getElementById('root'))