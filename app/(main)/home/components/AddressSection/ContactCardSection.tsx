import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaBus,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaParking,
  FaPhone,
} from "react-icons/fa";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    bg: "purple.100",
    color: "purple.600",
    title: "Our Address",
    content: (
      <>
        123 Rainbow Street<br />
        Sunshine District<br />
        Happy City, HC 12345
      </>
    ),
    dividerColor: "pink.200",
  },
  {
    icon: FaPhone,
    bg: "blue.100",
    color: "blue.600",
    title: "Call Us",
    content: "(555) 123-KIDS (5437)",
    dividerColor: "purple.200",
  },
  {
    icon: FaEnvelope,
    bg: "pink.100",
    color: "pink.600",
    title: "Email Us",
    content: "hello@skidsschool.edu",
    dividerColor: "blue.200",
  },
  {
    icon: FaClock,
    bg: "orange.100",
    color: "orange.600",
    title: "School Hours",
    content: (
      <>
        Monday - Friday: 8:00 AM - 3:30 PM<br />
        After Care: 3:30 PM - 6:00 PM
      </>
    ),
    dividerColor: null, // last item
  },
];

const infoCards = [
  {
    icon: FaBus,
    title: "Bus Service",
    description: "Safe & Fun Rides Available",
    color: "pink.500",
    borderColor: "pink.100",
  },
  {
    icon: FaParking,
    title: "Parking",
    description: "Free Parent Parking",
    color: "blue.500",
    borderColor: "blue.100",
  },
];

const ContactCardSection = ({ cardBg = "white", headingColor = "gray.800", textColor = "gray.600" }) => {
  return (
    <VStack spacing={4} align="stretch">
      <Box bg={cardBg} py={6} px={8} borderRadius="3xl" boxShadow="lg" border="2px solid" borderColor="blue.100">
        <VStack spacing={4} align="stretch">
          <Heading size="lg" color={headingColor} textAlign="center">
            Get In Touch! 💌
          </Heading>

          {contactItems.map((item, index) => (
            <Box key={index}>
              <HStack spacing={4} align="flex-start">
                <Box bg={item.bg} p={3} borderRadius="full" color={item.color}>
                  <Icon as={item.icon} boxSize={5} />
                </Box>
                <VStack align="flex-start" spacing={0}>
                  <Text fontWeight="bold" color={headingColor}>
                    {item.title}
                  </Text>
                  <Text color={textColor}>{item.content}</Text>
                </VStack>
              </HStack>
              {item.dividerColor && <Divider mt={2} borderColor={item.dividerColor} />}
            </Box>
          ))}
        </VStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {infoCards.map((card, idx) => (
          <Box
            key={idx}
            bg={cardBg}
            p={4}
            borderRadius="2xl"
            boxShadow="lg"
            border="2px solid"
            borderColor={card.borderColor}
            textAlign="center"
          >
            <Icon as={card.icon} boxSize={8} color={card.color} mb={1} />
            <Text fontWeight="bold" color={headingColor} mb={1}>
              {card.title}
            </Text>
            <Text fontSize="sm" color={textColor}>
              {card.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ContactCardSection;
