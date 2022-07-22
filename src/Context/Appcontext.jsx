import { createContext, useState } from "react";

export const Appcontext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState({
    loggedIn: false,
    token: null,
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    let { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((res) =>
        setLoginStatus({
          loggedIn: true,
          token: res.token,
        })
      );

    console.log(loginStatus);
  };

  const handleLogout = () => {
    setLoginStatus({
      loggedIn: false,
      token: null,
    });
  };

  const [cartItems, setCartItems] = useState([])

  return (
    <Appcontext.Provider
      value={{
        loginData,
        handleLoginChange,
        handleLogin,
        loginStatus,
        handleLogout,
        cartItems,
        setCartItems
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
