import {
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
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
                    maxWidth: { md: 400, lg: 520 },
                    m: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="skills"
                    sx={{
                      width: 126,
                      maxWidth: { xs: 64, md: 84, lg: 126 },
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
                    <Typography
                      sx={{
                        fontSize: { xs: "0.8rem", md: "1rem", lg: "1rem" },
                      }}
                    >
                      {element.text}
                    </Typography>
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
