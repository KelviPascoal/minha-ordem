import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="blue"
        disabled
        _disabled={{
          bgColor: "blue.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{ bgColor: "gray.600" }}
    >
      {number}
    </Button>
  );
}
