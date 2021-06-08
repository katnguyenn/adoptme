import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            // If no animal, return an empty list
            setBreedList([]);
            // if already requested, serve it
        } else if (localCache[animal]) {
            setBreedList(localCache[animal])
        } else {
            // otherwise, go to API and get it
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            // save result, so when users come back they get the response again & we don't have to 
            // make mulitple calls to the API
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal])
            setStatus("loaded");
        }
    }, [animal])

return [breedList, status];
}