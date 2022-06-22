import React from "react";
import { ListGroup } from "react-bootstrap";

function MerdleList({ memes }) {
  const memeList = memes.map((meme) => {
    return (
      <ListGroup.Item action variant="success" key={meme.id}>
        Meme #{meme.id}
      </ListGroup.Item>
    );
  });

  return <ListGroup>{memeList}</ListGroup>;
}

export default MerdleList;
