import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
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
          <Slider {...slickSettings}>
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
