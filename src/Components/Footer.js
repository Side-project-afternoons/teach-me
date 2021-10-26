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
  },
  gridItem: {
    margin: "3em",
  },
  boldlink: {
    color: "white",
    fontFamily: "Manrope",
    fontSize: "1.3rem",
    textDecoration: "None",
    fontWeight: "Bold",
  },
  link: {
    color: "white",
    fontFamily: "Manrope",
    fontSize: "0.95rem",
    textDecoration: "None",
  },
  footerLogo: {
    fontFamily: "Pacifico",
    fontSize: "1.7rem",
    color: "white",
    marginLeft: "1.6%",
  },
  footerCopyright: {
    fontFamily: "Manrope",
    fontSize: "1rem",
    textDecoration: "None",
    color: "white",
    marginTop: "1em",
    marginLeft: "135em",
  },
  button: {
    ...theme.typography.buttons,
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    borderRadius: "0px",
    borderWidth: "2px",
    fontWeight: 600,
    marginLeft:"118em"
  },
  somethingContainer: {
    marginTop: "-1em",
    paddingBottom: "1.5em",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" spacing={1}>
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
                    <Button variant="outlined" className={classes.button} startIcon={<LanguageIcon/>}>English</Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.somethingContainer} spacing={2}>
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
