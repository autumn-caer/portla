import React, { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import Article from "./Article";
import "./SlideArticles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { article } from "../interfaces";

interface horizontalArticlesProps {
  articles: article[];
  title: string;
  description: string;
  backgroundColor: string;
  fontColor?: string;
}

const HorizontalArticles: React.FC<horizontalArticlesProps> = ({
  articles,
  title,
  description,
  backgroundColor,
  fontColor,
}) => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 4,
    pauseOnHover: true,
    centerMode: true,
    arrows: false,
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
    <Box
      w="100vw"
      minHeight="45vw"
      paddingTop="5vw"
      paddingLeft="10vw"
      bgColor={backgroundColor}
      color={fontColor}
    >
      <Box marginBottom="5vw">
        <Flex>
          <Text fontSize="5xl" marginBottom="3vw">
            {title}
          </Text>

          <Box marginLeft="30vw" marginRight="5vw" marginTop="50px">
            <Box
              position="relative"
              display="inline-block"
              padding="10px"
              marginRight="2vw"
              cursor="pointer"
              onClick={() => sliderRef?.current?.slickPrev()}
              _before={{
                content: `""`,
                width: "20px",
                height: "20px",
                borderTop: "2px solid white",
                borderRight: "solid 2px white",
                position: "absolute",
                transform: "rotate(-135deg)",
              }}
            ></Box>
            <Box
              position="relative"
              display="inline-block"
              padding="10px"
              className="arrow arrow-right"
              cursor="pointer"
              onClick={() => sliderRef?.current?.slickNext()}
              _before={{
                content: `""`,
                width: "20px",
                height: "20px",
                borderTop: "2px solid white",
                borderRight: "solid 2px white",
                position: "absolute",
                transform: "rotate(45deg)",
              }}
            ></Box>
          </Box>

          <CircularProgress
            value={100}
            color="#7c7c7c"
            thickness="1px"
            size={120}
            cursor="pointer"
          >
            <CircularProgressLabel fontSize={20} color={fontColor}>
              More
            </CircularProgressLabel>
          </CircularProgress>
          <Spacer />
        </Flex>
        <Text>{description}</Text>
      </Box>

      <Box m="10">
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(1em)",
            },
            ".slick-dots li button": {
              _before: {
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "#b34023",
              },
            },
          }}
        >
          <Slider {...slickSettings} ref={sliderRef}>
            {articles.map((article: article, index: number) => {
              return (
                <Article
                  key={index}
                  title={article.title}
                  imageUrl={article.imageUrl}
                  genre={article.genre}
                />
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default HorizontalArticles;
