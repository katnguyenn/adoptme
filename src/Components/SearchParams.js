import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useBreedList from "./useBreedList";
import Results from "./Results";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    // const { animal, breed, location, theme} = useSelector(state => state)
    const animal = useSelector(state => state.animal);
    const location = useSelector(state => state.location);
    const theme = useSelector(state => state.theme);
    const breed = useSelector(state => state.breed);
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

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
                    onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Location" />
                </label>
                <label className="search-label" htmlFor="animal">
                    Animal
                <select
                        className="search-control"
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
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
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
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
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
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