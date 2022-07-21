import React from "react";
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
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { RiShieldCheckFill } from "react-icons/ri";

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
    price: "599",
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

const MensGrooming = () => {
  const addToCart = (i) => {
    console.log(i);
  };

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
        <Flex justifyContent={"space-between"}>
          {/* Main Box */}
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
                backgroundColor: `lightgreen`,
                borderRadius: `10px`,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: `gray.100`,
              },
            }}
          >
            {/* Individual Box */}
            <SimpleGrid
              borderBottom="5px solid lightgray"
              p="20px 0"
              spacingY="60px"
            >
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
                        &#8377; 499 &bull;{" "}
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
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MensGrooming;
