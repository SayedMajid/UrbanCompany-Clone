import React, { useContext } from "react";
import {
  Box,
  Text,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  Button,
  SimpleGrid,
  Flex,
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
import { Appcontext } from "../Context/Appcontext";
import HomeFooter from "../Components/HomeFooter";
import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Swiper/Carousel";

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
  },
];

const Home = () => {
  const navigate = useNavigate();

  const moveToMG = () => {
    navigate("/MensGrooming");
  };

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
          boxShadow="xl"
        >
          {services.map((el) => (
            <Box
              key={el.title}
              bg="white"
              w="128px"
              h="112px"
              rounded="md"
              p="10px"
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              _hover={{ bg: "#e5e5e5" }}
              onClick={el.title === "Salon For Men" ? moveToMG : null}
            >
              <Box w="fit-content" alignSelf="center">
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
      {/* Carousel Image Box */}
      <Box p="20px 0 64px" mt="70px">
        <Carousel />
      </Box>
      {/* <Flex
        p="20px 0 64px"
        mt="70px"
        justifyContent="space-evenly"
        borderBottom="16px solid #f2f4f6"
      >
        <Box transition="transform .2s" _hover={{ transform: "scale(1.10)" }}>
          <Image
            h="150px"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657006546486-545754.jpeg"
          />
        </Box>
        <Box transition="transform .2s" _hover={{ transform: "scale(1.10)" }}>
          <Image
            h="150px"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733512041-813a4c.jpeg"
          />
        </Box>
        <Box transition="transform .2s" _hover={{ transform: "scale(1.10)" }}>
          <Image
            h="150px"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733511465-f22ed1.jpeg"
          />
        </Box>
        <Box transition="transform .2s" _hover={{ transform: "scale(1.10)" }}>
          <Image
            h="150px"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733505075-80d1ba.jpeg"
          />
        </Box>
        <Box transition="transform .2s" _hover={{ transform: "scale(1.10)" }}>
          <Image
            h="150px"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733505585-4d3fe3.jpeg"
          />
        </Box>
      </Flex> */}
      {/* Note Img */}
      <Box borderBottom="16px solid #f2f4f6">
        <Image
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/images/growth/luminosity/1645029066799-6c633b.jpeg"
          alt="NoteImg"
        />
      </Box>
      {/* Cleaning and Pest Control */}
      <Box
        display="flex"
        flexDirection="column"
        borderBottom="16px solid #f2f4f6"
        p="50px 0 70px"
        gap="3rem"
      >
        <Text
          fontSize="32px"
          fontWeight="700"
          color="#212121"
          textAlign="center"
        >
          Cleaning & Pest Control
        </Text>
        <Flex justifyContent={"center"} gap="2rem">
          <Box>
            <Box>
              <Image
                mb="20px"
                transition="transform 0.4s"
                _hover={{ transform: "scale(1.10)" }}
                rounded="md"
                h="180px"
                w="300px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg"
              />
            </Box>
            <Text
              textAlign={"center"}
              fontSize="14px"
              color="#212121"
              fontWeight="500"
            >
              Bathroom & Kitchen Cleaning
            </Text>
          </Box>
          <Box>
            <Box>
              <Image
                mb="20px"
                transition="transform 0.4s"
                _hover={{ transform: "scale(1.10)" }}
                rounded="md"
                h="180px"
                w="300px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg"
              />
            </Box>
            <Text
              textAlign={"center"}
              fontSize="14px"
              color="#212121"
              fontWeight="500"
            >
              Sofa & Carpet Cleaning
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* Home Repairs */}
      <Box
        display="flex"
        flexDirection="column"
        borderBottom="16px solid #f2f4f6"
        p="50px 0 70px"
        gap="3rem"
      >
        <Text
          fontSize="32px"
          fontWeight="700"
          color="#212121"
          textAlign="center"
        >
          Home Repairs
        </Text>
        <Flex justifyContent={"center"} gap="2rem">
          <Box>
            <Box>
              <Image
                mb="20px"
                transition="transform 0.4s"
                _hover={{ transform: "scale(1.10)" }}
                rounded="md"
                h="180px"
                w="300px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg"
              />
            </Box>
            <Text
              textAlign={"center"}
              fontSize="14px"
              color="#212121"
              fontWeight="500"
            >
              Home Furniture
            </Text>
          </Box>
          <Box>
            <Box>
              <Image
                mb="20px"
                transition="transform 0.4s"
                _hover={{ transform: "scale(1.10)" }}
                rounded="md"
                h="180px"
                w="300px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg"
              />
            </Box>
            <Text
              textAlign={"center"}
              fontSize="14px"
              color="#212121"
              fontWeight="500"
            >
              Carpenters
            </Text>
          </Box>
          <Box>
            <Box>
              <Image
                mb="20px"
                transition="transform 0.4s"
                _hover={{ transform: "scale(1.10)" }}
                rounded="md"
                h="180px"
                w="300px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/electrician.jpg"
              />
            </Box>
            <Text
              textAlign={"center"}
              fontSize="14px"
              color="#212121"
              fontWeight="500"
            >
              Electricians
            </Text>
          </Box>
          <Box>
            <Box>
              <Image
                mb="20px"
                transition="transform 0.4s"
                _hover={{ transform: "scale(1.10)" }}
                rounded="md"
                h="180px"
                w="300px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg"
              />
            </Box>
            <Text
              textAlign={"center"}
              fontSize="14px"
              color="#212121"
              fontWeight="500"
            >
              Plumbers
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* Insurance */}
      <Box borderBottom="16px solid #f2f4f6">
        <Image
          h="90%"
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/categories/category_v2/category_a4e46fa0.png"
          alt="insurance"
        />
      </Box>
      {/* Some Policy */}
      <Box borderBottom="16px solid #f2f4f6">
        <Image
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/images/growth/home-screen/1624344861242-558286.png"
          alt="insurance"
        />
      </Box>
      {/* Skill India */}
      <Box borderBottom="16px solid #f2f4f6">
        <Image
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/categories/category_v2/category_3cffdf20.png"
          alt="insurance"
        />
      </Box>
      {/* Footer */}
      <Box>
        <HomeFooter />
      </Box>
    </>
  );
};

export default Home;
