import React from "react";
import { Box, Image, Grid, GridItem, Text, Fade } from "@chakra-ui/react";

interface HeroSlideProps {
  title: string;
  slideNo: number;
  showSlide: boolean;
  imageUrl: string;
  category: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  title,
  slideNo,
  imageUrl,
  showSlide,
  category,
}) => {
  return (
    <>
      {showSlide && (
        <Fade in={showSlide} transition={{ enter: { duration: 2 } }}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            <GridItem
              w="100%"
              h="40px"
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            >
              <Box mt={40}>
                <Text fontSize="xl" color="#b34023">
                  {category}
                </Text>
                <Text fontSize="4xl" position="absolute" width="45%">
                  {title}
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2} w="100%">
              <Box color="white" bg="teal.500" rounded="md" shadow="md">
                <Image src={imageUrl} alt="Dan Abramov" />
              </Box>
            </GridItem>
            <GridItem
              colSpan={2}
              w="100%"
              display={{ base: "block", sm: "block", md: "block", lg: "none" }}
            >
              <Text
                fontSize={{ base: "md", sm: "md", md: "xl", lg: "xl" }}
                color="#b34023"
              >
                {category}
              </Text>
              <Text fontSize={{ base: "lg", sm: "lg", md: "lg", lg: "4xl" }}>
                {title}
              </Text>
            </GridItem>
          </Grid>
        </Fade>
      )}
    </>
  );
};

export default HeroSlide;
