import React from "react";
import { Flex, Box, IconButton, Spacer, Text } from "@chakra-ui/react";

import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  return (
    <Flex w="100vw" h="20vh">
      <Flex
        as="header"
        justify="center"
        position="fixed"
        top={0}
        width="full"
        shadow="sm"
        py={4}
        px={8}
      >
        <Flex w="30vw" pt={4} pl={12}>
          <Box>JOURNEY TO THINK</Box>
          <Spacer />
          <Box>JOURNEY FOR ACTION</Box>
        </Flex>
        <Spacer />
        <Flex w="40vw">
          <Spacer />
          <Box>
            <Text fontSize="4xl">MIRAIDO</Text>
          </Box>

          <Spacer />
        </Flex>
        <Spacer />
        <Flex w="30vw" pr={12}>
          <Box pt={4}>FEATURE</Box>
          <Spacer />
          <Box pt={4}>SPOT</Box>
          <Spacer />
          <Box pt={3}>
            <IconButton
              bg="transparent"
              aria-label="search"
              color="black"
              rounded="full"
              icon={<SearchIcon w={7} h={7} />}
            />
          </Box>
          <Spacer />
          <Box pt={3}>
            <IconButton
              bg="transparent"
              aria-label="search"
              color="black"
              rounded="full"
              icon={<HamburgerIcon w={7} h={7} />}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
