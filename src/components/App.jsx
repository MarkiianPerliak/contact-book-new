import { PrivateRoutes } from "./routes/Private";
import { RestrictedRoutes } from "./routes/Restricted";
import { getContacts } from "../redux/operation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectErrorMessage, selectIsLoading } from "../redux/selectors";
import { useState, Suspense } from "react"
import { lazy } from 'react';
import { Route, Routes } from "react-router-dom"
import { Navigation } from "./Navigation/Navigation"
import { refreshUser } from "../redux/user/userOperations";
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Contacts = lazy(() => import("./mcomponents/AppBar/AppBar"))


export const App = () => {
    const dispatch = useDispatch();
  const errormessage = useSelector(selectErrorMessage);
  const loadingmessage = useSelector(selectIsLoading)
  useEffect(() => {
    dispatch(getContacts());
    dispatch(refreshUser())
    console.log("dispatched")
  }, []);
  return (
    <div>
    <Navigation />
    <Suspense>
      <Routes>
        <Route path="/" element={<RestrictedRoutes><SignIn /></RestrictedRoutes>} />
        <Route path="/signup" element={<RestrictedRoutes><SignUp /></RestrictedRoutes>} />
        <Route path="/contacts" element={<PrivateRoutes><Contacts /></PrivateRoutes>} />
      </Routes>
      </Suspense>
    </div>
  );
};


// {errormessage && !loadingmessage && <div>{errormessage}</div>}
//       {loadingmessage && <div>Завантаження</div>}