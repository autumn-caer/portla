import React, { useState } from "react";
import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
// import Article from "./Article";
import map_image from "../images/FH000009-1000x670.jpeg";
import "./SlideArticles.css";

// import { useOffsetTop } from "../hooks/useOffsetTop";
import hero_image from "../images/early-morning-g1dc17ac08_1280.jpg";
import antena_image from "../images/cat-g3daefc9de_1280.jpg";
import zine_image from "../images/danube-river-g2329831af_1280.jpg";

const fadeIn = keyframes`
  from { transform: scale(1.5); }
  to {  transform: scale(1.2); }
  0%{ opacity: 0; }
  10%{ opacity: 0.5;   }
  20%{ opacity: 0.8;   }
  30%{ opacity: 1;   }
  100%{ opacity: 1;  }
`;

const fadeOut = keyframes`
  from { transform: scale(1.5); }
  to {  transform: scale(1.2); }
  0%{ opacity: 1; }
  10%{ opacity: 0.8;}     
  20%{ opacity: 0.5;  }
  30%{ opacity: 0;     }
  100%{ opacity: 0;   }
`;

const slideImages = [map_image, hero_image, antena_image, zine_image];

const SlideArticles: React.FC = () => {
  const [slideImageIndex, setSlideImageIndex] = useState<number>(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} infinite 5s linear forwards`;

  const fadeOutAnimation = prefersReducedMotion
    ? undefined
    : `${fadeOut} 5s linear forwards`;

  return (
    <Box w="100vw" h="40vw" overflow="hidden" position="relative">
      {slideImages.map((slide, index) => {
        return (
          <Box
            key={index}
            position="absolute"
            h="550px"
            minHeight="550px"
            width="100%"
            animation={
              slideImageIndex === index ? fadeInAnimation : fadeOutAnimation
            }
            backgroundImage={slide}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            onAnimationIteration={() =>
              setSlideImageIndex(
                index >= slideImages.length - 1 ? 0 : index + 1
              )
            }
          >
            <Box className="text" w="100vw" h="50vw" bgSize="cover">
              heresssaaa: {index}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default SlideArticles;
