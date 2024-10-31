import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice";
import { persistStore,persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  user : userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = 
configureStore({
  reducer:  persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

export const persistor = persistStore(store);

export default store;
