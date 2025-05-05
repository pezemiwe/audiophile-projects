import { Box, Link, UnorderedList, ListItem } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box as="nav" display={{ base: "none", md: "block" }}>
      <UnorderedList
        display="flex"
        gap="34px"
        fontSize="13px"
        listStyleType="none"
        letterSpacing="2px"
        textTransform="uppercase"
      >
        <ListItem>
          <Link
            href="/home"
            _hover={{ color: "#D87D4A" }}
            transition="color 0.2s ease-in-out"
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#"
            _hover={{ color: "#D87D4A" }}
            transition="color 0.2s ease-in-out"
          >
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#"
            _hover={{ color: "#D87D4A" }}
            transition="color 0.2s ease-in-out"
          >
            Services
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#"
            _hover={{ color: "#D87D4A" }}
            transition="color 0.2s ease-in-out"
          >
            Contact
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
