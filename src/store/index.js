import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import middlewares from "../middleware";

export default function configureStore(reduxifiedServices, initialState) {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
    createStore
  );
  console.log("after createStoreWithMiddlewares");
  return createStoreWithMiddlewares(
    rootReducer(reduxifiedServices, initialState),
    typeof window === "undefined"
      ? undefined
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
