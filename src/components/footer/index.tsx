import {
  Box,
  Flex,
  ListItem,
  UnorderedList,
  Grid,
  GridItem,
  Link,
  Icon,
} from "@chakra-ui/react";
import Logo from "@/assets/svgs/logo.svg";
import Facebook from "@/assets/svgs/facebook.svg";
import Twitter from "@/assets/svgs/twitter.svg";
import Insta from "@/assets/svgs/insta.svg";

export const Footer = () => {
  return (
    <Flex w="100%" bgColor="#000000" justifyContent="space-between">
      <Flex
        direction="column"
        maxW="1130px"
        color="#ffffff"
        mx="auto"
        w="100%"
        paddingX={["24px", "24px", "40px", "10px"]}
      >
        <Box
          width="101px"
          height="4px"
          border="4px solid #D87D4A"
          margin={{ base: "auto", md: "0px" }}
        />
        <Flex
          align={{ base: "center", md: "flex-start", lg: "center" }}
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          mt={{ base: "48px", md: "56px", lg: "71px" }}
        >
          <Logo />
          <NavLinks />
        </Flex>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
          mt={{ base: "48px", md: "32px", lg: "36px" }}
          mb={{ base: "46px", lg: "48px" }}
          rowGap={{ base: "48px", md: "80px", lg: "56px" }}
        >
          <GridItem
            colSpan={{ base: 4, lg: 3 }}
            width={{ base: "100%", lg: "540px" }}
            fontSize="15px"
            lineHeight="25px"
            fontWeight="400"
            color="rgba(255, 255, 255, 0.5)"
            textAlign={{ base: "center", md: "left" }}
          >
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            rowStart={{ base: 3, md: 2, lg: "auto" }}
            colStart={{ base: 1, md: 4, lg: "auto" }}
          >
            <Flex
              gap="18px"
              alignItems="center"
              cursor="pointer"
              margin={{ base: "auto", md: "0px" }}
            >
              <Link href="#/" isExternal>
                <Icon
                  as={Facebook}
                  boxSize="24px"
                  fill="#fff"
                  _hover={{ fill: "#D87D4A" }}
                  cursor="pointer"
                />
              </Link>
              <Link href="#/" isExternal>
                <Icon
                  as={Twitter}
                  boxSize="24px"
                  fill="#fff"
                  _hover={{ fill: "#D87D4A" }}
                  cursor="pointer"
                />
              </Link>
              <Link href="#/" isExternal>
                <Icon
                  as={Insta}
                  boxSize="24px"
                  fill="#fff"
                  _hover={{ fill: "#D87D4A" }}
                  cursor="pointer"
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={{ base: 4, md: 3 }}
            fontSize="15px"
            fontWeight="700"
            color="rgba(255, 255, 255, 0.5)"
            lineHeight="25px"
            textAlign={{ base: "center", md: "left" }}
          >
            Copyright 2021. All Rights Reserved
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

const NavLinks = () => {
  return (
    <UnorderedList
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      gap={{ base: "16px", md: "34px" }}
      listStyleType="none"
      fontSize="13px"
      fontWeight="700"
      ml={0}
      mt={{ base: "48px", md: "32px", lg: "0px" }}
    >
      <ListItem
        lineHeight="25px"
        letterSpacing="2px"
        cursor="pointer"
        _hover={{
          color: "#D87D4A",
        }}
      >
        <Link _hover={{ textDecoration: "none" }}>HOME</Link>
      </ListItem>
      <ListItem
        lineHeight="25px"
        letterSpacing="2px"
        cursor="pointer"
        _hover={{
          color: "#D87D4A",
        }}
      >
        <Link _hover={{ textDecoration: "none" }}>HEADPHONES</Link>
      </ListItem>
      <ListItem
        lineHeight="25px"
        letterSpacing="2px"
        cursor="pointer"
        _hover={{
          color: "#D87D4A",
        }}
      >
        <Link _hover={{ textDecoration: "none" }}>SPEAKERS</Link>
      </ListItem>
      <ListItem
        lineHeight="25px"
        letterSpacing="2px"
        cursor="pointer"
        _hover={{
          color: "#D87D4A",
        }}
      >
        <Link _hover={{ textDecoration: "none" }}>EARPHONES</Link>
      </ListItem>
    </UnorderedList>
  );
};
