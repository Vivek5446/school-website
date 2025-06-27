"use client"

import {
    Badge,
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react"
import { BiBookOpen, BiCalendar } from "react-icons/bi"
// import { Calendar, BookOpen } from "lucide-react"

const SchoolAdmissionSection = () => {
  return (
    <Box py={16} bgGradient="linear(to-r, blue.50, purple.50)">
      <Container maxW="container.lg">
        <Box maxW="5xl" mx="auto">
          <VStack spacing={4} textAlign="center" mb={8}>
            <Heading fontSize="4xl" fontWeight="bold" color="gray.800">
              🎓 Join Our School Family
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Start your child's amazing educational journey with us!
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {/* Admission Process Card */}
            <Box
              bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
              borderRadius="2xl"
              p={6}
              boxShadow="lg"
              backdropFilter="blur(10px)"
            >
              <Flex align="center" mb={4}>
                <Icon as={BiCalendar} boxSize={6} color="blue.600" mr={2} />
                <Heading fontSize="2xl" color="gray.800">
                  Admission Process
                </Heading>
              </Flex>
              <Stack spacing={3} color="gray.700">
                {[
                  "Application Form Submission",
                  "Document Verification",
                  "Interaction with Child & Parents",
                  "Admission Confirmation",
                ].map((step, idx) => (
                  <Flex key={idx} align="center">
                    <Box w={2} h={2} bg="blue.500" borderRadius="full" mr={3} />
                    <Text fontSize={'lg'}>{step}</Text>
                  </Flex>
                ))}
              </Stack>
            </Box>

            {/* Important Dates Card */}
            <Box
              bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
              borderRadius="2xl"
              p={6}
              boxShadow="lg"
              backdropFilter="blur(10px)"
            >
              <Flex align="center" mb={4}>
                <Icon as={BiBookOpen} boxSize={6} color="purple.600" mr={2} />
                <Heading fontSize="2xl" color="gray.800">
                  Important Dates
                </Heading>
              </Flex>
              <Stack spacing={4}>
                {[
                  { label: "Registration Opens", date: "January 15" },
                  { label: "Last Date to Apply", date: "March 30" },
                  { label: "Admission Results", date: "April 15" },
                  { label: "Session Starts", date: "June 1" },
                ].map((item, idx) => (
                  <Flex key={idx} justify="space-between" align="center">
                    <Text fontSize={'lg'} color="gray.700">{item.label}</Text>
                    <Badge colorScheme="purple" variant="subtle" fontSize={"sm"} px={2} rounded={'sm'}>
                      {item.date}
                    </Badge>
                  </Flex>
                ))}
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default SchoolAdmissionSection
