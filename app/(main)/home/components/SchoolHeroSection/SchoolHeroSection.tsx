"use client"
import {
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react"
import { FaHeart, FaStar } from "react-icons/fa"
import { floatingElements, stats } from "../utile/constant"

export default function SchoolHeroSection() {
  const textColor = useColorModeValue("gray.800", "white")
  const accentColor = useColorModeValue("blue.500", "blue.300")
   const bgGradient = useColorModeValue(
    "linear(to-r, blue.50, purple.50, pink.50)",
    "linear(to-br, blue.900, purple.900, pink.900)",
  )
  return (
    <Box 
      minH="90vh" 
      bgGradient={bgGradient}
      position="relative" 
      overflow="hidden" 
      display="flex" 
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
    >
      {/* Animated Background Elements */}
      {floatingElements.map((element, index) => (
        <Box
          key={index}
          position="absolute"
          {...(element.top && { top: element.top })}
          {...(element.bottom && { bottom: element.bottom })}
          {...(element.left && { left: element.left })}
          {...(element.right && { right: element.right })}
          animation={`float 8s ease-in-out infinite ${element.delay}`}
          opacity={0.8}
          zIndex={1}
        >
          <Box 
            bg={element.color} 
            borderRadius="full" 
            p={3} 
            shadow="md" 
            transform="rotate(15deg)"
            transition="all 0.3s"
            _hover={{
              transform: "scale(1.2) rotate(0deg)",
              opacity: 1
            }}
          >
            <Icon as={element.icon} color="white" boxSize={element.size} />
          </Box>
        </Box>
      ))}

      {/* Decorative Shapes */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        w="150px"
        h="150px"
        borderRadius="full"
        bg="blue.100"
        filter="blur(40px)"
        opacity={0.6}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="yellow.100"
        filter="blur(40px)"
        opacity={0.4}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="pink.100"
        filter="blur(60px)"
        opacity={0.3}
      />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center" py={12}>
          {/* Left Content */}
          <VStack spacing={8} align="start" textAlign={{ base: "center", lg: "left" }}>
            {/* Welcome Badge */}
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              fontSize="md"
              fontWeight="bold"
              bg="white"
              color="blue.500"
              boxShadow="sm"
              border="1px solid"
              borderColor="blue.100"
            >
              🎉 Welcome to Sunshine Primary
            </Badge>

            {/* Main Heading */}
            <VStack spacing={2} align={{ base: "center", lg: "start" }}>
              <Heading
                as="h1"
                fontSize="56px"
                color={textColor}
                fontWeight="extrabold"
                lineHeight="shorter"
                >
                Where Every Child
              </Heading>
              <Heading
                as="h1"
                // size="3xl"
                fontSize="56px"
                bgGradient="linear(to-r, blue.400, purple.400, pink.400)"
                bgClip="text"
                fontWeight="extrabold"
                lineHeight="shorter"
              >
                Discovers Their Light ✨
              </Heading>
            </VStack>

            {/* Description */}
            <Text
              fontSize="lg"
              color="gray.600"
              maxW="500px"
              lineHeight="tall"
            >
              Our vibrant learning community combines creativity with education to nurture curious minds through play-based learning, innovative teaching, and joyful exploration.
            </Text>

            {/* Stats */}
            <Flex 
              gap={4} 
              flexWrap="wrap" 
              justify={{ base: "center", lg: "start" }}
              w="full"
            >
              {stats.map((stat, index) => (
                <Box 
                  key={index}
                  bg="white"
                  p={3}
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.100"
                  textAlign="center"
                  minW="100px"
                >
                  <Text fontSize="2xl" fontWeight="bold" color={accentColor}>
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Flex>

          
          </VStack>

          {/* Right Content - Image */}
          <Box position="relative" display={{ base: "none", lg: "block" }}>
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="xl"
              transform="rotate(-1deg)"
              transition="all 0.3s"
              _hover={{
                transform: "rotate(0deg)",
                boxShadow: "2xl"
              }}
              border="8px solid white"
            >
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Happy children learning at Sunshine Primary School"
                w="full"
                h="500px"
                objectFit="cover"
              />
            </Box>

            {/* Floating Card 1 */}
            <Box
              position="absolute"
              top="-20px"
              right="-40px"
              bg="white"
              p={4}
              borderRadius="xl"
              boxShadow="xl"
              animation="float 4s ease-in-out infinite"
              border="2px solid"
              borderColor="yellow.200"
              zIndex={2}
            >
              <VStack spacing={1}>
                <Icon as={FaStar} color="yellow.400" boxSize={5} />
                <Text fontSize="xs" fontWeight="bold" color="gray.700" textAlign="center">
                  Excellence in<br/>Education
                </Text>
              </VStack>
            </Box>
            {/* Floating Card 2 */}
            <Box
              position="absolute"
              bottom="-20px"
              left="-40px"
              bg="white"
              p={4}
              borderRadius="xl"
              boxShadow="xl"
              animation="float 5s ease-in-out infinite 1s"
              border="2px solid"
              borderColor="blue.200"
              zIndex={2}
            >
              <VStack spacing={1}>
                <Icon as={FaHeart} color="pink.400" boxSize={5} />
                <Text fontSize="xs" fontWeight="bold" color="gray.700" textAlign="center">
                  Nurturing<br/>Environment
                </Text>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>

        {/* Mobile Hero Image */}
        <Box display={{ base: "block", lg: "none" }} mt={8}>
          <Box 
            borderRadius="xl" 
            overflow="hidden" 
            boxShadow="lg" 
            mx="auto" 
            maxW="400px"
            border="6px solid white"
          >
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Happy children at Sunshine Primary School"
              w="full"
              h="300px"
              objectFit="cover"
            />
            <Box p={4} bg="white">
              <Text fontWeight="bold" color="gray.800" mb={2}>
                Now Accepting Applications
              </Text>
              <Button colorScheme="blue" size="sm" w="full">
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </Box>
  )
}