import {
  Box,
  Text,
  HStack,
  Flex,
  IconButton,
  VStack,
  Divider,
  Button,
  Spacer,
  ButtonGroup,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Context/Appcontext";
import Login from "../Components/Modals/Login";
import Proceed from "../Components/Modals/Proceed";

const CartPage = () => {
  const { cartItems, packages, setCartItems, loginStatus } =
    useContext(Appcontext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/MensGrooming");
  };

  const handleQty = (id, amount) => {
    let a = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + amount } : item
    );
    setCartItems(a);
  };

  const finalPrice = cartItems.reduce((acc, el) => {
    return acc + el.price * el.qty;
  }, 0);

  console.log(loginStatus);

  return (
    <Box w="60%" m="auto"  h="100%">
      <Flex borderBottom="1px solid #e3e3e3" p="12px 0px" align="center">
        <IconButton
          icon={<HiArrowNarrowLeft />}
          variant="ghost"
          onClick={goBack}
          _hover={{ bg: "none" }}
        />
        <Text fontWeight="600" color="rgb(15,15,15)">
          Summary
        </Text>
      </Flex>
      <HStack overflow="hidden" spacing={5}>
        {/* Cart items box here */}
        <Flex
          flexDirection="column"
          w="55%"
          gap="2rem"
          h="863px"
          overflowY="scroll"
          p="20px 10px"
          sx={{
            "&::-webkit-scrollbar": {
              width: "0px",
              borderRadius: "0px",
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
          {cartItems.length === 0 ? (
            <Text> EMPTY CART</Text>
          ) : (
            cartItems.map((el, i) => (
              <Box
                p="10px 8px"
                boxSizing="border-box"
              >
                {/* Header */}
                <Flex alignItems="center">
                  <Box>
                    <Text>{el.name}</Text>
                  </Box>
                  <Spacer />
                  <Box display="flex" gap="2rem">
                    <ButtonGroup
                      size="sm"
                      isAttached
                      variant="outline"
                      colorScheme="purple"
                    >
                      <IconButton
                        icon={<MinusIcon />}
                        borderRight="none"
                        disabled={el.qty === 0}
                        onClick={() => handleQty(el.id, -1)}
                      />
                      <Button>{el.qty}</Button>
                      <IconButton
                        icon={<AddIcon />}
                        onClick={() => handleQty(el.id, 1)}
                        disabled={el.qty === 3}
                      />
                    </ButtonGroup>
                    <Text alignSelf="center"> &#8377; {el.price}</Text>
                  </Box>
                </Flex>
                {/* list of services */}
                <Divider w="87%" m="10px 0" />
                <HStack p="0 10px">
                  <UnorderedList color="gray" fontSize="14px">
                    {packages[i].list.map((el) => (
                      <ListItem>{el}</ListItem>
                    ))}
                  </UnorderedList>
                </HStack>
              </Box>
            ))
          )}
        </Flex>
        {/* Payment Section here */}
        <Flex
          w="45%"
          h="863px"
          p="20px 10px"
          pb="0"
          direction="column"
          justifyContent="space-between"
        >
          <VStack spacing={4}>
            <Text color="rgb(15,15,15)" fontWeight="600" alignSelf="flex-start">
              Payment summary
            </Text>
            <Flex justifyContent="space-between" w="100%">
              <Text>Item total</Text>
              <Text>&#8377; {finalPrice}</Text>
            </Flex>
            <Flex justify={"space-between"} w="100%">
              <Text textDecoration="underline">Convinience fee</Text>
              <Text>&#8377; 49</Text>
            </Flex>
            <Divider m="14px 0" borderColor="blackAlpha.700" />
            <Flex w="100%" justify="space-between" fontWeight="600">
              <Text>Total</Text>
              <Text>&#8377; {finalPrice + 49}</Text>
            </Flex>
          </VStack>
          <Box borderTop="1px solid #e3e3e3" p="9px 0" align="center">
            {loginStatus.loggedIn ? <Proceed /> : <Login />}
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
};

export default CartPage;
