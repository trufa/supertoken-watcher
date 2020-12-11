import React, { FC } from 'react';

interface Props {
  fetching: boolean,
  error: boolean,
  fetchingComponent: React.ReactNode,
  errorComponent: React.ReactNode,
}

const LoadedComponent: FC<Props> = ({ children, fetching, error, fetchingComponent, errorComponent }) => {
  if (error) {
    return <>{errorComponent}</>;
  }
  if (fetching) {
    return <>{fetchingComponent}</>
  }
  return <>{ children }</>
};

export default LoadedComponent;