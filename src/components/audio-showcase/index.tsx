import React from "react";
import { StaticImageData } from "next/image";
import { Box, Flex, Grid, Heading, Image, Link } from "@chakra-ui/react";
import headphone from "@/assets/images/headphone.png";
import speaker from "@/assets/images/speaker.png";
import earphone from "@/assets/images/round-earphone.png";
import { LinkButton } from "../buttons";

export default function AudioShowcase() {
  return (
    <Box width="100%" mt="120px">
      <Flex
        maxW="1130px"
        w="100%"
        mx="auto"
        paddingX={["24px", "24px", "40px", "10px"]}
      >
        <Grid
          w="100%"
          alignItems="center"
          pt={{
            base: 0,
            lg: "50px",
          }}
          gridTemplateColumns={{
            base: "1fr",
            sm: "repeat(3, minmax(0, 1fr))",
          }}
          gap={{
            base: "75px",
            sm: "12px",
            md: "30px",
          }}
        >
          <Item image={headphone} title="HEADPHONES" />
          <Item image={speaker} title="SPEAKERS" />
          <Item image={earphone} title="EARPHONES" />
        </Grid>
      </Flex>
    </Box>
  );
}

interface ItemProps {
  image: StaticImageData;
  title: string;
}

function Item({ image, title }: ItemProps) {
  return (
    <Link href="#" _hover={{ textDecoration: "none" }}>
      <Flex
        textAlign="center"
        flexDirection="column"
        bg="#F1F1F1"
        borderRadius="8px"
        position="relative"
      >
        <Flex
          w="125px"
          mx="auto"
          alignItems="center"
          justifyContent="center"
          mt={{
            base: "-40px",
            md: "-80px",
          }}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "95px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "40%",
            height: "15px",
            bg: "rgba(0, 0, 0, 0.2)",
            filter: "blur(8px)",
            borderRadius: "50%",
          }}
        >
          <Image
            src={image.src}
            alt="headphone"
            width={{
              base: "50%",
              md: "80%",
              lg: "100%",
            }}
            maxWidth="100%"
            height="auto"
          />
        </Flex>
        <Heading
          as="h4"
          mt="45px"
          fontSize={{
            base: "15px",
            sm: "14px",
            md: "18px",
          }}
        >
          {title}
        </Heading>
        <Flex alignItems="center" justifyContent="center">
          <LinkButton color="#00000080" />
        </Flex>
      </Flex>
    </Link>
  );
}
