// pages/Home.tsx
"use client";

import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import GallerySection from "../school/component/GallerySection/GallerySection";
import AboutSchool from "./components/AboutSchoolSection/AboutSchoolSection";
import MapAddressSection from "./components/AddressSection/AddressSection";
import SchoolAdmissionSection from "./components/AdmissionSection/AdmissionSection";
import MeetOurPrincipal from "./components/PrincipalSection/PrincipalSection";
import SchoolEventsSection from "./components/SchoolEvents/SchoolEvents";
import SchoolHeroSection from "./components/SchoolHeroSection/SchoolHeroSection";
import MeetOurTeachers from "./components/TeachersSection/TeachersSection";
import { galleryImages } from "./components/utile/constant";
import SchoolHeader from "./components/ScrollHeader/ScrollHeader";
import SchoolFooter from "./components/SchoolFooter/SchoolFooter";

const Home = observer(() => {
  const sections :any= {
    Home: useRef<HTMLElement>(null),
    About: useRef<HTMLElement>(null),
    Principal: useRef<HTMLElement>(null),
    Teachers: useRef<HTMLElement>(null),
    Events: useRef<HTMLElement>(null),
    Gallery: useRef<HTMLElement>(null),
    Admission: useRef<HTMLElement>(null),
    Contact: useRef<HTMLElement>(null),
  };

  return (
    <Box>
      <SchoolHeader sections={sections} />
      <Box ref={sections.Home}><SchoolHeroSection /></Box>
      <Box ref={sections.About}><AboutSchool /></Box>
      <Box pt={12} ref={sections.Principal}><MeetOurPrincipal /></Box>
      <Box pt={12} ref={sections.Teachers}><MeetOurTeachers /></Box>
      <Box pt={12} ref={sections.Events}><SchoolEventsSection /></Box>
      <Box pt={12} ref={sections.Gallery}><GallerySection images={galleryImages} /></Box>
      <Box pt={12} ref={sections.Admission}><SchoolAdmissionSection /></Box>
      <Box  ref={sections.Contact}><MapAddressSection /></Box>
      <SchoolFooter/>
    </Box>
  );
});

export default Home;
