import { Button } from "@chakra-ui/react";
import { ResponsiveValue } from "@chakra-ui/react";

interface PrimaryButtonProps {
  buttonText?: string;
  width?: string;
  bg?: ResponsiveValue<string>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  buttonText,
  width,
  bg = "#D87D4A",
}) => {
  return (
    <Button
      w={width || "160px"}
      h="48px"
      bgColor={bg}
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
