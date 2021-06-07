import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//     return React.createElement(
//         "div",
//         // attributes (id, class, aria, etc.)
//         {},
//         [
//             React.createElement("h1", {}, "Adopt Me!"),
//             React.createElement(Pet, {
//                 name: "Luna",
//                 animal: "Dog",
//                 breed: "Havanese",
//             }),
//             React.createElement(Pet, {
//                 name: "Pepper",
//                 animal: "Bird",
//                 breed: "Cockatiel",
//             }),
//             React.createElement(Pet, {
//                 name: "Sudo",
//                 animal: "Dog",
//                 breed: "Wheaton Terrier",
//             }),
//         ]
//     );
// };

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Beam" animal="Dog" breed="Wheaton Terrier" />
        </div>
    )

}
// Call createElement here to create an instance of the App component
ReactDOM.render(<App />, document.getElementById("root"));
