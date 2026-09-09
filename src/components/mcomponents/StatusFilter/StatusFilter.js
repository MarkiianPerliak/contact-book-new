import { useDispatch } from "react-redux";
import { changeFilter } from "../../../redux/filterReducer";
import { filterValue } from "../../../redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-group">
      <button className="filter-btn" onClick={() => dispatch(changeFilter(filterValue.all))}>
        All
      </button>
      <button className="filter-btn" onClick={() => dispatch(changeFilter(filterValue.saved))}>
        Saved
      </button>
    </div>
  );
};
