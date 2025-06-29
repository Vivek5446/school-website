// components/Header.tsx
"use client";

import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SchoolHeader = ({ sections }: { sections: Record<string, React.RefObject<HTMLElement>> }) => {
  const [active, setActive] = useState("");

  const scrollToSection = (section: string) => {
    const sectionRef = sections[section];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setActive(section);
    }
  };

  return (
    <Box
    bg={'gray.50'}
      py={4}
      px={8}
      position="sticky"
      top={0}
      zIndex={100}
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold" color="purple.800">
          🎒 Kids School
        </Text>
        <HStack spacing={6}>
          {Object.keys(sections).map((key) => (
            <Button
              key={key}
              variant="ghost"
              _hover={{ bg: "transparent" }}
              rounded={'full'}
              bg={active === key ? "blackAlpha.200" : "transparent"}
              colorScheme="blackAlpha"
              color={"black"}
              fontWeight={active === key ? "bold" : "normal"}
              onClick={() => scrollToSection(key)}
            >
              {key}
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default SchoolHeader;
