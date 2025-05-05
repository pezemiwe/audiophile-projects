import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import Audio from "@/assets/images/listening-to-music.png";
import AudioMedium from "@/assets/images/listening-medium.png";

export const AudioGear = () => {
  return (
    <Box width="100%" my={{ base: "120px", md: "96px", lg: "200px" }}>
      <Flex
        maxW="1130px"
        w="100%"
        mx="auto"
        align="center"
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        gap={{
          base: "40px",
          md: "63px",
          lg: "125px",
        }}
        paddingX={["24px", "24px", "40px", "10px"]}
      >
        <Flex
          width={{
            base: "100%",
            md: "100%",
            lg: "45.4%",
          }}
        >
          <Flex
            direction="column"
            gap="32px"
            width={{ base: "100%", md: "573px", lg: "100%" }}
            margin="auto"
            textAlign={{ base: "center", lg: "left" }}
          >
            <Heading
              as="h3"
              textTransform="uppercase"
              fontSize={{ base: "28px", md: "40px" }}
              fontWeight="700"
              lineHeight={{ base: "38.25px", md: "44px" }}
              letterSpacing={{ base: "1px", md: "1.43px" }}
            >
              Bringing you the{" "}
              <Box as="span" color="#d87d4a">
                best{" "}
              </Box>
              audio gear
            </Heading>
            <Text
              fontWeight="500"
              fontSize="15px"
              lineHeight="25px"
              color="#a3a3a3"
            >
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Text>
          </Flex>
        </Flex>
        <Box
          width={["100%", "100%", "100%", "54.8%"]}
          borderRadius="10px"
          overflow="hidden"
        >
          <Image
            src={AudioMedium.src}
            alt="Audio Gear"
            width="100%"
            display={{
              base: "block",
              lg: "none",
            }}
          />
          <Image
            src={Audio.src}
            alt="Audio Gear"
            width="100%"
            display={{
              base: "none",
              lg: "block",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
