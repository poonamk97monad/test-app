import React from 'react';

export interface CoreContextProps {
  serverUri: string;
  clientUri: string;
  parentClientUri: string;
}

export const CoreConfigContext = React.createContext<CoreContextProps>({
  serverUri: '',
  clientUri: '',
  parentClientUri: ''
});
