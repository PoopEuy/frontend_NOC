import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    position: "relative",
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function ButtonComponent({
  loading,
  type,
  children,
  fullWidth,
  size,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          type={type}
          fullWidth={fullWidth}
          size={size}
        >
          {children}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}

ButtonComponent.propType = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
};
