import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import speaker from "@/assets/images/speaker-bg.png";
import speaker2 from "@/assets/images/speaker-bg2.png";
import speaker3 from "@/assets/images/speaker-bg-small.png";
import { OutlineButton } from "../buttons";

export default function ZxSpeaker() {
  return (
    <Box width="100%" mt="48px">
      <Flex
        maxW="1130px"
        w="100%"
        mx="auto"
        paddingX={["24px", "24px", "40px", "10px"]}
        position="relative"
      >
        <Box width="100%">
          <Image
            src={speaker.src}
            alt="speaker"
            objectFit="cover"
            width="100%"
            borderRadius="10px"
            display={{ base: "none", md: "none", lg: "block" }}
          ></Image>

          <Image
            src={speaker2.src}
            alt="speaker"
            objectFit="cover"
            width="100%"
            borderRadius="10px"
            display={{ base: "none", md: "block", lg: "none" }}
          ></Image>

          <Image
            src={speaker3.src}
            alt="speaker"
            objectFit="cover"
            width="100%"
            borderRadius="10px"
            display={{ base: "block", md: "none" }}
          ></Image>
        </Box>

        <Flex
          flexDir="column"
          gap="32px"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          ml={{ base: "24px", md: "62px", lg: "95px" }}
        >
          <Heading as="h3" fontSize="28px" color="#000000">
            ZX7 SPEAKER
          </Heading>
          <OutlineButton />
        </Flex>
      </Flex>
    </Box>
  );
}
