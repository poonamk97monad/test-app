import React from 'react';
import { CoreConfigContext, CoreContextProps } from './config.context';

export const CoreConfigProvider: React.FC<CoreContextProps> = props => {
  return (
    <CoreConfigContext.Provider
      value={{
        ...props
      }}
    >
      {props.children}
    </CoreConfigContext.Provider>
  );
};
