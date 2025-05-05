import React from "react";
import speakers from "@/assets/images/large-speaker.png";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../buttons";

export default function SpeakerShowcase() {
  return (
    <Box width="100%" mt={{ base: "120px", lg: "168px" }}>
      <Flex
        maxW="1130px"
        w="100%"
        mx="auto"
        h={{ base: "650px", md: "720px", lg: "560px" }}
        paddingX={["24px", "24px", "40px", "10px"]}
      >
        <Flex
          w="100%"
          bg="#D87D4A"
          position="relative"
          zIndex="-3"
          overflow="hidden"
          borderRadius="8px"
          _before={{
            content: '""',
            display: "block",
            width: ["558px", null, "944px"],
            height: ["558px", null, "944px"],
            borderRadius: "50%",
            border: "1px solid #ffffff4d",
            position: "absolute",
            left: ["50%", null, null, "-120px"],
            top: ["30%", null, "220px", "-70px"],
            transform: ["translate(-50%, -50%)", null, null, "none"],
            zIndex: "-2",
          }}
        >
          <Flex
            w="100%"
            mx={{ base: "0", md: "52px" }}
            gap={{ base: "35px", md: "64px", lg: "72px" }}
            mt={{ base: "0px", lg: "96px" }}
            direction={{ base: "column", lg: "row" }}
            alignItems={{ base: "center", lg: "stretch" }}
          >
            <Box w={{ base: "100%", lg: "60%" }}>
              <Flex
                alignItems="center"
                justifyContent="center"
                position="relative"
                _before={{
                  content: '""',
                  display: "block",
                  width: "100%",
                  pb: "100%",
                  borderRadius: "50%",
                  border: "1px solid #ffffff4d",
                  position: "absolute",
                  top: ["-2%", null, "-100%", "15%"],
                  zIndex: "-2",
                }}
                _after={{
                  content: '""',
                  display: "block",
                  width: ["88%", null, "90%"],
                  pb: ["88%", null, "90%"],
                  borderRadius: "50%",
                  border: "1px solid #ffffff4d",
                  position: "absolute",
                  top: ["5%", null, "-90%", "20%"],
                  zIndex: "-1",
                }}
              >
                <Image
                  src={speakers.src}
                  alt="speaker"
                  width={{ base: "180px", md: "30%", lg: "auto" }}
                  mt={{
                    base: "60px",
                    md: "7%",
                    lg: "0",
                  }}
                ></Image>
              </Flex>
            </Box>

            {/* second */}
            <Box w={{ base: "85%", md: "50%", lg: "40%" }} position="relative">
              <Box
                color="#fff"
                w="100%"
                position="absolute"
                top={{ base: "20px", lg: "37px" }}
                left={{ base: "50%", lg: "auto" }}
                transform={{ base: "translateX(-50%)", lg: "none" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                <Heading
                  as="h1"
                  w={{ base: "75%", md: "100%" }}
                  margin={{ base: "auto", md: "0" }}
                  fontSize={{ base: "36px", md: "56px" }}
                  lineHeight={{ base: "40px", md: "58px" }}
                  letterSpacing={{ base: "1.29px", md: "2px" }}
                  fontWeight="700"
                >
                  ZX9 SPEAKER
                </Heading>
                <Text mt="24px" mb="40px" fontSize="15px" lineHeight="25px">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </Text>
                <Box cursor="pointer">
                  <PrimaryButton bg={{ base: "#000000", lg: "#4C4C4C" }} />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
