import {
  Box,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
    });

    return controls.stop;
  }, [value, duration]);

  return <motion.span>{displayValue}</motion.span>;
};

interface Stat {
  value: number | string;
  label: string;
  icon?: React.ElementType; // optional icon component
}

interface StatsGridProps {
  statsData: Stat[];
  templateColumns?: { base?: string; md?: string; lg?: string };
  fontSize?: { base?: string; md?: string; lg?: string };
  labelFontSize?: { base?: string; lg?: string };
  gap?: { base?: string; lg?: string };
  statColor?: string;
  borderColor?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  statsData,
  templateColumns = { base: "1fr 1fr", md: "repeat(5, 1fr)" },
  fontSize = { base: "2rem", md: "2.4rem", lg: "3rem" },
  labelFontSize = { base: "xs", lg: "lg" },
  gap = { base: 8, md: 8, lg: 4 },
  statColor = "purple.600",
  borderColor = { base: "transparent", md: "gray.300" },
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Grid
      ref={ref}
      templateColumns={templateColumns}
      mt={{ base: 8, lg: 14 }}
      gap={gap}
      position="relative"
    >
      {statsData.map((stat, index) => (
        <React.Fragment key={index}>
          <GridItem
            colSpan={{ base: index === statsData.length - 1 ? 2 : 1, md: 1 }}
            justifySelf={{
              base: index === statsData.length - 1 ? "center" : "unset",
              md: "unset",
            }}
            borderRight={{
              base: index === 0 ? "1px solid" : "none",
              md: "none",
            }}
            pr={{ base: index === 0 ? 6 : 0, md: 0 }}
            borderColor={borderColor}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              {stat.icon && (
                <Box mb={4} ml={-2} p={4} rounded={"full"} bg={"purple.100"}>
                  <Icon boxSize="2.5rem" as={stat.icon} color={statColor} />
                </Box>
              )}
              <Text
                fontSize={fontSize}
                fontWeight="semibold" // Make numbers semi-bold
                lineHeight="3rem"
              >
                {inView && typeof stat.value === "number" ? (
                  <>
                    <AnimatedNumber value={stat.value} />
                    {stat.label !== "Licensed Professionals" ? "+" : ""}
                  </>
                ) : (
                  stat.value
                )}
              </Text>
              <Text color="#0F0F0F" fontSize={labelFontSize} mt={1} ml={-2}>
                {stat.label}
              </Text>
            </Box>
          </GridItem>

          {/* Independent Vertical Line */}
          {!isMobile && index < statsData.length - 1 && (
            <Box
              position="absolute"
              top="0"
              bottom="0"
              left={`calc(${((index + 1) * 100) / statsData.length}% - 2px)`}
              width="1px"
              bg="#DEDEDE"
              transform="translateX(-50%)"
            />
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default StatsGrid;
