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
    marginTop:"3.5em"
  },
  gridItem: {
    marginTop:"3em",
    marginLeft: "10em",
    marginRight:"3em",
    marginBottom: "3em"
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
    marginLeft: "3.5em",
  },
  footerCopyright: {
    fontFamily: "Manrope",
    fontSize: "1.5rem",
    textDecoration: "None",
    color: "white",
    marginTop: "1em",
    marginLeft:"103em"
  },
  button: {
    ...theme.typography.buttons,
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    borderRadius: "0px",
    borderWidth: "2px",
    fontWeight: 600,
    fontSize: "1.5em",
    marginLeft:"55em"
  },
  logoContainer: {
    marginTop: "1em",
    paddingBottom: "3em",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={5}>
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
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Button variant="outlined" className={classes.button} startIcon={<LanguageIcon style={{fontSize:"1.5em"}}/>}>English</Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.logoContainer}>
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
