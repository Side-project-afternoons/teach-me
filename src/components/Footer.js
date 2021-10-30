import React from "react";
import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LanguageIcon from "@mui/icons-material/Language";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    width: "100%",
    zIndex: 1302,
    position: "relative",
    marginTop: "3.5em",
  },
  gridItem: {
    marginTop: "0.5em",
    marginLeft: "8em",
    marginBottom: "3em",
    [theme.breakpoints.up("docSize")]: {
      marginRight: "2em",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "0em",
    },
  },
  gridItemButton: {
    marginTop: "0.5em",
    marginBottom: "3em",
    [theme.breakpoints.up("docSize")]: {
      marginRight: "6em",
      marginLeft: "6em",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "8em",
      marginLeft: "15em",
    },
  },
  boldlink: {
    color: "white",
    fontFamily: "Manrope",
    fontSize: "1.8rem",
    textDecoration: "None",
    fontWeight: "Bold",
  },
  link: {
    color: "white",
    fontFamily: "Manrope",
    fontSize: "1.4rem",
    textDecoration: "None",
  },
  footerLogo: {
    fontFamily: "Pacifico",
    fontSize: "2.6rem",
    color: "white",
    [theme.breakpoints.up("docSize")]: {
      marginRight: "0.5em",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "0.5em",
    },
  },
  footerCopyright: {
    fontFamily: "Manrope",
    fontSize: "1.5rem",
    textDecoration: "None",
    color: "white",
    [theme.breakpoints.up("docSize")]: {
      marginTop: "1em",
      marginLeft: "38em",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "41em",
    },
  },
  button: {
    ...theme.typography.buttons,
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    borderRadius: "0px",
    borderWidth: "2px",
    fontWeight: 600,
    fontSize: "1.4em",
  },
  logoContainer: {
    paddingBottom: "2em",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center" className={classes.mainContainer} spacing={5}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.boldlink}>
              About
            </Grid>
            <Grid item className={classes.link}>
              Teachme Business
            </Grid>
            <Grid item className={classes.link}>
              Teach on Teachme
            </Grid>
            <Grid item className={classes.link}>
              About us
            </Grid>
            <Grid item className={classes.link}>
              Contact us
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.boldlink}>
              Quick Links
            </Grid>
            <Grid item className={classes.link}>
              Careers
            </Grid>
            <Grid item className={classes.link}>
              Blog
            </Grid>
            <Grid item className={classes.link}>
              Help and Support
            </Grid>
            <Grid item className={classes.link}>
              Affiliate
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.boldlink}>
              Policies
            </Grid>
            <Grid item className={classes.link}>
              Terms
            </Grid>
            <Grid item className={classes.link}>
              Privacy Policy
            </Grid>
            <Grid item className={classes.link}>
              SiteMap
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItemButton}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Button variant="outlined" className={classes.button} startIcon={<LanguageIcon style={{fontSize:"1.5em"}}/>}>English</Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.logoContainer} spacing={2}>
          <Grid item className={classes.footerLogo}>
              Teachme
          </Grid>
          <Grid item className={classes.footerCopyright}>
              &copy; 2021 Teachme, Inc.
          </Grid>
      </Grid>
    </footer>
  );
}
