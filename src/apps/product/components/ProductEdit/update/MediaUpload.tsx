import React, { useRef,useState} from "react";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel
} from "./MediaUpload.styles";

const KILO_BYTES_PER_BYTE = 1000;
// const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
 const convertNestedObjectToArray = (nestedObj:any) =>   Object.keys(nestedObj).map((key) => nestedObj[key]);

 const convertBytesToKB = (bytes:any) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const MediaUpload = () => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files:any) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });


  const handleUploadBtnClick = () => {
    //   if(fileInputField && fileInputField.current && fileInputField.current !== null && fileInputField !== null){
    //     fileInputField.current.click();
    //   }
  };

  const addNewFiles = (newFiles:any) => {
    for (let file of newFiles) {
      if (file.size <= 500000) {
        // if (!otherProps.multiple) {
        //   return { file };
        // }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files:any) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateUploadedFiles(filesAsArray);
  };

  const handleNewFileUpload = (e:any) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName:any) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <>
      <FileUploadContainer>
        <InputLabel>Test</InputLabel>
        <DragDropText>Drag and drop your files anywhere or</DragDropText>
        <UploadFileBtn type="button" >
          <i className="fas fa-file-upload" onClick={handleUploadBtnClick}/>
          <span> Upload </span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          multiple
          accept=".jpg,.png,.jpeg"
        />
      </FileUploadContainer>
      <FilePreviewContainer>
        <span>To Upload</span>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <PreviewContainer key={fileName}>
                <div>
                  {isImageFile && (
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  <FileMetaData >
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <RemoveFileIcon
                        className="fas fa-trash-alt"
                        onClick={() => removeFile(fileName)}
                      />
                    </aside>
                  </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </>
  );
};

export default MediaUpload;