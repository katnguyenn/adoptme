// Anything capitalized, React assumes you created. Anything lowercase is an actual name of html element.
const App = () => {
    return React.createElement(
        'div',
        // attributes (id, class, aria, etc.)
        {},
        React.createElement('h1', {}, 'Adopt Me!')
    );
};
// Call createElement here to create an instance of the App component
ReactDOM.render(React.createElement(App), document.getElementById('root'))