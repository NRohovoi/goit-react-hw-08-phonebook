import PropTypes from 'prop-types';
import { List, Button } from './controlbox.styled';
const ControlBox = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
};
ControlBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ControlBox;
