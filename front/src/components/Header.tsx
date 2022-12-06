import React from "react";
import {
  Flex,
  Box,
  IconButton,
  Spacer,
  Text,
  keyframes,
  usePrefersReducedMotion,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Divider,
} from "@chakra-ui/react";

import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useHeaderScroll } from "../hooks/useHeaderScroll";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const fadeOut = keyframes`
   from { opacity: 1;}
  to   { opacity: 0;}
  
`;

const fadeIn = keyframes`
  from { opacity: 0;}
  to   { opacity:1;}
`;

// interface ModalProps {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Header: React.FC = () => {
  const { isHeaderActive } = useHeaderScroll(300);
  const prefersReducedMotion = usePrefersReducedMotion();

  const fadeOutAnimation = prefersReducedMotion
    ? undefined
    : `${fadeOut} 0.6s ease forwards`;

  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 0.5s ease forwards`;

  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box>
      <Flex
        w="100vw"
        h="20vh"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        animation={isHeaderActive ? fadeOutAnimation : fadeInAnimation}
      >
        <Flex
          as="header"
          justify="center"
          position="fixed"
          top={0}
          width="full"
          shadow="sm"
          py={4}
          px={8}
          zIndex={1}
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

      <Flex
        w="100vw"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        animation={isHeaderActive ? fadeInAnimation : fadeOutAnimation}
      >
        <Flex
          as="header"
          justify="center"
          position="fixed"
          top={0}
          width="full"
          shadow="sm"
          py={4}
          px={8}
          zIndex={1}
        >
          <Flex w="30vw">
            <Box>
              <Text fontSize="4xl">MIRAIDO</Text>
            </Box>
            <Spacer />
          </Flex>
          <Flex w="30vw" pt={4} pl={12}>
            <Box>JOURNEY FOR THINK</Box>
            <Spacer />
            <Box>JOURNEY FOR ACTION</Box>
          </Flex>
          <Spacer />

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

      <Flex
        w="100vw"
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <Flex
          as="header"
          justify="center"
          position="fixed"
          top={0}
          width="full"
          shadow="sm"
          py={4}
          px={8}
          zIndex={1}
        >
          <Flex w="100%">
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
            <Box>
              <Text fontSize="4xl">MIRAIDO</Text>
            </Box>
            <Spacer />
            <Box pt={3}>
              <IconButton
                bg="transparent"
                aria-label="search"
                color="black"
                rounded="full"
                icon={<HamburgerIcon w={7} h={7} />}
                onClick={onOpen}
              />
            </Box>
          </Flex>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent backgroundColor="#fae6d0">
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody paddingTop="20vw">
              <Stack>
                <Text fontSize="2xl">JOURNEY TO THINK</Text>
                <Text fontSize="2xl">JOURNEY FOR ACTION</Text>
                <Text fontSize="2xl">FEATURE</Text>
                <Text fontSize="2xl">SPOT</Text>
                <Text fontSize="2xl">STORE</Text>
              </Stack>
              <Divider
                marginY="20px"
                borderWidth="0.5px"
                borderColor="#1D0E0E"
              />
              <Stack>
                <Text fontSize="md">ABOUT</Text>
                <Text fontSize="md">MEMBER</Text>
                <Text fontSize="md">CONTACT</Text>
              </Stack>
              <Stack direction={"row"} spacing={6} marginTop="30px">
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default Header;
