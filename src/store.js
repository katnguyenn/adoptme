import { createStore } from "redux";
import reducer from "./reducer/index";

const store = createStore(
    reducer,
    typeof window === "object" && 
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f // can run on node without any problems
    );

    export default store;