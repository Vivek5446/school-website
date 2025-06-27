import { Center, Spinner } from "@chakra-ui/react";
import { Suspense, lazy, useMemo, useState } from "react";
import AboutForm from "./component/AboutForm/AboutForm";
// import Loader from "../../../../../config/component/Loader/Loader";

const loadComponent = (key : any) => {
  switch (key) {
    case "about1":
      return lazy(() => import("./component/About1/About1"));
    case "about2":
      return lazy(() => import("./component/About2/About2"));
    default:
      return lazy(() => import("./component/About1/About1"));
  }
};

const AboutSection = ({
  content,
  setContent,
  webColor,
  selectedLayout,
  isEditable = false,
} : any) => {
  const [openModal, setOpenModal] = useState(false);

  const Component = useMemo(() => loadComponent(selectedLayout?.key), [selectedLayout?.key]);

  return (
    <>
      <Suspense fallback={<Center><Spinner height="10vh" width="10vh" /> </Center>}>
        <Component
          isOpen={openModal}
          onOpen={() => setOpenModal(true)}
          onClose={() => setOpenModal(false)}
          content={content}
          setContent={setContent}
          webColor={webColor}
          isEditable={isEditable}
        />
      </Suspense>
      {openModal && (
        <AboutForm
          content={content}
          setContent={setContent}
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default AboutSection;
