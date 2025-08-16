import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store.ts'
import App from './App.tsx'
import './index.css'
import FullScreenLoader from './components/ui/FullScreenLoader.tsx'

// Custom loading component that ensures proper state management
const PersistLoading = () => {
  React.useEffect(() => {
    // Force reset loading state when PersistGate starts loading
    store.dispatch({ type: 'auth/resetLoadingState' });
  }, []);
  
  return <FullScreenLoader message="Initializing..." />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<PersistLoading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
