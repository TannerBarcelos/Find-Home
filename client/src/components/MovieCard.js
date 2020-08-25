import React from "react";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
const MovieCard = ({ id, title, vote_average, poster_path, overview }) => {
  return (
    <Card key={id}>
      <CardImg top width="100%" src={poster_path} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{vote_average}</CardSubtitle>
        <CardText>{overview}</CardText>
        {/* Button here will link to a new page with synopsis on this movie or open a modal.. not sure yet */}
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};
export default MovieCard;
