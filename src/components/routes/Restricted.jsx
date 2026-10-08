import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../../redux/user/userSelectors";

export const RestrictedRoutes = ({children}) => {
    const loggedin = useSelector(selectIsLogged)
    console.log(loggedin)
    if (loggedin) {
        return <Navigate to={`/contacts`} replace />
    }
    return children
}