import React, { useState } from 'react';
import './App.css';

function App() {
  const [viewImage, setViewImage] = useState("");
  const [image] = useState({
    url: viewImage,
    file: new File([], "", {})
  });

  const handleFileChange = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]))
    if (e.target.files.length <= 0) return;
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function () {
      var base64data = reader.result;
      console.log(base64data);
      setViewImage(base64data)
    }
  }

  return (
    <div>
      <div className="custom-file">
        <input
          type="file"
          className={"custom-file-input "}
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
          accept="image/png, image/jpeg"
          onChange={handleFileChange} />
        <label className="custom-file-label" >{image.file.name ? image.file.name : 'Choose file'}</label>
        <div style={{ display: "flex", marginTop: "20px" }} >
          {viewImage ? <img src={viewImage} alt=""></img> : ''}
          {viewImage ? <div><h3 style={{ textAlign: "center " }}>Base64</h3>
            <textarea style={{ width: "900px", height: "200px" }} value={viewImage}></textarea></div> : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
