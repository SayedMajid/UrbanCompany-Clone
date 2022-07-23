import React from "react";
import { Appcontext } from "../Context/Appcontext";
import { Box, Container, Text, Image, Flex, Divider, TableContainer, Thead, Tbody, Table, Tr, Td, Th  } from "@chakra-ui/react";

const OrderConfirm = () => {
  const { user, cartItems } = React.useContext(Appcontext);

  console.log(user, cartItems);

  return (
    <Box bg="blackAlpha.800" h="100%" pt="20px">
      <Container border="1px solid black" maxW="xl" h="100vh" bg="white" p="0">
        <Box>
          <Text
            fontSize={"4xl"}
            align="center"
            p="20px 0"
            bg="rgb(15,15,15)"
            color={"white"}
          >
            Urban Company
          </Text>
        </Box>
        <Flex alignContent={"center"} pt="20px" flexDirection="column">
          <Box align="center">
            <Image
              h="250px"
              w="250px"
              src="https://icon-library.com/images/confirmation-icon/confirmation-icon-29.jpg"
              alt=""
            />
          </Box>
          <Text
            textAlign={"center"}
            fontSize="2xl"
            fontWeight="600"
            color="rgb(15,15,15)"
          >
            Your Order has been confirmed!
          </Text>
        </Flex>
        <Divider m="20px 0" />
        <Box>
            <Text align="center" fontSize="2xl" mb="20px">Order Summary</Text>
          <TableContainer>
            <Table variant="striped" colorScheme="gray">
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Items</Td>
                  <Td isNumeric>450</Td>
                </Tr>
                <Tr>
                  <Td>2</Td>
                  <Td>Convinienve fee</Td>
                  <Td isNumeric>49</Td>
                </Tr>
                <Tr>
                  <Td>3</Td>
                  <Td>Sales tax</Td>
                  <Td isNumeric>18</Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td></Td>
                  <Td isNumeric>517</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default OrderConfirm;
