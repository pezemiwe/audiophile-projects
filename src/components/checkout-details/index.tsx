"use client";
import {
  Box,
  Heading,
  Text,
  FormControl,
  Grid,
  FormLabel,
  Input,
  GridItem,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";

export default function CheckoutDetails() {
  return (
    <Box
      boxShadow=" 0 20px 30px 0 #00000012"
      padding={{ base: "24px 24px 31px", md: "54px 48px 48px" }}
      borderRadius="8px"
    >
      <Heading
        as="h3"
        fontSize="32px"
        fontWeight="700"
        mb="41px"
        letterSpacing="1.14px"
      >
        CHECKOUT
      </Heading>

      <BillingDetails />
      <ShippingInfo />
      <PaymentDetails />
    </Box>
  );
}

function BillingDetails() {
  return (
    <FormControl>
      <Text
        fontSize="13px"
        fontWeight="700"
        lineHeight="25px"
        letterSpacing=".93px"
        color="#D87D4A"
        textTransform="uppercase"
        mb="16px"
      >
        Billing Details
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        rowGap="24px"
        columnGap="16px"
      >
        <GridItem>
          <FormLabel
            fontSize="12px"
            fontWeight="700"
            lineHeight="16.39px"
            letterSpacing="-0.21px"
          >
            Name
          </FormLabel>
          <Input
            placeholder="Alexei Ward"
            focusBorderColor="#D87D4A"
            _placeholder={{
              color: "#00000060",
              fontWeight: "700",
              fontSize: "14px",
            }}
            height="56px"
            lineHeight="19.12px"
            letterSpacing="-0.21px"
            borderColor="#cfcfcf80"
            borderRadius="8px"
            cursor="pointer"
          />
        </GridItem>

        <GridItem>
          <FormLabel
            fontSize="12px"
            fontWeight="700"
            lineHeight="16.39px"
            letterSpacing="-0.21px"
          >
            Email Address
          </FormLabel>
          <Input
            type="email"
            focusBorderColor="#D87D4A"
            placeholder="alexei@mail.com"
            _placeholder={{
              color: "#00000060",
              fontWeight: "700",
              fontSize: "14px",
            }}
            height="56px"
            lineHeight="19.12px"
            letterSpacing="-0.21px"
            borderColor="#cfcfcf80"
            borderRadius="8px"
            cursor="pointer"
          />
        </GridItem>

        <GridItem>
          <FormLabel
            fontSize="12px"
            fontWeight="700"
            lineHeight="16.39px"
            letterSpacing="-0.21px"
          >
            Phone Number
          </FormLabel>
          <Input
            placeholder="+1 202-555-0136"
            focusBorderColor="#D87D4A"
            _placeholder={{
              color: "#00000060",
              fontWeight: "700",
              fontSize: "14px",
            }}
            height="56px"
            lineHeight="19.12px"
            letterSpacing="-0.21px"
            borderColor="#cfcfcf80"
            borderRadius="8px"
            cursor="pointer"
          />
        </GridItem>
      </Grid>
    </FormControl>
  );
}

function ShippingInfo() {
  return (
    <>
      <FormControl m="53px 0 61px">
        <Text
          fontSize="13px"
          fontWeight="700"
          lineHeight="25px"
          letterSpacing=".93px"
          color="#D87D4A"
          textTransform="uppercase"
          mb="16px"
        >
          shipping info
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          rowGap="24px"
          columnGap="16px"
        >
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <FormLabel
              fontSize="12px"
              fontWeight="700"
              lineHeight="16.39px"
              letterSpacing="-0.21px"
            >
              Address
            </FormLabel>
            <Input
              focusBorderColor="#D87D4A"
              placeholder="1137 Williams Avenue"
              _placeholder={{
                color: "#00000060",
                fontWeight: "700",
                fontSize: "14px",
              }}
              height="56px"
              lineHeight="19.12px"
              letterSpacing="-0.21px"
              borderColor="#cfcfcf80"
              borderRadius="8px"
            />
          </GridItem>

          <GridItem>
            <FormLabel
              fontSize="12px"
              fontWeight="700"
              lineHeight="16.39px"
              letterSpacing="-0.21px"
            >
              ZIP Code
            </FormLabel>
            <Input
              type="email"
              focusBorderColor="#D87D4A"
              placeholder="10001"
              _placeholder={{
                color: "#00000060",
                fontWeight: "700",
                fontSize: "14px",
              }}
              height="56px"
              lineHeight="19.12px"
              letterSpacing="-0.21px"
              borderColor="#cfcfcf80"
              borderRadius="8px"
            />
          </GridItem>

          <GridItem>
            <FormLabel
              fontSize="12px"
              fontWeight="700"
              lineHeight="16.39px"
              letterSpacing="-0.21px"
            >
              City
            </FormLabel>
            <Input
              focusBorderColor="#D87D4A"
              placeholder="New York"
              _placeholder={{
                color: "#00000060",
                fontWeight: "700",
                fontSize: "14px",
              }}
              height="56px"
              lineHeight="19.12px"
              letterSpacing="-0.21px"
              borderColor="#cfcfcf80"
              borderRadius="8px"
            />
          </GridItem>

          <GridItem>
            <FormLabel
              fontSize="12px"
              fontWeight="700"
              lineHeight="16.39px"
              letterSpacing="-0.21px"
            >
              Country
            </FormLabel>
            <Input
              focusBorderColor="#D87D4A"
              placeholder="United States"
              _placeholder={{
                color: "#00000060",
                fontWeight: "700",
                fontSize: "14px",
              }}
              height="56px"
              lineHeight="19.12px"
              letterSpacing="-0.21px"
              borderColor="#cfcfcf80"
              borderRadius="8px"
            />
          </GridItem>
        </Grid>
      </FormControl>
    </>
  );
}

function PaymentDetails() {
  return (
    <>
      <FormControl>
        <Text
          fontSize="13px"
          fontWeight="700"
          lineHeight="25px"
          letterSpacing=".93px"
          color="#D87D4A"
          textTransform="uppercase"
          mb="16px"
        >
          payment details
        </Text>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          rowGap="24px"
          columnGap="16px"
        >
          <GridItem gridRow={{ base: "1 ", md: "1 / span 2" }}>
            <FormLabel
              fontSize="12px"
              fontWeight="700"
              lineHeight="16.39px"
              letterSpacing="-0.21px"
            >
              Payment Method
            </FormLabel>
          </GridItem>

          <GridItem gridRow={{ base: "0", md: "1 / span 2" }}>
            <RadioGroup defaultValue="1">
              <Stack spacing="16px">
                <Box
                  border="1px solid #cfcfcf80"
                  height="56px"
                  p="18px 16px"
                  borderRadius="8px"
                  cursor="pointer"
                  _hover={{
                    border: "1px solid #D87D4A",
                  }}
                >
                  <Radio value="1" spacing="16px" colorScheme="orange">
                    <Text fontSize="12px" fontWeight="700">
                      e-Money
                    </Text>
                  </Radio>
                </Box>

                <Box
                  border="1px solid #cfcfcf80"
                  height="56px"
                  p="18px 16px"
                  borderRadius="8px"
                  cursor="pointer"
                  _hover={{
                    border: "1px solid #D87D4A",
                  }}
                >
                  <Radio value="2" spacing="16px" colorScheme="orange">
                    <Text fontSize="12px" fontWeight="700">
                      Cash on Delivery
                    </Text>
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>
          </GridItem>

          <GridItem>
            <FormLabel
              fontSize="12px"
              fontWeight="700"
              lineHeight="16.39px"
              letterSpacing="-0.21px"
            >
              e-Money Number
            </FormLabel>
            <Input
              focusBorderColor="#D87D4A"
              placeholder="238521993"
              _placeholder={{
                color: "#00000060",
                fontWeight: "700",
                fontSize: "14px",
              }}
              height="56px"
              lineHeight="19.12px"
              letterSpacing="-0.21px"
              borderColor="#cfcfcf80"
              borderRadius="8px"
            />
          </GridItem>

          <GridItem>
            <FormLabel
              fontSize="12px"
              fontWeight="700"
              lineHeight="16.39px"
              letterSpacing="-0.21px"
            >
              e-Money PIN
            </FormLabel>
            <Input
              focusBorderColor="#D87D4A"
              placeholder="6891"
              _placeholder={{
                color: "#00000060",
                fontWeight: "700",
                fontSize: "14px",
              }}
              height="56px"
              lineHeight="19.12px"
              letterSpacing="-0.21px"
              borderColor="#cfcfcf80"
              borderRadius="8px"
            />
          </GridItem>
        </Grid>
      </FormControl>
    </>
  );
}
