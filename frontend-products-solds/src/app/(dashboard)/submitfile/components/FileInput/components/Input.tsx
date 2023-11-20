"use client";
import React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFileContext } from "@/context/FileContext";
import { uploadFile } from "@/services/api/api";
interface FInputProps {}

export const FInput: React.FC<FInputProps> = ({}) => {
  const { handleFileChange, fileName, file } = useFileContext();

  const submitFile = () => {
    if (file && file.type === "text/plain") {
      uploadFile(file);
    } else {
      alert("file is empty or type is different");
    }
  };

  return (
    <div className="w-full">
      <input
        accept=".txt"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <Paper className="flex items-center justify-between">
        <label htmlFor="contained-button-file">
          <div>
            <Button
              variant="contained"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Select File
            </Button>
            <span style={{ marginLeft: "8px" }}>
              {fileName ? fileName : "Arquivo nao selecionado"}
            </span>
          </div>
        </label>
        {file ? (
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
            onClick={submitFile}
          >
            SUBMIT
          </Button>
        ) : (
          ""
        )}
      </Paper>
    </div>
  );
};
