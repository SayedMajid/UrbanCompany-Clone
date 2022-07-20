import React from "react";
import {
  Box,
  Text,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  Button,
  SimpleGrid,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import HomeHeader from "../Components/HomeHeader";
import { TriangleDownIcon, SearchIcon } from "@chakra-ui/icons";

const services = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
    title: "Salon For Women",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
    title: "Salon For Men",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
    title: "AC/Appliance Repair",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    title: "Cleaning & Pest Control",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
    title: "Electricians",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    title: "Plumbers & Carpenters",
  }
];

const Home = () => {
  return (
    <>
    {/* Top Content */}
      <Box
        h="552px"
        bgImage="url('https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg')"
        bgPosition={"center"}
        bgRepeat="no-repeat"
        bgAttachment={"fixed"}
        bgSize="100% 100%"
      >
        <HomeHeader />
        <Box textAlign="center" mt="190px">
          <Text
            color="#fff"
            fontSize="5xl"
            fontWeight={"600"}
            fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"
          >
            Home Services, On Demand.
          </Text>
        </Box>
        <Box display="flex" gap="1rem" m="20px auto" w="fit-content" p="10px">
          {/* Popover here */}
          <Popover>
            <PopoverTrigger>
              <Button
                display={"flex"}
                justifyContent="space-between"
                w="180px"
                h="54px"
              >
                Nashik <TriangleDownIcon fontSize="sm" />
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Current Location</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Input placeholder="Search for Society/Apartment" />
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          {/* Input Tag here */}
          <InputGroup>
            <InputLeftElement
              h="54px"
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
            />
            <Input
              h="54px"
              w="572px"
              bg="white"
              type="text"
              placeholder="Search For Services"
            />
          </InputGroup>
        </Box>
      </Box>
    {/* services box */}
      <Box w="100%" h="100%">
        <SimpleGrid
          columns={6}
          spacing={10}
          w="1000px"
          m="-70px auto 0"
          p="24px"
          rounded="md"
          bg="white"
        >
          {services.map((el) => (
            <Box
              bg="white"
              w="128px"
              h="112px"
              rounded="md"
              p="10px"
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              _hover={{bg:"#e5e5e5"}}
            >
              <Box
                w="fit-content"
                alignSelf="center"
              >
                <Image h="32px" w="32px" src={el.img} alt="myImage" />
              </Box>
              <Box
                textAlign="center"
                lineHeight="16px"
                h="40px"
                fontSize="16px"
                color="#212121"
              >
                {el.title}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    {/* Note Box */}
    <Box border="1px solid black" p="24px">
      
    </Box>
    </>
  );
};

export default Home;
