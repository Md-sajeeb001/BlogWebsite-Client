import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import logo from "../assets/Logo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navber() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user, signOutUser } = UseAuth();

  // sign out user!
  const handelSignOutUser = () => {
    signOutUser().then((res) => {
      console.log(res);
    });
  };

  return (
    <div className=" fixed top-0 left-0 right-0 z-50 w-full">
      <AppBar className="bg-black text-white" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/">
                <img className="w-24" src={logo} alt="logo" />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <div className="flex flex-col gap-5  px-10 py-4">
                  <Link to="/">Home</Link>
                  <Link to="/allBlogs">All blogs</Link>
                  <Link to="/featured">Featured Blogs</Link>
                  <div>
                    {user && (
                      <div>
                        <Link to="/addBlog">Add Blog</Link>
                        <Link to="/wishlist">Wishlist</Link>
                      </div>
                    )}
                  </div>
                </div>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/">
                <img className="w-24" src={logo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div className="flex items-center space-x-8">
                <Link to="/">Home</Link>
                <Link to="/featured">Featured Blogs</Link>
                <Link to="/allBlogs">All blogs</Link>
                <div>
                  {user && (
                    <div className=" space-x-8">
                      <Link to="/addBlog">Add Blog</Link>
                      <Link to="/wishlist">Wishlist</Link>
                    </div>
                  )}
                </div>
              </div>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {user ? (
                <div>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      {user ? (
                        <div className="w-12 h-12">
                          <img
                            className="w-full h-full rounded-full"
                            src={user?.photoURL}
                            title={user?.displayName}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      )}
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <div className="flex flex-col gap-5  px-8 py-2">
                      <Link onClick={handelSignOutUser}>Log Out</Link>
                    </div>
                  </Menu>
                </div>
              ) : (
                <div className="flex items-center">
                  <div>
                    <Link className="mr-2" to="/register">
                      Register
                    </Link>{" "}
                  </div>
                  / <FaUserCircle className="ml-2" />{" "}
                  <Link to="/signIn" className="ml-2">
                    Sign In
                  </Link>
                </div>
              )}

              {/* <div className="flex items-center justify-center sm:gap-6 gap-1">
                {!user && (
                 
                )}
               
              </div> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navber;
