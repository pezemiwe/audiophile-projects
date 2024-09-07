import { Button } from '@chakra-ui/react';

export const PrimaryButton: React.FC = () => {
  return (
    <Button
      w='160px'
      h='48px'
      bgColor='#D87D4A'
      color='#ffffff'
      borderRadius={0}
      transition='all 0.3s ease-in-out'
      fontSize='13px'
      fontWeight='bold'
      textTransform='uppercase'
      _hover={{
        bgColor: '#FBAF85',
      }}
    >
      See Product
    </Button>
  );
};
