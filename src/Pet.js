import React from "react";

// Anything capitalized, React assumes you created. Anything lowercase is an actual name of html element.
// props: property passed from one parent component to child component (one way data flow). Makes it easy and flexible to dynamically generate content
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.animal),
//         React.createElement("h3", {}, props.breed),
//     ]);
// };

const Pet = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.animal}</h3>
            <h3>{props.breed}</h3>
        </div>
    );
};

export default Pet;