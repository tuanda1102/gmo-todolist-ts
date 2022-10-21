import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./reducers";

export const store = createStore(RootReducer, {}, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
