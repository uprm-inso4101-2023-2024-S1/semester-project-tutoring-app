import { Text, Card } from "react-native-paper";

/**
 * Returns a string representing a rating in the range from zero to five stars.
 *
 * @param {number} rating - The rating value, which can be negative, zero, or positive.
 * @returns {string} A string of stars representing the given rating.
 */
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

/**
 * Represents a tutor component.
 *
 * @param {object} props - The properties for the tutor component.
 * @param {string} props.name - The name of the tutor.
 * @param {string} props.course - The course taught by the tutor.
 * @param {number} props.rating - The rating of the tutor.
 * @returns {JSX.Element} A Card component representing the tutor.
 */
const Tutor = ({ name, course, rating }) => (
  <Card
    style={{
      borderRadius: 15,
      marginVertical: "0.25%",
    }}
  >
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
