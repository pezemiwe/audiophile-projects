"use client";
import CheckoutDetails from "@/components/checkout-details";
import CheckoutSummary from "@/components/checkout-summary";
import { Box, Flex, Grid, Link } from "@chakra-ui/react";

export default function Checkout() {
  return (
    <Box
      maxW="1130px"
      mx="auto"
      w="100%"
      paddingX={["24px", "24px", "40px", "10px"]}
    >
      <Flex direction="column">
        <Link
          href="/"
          _hover={{
            color: "#D87D4A",
          }}
          fontSize="15px"
          fontWeight="400"
          lineHeight="25px"
          mt="79px"
          mb="38px"
        >
          Go Back
        </Link>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 350px" }}
          gap="30px"
          mb="141px"
        >
          <CheckoutDetails />
          <CheckoutSummary />
        </Grid>
      </Flex>
    </Box>
  );
}
