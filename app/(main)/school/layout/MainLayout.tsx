import { Spinner, useColorModeValue, useMediaQuery, useTheme } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const SchoolLayout = observer(() => {
  const theme = useTheme();
  const location = useLocation();
  const [sizeStatus] = useMediaQuery(`(max-width: ${theme.breakpoints.xl})`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      style={{
        backgroundColor: useColorModeValue("#ffffff", "#1A202C"),
      }}
    >
      <ContentContainer sizeStatus={sizeStatus}>
        <Suspense fallback={<Spinner h="90vh" />}>
          <Outlet />
        </Suspense>
      </ContentContainer>
    </div>
  );
});

const ContentContainer = styled.div<{ sizeStatus: boolean }>`
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;
  &.fullscreen {
    width: 100vw;
    transition: width 0.3s ease-in-out;
  }
`;

export default SchoolLayout;