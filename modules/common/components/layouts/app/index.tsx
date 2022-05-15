import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default ({ children }: Props) => {
  return (
    <>
      <div className="header"></div>
      <div className="body">{children}</div>
      <div className="footer"></div>
    </>
  );
};
