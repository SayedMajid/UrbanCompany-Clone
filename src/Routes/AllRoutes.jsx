import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
