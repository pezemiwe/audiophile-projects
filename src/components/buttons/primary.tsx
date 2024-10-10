import { Button } from "@chakra-ui/react";

interface PrimaryButtonProps {
  buttonText?: string;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  buttonText,
  width,
}) => {
  return (
    <Button
      w={width || "160px"}
      h="48px"
      bgColor="#D87D4A"
      color="#ffffff"
      borderRadius={0}
      transition="all 0.3s ease-in-out"
      fontSize="13px"
      fontWeight="bold"
      textTransform="uppercase"
      _hover={{
        bgColor: "#FBAF85",
      }}
      onClick={onClick}
    >
      {buttonText || "See Product"}
    </Button>
  );
};
