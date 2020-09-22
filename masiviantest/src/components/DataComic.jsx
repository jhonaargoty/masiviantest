import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";

function DataComic() {
  const [comics, setComics] = useState([]);
  const [numberComic, setnumberComic] = useState(1);

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
  },[numberComic]);

  return (
    <div>
      {comics.map((comic) => (
        <div key={comic.num}>
          {setnumberComic}
          <h1>Comic #{numberComic}</h1>
          <h2>{comic.title}</h2>
          <img src={comic.img} alt={comic.title} />
        </div>
      ))}
        <br></br>
      <Button
        onClick={() => setnumberComic(Math.floor(Math.random() * 1000 + 1))}
        variant="contained"
        color="primary"
        endIcon={<ReplayIcon></ReplayIcon>}
      >
        Random Comic
      </Button>
    </div>
  );
}

export default DataComic;
