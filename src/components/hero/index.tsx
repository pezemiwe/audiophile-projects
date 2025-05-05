import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import heroImg from "@/assets/images/hero-headphones.png";
import heroMobile from "@/assets/images/hero-mobile.png";
import { PrimaryButton } from "../buttons";

export default function HeroSection() {
  return (
    <Box
      width="100%"
      h="calc(100vh - 97px)"
      bg="#131313"
      color="#ffffff"
      overflow="hidden"
      position="relative"
      zIndex="-2"
    >
      <Flex
        maxW="1130px"
        w="100%"
        h="100%"
        mx="auto"
        gap="40px"
        paddingX={["24px", "24px", "40px", "10px"]}
        position="relative"
      >
        <Flex
          w="426px"
          direction="column"
          position="absolute"
          top="50%"
          left={{
            base: "50%",
            lg: "auto",
          }}
          transform={{
            base: "translate(-50%, -50%)",
            lg: "translateY(-50%)",
          }}
          alignItems={{
            base: "center",
            lg: "stretch",
          }}
        >
          <Text
            color="#fff"
            opacity="49.64%"
            fontSize="14px"
            lineHeight="19.12px"
            letterSpacing="10px"
          >
            NEW PRODUCT
          </Text>
          <Heading
            as="h1"
            fontWeight="700"
            pt={{ base: "10px", md: "24px" }}
            pb="24px"
            fontSize={{ base: "36px", md: "56px" }}
            lineHeight={{ base: "40px", md: "58px" }}
            letterSpacing="2px"
            textAlign={{
              base: "center",
              lg: "left",
            }}
          >
            XX99 Mark II Headphones
          </Heading>
          <Text
            color="#fff"
            opacity="75%"
            fontSize="15px"
            lineHeight="25px"
            mb="40px"
            maxW={{ base: "328px", md: "349px" }}
            textAlign={{
              base: "center",
              lg: "left",
            }}
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>

          <PrimaryButton />
        </Flex>
        <Box
          w="100%"
          position="absolute"
          right="0"
          zIndex="-1"
          left={{
            base: "50%",
            lg: "auto",
          }}
          top={{
            base: "45%",
            lg: "45%",
          }}
          transform={{
            base: "translate(-50%, -50%)",
            lg: "translateY(-50%)",
          }}
          maxW={{
            base: "100vw",
            md: "700px",
            lg: "708.8px",
          }}
        >
          <Image
            src={heroImg.src}
            alt="Headphone"
            display={{ base: "none", md: "block" }}
          ></Image>
          <Image
            src={heroMobile.src}
            alt="Headphone"
            w="100%"
            display={{ base: "block", md: "none" }}
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}
