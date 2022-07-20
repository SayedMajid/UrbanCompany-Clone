import React from "react";
import {
  Box,
  Text,
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import HomeHeader from "../Components/HomeHeader";

const Home = () => {
  return (
    <Box
      h="552px"
      bgImage="url('https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg')"
      bgPosition={"center"}
      bgRepeat="no-repeat"
      bgAttachment={"fixed"}
      bgSize="100% 100%"
    >
      <HomeHeader />
      <Box border={"1px solid black"} textAlign="center" mt="90px">
        <Text
          color="#fff"
          fontSize="5xl"
          fontWeight={"600"}
          fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"
        >
          Home Services, On Demand.
        </Text>
      </Box>
      <Box
        display="flex"
        border={"1px solid white"}
        m="20px auto"
        w="fit-content"
        p="10px"
      >
        {/* Popover here */}
        <Popover>
          <PopoverTrigger>
            <Button >Nashik</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme="blue">Button</Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </Box>
  );
};

export default Home;
