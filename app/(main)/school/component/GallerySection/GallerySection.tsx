import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export default function GallerySection({ images }: { images: { src: string; caption?: string }[] }) {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const { colorMode } = useColorMode();
  const sliderRef = useRef<Slider>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(-1);

  const slidesToShow = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  const rows = useBreakpointValue({ base: 1, md: 2 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    rows: rows,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 1,
          centerMode: false,
        },
      },
    ],
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "Escape") {
        closeModal();
      }
    };
    

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, goToNext, goToPrevious]);

  return (
    <Box id="gallery" py={10} bg={bg} px={{ base: 2, md: 4 }}>
      <Container maxW="80%">
        <Stack spacing={1} textAlign="center" mb={6}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="extrabold"
            bgGradient={colorMode === "light" 
              ? "linear(to-r, blue.400, purple.600)"
              : "linear(to-r, purple.200, pink.300)"}
            bgClip="text"
          >
            Our School Moments
          </Heading>
          <Text fontSize="lg" color={"gray.500"} fontWeight={500}>
            Scroll through our gallery to relive the memories
          </Text>
        </Stack>

        <Box position="relative">
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <Box 
                key={index} 
                p={2} 
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  rounded="xl"
                  shadow="md"
                  transition="all 0.3s"
                  transform={isHovered === index ? "scale(1.03)" : "scale(1)"}
                  _hover={{
                    shadow: "lg",
                    cursor: "pointer"
                  }}
                  bg={cardBg}
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={image.src}
                      objectFit="cover"
                      alt={`Gallery image ${index + 1}`}
                      onClick={() => openModal(index)}
                      loading="lazy"
                      opacity={isHovered === index ? 0.9 : 1}
                      transition="opacity 0.3s"
                    />
                  </AspectRatio>
                  {image.caption && (
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                      p={3}
                      color="white"
                      fontSize="sm"
                      textAlign="center"
                      opacity={isHovered === index ? 1 : 0}
                      transition="opacity 0.3s"
                    >
                      <Text noOfLines={1}>{image.caption}</Text>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Slider>

          <IconButton
            aria-label="Previous"
            icon={<ArrowBackIcon />}
            onClick={() => sliderRef.current?.slickPrev()}
            position="absolute"
            left={{ base: -2, md: -8 }}
            bg={"blackAlpha.500"}
            _hover={{ bg: "blackAlpha.700" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            rounded="full"
            variant="solid"
          />
          <IconButton
            aria-label="Next"
            icon={<ArrowForwardIcon />}
            onClick={() => sliderRef.current?.slickNext()}
            position="absolute"
            right={{ base: -2, md: -8 }}
            top="50%"
            _hover={{ bg: "blackAlpha.700" }}
            transform="translateY(-50%)"
            bg={"blackAlpha.500"}
            zIndex={1}
            rounded="full"
            variant="solid"
            />
        </Box>

        <Modal isOpen={isOpen} onClose={closeModal} size="4xl" isCentered>
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent 
            bg="transparent"
            boxShadow="none"
            maxH="90vh"
            animation={`${fadeIn} 0.3s ease-out`}
          >
            <Flex position="relative" height="100%" align="center">
              <ModalCloseButton 
                position="absolute" 
                right={2} 
                top={2} 
                color="white" 
                bg="blackAlpha.600"
                _hover={{ bg: "blackAlpha.700" }}
                zIndex={2}
              />
              <IconButton
                aria-label="Previous Image"
                icon={<ArrowBackIcon />}
                onClick={goToPrevious}
                position="absolute"
                left={2}
                variant="ghost"
                isRound
                color="white"
                bg="blackAlpha.600"
                _hover={{ bg: "blackAlpha.700" }}
                size="lg"
                zIndex={2}
              />
              <ModalBody
                p={0}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={images[currentImageIndex].src}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  maxW="100%"
                  maxH="80vh"
                  objectFit="contain"
                  rounded="lg"
                  shadow="xl"
                />
              </ModalBody>
              <IconButton
                aria-label="Next Image"
                icon={<ArrowForwardIcon />}
                onClick={goToNext}
                position="absolute"
                right={2}
                variant="ghost"
                isRound
                color="white"
                bg="blackAlpha.600"
                _hover={{ bg: "blackAlpha.700" }}
                size="lg"
                zIndex={2}
              />
              {images[currentImageIndex].caption && (
                <Box
                  position="absolute"
                  bottom={4}
                  left={0}
                  right={0}
                  transition={"all 0.3s"}
                  textAlign="center"
                  px={4}
                >
                  <Text
                    display="inline-block"
                    bg="blackAlpha.700"
                    color="white"
                    px={4}
                    py={2}
                    rounded="full"
                    fontSize="sm"
                    maxW="80%"
                    mx="auto"
                    noOfLines={2}
                  >
                    {images[currentImageIndex].caption}
                  </Text>
                </Box>
              )}
              <Box
                position="absolute"
                bottom={4}
                right={4}
                bg="blackAlpha.700"
                color="white"
                px={2}
                py={1}
                rounded="md"
                fontSize="xs"
              >
                {currentImageIndex + 1} / {images.length}
              </Box>
            </Flex>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}