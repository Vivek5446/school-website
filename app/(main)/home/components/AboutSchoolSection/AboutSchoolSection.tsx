"use client"
import {
    Badge,
    Box,
    Container,
    Heading,
    HStack,
    Icon,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react"
import { FaHeart, FaStar } from "react-icons/fa"
import CommonHeading from "../../../../component/common/CommonHeading/CommonHeading"
import StatsGrid from "../../../../component/common/StatsComponent/StatsComponrnt"
import { features, statsData } from "../utile/constant"
export default function AboutSchool() {
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, purple.50, pink.50)",
    "linear(to-br, blue.900, purple.900, pink.900)",
  )
  const cardBg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.600", "gray.300")
  return (
    <Box bgGradient={bgGradient} py={20} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="60px"
        h="60px"
        borderRadius="full"
        bg="yellow.300"
        opacity={0.6}
        animation="float 6s ease-in-out infinite"
      />
      <Box
        position="absolute"
        top="16%"
        right="10%"
        w="50px"
        h="50px"
        borderRadius="full"
        bg="pink.200"
        opacity={0.6}
        animation="float 4s ease-in-out infinite reverse"
      />
      <Box
        position="absolute"
        bottom="15%"
        left="8%"
        w="50px"
        h="50px"
        borderRadius="full"
        bg="green.300"
        opacity={0.6}
        animation="float 5s ease-in-out infinite"
      />
      <Container maxW="7xl" position="relative">
        <VStack spacing={16} align="stretch">
          {/* Header Section */}
          <VStack spacing={6} textAlign="center">
            <CommonHeading mb={2}>
                About Our School
            </CommonHeading>
            <Text fontSize="xl" color={textColor} maxW="3xl" mx="auto" lineHeight="tall">
              Welcome to Sunshine Primary School, where every child&apos;s journey begins with joy, creativity, and endless
              possibilities. We believe in nurturing young minds through innovative teaching and a caring environment.
            </Text>
          </VStack>

          {/* Main Content Grid */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            {/* Left Content */}
            <VStack spacing={8} align="stretch">
              {/* School Description */}
              <Box
                bg={cardBg}
                p={8}
                borderRadius="2xl"
                shadow="xl"
                border="3px solid"
                borderColor="purple.200"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-3px",
                  left: "-3px",
                  right: "-3px",
                  bottom: "-3px",
                  borderRadius: "2xl",
                  background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
                  zIndex: -1,
                }}
              >
                <VStack spacing={6} align="start">
                  <Heading size="lg" color="purple.600">
                    Our Mission 🎯
                  </Heading>
                  <Text color={textColor} fontSize="lg" lineHeight="tall">
                    At Sunshine Primary School, we create a magical learning environment where children aged 5-11
                    discover their potential through play-based learning, creative expression, and academic excellence.
                    Our dedicated team of educators ensures every child feels valued, supported, and excited about
                    learning.
                  </Text>

                  {/* Features */}
                  <SimpleGrid columns={2} spacing={4} w="full">
                    {features.map((feature, index) => (
                      <HStack key={index} spacing={3}>
                        <Icon as={feature.icon} color={feature.color} boxSize={5} />
                        <Text fontSize="sm" fontWeight="medium" color={textColor}>
                          {feature.text}
                        </Text>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </VStack>

            {/* Right Content - Image */}
            <Box position="relative">
              <Box
                borderRadius="2xl"
                overflow="hidden"
                shadow="2xl"
                transform="rotate(2deg)"
                transition="all 0.3s"
                _hover={{
                  transform: "rotate(0deg) scale(1.02)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="Happy children learning at Sunshine Primary School"
                  w="full"
                  h="440px"
                  objectFit="cover"
                />
              </Box>

              {/* Floating Elements */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                bg="yellow.400"
                borderRadius="full"
                p={4}
                shadow="lg"
                animation="bounce 2s infinite"
              >
                <Icon as={FaStar} color="white" boxSize={6} />
              </Box>

              <Box
                position="absolute"
                bottom="-15px"
                left="-15px"
                bg="pink.400"
                borderRadius="full"
                p={3}
                shadow="lg"
                animation="pulse 2s infinite"
              >
                <Icon as={FaHeart} color="white" boxSize={5} />
              </Box>
            </Box>
          </SimpleGrid>
          
       <Box>
        <StatsGrid
          statsData={statsData}
          templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
          />
          </Box>

          {/* Call to Action */}
          <Box
            // bgGradient="linear(to-r ,purple.400 ,pink.400 ,blue.400)"
            borderRadius="2xl"
            p={8}
            textAlign="center"
            // color="white"
            shadow="xl"
          >
            <Heading size="lg" mb={4}>
              Ready to Join Our School Family? 🏫
            </Heading>
            <Text fontSize="lg" mb={6} opacity={0.9}>
              Come visit us and see why parents and children love Sunshine Primary School!
            </Text>
            <HStack justify="center" spacing={4} flexWrap="wrap">
              <Badge colorScheme="purple" px={4} py={2} borderRadius="full">
                📞 Call: (555) 123-4567
              </Badge>
              <Badge colorScheme="orange" px={4} py={2} borderRadius="full">
                📧 Email: info@sunshineprimary.edu
              </Badge>
            </HStack>
          </Box>
        </VStack>
      </Container>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </Box>
  )
}
