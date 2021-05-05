import { Snackbar } from "@material-ui/core";
import React from "react";

function SnackbarDisplay({ close, message, open }) {
  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        close={close}
        message={message}
        autoHideDuration={2000}
      />
    </>
  );
}

export default SnackbarDisplay;
