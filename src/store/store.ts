import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
