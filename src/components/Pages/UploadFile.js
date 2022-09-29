import React from "react";
import axios from "axios";
import './Overview.css'
function UploadFile() {
    const [uploadFile, setUploadFile] = React.useState();

    const submitForm = (event) => {
        event.preventDefault();
        const dataArray = new FormData();
        dataArray.append("uploadFile", uploadFile);
        axios
          .post("api_url_here", dataArray, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then((response) => {
            // successfully uploaded response
          })
          .catch((error) => {
            // error response
          });
      };
  return (
    <div>
      <form onSubmit={submitForm}>
        <br />
        <input type="file" style={{width:'100%'}} onChange={(e) => setUploadFile(e.target.files)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UploadFile