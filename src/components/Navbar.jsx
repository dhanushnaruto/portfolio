import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Home,
    Info,
    Build,
    Work,
    Description,
    Brightness4,
    Brightness7,
    GitHub,
    LinkedIn,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useTheme } from './ThemeContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    padding-top: 64px;
    scroll-behavior: smooth;
  }
`;

const NavbarContainer = styled.div`
  flex-grow: 1;
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    margin: 0 5px;
  }
`;

const DrawerLinks = styled(List)`
  width: 250px;
`;

const ThemeToggleButton = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIconWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <GlobalStyle />
            <NavbarContainer>
                <AppBar position="fixed" color="primary" style={{ zIndex: 1201 }}>
                    <Toolbar>
                        <MenuIconWrapper>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </MenuIconWrapper>
                        <h1 style={{ flexGrow: 1 }}>
                            Dk
                        </h1>
                        <MenuLinks>
                            <Button color="inherit" component={Link} to="/">
                                <Info /> About
                            </Button>
                            <Button color="inherit" component={Link} to="/skills">
                                <Build /> Skills
                            </Button>
                            <Button color="inherit" component={Link} to="/projects">
                                <Work /> Projects
                            </Button>
                            <Button color="inherit" component={Link} target='_blank' to="https://drive.google.com/file/d/1PF0lecS-8PozDhZOPHl3-vs-WrJtnscy/view?usp=drivesdk">
                                <Description /> Resume
                            </Button>
                            <IconButton color="inherit" component="a" href="https://github.com/dhanushnaruto" target="_blank" rel="noopener noreferrer">
                                <GitHub />
                            </IconButton>
                            <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/pdku/" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                            </IconButton>
                        </MenuLinks>
                        <ThemeToggleButton color="inherit" onClick={toggleTheme}>
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </ThemeToggleButton>
                        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <DrawerLinks onClick={toggleDrawer(false)}>
                                <ListItem button component={Link} to="/">
                                    <ListItemIcon>
                                        <Home />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItem>
                                <ListItem button component={Link} to="/">
                                    <ListItemIcon>
                                        <Info />
                                    </ListItemIcon>
                                    <ListItemText primary="About" />
                                </ListItem>
                                <ListItem button component={Link} to="/skills">
                                    <ListItemIcon>
                                        <Build />
                                    </ListItemIcon>
                                    <ListItemText primary="Skills" />
                                </ListItem>
                                <ListItem button component={Link} to="/projects">
                                    <ListItemIcon>
                                        <Work />
                                    </ListItemIcon>
                                    <ListItemText primary="Projects" />
                                </ListItem>
                                <ListItem button component={Link} target="_blank" to="https://drive.google.com/file/d/1PF0lecS-8PozDhZOPHl3-vs-WrJtnscy/view?usp=drivesdk">
                                    <ListItemIcon>
                                        <Description />
                                    </ListItemIcon>
                                    <ListItemText primary="Resume" />
                                </ListItem>
                                <ListItem button component="a" href="https://github.com/dhanushnaruto" target="_blank" rel="noopener noreferrer">
                                    <ListItemIcon>
                                        <GitHub />
                                    </ListItemIcon>
                                    <ListItemText primary="GitHub" />
                                </ListItem>
                                <ListItem button component="a" href="https://www.linkedin.com/in/pdku/" target="_blank" rel="noopener noreferrer">
                                    <ListItemIcon>
                                        <LinkedIn />
                                    </ListItemIcon>
                                    <ListItemText primary="LinkedIn" />
                                </ListItem>
                                <ListItem button onClick={toggleTheme}>
                                    <ListItemIcon>
                                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                                    </ListItemIcon>
                                    <ListItemText primary="Toggle Theme" />
                                </ListItem>
                            </DrawerLinks>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
