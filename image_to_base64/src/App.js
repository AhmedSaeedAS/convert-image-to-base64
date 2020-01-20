import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let pictureUrl = "";
  const [image, setImage] = useState({
    url: pictureUrl,
    file: new File([], "", {})
  });

  const handleFileChange = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]))
    if (e.target.files.length <= 0) return;
    // setImage({
    //   url: URL.createObjectURL(e.target.files[0]),
    //   file: e.target.files[0]
    // });

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function () {
      var base64data = reader.result;
      console.log(base64data);
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
      </div>
      {/* 
      <button
        label="submit"
        type="submit"
      //onClick={submit}
      >Click Me</button> */}

    </div>
  );
}

export default App;
