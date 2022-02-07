import React ,{useState} from "react";


export const FileUpload: React.FC =() => {
  const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
   
    const changeHandler = (event:any) => {
      setSelectedFile(event.target.files[0]);
      setIsSelected(true);
    };
  
    const handleSubmission = () => {
      const formData = new FormData();
      console.log("selectedFile");
      console.log(selectedFile);
     if(selectedFile){
      formData.append('File', selectedFile);
     }
     
  
      fetch(
        'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  
    };
  
  return (
    <div className="card">
      <label className="btn btn-default">
      <input type="file" onChange={changeHandler} />
    </label>
    {isSelected && selectedFile? (
      <div>
        {/* <p>Filename: {selectedFile?selectedFile.name:''}</p>
        <p>Filetype: {selectedFile?selectedFile.type:''}</p>
        <p>Size in bytes: {selectedFile?selectedFile.size:''}</p>
        <p>
          lastModifiedDate:{' '}
          {selectedFile?selectedFile.lastModifiedDate.toLocaleDateString():''}
        </p> */}
      </div>
    ) : (
      <p>Select a file to show details</p>
    )}
    <div>
      <button className="btn btn-success" onClick={handleSubmission}>Submit</button>
    </div>
  </div>
  );
};

