'use client';
// import classes from './page.module.css';
import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex>
      <Text textAlign='center' fontSize={90} fontWeight={800} color='red'>
        Hello World
      </Text>
    </Flex>
  );
}
