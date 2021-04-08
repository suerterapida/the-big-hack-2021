import React from 'react';
// import { theme } from '@gifted/theme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Router, LocationProvider } from '@reach/router';
import Dashboard from './components/Dashboard';

const theme = createMuiTheme({});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocationProvider>
        {({ location }) => (
          <Router basepath="/" location={location}>
            <Dashboard path="*" />
          </Router>
        )}
      </LocationProvider>,
    </ThemeProvider>
  );
};

export default App;