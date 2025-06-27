import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Grid,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";
import CommonHeading from "../../../../component/common/CommonHeading/CommonHeading";
// import { Users } from 'react-feather';

const teachers = [
  {
    name: "Ms. Alice Johnson",
    subject: "Mathematics",
    experience: "5 years",
  },
  {
    name: "Mr. Brian Lee",
    subject: "Science",
    experience: "8 years",
  },
  {
    name: "Ms. Clara Davis",
    subject: "English",
    experience: "4 years",
  },
  {
    name: "Mr. David Kim",
    subject: "History",
    experience: "6 years",
  },
];

const MeetOurTeachers = () => {
  return (
    <Box py={16} position={'relative'}>
       {/* <AnimatedBox
        top="20%"
        left="4%"
        width="60px"
        height="60px"
        backgroundColor="red.100"
        animationName="bounce"
      /> */}
      <Container maxW="container.xl" px={4}>
        <CommonHeading mb={4}>Our Amazing Teachers</CommonHeading>
        <Text fontSize="lg" color="gray.600" textAlign={"center"} mb={8}>
          Dedicated educators who make learning magical every day!
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          {teachers.map((teacher, index) => (
            <Box
              key={index}
              borderWidth={1}
              backdropFilter="blur(4px)"
              boxShadow="lg"
              borderRadius="2xl"
              p={3}
              transition="all 0.3s"
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-5px)",
              }}
            >
              <Card shadow={"none"}>
                <CardHeader textAlign="center" pb={2}>
                  <Flex justifyContent="center" mb={4}>
                    <Box
                      w={"5rem"}
                      h={"5rem"}
                      bgGradient="linear(to-r, blue.300, purple.500)"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <FaUsers size={40} color="white" />
                    </Box>
                  </Flex>
                  <Heading as="h3" size="md" color="gray.800" mb={2}>
                    {teacher.name}
                  </Heading>
                  <Text fontWeight="semibold" color="purple.600">
                    {teacher.subject}
                  </Text>
                </CardHeader>
                <CardBody textAlign="center">
                  <Tag
                    colorScheme="purple"
                    fontSize="sm"
                    rounded={"full"}
                    px={3}
                  >
                    {teacher.experience}
                  </Tag>
                </CardBody>
              </Card>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetOurTeachers;
