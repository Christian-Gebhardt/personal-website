import {
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import React from "react";
import { urlFor } from "../client";

function Skills({ skills }) {
  return (
    <Paper
      id="skills"
      elevation={6}
      sx={{
        mx: 4,
        my: 6,
        p: 2,
      }}
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
          columnSpacing={6}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {skills ? (
            skills.map((element, i) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: "45px",
                    minWidth: { xs: 240, md: 320, lg: 400 },
                    maxWidth: { xs: 280, md: 400, lg: 500 },
                    minHeight: { xs: 480, md: 700, lg: 860 },
                    maxHeight: { xs: 560, md: 800, lg: 1000 },
                    m: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="skills"
                    sx={{
                      width: 126,
                      maxWidth: { xs: 64, md: 84, lg: 326 },
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: 4,
                      marginBottom: 4,
                    }}
                    image={element ? urlFor(element.imageurl).toString() : ""}
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
                      {element.title}
                    </Typography>
                    <Box
                      sx={{
                        ml: 3,
                      }}
                    >
                      <List
                        sx={{
                          listStyleType: "disc",
                          "& p": {
                            fontSize: {
                              xs: "0.8rem",
                              md: "0.95rem",
                              lg: "1.2rem",
                            },
                          },
                        }}
                      >
                        {element.keywords ? (
                          element.keywords.map((keyword, i) => (
                            <ListItem key={i} sx={{ display: "list-item" }}>
                              <Typography>{keyword}</Typography>
                            </ListItem>
                          ))
                        ) : (
                          <div></div>
                        )}
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Box></Box>
          )}
        </Grid>
      </Box>
    </Paper>
  );
}

export default Skills;
