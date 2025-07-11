import React from 'react';

interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-4xl font-bold mb-8 text-gray-800">{children}</h1>
  );
};