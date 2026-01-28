import React from 'react';

const CalloutBox = ({ children, title }) => {
  return (
    <div className="callout-box">
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default CalloutBox;
