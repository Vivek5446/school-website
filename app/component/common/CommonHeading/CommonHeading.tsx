import { Box, Divider, Heading, useColorMode } from "@chakra-ui/react";

const CommonHeading = ({ children, headingProps, dividerProps, containerProps ,mb=10}:any) => {
    const { colorMode } = useColorMode();
  
  return (
    <Box textAlign="center" mb={mb} {...containerProps}>
      <Heading as="h2" size="2xl" fontWeight="bold" color="gray.800" mb={4} {...headingProps}
        bgGradient={colorMode === "light" 
              ? "linear(to-r, blue.400, purple.400,purple.600)"
              : "linear(to-r, purple.200, pink.300)"}
            bgClip="text"
      >
        {children}
      </Heading>
      <Divider
        width="24"
        height="1"
        borderRadius="full"
        bgGradient="linear(to-r, blue.500, purple.600)"
        mx="auto"
        {...dividerProps}
      />
    </Box>
  );
};

export default CommonHeading;