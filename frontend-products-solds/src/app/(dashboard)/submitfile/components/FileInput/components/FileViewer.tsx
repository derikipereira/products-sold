'use client'

import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useFileContext } from "@/context/FileContext";

interface FileViewerProps {}

export const FileViewer: React.FC<FileViewerProps> = ({}) => {
  const { fileContent } = useFileContext();

  return (
    <div>
      {fileContent ? (
        <div>
          <Typography variant="h6"> Preview do Arquivo:</Typography>
          <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
            <pre>{fileContent}</pre>
          </Paper>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
