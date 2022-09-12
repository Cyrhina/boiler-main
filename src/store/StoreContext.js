import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  message: "",
  success: false,
  isSupport: false,
  isSave: false,
  isActive: false,
  isConfirm: false,
  isAdd: false,
  isSearch: false,
  startIndex: 0,
  isDonate: false,
  isDonorSignUp: false,
  isCreatePass: false,
  isForgotPassword: false,
  isLogin: false,
  isLogout: false,
  credentials: {
    settings_users_aid: "",
    settings_users_fname: "",
    settings_users_lname: "",
    settings_users_email: "",
    role_name: "",
  },
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
