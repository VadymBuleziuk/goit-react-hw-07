import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice.js";

export default function SearchBox() {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const filter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" value={filterValue} onChange={filter} />
    </div>
  );
}
