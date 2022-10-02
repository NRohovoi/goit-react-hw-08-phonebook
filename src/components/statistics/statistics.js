import PropTypes from 'prop-types';
import { Wrapper, Text, SelectedText } from './statistics.styled';
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <Wrapper>
    <Text>Good: {good}</Text>
    <Text>Neturel: {neutral}</Text>
    <Text>Bad: {bad}</Text>
    <SelectedText>Total: {total}</SelectedText>
    <SelectedText>Positive feedback: {positiveFeedback}%</SelectedText>
  </Wrapper>
);
Statistics.protoTypes = {
  message: PropTypes.string.isRequired,
};
export default Statistics;
