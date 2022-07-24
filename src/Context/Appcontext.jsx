import { createContext, useState } from "react";
import {v4 as uuid } from "uuid"

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

  
  const initData = {
    fname: "",
    lname: "",
    tel: "",
    add: "",
  };

  const [user, setUser] = useState(initData);

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
      // mode : "no-cors",
      method: "POST",
      headers: { "content-type": "application/json" },
      // headers :{"Access-Control-Allow-Origin" : "http://localhost:3000"},
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

  const price = cartItems.reduce((acc, el, i) => { return acc + Number(el.price) + Number(el.qty) }, 0)
  console.log(price)

  const packages = [
    {
      id: uuid(),
      name: "Haircut + Beard Grooming + Massage",
      rating: "4.81 (243.1K)",
      price: 499,
      qty : 1,
      time: "1 hr 5 mins",
      list: ["Mens Haircut", "Beard Shape & Style", "10 min Head Massage"],
    },
    {
      id : uuid(),
      name: "Haircut + Massage",
      rating: "4.82 (258.7K)",
      price: 399,
      qty : 1,
      time: "50 mins",
      list: ["Mens Haircut", "20 min Head Massage"],
    },
    {
      id: uuid(),
      name: "Father & Kids Haircut",
      rating: "4.82 (232.9K)",
      price: 499,
      qty : 1,
      time: "1 hr 10 mins",
      list: ["Mens Haircut", "Kids Haircut(Boys)", "10 min Head Massage"],
    },
    {
      id : uuid(),
      name: "Haircut + Hair Color",
      rating: "4.82 (243.1K)",
      price: 499,
      qty : 1,
      time: "60 mins",
      list: ["Mens Haircut", "Beard Shape & Style", "10 min Head Massage"],
    },
  ];

  return (
    <Appcontext.Provider
      value={{
        loginData,
        handleLoginChange,
        handleLogin,
        loginStatus,
        handleLogout,
        cartItems,
        setCartItems,
        price,
        packages,
        user,
        setUser
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
