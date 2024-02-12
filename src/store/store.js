import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userReducer";
import productMenuReducer from "./reducers/productMenuReducer";
import basketReducer from "./reducers/basketReducer";
import filterReducer from "./reducers/filterReducer";
import locationReducer from "./reducers/locationReducer";
import addressReducer from "./reducers/addressReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: userReducer,
  filters: filterReducer,
  location: locationReducer,
  basket: basketReducer,
  menu: productMenuReducer,
  address: addressReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
