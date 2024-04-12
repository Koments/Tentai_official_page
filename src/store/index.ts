import {configureStore} from "@reduxjs/toolkit";
import langListReducer from "./langListSlice";

export default configureStore({
    reducer: {
        lang: langListReducer,
    }
})