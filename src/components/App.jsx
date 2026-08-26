import { AppBar } from "./mcomponents/AppBar/AppBar";
import { getContacts } from "../redux/operation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectErrorMessage, selectIsLoading } from "../redux/selectors";
export const App = () => {
    const dispatch = useDispatch();
  const errormessage = useSelector(selectErrorMessage);
  const loadingmessage = useSelector(selectIsLoading)
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div>
      <AppBar />
      {errormessage && !loadingmessage && <div>{errormessage}</div>}
      {loadingmessage && <div>Завантаження</div>}
    </div>
  );
};
