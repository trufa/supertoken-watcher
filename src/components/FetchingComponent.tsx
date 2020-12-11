import React, { FC } from 'react';

interface Props {
  fetching: boolean,
  error: boolean,
  hadZeroResults?: boolean,
  whileFetchingComponent: React.ReactNode,
  ifErrorComponent: React.ReactNode,
  zeroResultsComponent?: React.ReactNode,
}

const FetchingComponent: FC<Props> = (
  {
    children,
    fetching,
    error,
    whileFetchingComponent,
    ifErrorComponent,
    hadZeroResults,
    zeroResultsComponent,
  },
) => {
  if (error) {
    return <>{ifErrorComponent}</>;
  }
  if (fetching) {
    return <>{whileFetchingComponent}</>;
  }
  if (hadZeroResults) {
    return <>{zeroResultsComponent}</>;
  }
  return <>{children}</>;
};

export default FetchingComponent;
