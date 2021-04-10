import React from "react";
import { useCountUp } from "react-countup";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    color: ({ color }: { color: any }): any => color,
    padding: '30px',
    textAlign: 'center',
    flexGrow: 1,
  },
  title: {
    marginBottom: '10px',
  }
}));

const Stat = ({ animated, title, description, value, color, suffix }: any) => {
  const classes = useStyles({ color });
  const { countUp: animatedValue } = useCountUp({ end: value });

  return (
    <Box className={classes.root}>
      <Typography variant="h2" classes={{ root: classes.title }}>{title}</Typography>
      <Typography variant="h2" classes={{ root: classes.title }}>{animated ? animatedValue : value}<span>{suffix}</span></Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};

export default Stat;