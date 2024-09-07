import { Button } from '@chakra-ui/react';

export const OutlineButton: React.FC = () => {
  return (
    <Button
      variant='outline'
      w='160px'
      h='48px'
      color='#000000'
      borderColor='#000000'
      borderRadius={0}
      transition='all 0.3s ease-in-out'
      fontSize='13px'
      fontWeight='bold'
      textTransform='uppercase'
      _hover={{
        bgColor: '#000000',
        color: '#ffffff',
      }}
    >
      See Product
    </Button>
  );
};
