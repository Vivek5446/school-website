"use client"

import {
    Badge,
    Box,
    Container,
    Heading,
    Icon,
    SimpleGrid,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react"
import { FaMapMarkerAlt } from "react-icons/fa"
import ContactCardSection from "./ContactCardSection"
import CommonHeading from "../../../../component/common/CommonHeading/CommonHeading"

export default function MapAddressSection() {
  const bgGradient = useColorModeValue(
    "linear(135deg, purple.50 0%, blue.50 50%, pink.50 100%)",
    "linear(135deg, purple.900 0%, blue.900 50%, pink.900 100%)",
  )

  const cardBg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.700", "gray.200")
  const headingColor = useColorModeValue("purple.600", "purple.300")

  return (
    <Box bgGradient={bgGradient} py={16} position="relative" overflow="hidden">
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="60px"
        h="60px"
        borderRadius="full"
        bg="pink.200"
        opacity={0.3}
        animation="float 6s ease-in-out infinite"
      />
      <Box
        position="absolute"
        top="70%"
        right="10%"
        w="40px"
        h="40px"
        borderRadius="full"
        bg="blue.200"
        opacity={0.4}
        animation="float 4s ease-in-out infinite reverse"
      />
      <Box
        position="absolute"
        top="30%"
        right="20%"
        w="20px"
        h="20px"
        borderRadius="full"
        bg="purple.200"
        opacity={0.5}
        animation="float 5s ease-in-out infinite"
      />

      <Container maxW="7xl">
        <VStack spacing={12} align="center">
          {/* Header */}
          <VStack spacing={4} textAlign="center">
          
            <CommonHeading mb={0}>
                Find Us!
            </CommonHeading>
            {/* <Heading size="2xl" color={headingColor} fontFamily="'Comic Neue', cursive" textAlign="center">
              Visit Our Happy Place! 🏫
            </Heading> */}
            <Text fontSize="lg" color={textColor} maxW="2xl" textAlign="center">
              Come and see where the magic of learning happens every day. We'd love to welcome you to our colorful
              world!
            </Text>
          </VStack>

          {/* Main Content */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} w="full">
            {/* Map Section */}
            <Box
              bg={cardBg}
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="xl"
            //   border="1px solid"
            //   borderColor="purple.100"
              position="relative"
            >
              <Box
                as="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15396.325442331512!2d74.11066885!3d15.2633583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfac640716fa21%3A0xd6c71842c4d2e614!2sRavindra%20Bhavan%20Curchorem!5e0!3m2!1sen!2sin!4v1751051194788!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>

            {/* Contact Information */}
          <ContactCardSection/>
          </SimpleGrid>
        </VStack>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  )
}
