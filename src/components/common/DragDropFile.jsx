import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { FaRegFileExcel, FaRegFilePdf, FaRegFileWord } from "react-icons/fa";
import { RiDeleteBin2Line, RiFile2Line, RiImageLine } from "react-icons/ri";
import styled, { css } from "styled-components";
import Button from "./Button";

const convertBytesToMegabytes = (bytes) => {
  return (bytes / (1024 * 1024)).toFixed(2);
};

const ShakeAnimation = css`
  animation: shake 0.5s;

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    20%, 60% {
      transform: translateX(-5px);
    }
    40%, 80% {
      transform: translateX(5px);
    }
  }
`;

const DropzoneContainer = styled.div`
  margin: ${(props) => props.margin || "0 0 0 0"};
  border: 2px dashed ${(props) => props.theme.inputBorder};
  border-radius: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.inputBackground};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  ${(props) => props.error && ShakeAnimation}

  &:focus {
    border-color: ${(props) => props.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${(props) => props.theme.inputFocusShadow};
    transform: translateY(-2px);
    outline: none;

    ${(props) =>
      props.error &&
      css`
        border-color: ${(props) => props.theme.errorColor};
        box-shadow: 0 0 0 3px ${(props) => props.theme.errorShadow};
      `}
  }

  &:hover {
    border-color: ${(props) => props.theme.inputHoverBorder};
    box-shadow: 0 0 0 3px ${(props) => props.theme.inputHoverShadow};
    transform: translateY(-2px);

    ${(props) =>
      props.error &&
      css`
        border-color: ${(props) => props.theme.errorColor};
        box-shadow: 0 0 0 3px ${(props) => props.theme.errorShadow};
      `}
  }

  &::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme.errorColor};
      box-shadow: 0 0 0 3px ${(props) => props.theme.errorShadow};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.disabledBackground};
      color: ${(props) => props.theme.disabledText};
      cursor: not-allowed;
    `}
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`;

const StyledFile = styled.li`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const FileName = styled.span`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const FileIcon = styled.div`
  margin-right: 5px;
`;

const RemoveButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.dangerColor};

  svg {
    vertical-align: middle;
  }
`;

const Popup = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 250px;
  background-color: ${(props) => props.theme.mainBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 10px;
  display: none;
  border-radius: 10px;
  z-index: 1;

  ${StyledFile}:hover & {
    display: block;
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const FileDetails = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.mainColor};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  div {
    margin-bottom: 5px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.inputText};
`;

const DropzoneText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  margin: 10px 0;
`;

const ErrorSpan = styled.span`
  color: ${(props) => props.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const DragDropFile = ({
  name,
  label,
  multiple,
  onFilesSelected,
  accept,
  error,
  margin,
}) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const getIconByFileType = (fileType, fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    if (fileType.startsWith("image/")) {
      return <RiImageLine size={20} />;
    } else if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      fileType === "application/vnd.ms-excel" ||
      fileType === "text/csv" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      fileType === "application/vnd.ms-excel" ||
      fileType === "application/excel" ||
      fileType === "application/x-excel" ||
      fileType === "application/x-msexcel" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template" ||
      fileType === "application/vnd.ms-excel.sheet.macroEnabled.12" ||
      fileType === "application/vnd.ms-excel.template.macroEnabled.12" ||
      fileType === "application/vnd.ms-excel.addin.macroEnabled.12" ||
      fileType === "application/vnd.ms-excel.sheet.binary.macroEnabled.12" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      fileType === "application/vnd.ms-excel" ||
      fileType === "application/x-excel" ||
      fileType === "application/x-msexcel" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template" ||
      fileType === "application/vnd.ms-excel.sheet.macroEnabled.12" ||
      fileType === "application/vnd.ms-excel.template.macroEnabled.12" ||
      fileType === "application/vnd.ms-excel.addin.macroEnabled.12" ||
      fileType === "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
    ) {
      return <FaRegFileExcel size={20} />;
    } else if (fileType === "application/pdf") {
      return <FaRegFilePdf size={20} />;
    } else if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      fileType === "application/msword" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template" ||
      fileType === "application/vnd.ms-word.document.macroEnabled.12" ||
      fileType === "application/vnd.ms-word.template.macroEnabled.12" ||
      fileType === "application/vnd.ms-word.document.macroEnabled.12"
    ) {
      return <FaRegFileWord size={20} />;
    } else if (["sql"].includes(extension)) {
      return <RiFile2Line size={20} />;
    } else {
      return <RiFile2Line size={20} />;
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    handleFiles(newFiles);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    handleFiles(newFiles);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFiles = (newFiles) => {
    setFiles(multiple ? [...files, ...newFiles] : [newFiles[0]]);
    onFilesSelected(multiple ? [...files, ...newFiles] : [newFiles[0]]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      fileInputRef.current.click();
    }
  };

  const handleClearFiles = () => {
    handleFileChange([]);
  };

  return (
    <>
      {label && <Label>{label} :</Label>}
      <DropzoneContainer
        name={name}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => fileInputRef.current.click()}
        onKeyDown={handleKeyDown}
        accept={accept}
        error={error}
        margin={margin}
      >
        <input
          name={name}
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          multiple={multiple}
          accept={accept}
          error={error}
        />
        <DropzoneText>
          {multiple
            ? "Drag & drop multiple files here, or click to select files"
            : "Drag & drop a file here, or click to select one"}
        </DropzoneText>
      </DropzoneContainer>
      {error && <ErrorSpan>{error}</ErrorSpan>}
      <FileList>
        {files.length > 0 &&
          files.map((file, index) => (
            <StyledFile key={index}>
              <FileName>
                <FileIcon>{getIconByFileType(file.type, file.name)}</FileIcon>
                {file.name}
              </FileName>
              <RemoveButton onClick={() => handleRemoveFile(index)}>
                <RiDeleteBin2Line size={20} />
              </RemoveButton>
              {file.type.startsWith("image/") ? (
                <Popup>
                  <ImagePreview
                    src={URL.createObjectURL(file)}
                    alt="Image Preview"
                  />
                  <FileDetails>
                    <div>Name: {file.name}</div>
                    <div>Size: {convertBytesToMegabytes(file.size)} MB</div>
                    <div>Type: {file.type}</div>
                    <div>Webkit Relative Path: {file.webkitRelativePath}</div>
                    <div>
                      Modified Date: {file.lastModifiedDate?.toLocaleString()}
                    </div>
                  </FileDetails>
                </Popup>
              ) : (
                <Popup>
                  <FileDetails>
                    <div>Name: {file.name}</div>
                    <div>Size: {convertBytesToMegabytes(file.size)} MB</div>
                    <div>Type: {file.type}</div>
                    <div>Webkit Relative Path: {file.webkitRelativePath}</div>
                    <div>
                      Modified Date: {file.lastModifiedDate?.toLocaleString()}
                    </div>
                  </FileDetails>
                </Popup>
              )}
            </StyledFile>
          ))}
      </FileList>
      {multiple && files.length > 0 && (
        <Button
          type="button"
          className="danger"
          margin="5px 0 5px 0"
          onClick={handleClearFiles}
        >
          Clear Files
        </Button>
      )}
    </>
  );
};

DragDropFile.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onFilesSelected: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  margin: PropTypes.string,
  accept: PropTypes.string,
  setInputError: PropTypes.func,
};

export default DragDropFile;
