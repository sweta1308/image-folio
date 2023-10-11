import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { imageReducer } from "../reducer/imageReducer";

export const store = createStore(imageReducer, applyMiddleware(thunk));
