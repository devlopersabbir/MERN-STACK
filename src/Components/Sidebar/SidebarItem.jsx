import { Flex, Icon, Text } from "@chakra-ui/react";

const SidebarItem = ({ iconColor, text, icon }) => {
  return (
    <Flex
      align="center"
      gap={2}
      p={2}
      width="100%"
      borderRadius={4}
      cursor="pointer"
      transition="all .3s"
      _hover={{
        bg: "#EBF5FB",
      }}
    >
      <Icon as={icon} fontSize="2xl" fontWeight={600} color={iconColor} />
      <Text
        fontWeight={500}
        display={{
          base: "none",
          md: "unset",
        }}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default SidebarItem;
