import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MensGrooming from "./MensGrooming";
import CartPage from "./CartPage";
import OrderConfirm from "./OrderConfirm";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MensGrooming" element={<MensGrooming/>}/>
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/OrderConfirm" element={<OrderConfirm />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
