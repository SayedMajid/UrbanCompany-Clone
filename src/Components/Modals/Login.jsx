import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  Box,
} from "@chakra-ui/react";
import { Appcontext } from "../../Context/Appcontext";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { handleLoginChange, handleLogin, loginData, loginStatus } = useContext(Appcontext);

  console.log(loginStatus)

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
        Login/Sign up to proceed
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl
              display="flex"
              gap="1rem"
              flexDirection="column"
              mt="5px"
            >
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Enter Email"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLogin}>
              Continue
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
