import { useState } from "react";
import "./App.css";

const API = "https://api.thecatapi.com/v1/images/search";

export const App = () => {
  const [catUrl, setCatUrl] = useState("");
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  const handleClick = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setCatUrl(data[0].url);
    if (!audioPlaying) {
      const audio = document.querySelector("audio");
      audio?.play();
      setAudioPlaying(true);
    }
  };
  return (
    <>
      <div className="begin">
        <h1>¡Bienvenido a la web de gatitos!</h1>
      </div>
      <div className="container">
        <h2>¡Pulsa el boton para ver gatitos!</h2>
        <h2>¡Sube el volumen para escuchar a los michis!</h2>
      </div>
      <div className="boton">
        <button className="btn btn-primary" onClick={handleClick}>
          Pulse aquí
        </button>
        <audio src="gatitos.mp3" onEnded={ () => setAudioPlaying(false)} autoPlay={false} hidden={true}></audio>
      </div>
      <div className="cat">
        <img src={catUrl ? catUrl : "gatito.jpeg"} alt="Foto de gatito" className="cat"/>
      </div>
    </>
  );
};
