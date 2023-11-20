'use client'
import { createContext, ReactNode, useContext, useState, ChangeEvent } from 'react';

type FileContextType = {
  file: File | null;
  fileName: string | null;
  fileContent: string;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FileContext = createContext<FileContextType | undefined>(undefined);

type FileContextProviderProps = {
  children: ReactNode;
};

const FileContextProvider: React.FC<FileContextProviderProps> = ({ children }) => {
  
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];

    if (newFile && newFile.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(newFile);

      setFile(newFile);
      setFileName(newFile.name);
    }
  };

  return (
    <FileContext.Provider value={{ file, fileName, fileContent, handleFileChange }}>
      {children}
    </FileContext.Provider>
  );
};

const useFileContext = (): FileContextType => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFileContext deve ser usado dentro de um FileContextProvider');
  }
  return context;
};

export { FileContextProvider, useFileContext };
