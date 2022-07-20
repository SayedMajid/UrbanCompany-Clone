import React from "react";
import {
  Box,
  Image,
  Flex,
  Spacer,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Input,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex h="60px"  justifyContent="space-around">
        <Flex w="1300px">
          <Box m="0 auto" display={"flex"} alignItems="center">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              w="132px"
              h="39px"
            />
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center" gap="2rem">
            <NavLink
              to="/blog"
              style={{ fontSize: "14px", fontWeight: "700", color: "#fff" }}
            >
              Blog
            </NavLink>
            <NavLink
              to="/blog"
              style={{ fontSize: "14px", fontWeight: "700", color: "#fff" }}
            >
              Register As A Professional
            </NavLink>
            <Box>
              <Box
                as="button"
                ref={btnRef}
                onClick={onOpen}
                fontSize="14px"
                fontWeight="700"
                color="#fff"
              >
                Login / Sign Up
              </Box>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Please Login To Continue</DrawerHeader>

                  <DrawerBody display="flex" flexDirection="column" gap="1rem">
                    <Input placeholder="Your Phone Number" />
                    <Button bg="black" color="white">
                      Continue
                    </Button>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeHeader;
