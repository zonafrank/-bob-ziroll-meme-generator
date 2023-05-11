import React, { useEffect, useState } from "react";

const MemeImage = ({ meme, firstInput, secondInput }) => {
  return (
    <div className="meme-image-container">
      <img className="meme-image" src={meme.url} alt="" />
      <h2 className="meme-text top">{firstInput}</h2>
      <h2 className="meme-text bottom">{secondInput}</h2>
    </div>
  );
};

const Main = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [allMemes, setAllMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  const selectMeme = () => {
    if (allMemes.length > 0) {
      const randomNum = Math.floor(Math.random() * allMemes.length);
      setMemeIndex(randomNum);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    selectMeme();
  };

  return (
    <main className="main">
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            onChange={(e) => setFirstInput(e.target.value)}
            value={firstInput}
          />
          <input
            className="form-input"
            type="text"
            onChange={(e) => setSecondInput(e.target.value)}
            value={secondInput}
          />
        </div>
        <button className="btn">Get a new meme image 🖼</button>
      </form>
      {allMemes.length && (
        <MemeImage
          meme={allMemes[memeIndex]}
          firstInput={firstInput}
          secondInput={secondInput}
        />
      )}
    </main>
  );
};

export default Main;
