export default function location(state = "Seattle, WA", action) {
    switch(action.type) {
        case "CHANGE_LOCATION":
            return action.payload;
            default:
                return state;
    }
}

// every action will have a type
// usually in uppercase
// {
//     type: "CHANGE_LOCATION",
//     payload: "Salt Lake City, UT"
// }