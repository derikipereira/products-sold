"use client";

import React, { ReactNode } from "react";

interface FileInputProps {
    children: ReactNode;
}

export const FileInputRoot: React.FC<FileInputProps> = ({children}) => {

  return (
    <div className="w-full">
        {children}
    </div>
  );
};