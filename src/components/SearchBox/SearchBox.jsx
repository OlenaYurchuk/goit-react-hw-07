import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  }

  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text"
        className={css.input}
        name='filter'
        onChange={handleSearch} />
    </div>
  )
}