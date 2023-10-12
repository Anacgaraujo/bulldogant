"use client";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  useColorMode,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import React from "react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import styles from "../../app/page.module.css";

import { useRef } from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.navbarWrapper}>
      <Flex width="100%" alignItems="center" padding="0.1rem">
        {/* <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
          Menu
        </Button> */}

        <Button colorScheme="gray" variant="outline">
          <Link as={NextLink} href="mailto:actanaaraujo@gmail.com">
            Contact us now!
          </Link>
        </Button>

        <Spacer />

        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Our Services</DrawerHeader>

          {/* <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody> */}

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Navbar;
