"use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Navbar } from "@/components";
import { Flex } from "@chakra-ui/react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Audiophile Project</title>
        <meta name="description" content="Audiophile Project" />
      </head>
      <body className={manrope.className}>
        <ChakraProvider>
          <Flex direction="column" w="100%" minH="100vh">
            <Navbar />
            <Flex flex="1" overflow="auto">
              {children}
            </Flex>
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
