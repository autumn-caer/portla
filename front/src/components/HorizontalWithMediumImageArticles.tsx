import React, { useRef } from "react";
import { Box, Text, Grid, GridItem, Stack } from "@chakra-ui/react";
import Article from "./Article";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { article } from "../interfaces";

interface horizontalWithMediumImageArticlesProps {
  articles: article[];
  title: string;
  description: string;
  backgroundColor: string;
  fontColor?: string;
}

const HorizontalWithMediumImageArticles: React.FC<
  horizontalWithMediumImageArticlesProps
> = ({ articles, title, description, backgroundColor, fontColor }) => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 2,
    pauseOnHover: true,
    centerMode: true,
    arrows: false,
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
    <Box
      w="100vw"
      minHeight="35vw"
      paddingTop="5vw"
      paddingLeft="10vw"
      bgColor={backgroundColor}
      color={fontColor}
    >
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%">
          <Stack>
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
          </Stack>
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <Box>
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
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HorizontalWithMediumImageArticles;
