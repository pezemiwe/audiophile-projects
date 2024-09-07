'use client';
import { Button } from '@chakra-ui/react';
import Arrow from '@/assets/svgs/arrow-right.svg';

interface LinkButtonProps {
  buttonText?: string;
  width?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  buttonText,
  width,
}) => {
  return (
    <Button
      w={width || '160px'}
      h='48px'
      variant='link'
      color='#000000'
      borderRadius={0}
      transition='all 0.3s ease-in-out'
      fontSize='13px'
      fontWeight='bold'
      textTransform='uppercase'
      bg='transparent'
      _hover={{
        color: '#D87D4A',
      }}
      rightIcon={<Arrow />}
    >
      {buttonText || 'Shop'}
    </Button>
  );
};
