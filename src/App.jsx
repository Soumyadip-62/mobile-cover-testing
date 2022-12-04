import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import imgUrl from "./assets/mock.png";
function App() {
  const [count, setCount] = useState(0);
  const [image, setimage] = useState("");
  const [zoom, setzoom] = useState(400);
  const [posX, setposX] = useState(0)
  const [posY, setposY] = useState(0)

  const handleImage = async (file) => {
    console.log(file);
    const imgDiv = document.getElementById("imgdiv");

    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      // console.log(reader.result);
      setimage(reader.result);
      imgDiv.style.backgroundImage = `url(${image})`;
    };
    // console.log(imgDiv);
  };

  const zoomIn = async () => {
    setzoom(zoom + 50);
    const imgDiv = document.getElementById("imgdiv");

    imgDiv.style.backgroundSize = `${zoom}px`;
    /*execute a function when someone moves the cursor over the image, or the lens:*/
  };
   const zoomOut = async () => {
     setzoom(zoom - 50);
     const imgDiv = document.getElementById("imgdiv");

     imgDiv.style.backgroundSize = `${zoom}px`;
     /*execute a function when someone moves the cursor over the image, or the lens:*/
   };
  const Rotate = () => {
    const imgDiv = document.getElementById("imgdiv");
    // imgDiv.setAttribute('transform', 'rotate(90deg)')
  };
  const goLeft = () => {
setposX(posX + 10)
    const imgDiv = document.getElementById("imgdiv");
     imgDiv.style.backgroundPositionX = `${posX}px`
    
    // imgDiv.setAttribute('transform', 'rotate(90deg)')
  };
  const goRight = () => {
    setposX(posX - 10);
    const imgDiv = document.getElementById("imgdiv");
    imgDiv.style.backgroundPositionX = `${posX}px`;

    // imgDiv.setAttribute('transform', 'rotate(90deg)')
  };

  return (
    <div className="App">
      <div className="parent-div">
        <div className="image" id="imgdiv">
          <img id="frame" src={imgUrl} alt="img" />
        </div>
        <div className="controls">
          <p>Select Your Image</p>
          <input type="file" onChange={(e) => handleImage(e.target.files[0])} />
          <div className="row row-cols-1 gap-6 p-4">
            <button className="btn btn-primary m-3" onClick={() => zoomIn()}>
              Zoom +{" "}
            </button>
            <button className="btn btn-primary m-3" onClick={() => zoomOut()}>
              Zoom -{" "}
            </button>
            <button className="btn btn-primary m-3" onClick={() => goLeft()}>
              left{" "}
            </button>
            <button className="btn btn-primary m-3" onClick={() => goRight()}>
              right{" "}
            </button>
            <button className="btn btn-primary m-3" onClick={() => zoomOut()}>
              up {" "}
            </button>
            <button className="btn btn-primary m-3" onClick={() => zoomOut()}>
             down{" "}
            </button>
            {/* <button className="btn btn-primary m-3" onClick={() => Rotate()}>
              Rotate{" "}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
