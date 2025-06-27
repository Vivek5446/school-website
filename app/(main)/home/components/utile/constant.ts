import { IoPeopleOutline } from "react-icons/io5";
import { FaBookOpen, FaChalkboardTeacher, FaHeart, FaPalette, FaPercentage, FaRocket, FaStar } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";

export const statsData = [
  { value: 500, label: "Happy Students", icon: IoPeopleOutline },
  { value: 10, label: "Expert Teachers", icon: FaChalkboardTeacher },
  { value: 15, label: "Years of Excellence", icon: PiMedalLight },
  // { value: 2000, label: "Assessments Taken" },
  { value: "95%", label: "Success Rate", icon: FaPercentage },
];

export const features = [
  { icon: FaHeart, text: "Nurturing Environment", color: "pink.400" },
  { icon: FaPalette, text: "Creative Learning", color: "teal.400" },
  { icon: FaBookOpen, text: "Modern Curriculum", color: "indigo.400" },
  { icon: FaStar, text: "Excellence in Education", color: "yellow.400" },
]

//hero section
export const floatingElements = [
  { icon: FaStar, color: "yellow.400", top: "10%", left: "5%", delay: "0s", size: 8 },
//   { icon: FaHeart, color: "pink.400", top: "70%", right: "4%", delay: "0.8s", size: 7 },
  { icon: FaRocket, color: "blue.400", bottom: "25%", left: "4%", delay: "1.5s", size: 9 },
  { icon: FaPalette, color: "purple.400", bottom: "15%", right: "10%", delay: "0.3s", size: 8 },
]

export const stats = [
  { value: "98%", label: "Parent Satisfaction" },
  { value: "25+", label: "Years Experience" },
  { value: "12:1", label: "Student-Teacher Ratio" },
]