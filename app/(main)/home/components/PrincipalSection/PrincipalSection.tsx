import {
    Box,
    Container,
    Divider,
    Flex,
    Grid,
    Heading,
    Icon,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { BiAward, BiBookOpen } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import CommonHeading from '../../../../component/common/CommonHeading/CommonHeading';

const MeetOurPrincipal = () => {
  return (
    <Box as="section" id="about" py={16} px={4} bg="white">
      <Container maxW="6xl" mx="auto">
        <Box maxW="6xl" mx="auto">
          {/* Header Section */}
          
            <CommonHeading>
Meet Our Principal
            </CommonHeading>
       

          {/* Content Grid */}
          <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gap={12}
            alignItems="center"
          >
            {/* Image Section */}
            <Box textAlign="center" >
              <Image
                src="https://img.freepik.com/premium-vector/online-certification-landing-page-illustration_939213-2061.jpg?uid=R98118533&ga=GA1.1.1625681573.1739726311&semt=ais_hybrid&w=740"
                alt="Principal Dr. Maria Rodriguez"
                width="420px"
                borderRadius="2xl"
                boxShadow="lg"
                mx={{ base: 'auto', md: '0' }}
                mb={6}
              />
            </Box>

            {/* Text Content */}
            <Box>
              <Heading as="h3" size="xl" fontWeight="bold" color="gray.800" mb={2}>
                Dr. Maria Rodriguez
              </Heading>
              <Text fontSize="lg" color="brand.500" mb={4} fontWeight="semibold">
                Principal & Educational Leader
              </Text>
              <Text color="gray.600" mb={6} lineHeight="1.5" fontSize={'lg'}>
                With over 20 years of experience in education, Dr. Rodriguez brings passion, innovation, and
                dedication to Sunshine Elementary. She believes every child has unique talents waiting to be
                discovered and nurtured.
              </Text>
              {/* Details with icons */}
              <VStack spacing={3} align="start">
                <Flex align="center">
                  <Icon as={FaGraduationCap} w={5} h={5} color="blue.500" mr={3} />
                  <Text color="gray.700">
                    Ph.D. in Educational Leadership - Harvard University
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon as={BiAward} w={5} h={5} color="blue.500" mr={3} />
                  <Text color="gray.700">National Excellence in Education Award 2023</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={BiBookOpen} w={5} h={5} color="blue.500" mr={3} />
                  <Text color="gray.700">Author of "Nurturing Young Minds" (2022)</Text>
                </Flex>
              </VStack>

              {/* Quote Block */}
              <Box
                mt={4}
                p={4}
                bg="brand.100"
                borderRadius="lg"
                borderLeft="4px"
                borderColor="brand.500"
              >
                <Text as="blockquote" fontStyle="italic" color="gray.700">
                  "Every child is a unique star waiting to shine. Our role is to provide the perfect environment
                  for them to discover their light and share it with the world."
                </Text>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MeetOurPrincipal;