import { configureStore } from "@reduxjs/toolkit";
import {default as notesReducer} from "./slices/notesSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage: storage
};

const persistedReducer = persistReducer(persistConfig, notesReducer);

export const store = configureStore({
  reducer: {
    notes: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;