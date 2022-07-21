import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MensGrooming from "./MensGrooming";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MensGrooming" element={<MensGrooming/>}/>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
