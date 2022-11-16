import PropTypes from 'prop-types';
import { FilterStyled, FilterInputStyled } from './FilterStyled';

import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContact, filterContact } from '../../redux/ContactSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filteredItems = useSelector(getFilteredContact);
    const onChangeFilter = event => {
    return dispatch(filterContact(event.target.value));
  };
    return(
    <FilterStyled>
        Filtr name
        <FilterInputStyled
            type="text"
            value={filteredItems}
            onChange={onChangeFilter}
        />
        </FilterStyled>
    )
    };

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};