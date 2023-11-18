import { Div, Input } from './Filter.styled';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  // const filterInputId = nanoid();
  const onChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Div>
      <h2>Contacts</h2>
      <Input
        type="text"
        // id={filterInputId}
        placeholder="Find contact"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Div>
  );
}
export default Filter;
