import {
  Container,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import BookmarkIcon from "@material-ui/icons/Bookmark";
function Widgets() {
  return (
    <div className="widgets__root mt-2">
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">Recent Articles</Typography>
          </Grid>
          <Grid item>
            <Icon>
              <InfoIcon />
            </Icon>
          </Grid>
        </Grid>
        <hr style={{ border: "2px solid darkgrey" }} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <BookmarkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="IPL postponed due to covid-19 cases" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookmarkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Ambulance in a rickshaw" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookmarkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="7 million people jobless in India" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookmarkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Picking an imperfect job" />
          </ListItem>
        </List>
      </Container>
    </div>
  );
}

export default Widgets;
