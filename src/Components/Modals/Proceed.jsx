import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  Box,
  useDisclosure,
  Button,
  FormControl,
  InputLeftAddon,
  ModalHeader,
} from "@chakra-ui/react";
import { Appcontext } from "../../Context/Appcontext";
import { useNavigate } from "react-router-dom";

const Proceed = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { user, setUser } = useContext(Appcontext);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const submitOrder = () => {
    console.log(user, "Proceed");
    navigate("/OrderConfirm");
  };

  return (
    <>
      <Button
        onClick={onOpen}
        size="md"
        color="white"
        height="48px"
        width="416px"
        variant="solid"
        bg="#6e42e5"
        _hover={{ bg: "#6e42e5" }}
      >
        Proceed
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Detials</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl display="flex" flexDirection="column" gap="1rem">
              <Box>
                <Input
                  placeholder="First name"
                  type="text"
                  name="fname"
                  value={user.fname}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Input
                  placeholder="Last name"
                  name="lname"
                  value={user.lname}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <InputGroup>
                  <InputLeftAddon children="+91" />
                  <Input
                    type="text"
                    placeholder="Phone number"
                    pattern="\d*"
                    maxLength="10"
                    name="tel"
                    value={user.tel}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Box>
              <Box>
                <Input
                  placeholder="Enter Address"
                  name="add"
                  value={user.add}
                  onChange={handleChange}
                />
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter align="center">
            <Button
              colorScheme="purple"
              mr={3}
              onClick={submitOrder}
              disabled={
                user.fname === "" &&
                user.lname === "" &&
                user.tel === "" &&
                user.add === ""
              }
            >
              Confirm Order
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Proceed;
