import React, { FC } from 'react';
import { getIdenticonData } from '../helpers';

interface Props {
  address: string
}

const Address: FC<Props> = ({ address }) => (
  <>
    <a className="text-blue-500 flex" rel={'noopener noreferrer'} target={'_blank'}
       href={`https://goerli.etherscan.io/address/${address}`}>
      <img alt="identicon image" width="20" height="20"
           src={`data:image/png;base64,${getIdenticonData(address)}`}/>
      <div className="pl-3">{address.substr(0, 8)}...</div>
    </a>
  </>
);

export default Address;
