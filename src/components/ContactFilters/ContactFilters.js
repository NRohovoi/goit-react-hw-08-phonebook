import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/FilterSlice';

import { Label, Input, SearchIcon } from './ContactFilters.styled';

export const ContactFilters = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(setFilter(form.value.toLowerCase()));
  };
  return (
    <Label>
      <SearchIcon />
      <Input
        placeholder="Enter name to search "
        type="text"
        onChange={onFilterChange}
      ></Input>
    </Label>
  );
};

ContactFilters.propTypes = {
  onFilterChange: PropTypes.func,
};

export default ContactFilters;
