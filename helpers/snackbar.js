import { Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function SnackbarDisplay({ close, message, open }) {
  const { mess, code } = message;

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => close(false)}
        message={mess}
        autoHideDuration={2000}
        // style={{ backgroundColor: "olive" }}
        // classes={{ root: useStyles().root }}
      />
    </>
  );
}

export default SnackbarDisplay;
