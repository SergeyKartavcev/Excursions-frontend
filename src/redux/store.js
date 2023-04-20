import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { excursionsReducer } from './excursion/slice';
import { videosReducer } from './videos/slice';
import { mapReducer } from './map/slice';
import { reviewsReducer } from '../redux/reviews/slice';
import { contactsReducer } from '../redux/contacts/slice';
import { qvestsReducer } from './qvests/slice';
import { eventsReducer } from './events/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    excursions: excursionsReducer,
    videos: videosReducer,
    map: mapReducer,
    reviews: reviewsReducer, 
    contacts: contactsReducer, 
    qvests: qvestsReducer,
    events: eventsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
