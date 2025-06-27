import { Box } from '@chakra-ui/react';

const AnimatedBox = ({
  position = 'absolute',
  top = '10%',
  left = '5%',
  width = '60px',
  height = '60px',
  borderRadius = 'full',
  backgroundColor = 'yellow.300',
  opacity = 0.6,
  animationName = 'float',
  animationDuration = '6s',
  animationTimingFunction = 'ease-in-out',
  animationIterationCount = 'infinite',
  additionalStyles = {},
}:any) => {
  return (
    <Box
      position={position}
      top={top}
      left={left}
      w={width}
      h={height}
      borderRadius={borderRadius}
      bg={backgroundColor}
      opacity={opacity}
      animation={`${animationName} ${animationDuration} ${animationTimingFunction} ${animationIterationCount}`}
      style={additionalStyles}
    />
  );
};

export default AnimatedBox;