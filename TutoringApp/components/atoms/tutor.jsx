import React from "react";
import { Text, Card } from "react-native-paper";

function getRatingEmoji(rating) {
  const maxRating = "⭐⭐⭐⭐⭐";
  let boundedRate;
  if (rating < 0) {
    boundedRate = 0;
  } else if (rating > maxRating.length) {
    boundedRate = maxRating.length;
  } else {
    boundedRate = rating;
  }
  return maxRating.substring(0, boundedRate);
}

const Tutor = ({ name, course, rating }) => (
  <Card>
    <Card.Content>
      <Text>{name}</Text>
      <Text>{course}</Text>
    </Card.Content>
    <Card.Actions>
      <Text>{getRatingEmoji(rating)}</Text>
    </Card.Actions>
  </Card>
);

export default Tutor;
