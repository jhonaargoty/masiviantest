import React, { useEffect, useState } from "react";
import axios from "axios";

function DataComic() {
  const [comics, setComics] = useState([]);
  const [numberComic, setnumberComic] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const proxyUrl = "https://cors-anywhere.herokuapp.com";
      const url = `https://xkcd.com/` + numberComic + `/info.0.json`;      
      const response = await axios.get(`${proxyUrl}/${url}`, {
        headers: {
          "X-Requested-With": "wololo",
        },
      });
      setComics([response.data]);

      return response;
    }
    fetchPosts();
  });

  return (
    <div>
      <button
        onClick={() => setnumberComic(Math.floor(Math.random() * 1000 + 1))}
      >
        Random Comic
      </button>

      {comics.map((comic) => (
        <div key={comic.num}>
          {setnumberComic}

          <h1>{comic.title}</h1>
          <img src={comic.img} alt={comic.title} />
        </div>
      ))}
    </div>
  );
}

export default DataComic;
