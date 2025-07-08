"use client";
import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="min-h-screen bg-[rgb(249,250,252)] flex flex-col items-center justify-center p-4">
      {children}
    </div>
  );
};
