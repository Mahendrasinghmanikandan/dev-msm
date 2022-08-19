import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { worksCard } from "../../helper/workHelper";
import "./works.css";
const Works = () => {
  return (
    <div>
      <div className="work_Sections">
        <Stack spacing={3}>
          <Stack className="title_text" spacing={1}>
            <Typography variant="h4">Works</Typography>
            <hr />
          </Stack>
          <Stack spacing={3} className="scrolls">
            <Stack
              direction="row"
              className="title_content"
              gap={10}
              flexWrap="wrap"
              justifyContent="space-around"
            >
              {/* {worksCard.map((res) => {
                return (
                  <Card className="workItems animate__animated animate__backInDown animate__slower 3s">
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      image={res.img}
                    />
                    <CardContent>
                      <Typography
                        className="projectName"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {res.projectName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="techs"
                      >
                        {res.techs.map((res) => {
                          return (
                            <Typography
                              className="highlight_text"
                              variant="body2"
                            >
                              {res}
                            </Typography>
                          );
                        })}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack
                        justifyContent="flex-end"
                        direction="row"
                        className="previewIcons"
                      >
                        {res.links.map((link) => {
                          return (
                            <Button className="animate__animated animate__backInUp animate__slower 20s">
                              {link.Icon}
                            </Button>
                          );
                        })}
                      </Stack>
                    </CardActions>
                  </Card>
                );
              })} */}
              {worksCard.map((res) => {
                return (
                  <div className="card  bg-base-100 shadow-xl">
                    <figure>
                      <img src={res.img} width="500" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="projectName"> {res.projectName}</h2>
                      <div className="techs">
                        {res.techs.map((res) => {
                          return (
                            <Typography
                              className="highlight_text"
                              variant="body2"
                            >
                              {res}
                            </Typography>
                          );
                        })}
                      </div>
                      <div className="card-actions">
                        <Stack
                          justifyContent="flex-end"
                          direction="row"
                          className="previewIcons"
                        >
                          {res.links.map((link) => {
                            return (
                              <a
                                href={link.links}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Button className="animate__animated animate__backInUp animate__slower 20s">
                                  {link.Icon}
                                </Button>
                              </a>
                            );
                          })}
                        </Stack>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Works;
