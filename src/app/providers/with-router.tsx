import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export function withRouter(
  WrappedComponent: React.ComponentType
): React.FunctionComponent {
  return function wrappedComponenet() {
    return (
      <BrowserRouter>
        <WrappedComponent />
      </BrowserRouter>
    );
  };
}
