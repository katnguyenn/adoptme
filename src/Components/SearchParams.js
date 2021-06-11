import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useBreedList from "./useBreedList";
import Results from "./Results";
import changeLocation from "../actionCreators/changeLocation";
import changeAnimal from "../actionCreators/changeAnimal";
import changeBreed from "../actionCreators/changeBreed";
import changeTheme from "../actionCreators/changeTheme";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    // const { animal, breed, location, theme} = useSelector(state => state)
    const animal = useSelector(state => state.animal);
    const location = useSelector(state => state.location);
    const theme = useSelector(state => state.theme);
    const breed = useSelector(state => state.breed);
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const dispatch = useDispatch()

    useEffect(() => {
        requestPets()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`

        );
        const json = await res.json()
        setPets(json.pets)
    }

    function handleAnimalChange(e) {
        dispatch(changeBreed(""));
        dispatch(changeAnimal(e.target.value));
    }

    return (
        <div
            className="my-0 mx-auto w-11/12">
            <form className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
                onSubmit={e => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label className="search-label" htmlFor="location">
                    Location
                    <input 
                    className="search-control"
                    id="location" 
                    onChange={(e) => dispatch(changeLocation(e.target.value))} // {type: "CHANGE_LOCATION", payload: "whatever they typed"} 
                    value={location} 
                    placeholder="Location" />
                </label>
                <label className="search-label" htmlFor="animal">
                    Animal
                <select
                        className="search-control"
                        id="animal"
                        value={animal}
                        onChange={handleAnimalChange}
                        onBlur={handleAnimalChange}
                    >
                        {/* the empty space above other animal options */}
                        <option />
                        {ANIMALS.map(animal => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>

                        ))}
                    </select>
                </label>
                <label className="search-label" htmlFor="breed">
                    Breed
                <select
                        className="search-control"
                        id="breed"
                        value={breed}
                        onChange={e => dispatch(changeBreed(e.target.value))}
                        onBlur={e => dispatch(changeBreed(e.target.value))}
                    >
                        {/* the empty space above other animal options */}
                        <option />
                        {breeds.map(breed => (
                            <option value={breed} key={breed}>
                                {breed}
                            </option>

                        ))}
                    </select>
                </label>
                <label className="search-label" htmlFor="theme">
                    Theme
                    <select
                        className="search-control"
                        value={theme}
                        onChange={e => dispatch(changeTheme(e.target.value))}
                        onBlur={e => dispatch(changeTheme(e.target.value))}
                    >
                        <option value="darkblue">Dark Blue</option>
                        <option value="peru">Peru</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                    </select>
                </label>
                <button className="rounded px-6 py-2 text-white hover:opacity-50 border-none" style={{ backgroundColor: theme }}>Submit</button>
            </form >

            <Results pets={pets} />


        </div >
    )
}


export default SearchParams;