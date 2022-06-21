import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';

// styled-components
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/global';

// redux store
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from 'store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);