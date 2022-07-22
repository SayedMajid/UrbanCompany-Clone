import React, { useContext } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Spacer,
  Divider,
  Tag,
  TagLabel,
  TagLeftIcon,
  SimpleGrid,
  Button,
  UnorderedList,
  ListItem,
  Link,
  Stack,
  Container,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { RiShieldCheckFill } from "react-icons/ri";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Appcontext } from "../Context/Appcontext";
import { useNavigate } from "react-router-dom";

const smallImg = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg",
    title: "Packages",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631190374864-78f3e8.jpeg",
    title: "Haircut for Men & Kids",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189933595-01692d.png",
    title: "Hair Color",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189957304-ea2a7b.png",
    title: "Shave/Beard Grooming",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189857376-d49e47.png",
    title: "Face Care",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189905841-237b37.png",
    title: "Massage Therapy",
  },
];

const packages = [
  {
    name: "Haircut + Beard Grooming + Massage",
    rating: "4.81 (243.1K)",
    price: "499",
    time: "1 hr 5 mins",
    list: ["Mens Haircut", "Beard Shape & Style", "10 min Head Massage"],
  },
  {
    name: "Haircut + Massage",
    rating: "4.82 (258.7K)",
    price: "399",
    time: "50 mins",
    list: ["Mens Haircut", "20 min Head Massage"],
  },
  {
    name: "Father & Kids Haircut",
    rating: "4.82 (232.9K)",
    price: "499",
    time: "1 hr 10 mins",
    list: ["Mens Haircut", "Kids Haircut(Boys)", "10 min Head Massage"],
  },
  {
    name: "Haircut + Hair Color",
    rating: "4.82 (243.1K)",
    price: "499",
    time: "60 mins",
    list: ["Mens Haircut", "Beard Shape & Style", "10 min Head Massage"],
  },
];

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const MensGrooming = () => {
  const { cartItems, setCartItems } = useContext(Appcontext);

  const addToCart = (i) => {
    let item = packages.filter((el, ind) => ind === i);

    setCartItems([...cartItems, item[0]]);
  };

  const price= cartItems.reduce((acc, el, i) => { return acc + Number(el.price) }, 0)
  console.log(price)

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/CartPage")
  }

  return (
    <>
      {/* Main Box of the Page */}
      <Box w="1100px" m="auto">
        {/* Header section */}
        <Flex p="10px 0">
          <Box
            display={"flex"}
            alignItems="center"
            gap="1rem"
            fontWeight="semibold"
          >
            <Image
              h="40px"
              w="40px"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/customer-app-supply/1648463875565-a4ce06.svg"
            />
            <Box fontSize={"15px"}>
              <Text>Nashik</Text>
              <Text>College Road</Text>
            </Box>
          </Box>
          <Spacer />
          <Flex alignItems={"center"} gap="1rem" fontWeight={"semibold"}>
            <Text>Home</Text>
            <Text>Bookings</Text>
            <Text>Blog</Text>
          </Flex>
        </Flex>
        <Divider m="10px 0" borderColor={"blackAlpha.500"} />
        {/* Video Box */}
        <Flex
          borderBottom="4px solid #EDEDED"
          p="40px 0"
          alignItems={"center"}
          justifyContent="space-evenly"
        >
          <Flex h="159px" w="448px" flexDirection={"column"}>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme={"black"}
                border="1px solid gray"
              >
                <TagLeftIcon boxSize="16px" as={RiShieldCheckFill} />
                <TagLabel>UC Safe</TagLabel>
              </Tag>
            </Box>
            <Text fontSize={"36px"} fontWeight="bold">
              Salon For Men
            </Text>
            <Box>
              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color="gray" />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  4.75 (975k)
                </Box>
              </Box>
            </Box>
          </Flex>
          {/* video section down below */}
          <Box h="360px" w="640px">
            <iframe
              width="640px"
              height="360px"
              src="https://www.youtube.com/embed/9vkK5Hnw1Tw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
        </Flex>
        {/* Small Images Box */}
        <Flex borderBottom="2px solid #E3E3E3" p="30px 0" gap="1.5rem">
          {smallImg.map((el) => (
            <Flex
              flexDirection={"column"}
              alignItems="center"
              h="fit-content"
              w="70px"
              boxSizing="border-box"
            >
              <Box rounded={"md"} mb="10px">
                <Image h="64px" w="64px" rounded="md" src={el.img} />
              </Box>
              <Box
                fontSize="12px"
                w="fit-content"
                textAlign={"center"}
                fontWeight="400"
              >
                <Text>{el.title}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
        {/* Services and Tags */}
        <Flex
          justifyContent={"space-between"}
          borderBottom="4px solid #ededed"
          pb="50px"
        >
          {/*Services Main Box */}
          <Box
            w="59%"
            p="30px 10px 0px"
            h="630px"
            overflowY="scroll"
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#ededed`,
                borderRadius: `10px`,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: `gray.100`,
              },
            }}
          >
            {/* Individual Box */}
            <SimpleGrid p="20px 0" spacingY="60px">
              {packages.map((el, i) => (
                <>
                  <Box>
                    <Box display="flex" alignItems="center">
                      <Image
                        h="20px"
                        mr="5px"
                        src="https://img.icons8.com/external-wanicon-two-tone-wanicon/2x/external-box-logistics-wanicon-two-tone-wanicon-2.png"
                      />
                      <Text color="green.700" display="flex">
                        Package
                      </Text>
                    </Box>
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      w="90%"
                    >
                      <Text fontSize="18px" fontWeight="700">
                        {el.name}
                      </Text>
                      <Button
                        variant="outline"
                        colorScheme="purple"
                        h="30px"
                        w="80px"
                        onClick={() => addToCart(i)}
                      >
                        Add
                      </Button>
                    </Flex>
                    {/* Stars and Ratings */}
                    <Box display="flex" alignItems="center">
                      {Array(1)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon key={i} color="gray" />
                        ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="xs">
                        {el.rating}
                      </Box>
                    </Box>
                    {/* Price and hours */}
                    <Box mt="3px">
                      <Text fontSize="15px" fontWeight="700">
                        &#8377; {el.price} &bull;{" "}
                        <Text as="span" color="gray" fontWeight="thin">
                          {el.time}
                        </Text>{" "}
                      </Text>
                    </Box>
                    <Divider m="10px 0" borderColor="blackAlpha" w="70%" />
                    <Box>
                      <UnorderedList
                        color="gray"
                        pl="10px"
                        lineHeight="20px"
                        fontSize="15px"
                      >
                        {el.list.map((el) => (
                          <ListItem>{el}</ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  </Box>
                </>
              ))}
            </SimpleGrid>
          </Box>
          <center>
            <Divider orientation="vertical" borderColor="blackAlpha.700" />
          </center>
          {/* Coupons Box */}
          <Box w="39%" h="fit-content" p="50px 0">
            <SimpleGrid spacingY={"20px"} justifyContent="end">
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/fluency/2x/star.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    Save 15% on every order
                  </Text>
                  <Text fontSize="14px" color="#757575">
                    Get Plus Now
                  </Text>
                </Box>
              </Flex>
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/color/2x/tag-window.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    CRED Pay
                  </Text>
                  <Text fontSize="14px" color="#757575">
                    Upto Rs. 100 cashback
                  </Text>
                </Box>
              </Flex>
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/color/2x/tag-window.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    Upto 200 cashback
                  </Text>
                  <Text fontSize="14px" color="#757575">
                    On Amazon Pay
                  </Text>
                </Box>
              </Flex>
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/color/2x/tag-window.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    20% cashback on Paytm
                  </Text>
                  <Text fontSize="14px" color="#757575">
                    Upto Rs.400 off
                  </Text>
                </Box>
              </Flex>
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/color/2x/tag-window.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    5% Simpl cashback upto Rs750
                  </Text>
                  <Text fontSize="14px" color="#757575">
                    Pay via Simpl
                  </Text>
                </Box>
              </Flex>
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/color/2x/tag-window.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    Assured Cashback
                  </Text>
                  <Text fontSize="14px" color="#757575">
                    Upto Rs.500 off
                  </Text>
                </Box>
              </Flex>
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/color/2x/tag-window.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    Get upto Rs.500 cashback
                  </Text>
                  <Text fontSize="14px" color="#757575">
                    Valid on Mobiwiki Wallet
                  </Text>
                </Box>
              </Flex>
              {/* Cart box here, make sure to hide it incase no items in cart */}
              {cartItems.length !== 0 && (
                <Flex
                  boxSizing="border-box"
                  gap="0.5rem"
                  p="8px 22px"
                  rounded="md"
                  bg="white"
                  w="352px"
                  justifyContent="space-between"
                  align="center"
                >
                  <Text fontSize="20px" color="#0f0f0f" fontWeight="bold">
                    &#8377; {price}
                  </Text>
                  <Button colorScheme="purple" p="24px 26px" onClick={goToCart}>
                    View Cart
                  </Button>
                </Flex>
              )}
            </SimpleGrid>
          </Box>
        </Flex>
        <Flex
          borderBottom="4px solid #ededed"
          justifyContent="space-between"
          p="40px 0"
        >
          <Box w="60%" p="100px"></Box>
          <center>
            <Divider orientation="vertical" borderColor="blackAlpha.700" />
          </center>
          <Box w="40%" boxSizing="border-box" p="40px 0px 40px 60px">
            <Text
              fontSize="28px"
              fontWeight="700"
              color="rgba(15,15,15)"
              lineHeight="30px"
              mb="20px"
            >
              Salon For Men in Nashik, India
            </Text>
            <Text color="gray">
              Tired of going to the salon after the office? Now avail men's
              haircut even after 8.00pm, we offer our services till 9.30pm.
              Avail men's grooming services like haricut, shave, moustache
              grooming from out stylist at the convinience of your home. Our
              4.5+ rated experts use branded , disposable and hygiene friendly
              products. Book men's haricut services at home in Nashik, India. We
              provide you wihh hygienic and mess-free experience. Our experts
              make sure there is so hair left behind.
            </Text>
          </Box>
        </Flex>
        <Flex
          borderBottom="4px solid #ededed"
          justifyContent="space-between"
          p="70px 0 50px"
        >
          <Box w="56%" boxSizing="border-box">
            <Text fontSize="28px" mb="10px" fontWeight="700">
              Quick Links
            </Text>
            <Text fontSize="22px" fontWeight="500">
              Serving In
            </Text>
            <Box color="gray" mb="10px ">
              Ludiana &bull; Kochi &bull; Nagpur &bull; Agra &bull; Bhopal
              &bull; Guwahati &bull; Vijayawada &bull; Varanasi &bull;
              Coimbatore &bull; Thiruvananthapuram &bull; Patna &bull; Raipur
              &bull; Nashik &bull; Jabalpur &bull; Jamshedpur &bull; Dehradun
              &bull; Merut &bull; Ranchi &bull; Prayagraj &bull; Amritsar &bull;
              Gwalior &bull; Kota &bull; Aurangabad &bull; Mysore &bull; Guntur
              &bull; Cuttack &bull; Udaipur &bull; Ahmedabad &bull; Bangalore
              &bull; Chennai &bull; Delhi NCR &bull; Chandigarh Tricity &bull;
              Jaipur &bull; Hyderabad &bull; Kolkata &bull; Mumbai &bull; Pune
              &bull; Nagpur &bull; Visakhapatnam &bull; Vadodara &bull; Lucknow
              &bull; Bhubaneshwar &bull; Surat &bull; Indore &bull; Rajamundry
              &bull; Madurai &bull; Jodhpur &bull; Kakinada &bull; Warangal
              &bull; Sonipat &bull; Panipat &bull; Karnal &bull; Rohtak &bull;
              Alwar
            </Box>
            <Text fontSize="22px" fontWeight="500">
              Also available in
            </Text>
            <Box color="gray" mb="10px ">
              Salon For Men in Nashik, India
            </Box>
            <Text fontSize="22px" fontWeight="500">
              Services offerred
            </Text>
            <Box color="gray" mb="10px ">
              Salon at Home for Women in Nashik, India &bull; Plumbers in
              Nashik, India &bull; Bathroom cleaning in Nashik, India &bull;
              Salon Classic in Nashik, India &bull; Carpenters in Nashik, India
              &bull; Salon For Men in Nashik, India &bull; Sofa & Carpet
              cleaning in Nashik, India &bull; Electricians in Nashik, India
              &bull; Ac video consult in Nashik, India &bull; Refrigerator Video
              Consult in Nashik, India
            </Box>
          </Box>
        </Flex>
        {/* Footer Section here */}
        <Box>
          <Box bg={"#f5f5f5"} color={useColorModeValue("gray.700", "gray.200")}>
            <Box px={5} pt={5}>
              <Image
                h="44px"
                w="148px"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/customer-app-supply/1648471968852-1f2b01.png"
              />
            </Box>
            <Container as={Stack} maxW={"6xl"} py={10}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={"flex-start"}>
                  <ListHeader>Company</ListHeader>
                  <Link href={"#"}>About Us</Link>
                  <Link href={"#"}>Terms & Conditions</Link>
                  <Link href={"#"}>Privacy Policy</Link>
                  <Link href={"#"}>Anti-Discriminatory Policy</Link>
                  <Link href={"#"}>UC Impact</Link>
                  <Link href={"#"}>Careers</Link>
                </Stack>

                <Stack align={"flex-start"}>
                  <ListHeader>For Customers</ListHeader>
                  <Link href={"#"}>UC Review</Link>
                  <Link href={"#"}>Categories near you</Link>
                  <Link href={"#"}>Blog</Link>
                  <Link href={"#"}>Contact Us</Link>
                </Stack>

                <Stack align={"flex-start"}>
                  <ListHeader>For Partners</ListHeader>
                  <Link href={"#"}>Register as a professional</Link>
                </Stack>

                <Box align={"flex-start"}>
                  <ListHeader>Install App</ListHeader>
                  <Stack direction={"row"} spacing={6} mb="20px" mt="20px">
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                  </Stack>
                  <Image
                    h="36px"
                    w="108px"
                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/customer-app-supply/1648463870745-38fece.png"
                  />
                  <Image
                    h="36px"
                    w="108px"
                    mt="20px"
                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/customer-app-supply/1648463880397-b2cc52.svg"
                  />
                </Box>
              </SimpleGrid>
            </Container>

            <Box
              borderTopWidth={1}
              borderStyle={"solid"}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ md: "space-between" }}
                align={{ md: "center" }}
              >
                <Text>
                  © Copyright 2022 Urban Company. All rights reserved.
                </Text>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MensGrooming;
