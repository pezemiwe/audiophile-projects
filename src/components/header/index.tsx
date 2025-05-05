import { Flex, Image } from "@chakra-ui/react";
import Logo from "@/assets/svgs/logo.svg";
import { Navbar } from "../navbar";
import cart from "@/assets/svgs/cart.png";

export const Header = () => {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
      h="97px"
      // bgColor="#0E0E0E"
      bg="#131313"
      justifyContent="space-between"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="1130px"
        w="100%"
        h="100%"
        mx="auto"
        color="#ffffff"
        paddingX={["24px", "24px", "40px", "10px"]}
        borderBottom="1px solid #ffffff33"
      >
        <Logo />
        <Navbar />
        <Image src={cart.src} alt="cart" cursor="pointer"></Image>
      </Flex>
    </Flex>
  );
};
