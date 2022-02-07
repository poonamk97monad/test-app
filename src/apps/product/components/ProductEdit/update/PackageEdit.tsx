import React ,{useState} from "react";
import "./PackageEdit.css";
import { Info } from "./Info";
import { FileUpload } from "./FileUpload";
import MediaUpload from "./MediaUpload";


export const PackageEdit: React.FC =() => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index:any) => {
      setToggleState(index);
    };
    // const [newUserInfo, setNewUserInfo] = useState({
    //     profileImages: []
    //   });
    
    //   const updateUploadedFiles = (files:any) =>
    //     setNewUserInfo({ ...newUserInfo, profileImages: files });
    
      const handleSubmit = (event:any) => {
        event.preventDefault();
        //logic to create new user...
      };
    return ( 
    <div className="container edit-product">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Information
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Package Upload
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Media
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <Info/>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <FileUpload/>    
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"} >
        <form onSubmit={handleSubmit}>
        <MediaUpload  />
        <button type="submit">Create New User</button>
      </form>
        </div>
      </div>
    </div>
    );

};