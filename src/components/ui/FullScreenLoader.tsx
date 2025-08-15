import React from 'react';
import Spinner from './Spinner';

type FullScreenLoaderProps = {
  message?: string;
};

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-dark-blue/80 text-white">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" />
        <div className="text-sm opacity-80">{message}</div>
      </div>
    </div>
  );
};

export default FullScreenLoader;


