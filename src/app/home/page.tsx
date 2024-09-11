"use client";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { OutlineButton } from "@/components/buttons/outline";
import Earphone from "@/assets/images/earphone.png";
import { AudioGear } from "@/components/audio-gear";

export default function Home() {
  return (
    <Flex
      direction={"column"}
      maxW="1130px"
      mx="auto"
      w="100%"
      paddingX={["24px", "24px", "40px", "10px"]}
    >
      <Heading>This is a home page</Heading>

      <Flex direction={["column", "column", "row"]} gap="30px" mt="48px">
        <Image
          src={Earphone.src}
          alt="Earphone"
          width={["100%", "100%", "50%"]}
        />
        <Flex
          align="center"
          justify="center"
          width={["100%", "100%", "50%"]}
          bg="#F1F1F1"
          borderRadius="10px"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Flex direction="column" gap="32px" paddingY="41px">
            <Heading
              as="h4"
              fontSize="28px"
              fontWeight="700"
              lineHeight="38.25px"
              letterSpacing="2px"
            >
              YX1 EARPHONES
            </Heading>
            <OutlineButton />
          </Flex>
        </Flex>
      </Flex>
      <AudioGear />
    </Flex>
  );
}
