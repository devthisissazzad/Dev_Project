import React, { forwardRef } from 'react';

const Flex = ({ children, className, onClick, ref }) => {
  return (
    <div ref={ref} onClick={onClick} className={`flex ${className}`}>
      {children}
    </div>
  );
};

export default Flex;