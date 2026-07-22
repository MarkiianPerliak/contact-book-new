import { useDispatch } from "react-redux";
import { changeFilter } from "../../../redux/actions";
import { filterValue } from "../../../redux/constants";

export const StatusFilter = () => {
    const dispatch = useDispatch()
  return (
    <div className="wrapper">
        <button onClick={() => dispatch(changeFilter(filterValue.all))}>All</button>
        <button onClick={() => dispatch(changeFilter(filterValue.saved))}>Saved</button>
    </div>
  )
}
