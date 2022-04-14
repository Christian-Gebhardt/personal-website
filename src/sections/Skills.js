import {
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import javaIcon from "../assets/images/java-icon.png";
import webdevIcon from "../assets/images/webdev-icon.png";
import databaseIcon from "../assets/images/database-icon.png";
import pythonIcon from "../assets/images/python-icon.png";
import otherSkillsIcon from "../assets/images/other-skills-icon.png";
import React from "react";
import Constants from "../Constants";

function Skills() {
  const data = [
    {
      image: javaIcon,
      header: "Backend Entwicklung",
      text: Constants.LOREM_IPSUM,
    },
    {
      image: webdevIcon,
      header: "Web Entwicklung",
      text: Constants.LOREM_IPSUM,
    },
    {
      image: databaseIcon,
      header: "Datenbanken",
      text: Constants.LOREM_IPSUM,
    },
    {
      image: pythonIcon,
      header: "Data Science",
      text: Constants.LOREM_IPSUM,
    },
    {
      image: otherSkillsIcon,
      header: "Anderes",
      text: Constants.LOREM_IPSUM,
    },
  ];
  return (
    <Paper
      sx={{
        p: 2,
        m: 8,
      }}
      elevation={6}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            m: 2,
          }}
        >
          Skills
        </Typography>
      </Box>
      <Box margin={6}>
        <Grid
          container
          rowSpacing={8}
          columnSpacing={8}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((element, i) => (
            <Grid
              item
              xs={6}
              md={4}
              key={i}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                elevation={4}
                sx={{
                  borderRadius: "45px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="skills"
                  sx={{
                    width: "150px",
                    height: "150px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 4,
                    marginBottom: 4,
                  }}
                  image={element.image}
                />
                <Divider
                  variant="middle"
                  sx={{
                    borderBottomWidth: "unset",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    textAlign={"center"}
                  >
                    {element.header}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default Skills;
