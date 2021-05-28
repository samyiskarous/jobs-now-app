import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loggerMiddleware from "./loggerMiddleWare";

export default applyMiddleware(
    thunk,
    loggerMiddleware
)