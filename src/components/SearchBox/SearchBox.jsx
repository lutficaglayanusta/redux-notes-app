import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../../redux/filterSlice"
import css from "./SearchBox.module.css"

const SearchBox = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.name)
  return (
    <div>
      <input type="text" placeholder="Search..." className={css.search} value={filter} onChange={(e)=> dispatch(changeFilter(e.target.value))} />
    </div>
  )
}

export default SearchBox
