"use client";
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Grid,
} from "@chakra-ui/react";
import headset from "@/assets/images/head-set.png";
import { PrimaryButton } from "../buttons";
import check from "@/assets/svgs/check.svg";
import { useRouter } from "next/navigation";

export default function CheckoutSummary() {
  const { isOpen, onOpen } = useDisclosure();
  const router = useRouter();

  return (
    <Box>
      <Box
        borderRadius="8px"
        boxShadow=" 0 20px 30px 0 #00000012"
        padding={{ base: "32px 24px", md: "32px 33px" }}
      >
        <Heading
          as="h3"
          fontSize="18px"
          fontWeight="700"
          mb="31px"
          letterSpacing="1.29px"
          textTransform="uppercase"
        >
          summary
        </Heading>

        <Flex flexDir="column" gap="36px" mb="32px">
          <CheckItems
            image={headset}
            name="XX99 MK II"
            price="2,999"
            total={1}
          />

          <CheckItems image={headset} name="XX59" price="899" total={2} />

          <CheckItems image={headset} name="YX1" price="599" total={1} />
        </Flex>

        <Flex align="center" justify="space-between" lineHeight="25px">
          <Heading as="h4" fontSize="15px" fontWeight="400" color="#00000080">
            TOTAL
          </Heading>
          <Text fontSize="18px" fontWeight="700">
            $ 5,396
          </Text>
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          m="8px 0"
          lineHeight="25px"
        >
          <Heading as="h4" fontSize="15px" fontWeight="400" color="#00000080">
            SHIPPING
          </Heading>
          <Text fontSize="18px" fontWeight="700">
            $ 50
          </Text>
        </Flex>

        <Flex align="center" justify="space-between" lineHeight="25px">
          <Heading as="h4" fontSize="15px" fontWeight="400" color="#00000080">
            VAT (INCLUDED)
          </Heading>
          <Text fontSize="18px" fontWeight="700">
            $ 1,079
          </Text>
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          m="24px 0 32px"
          lineHeight="25px"
        >
          <Heading as="h4" fontSize="15px" fontWeight="400" color="#00000080">
            GRAND TOTAL
          </Heading>
          <Text fontSize="18px" fontWeight="700" color="#D87D4A">
            $ 5,446
          </Text>
        </Flex>

        <PrimaryButton
          onClick={onOpen}
          width="100%"
          buttonText="CONTINUE & PAY"
        />
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={() => {}}>
          <ModalOverlay />
          <ModalContent
            maxW="540px"
            p={{ base: "24px", md: "32px" }}
            ml={{ base: "16px", md: "0px" }}
            mr={{ base: "16px", md: "0px" }}
          >
            <ModalBody pb={6}>
              <Flex
                width="64px"
                height="64px"
                align="center"
                justifyContent="center"
                borderRadius="50%"
                bg="#D87D4A"
              >
                <Icon as={check}></Icon>
              </Flex>

              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                m="33px 0 24px"
              >
                THANK YOU <br /> FOR YOUR ORDER
              </Heading>

              <Text fontSize="15px" fontWeight="400" color="#00000080">
                You will receive an email confirmation shortly.
              </Text>

              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "1fr 190px",
                }}
                m="33px 0 46px"
                borderRadius="8px"
                overflow="hidden"
              >
                <Flex flexDir="column" bg="#F1F1F1" p="24px">
                  <CheckItems
                    width="50px"
                    height="50px"
                    image={headset}
                    name="XX99 MK II"
                    price="2,999"
                    total={1}
                    padding="9px 11px"
                  />
                  <Box as="hr" border="1px" borderColor="gray.200" my="12px" />
                  <Text
                    fontSize="12px"
                    fontWeight="700"
                    textAlign="center"
                    color="#00000080"
                  >
                    and 2 other item(s)
                  </Text>
                </Flex>

                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  gap="8px"
                  bg="black"
                  pl="32px"
                  py={{
                    base: "15px",
                    md: "auto",
                  }}
                >
                  <Text
                    fontSize="15px"
                    fontWeight="400"
                    lineHeight="25px"
                    color="#ffffff80"
                  >
                    GRAND TOTAL
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="700"
                    lineHeight="24.59px"
                    color="#fff"
                  >
                    $ 5,446
                  </Text>
                </Flex>
              </Grid>
            </ModalBody>

            <ModalFooter>
              <PrimaryButton
                onClick={() => router.push("/home")}
                width="100%"
                buttonText="BACK TO HOME"
              />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

interface CheckItemsProps {
  width?: string;
  height?: string;
  image: { src: string };
  name: string;
  price: string;
  total: number;
  padding?: string;
}

const CheckItems: React.FC<CheckItemsProps> = ({
  width = "64px",
  height = "64px",
  padding = "12px 13px",
  image,
  name,
  price,
  total,
}) => {
  return (
    <Flex justify="space-between" fontWeight="700" fontSize="15px">
      <Flex gap="16px">
        <Flex
          width={width}
          height={height}
          borderRadius="8px"
          backgroundColor="#F1F1F1"
          padding={padding}
        >
          <Image
            src={image.src}
            // objectFit="cover"
            alt="earphone"
          ></Image>
        </Flex>
        <Flex flexDir="column">
          <Text lineHeight="25px">{name}</Text>
          <Text lineHeight="25px" fontSize="14px" color="#00000080">
            $ {price}
          </Text>
        </Flex>
      </Flex>
      <Text color="#00000080" lineHeight="25px">
        x{total}
      </Text>
    </Flex>
  );
};
