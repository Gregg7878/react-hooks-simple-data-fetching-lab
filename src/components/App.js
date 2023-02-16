// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => setDogImageUrl(data.message));
  }, []);

  if (!dogImageUrl) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dogImageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
