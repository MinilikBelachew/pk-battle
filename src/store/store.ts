import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';
import { resetLoadingState } from './slice/auth';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure persist for auth slice only
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist auth state
  blacklist: ['profile'], // Don't persist profile state
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

// Create persistor
export const persistor = persistStore(store, null, () => {
  // This callback runs after rehydration is complete
  console.log('Redux Persist rehydration complete, resetting loading state');
  store.dispatch(resetLoadingState());
  
  // Log the state after resetting
  const state = store.getState();
  console.log('State after resetLoadingState:', {
    auth: {
      isAuthenticated: state.auth.isAuthenticated,
      loading: state.auth.loading,
      error: state.auth.error,
      user: state.auth.user
    }
  });
});

// Add logging for persistor state changes
persistor.subscribe(() => {
  const { bootstrapped } = persistor.getState();
  console.log('Persistor state changed:', { bootstrapped });
  
  // If bootstrapped, also check the current auth state
  if (bootstrapped) {
    const state = store.getState();
    console.log('Current auth state after bootstrap:', {
      isAuthenticated: state.auth.isAuthenticated,
      loading: state.auth.loading,
      error: state.auth.error
    });
  }
});

// Run saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;