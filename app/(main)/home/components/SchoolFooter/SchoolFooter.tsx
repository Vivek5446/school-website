// components/Footer.tsx
"use client";

import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const SchoolFooter = () => {
  return (
    <Box
      bgGradient="linear(to-r, purple.100, pink.50, blue.50,purple.100)"
      color="gray.700"
      py={10}
      px={6}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        maxW="6xl"
        mx="auto"
        gap={10}
      >
        {/* Logo + About */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="2xl" fontWeight="bold" color="purple.700">
            🎒 Kids School
          </Text>
          <Text fontSize="sm">
            A place where learning is fun and imagination takes flight!
          </Text>
        </VStack>

        {/* Quick Links */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">Quick Links</Text>
          <Link href="#About">About Us</Link>
          <Link href="#Admission">Admissions</Link>
          <Link href="#Gallery">Gallery</Link>
          <Link href="#Contact">Contact</Link>
        </VStack>

        {/* Contact Info */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">Contact Us</Text>
          <HStack>
            <Icon as={FaPhone} />
            <Text>+91 98765 43210</Text>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} />
            <Text>info@kidsschool.com</Text>
          </HStack>
          <HStack spacing={4} mt={2}>
            <Link href="#"><Icon as={FaFacebook} boxSize={5} color="blue.600" /></Link>
            <Link href="#"><Icon as={FaInstagram} boxSize={5} color="pink.500" /></Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Bottom Line */}
      <Text mt={10} textAlign="center" fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} Kids School. All rights reserved.
      </Text>
    </Box>
  );
};

export default SchoolFooter;
