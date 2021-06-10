// Anything capitalized, React assumes you created. Anything lowercase is an actual name of html element.
// props: property passed from one parent component to child component (one way data flow). Makes it easy and flexible to dynamically generate content

import { Link } from "react-router-dom";

const Pet = ({
    name,
    animal,
    breed,
    images,
    location,
    id
}) => {

let hero = "http://pets-images.dev-apis.com/pets/home.jpg";
if(images.length) {
    hero = images[0]
}

    return (
        <Link to={`/details/${id}`} className="relative block">
           <div>
               <img src={hero} alt={name} />
           </div>
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2 text-center">
               <h1>{name}</h1>
               <h2>{`${animal} - ${breed} - ${location}`}</h2>
           </div>
        </Link>
    );
};

export default Pet;