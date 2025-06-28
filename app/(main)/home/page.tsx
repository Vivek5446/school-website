"use client";
import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import GallerySection from "../school/component/GallerySection/GallerySection";
import AboutSchool from "./components/AboutSchoolSection/AboutSchoolSection";
import MapAddressSection from "./components/AddressSection/AddressSection";
import SchoolAdmissionSection from "./components/AdmissionSection/AdmissionSection";
import MeetOurPrincipal from "./components/PrincipalSection/PrincipalSection";
import SchoolHeroSection from "./components/SchoolHeroSection/SchoolHeroSection";
import MeetOurTeachers from "./components/TeachersSection/TeachersSection";
import SchoolEventsSection from "./components/SchoolEvents/SchoolEvents";


const images = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { src: "https://img.freepik.com/free-photo/many-hands-volunteers-maths-class_329181-14217.jpg?t=st=1750953538~exp=1750957138~hmac=2864e261f65fe232d88d7c8cd95272107875b19cc961bdb302b7170708018968&w=1380" },
  { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { src: "https://img.freepik.com/free-photo/many-hands-volunteers-maths-class_329181-14217.jpg?t=st=1750953538~exp=1750957138~hmac=2864e261f65fe232d88d7c8cd95272107875b19cc961bdb302b7170708018968&w=1380" },
  { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" },
  { src: "https://img.freepik.com/free-photo/many-hands-volunteers-maths-class_329181-14217.jpg?t=st=1750953538~exp=1750957138~hmac=2864e261f65fe232d88d7c8cd95272107875b19cc961bdb302b7170708018968&w=1380" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { src: "https://img.freepik.com/free-photo/many-hands-volunteers-maths-class_329181-14217.jpg?t=st=1750953538~exp=1750957138~hmac=2864e261f65fe232d88d7c8cd95272107875b19cc961bdb302b7170708018968&w=1380" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { src: "https://img.freepik.com/free-photo/many-hands-volunteers-maths-class_329181-14217.jpg?t=st=1750953538~exp=1750957138~hmac=2864e261f65fe232d88d7c8cd95272107875b19cc961bdb302b7170708018968&w=1380" },
  { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" },
  { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" },
  { src: "https://img.freepik.com/free-photo/many-hands-volunteers-maths-class_329181-14217.jpg?t=st=1750953538~exp=1750957138~hmac=2864e261f65fe232d88d7c8cd95272107875b19cc961bdb302b7170708018968&w=1380" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  
  { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" },
];

const Home = observer(() => {
  return (
    <Box>
      <SchoolHeroSection/>
      <AboutSchool/>
      <MeetOurPrincipal />
      <MeetOurTeachers />
      <SchoolEventsSection/>
      <GallerySection images={images}   />
      <SchoolAdmissionSection/>
      <MapAddressSection/>
    </Box>
  );
});

export default Home;
