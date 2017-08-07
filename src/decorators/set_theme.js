import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme/default.js';

function setThemeHOC(WrappedComponent) {
  function WithSetLayout(props) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  }

  return WithSetLayout;
}

export default setThemeHOC;
