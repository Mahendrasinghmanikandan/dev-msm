import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import SettingsIcon from "@mui/icons-material/Settings";
import ListSubheader from "@mui/material/ListSubheader";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
const SubNav = ({ status, setStatus }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Drawer
        anchor="left"
        open={status}
        onClose={() => {
          setStatus(false);
        }}
      >
        <Box width={200} padding={2} className="drawer">
          <List
            sx={{ width: "100%", Width: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          {/* <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            onClick={() => {
              setStatus(!status);
            }}
          >
            <Link to="/" className="links">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <HomeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="home" />
              </ListItem>
            </Link>

            <a href="#abouts">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <InfoIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="About Me" />
              </ListItem>
            </a>

            <a href="#education">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SchoolIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Education" />
              </ListItem>
            </a>

            <a href="#experience">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountBalanceIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Experience" />
              </ListItem>
            </a>
          </List> */}
        </Box>
      </Drawer>
    </div>
  );
};

export default SubNav;
