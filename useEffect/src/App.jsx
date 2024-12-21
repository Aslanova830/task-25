import React, { useState, useEffect } from "react";

const App = () => {
  const [Image, setImage] = useState("");

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
    .then((data) => setImage(data.image))
  }, [setImage]);

  return (
    <div >
      <h1>Random Fox</h1>
      
        <img src={Image}/>
      <button  onClick={() => fetch("https://randomfox.ca/floof/")
            .then((res) => res.json())
            .then((data) => setImage(data.image))}>button</button>
    </div>
  );
};

export default App;
