import PropTypes from 'prop-types';
import { Label, Input, SearchIcon } from './contactfilters.styled';
export const ContactFilters = ({ contactList, onFilterChange }) => {
  return (
    <Label>
      <SearchIcon />
      <Input
        placeholder="Enter name to search "
        type="text"
        value={contactList}
        onChange={onFilterChange}
      ></Input>
    </Label>
  );
};
ContactFilters.propTypes = {
  contactList: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
