"use client"

import {
    Badge,
    Box,
    Card,
    CardBody,
    Container,
    Heading,
    HStack,
    Icon,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react"
import {
    FaBookOpen,
    FaCalendarAlt,
    FaFlask,
    FaFootballBall,
    FaMusic,
    FaPalette,
    FaTheaterMasks
} from "react-icons/fa"

const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    description:
      "A fun-filled day of games, races, and team spirit! Kids compete in various sports activities and everyone gets a medal.",
    image: "/placeholder.svg?height=200&width=300",
    icon: FaFootballBall,
    color: "blue",
    participants: "All Grades",
    highlight: "Everyone Wins!",
  },
  {
    id: 2,
    title: "Art & Craft Exhibition",
    description:
      "Showcasing our little artists' creativity! From finger paintings to clay sculptures, see amazing artwork by our students.",
    image: "/placeholder.svg?height=200&width=300",
    icon: FaPalette,
    color: "pink",
    participants: "K-5",
    highlight: "Creative Minds",
  },
  {
    id: 3,
    title: "Science Fair Extravaganza",
    description:
      "Young scientists present their experiments and discoveries. Volcanoes, robots, and amazing inventions everywhere!",
    image: "/placeholder.svg?height=200&width=300",
    icon: FaFlask,
    color: "orange",
    participants: "Grades 3-5",
    highlight: "Future Scientists",
  },
  {
    id: 4,
    title: "Musical Concert",
    description:
      "Our talented students perform songs, play instruments, and showcase their musical abilities in a heartwarming concert.",
    image: "/placeholder.svg?height=200&width=300",
    icon: FaMusic,
    color: "green",
    participants: "Music Club",
    highlight: "Melodious Voices",
  },
  {
    id: 5,
    title: "Drama & Theater Show",
    description:
      "Watch our little actors bring stories to life! From fairy tales to original plays, it's always entertaining.",
    image: "/placeholder.svg?height=200&width=300",
    icon: FaTheaterMasks,
    color: "red",
    participants: "Drama Club",
    highlight: "Star Performers",
  },
  {
    id: 6,
    title: "Reading Week Celebration",
    description:
      "A week dedicated to the love of books! Story sessions, book fairs, and reading competitions make learning fun.",
    image: "/placeholder.svg?height=200&width=300",
    icon: FaBookOpen,
    color: "purple",
    participants: "All Students",
    highlight: "Book Lovers",
  },
]

export default function SchoolEventsSection() {
  const bgGradient = useColorModeValue(
    "linear(45deg, blue.50 0%, purple.50 50%, pink.50 100%)",
    "linear(45deg, blue.900 0%, purple.900 50%, pink.900 100%)",
  )

  const cardBg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.700", "gray.200")
  const headingColor = useColorModeValue("purple.600", "purple.300")

  return (
    <Box bgGradient={bgGradient} py={16} position="relative" overflow="hidden">
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="5%"
        right="8%"
        w="80px"
        h="80px"
        borderRadius="full"
        bg="pink.200"
        opacity={0.2}
        animation="bounce 3s ease-in-out infinite"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="50px"
        h="50px"
        borderRadius="full"
        bg="blue.200"
        opacity={0.3}
        animation="bounce 4s ease-in-out infinite reverse"
      />
      <Box
        position="absolute"
        top="50%"
        left="3%"
        w="30px"
        h="30px"
        borderRadius="full"
        bg="purple.200"
        opacity={0.4}
        animation="bounce 2s ease-in-out infinite"
      />

      <Container maxW="7xl">
        <VStack spacing={12} align="center">
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="purple" px={4} py={2} borderRadius="full" fontSize="sm" fontWeight="bold">
              <Icon as={FaCalendarAlt} mr={2} />
              School Events
            </Badge>
            <Heading size="2xl" color={headingColor} fontFamily="'Comic Neue', cursive" textAlign="center">
              Fun Events & Activities! 🎉
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" textAlign="center">
              Throughout the year, we organize amazing events that make learning fun and create beautiful memories for
              our students. Here are some of our favorite celebrations!
            </Text>
          </VStack>

          {/* Events Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {events.map((event) => (
              <Card
                key={event.id}
                bg={cardBg}
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="2xl"
                border="4px solid"
                borderColor={`${event.color}.100`}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "3xl",
                  borderColor: `${event.color}.200`,
                }}
                position="relative"
              >
                {/* Event Image */}
                <Box position="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    height="200px"
                    width="100%"
                    objectFit="cover"
                    fallback={
                      <Box
                        height="200px"
                        bg={`${event.color}.50`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={event.icon} boxSize={16} color={`${event.color}.400`} />
                      </Box>
                    }
                  />
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                    bg={`${event.color}.500`}
                    color="white"
                    p={2}
                    borderRadius="full"
                    boxShadow="md"
                  >
                    <Icon as={event.icon} boxSize={4} />
                  </Box>
                  <Badge
                    position="absolute"
                    bottom={4}
                    left={4}
                    colorScheme={event.color}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    {event.highlight}
                  </Badge>
                </Box>

                <CardBody p={6}>
                  <VStack spacing={4} align="stretch">
                    <Heading size="md" color={headingColor} textAlign="center">
                      {event.title}
                    </Heading>

                    <Text color={textColor} fontSize="sm" textAlign="center" lineHeight="tall">
                      {event.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
          <Box
            bg={cardBg}
            p={8}
            textAlign="center"
            maxW="2xl"
          >
            <Text color={textColor} mb={6}>
              Every event is a new adventure waiting to happen! Your child will make friends, learn new skills, and
              create memories that last a lifetime.
            </Text>
            <HStack justify="center" spacing={4} flexWrap="wrap">
              <Badge colorScheme="purple" px={4} py={2} borderRadius="full">
                🎨 Creative Activities
              </Badge>
              <Badge colorScheme="blue" px={4} py={2} borderRadius="full">
                🏃‍♂️ Physical Fun
              </Badge>
              <Badge colorScheme="pink" px={4} py={2} borderRadius="full">
                🧠 Learning Adventures
              </Badge>
            </HStack>
          </Box>
        </VStack>
      </Container>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
      `}</style>
    </Box>
  )
}
