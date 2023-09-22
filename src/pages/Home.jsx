import {
  Alert,
  AlertTitle,
  Button,
  /*Collapse,*/ Snackbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert>
          {" "}
          <AlertTitle>Hello</AlertTitle>Hello my friend
        </Alert>

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Open
        </Button>

        {/* <Alert severity="error">
          <AlertTitle>Error in login</AlertTitle> This is an error alert — check
          it out!
        </Alert>
        <Alert
          severity="warning"
          action={
            <>
              <Button color="inherit">Update</Button>
              <Button color="inherit">Delete</Button>
            </>
          }
        >
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Collapse in={open}>
          {" "}
          <Alert
            severity="success"
            onClose={() => {
              setOpen(false);
            }}
          >
            This is a success alert — check it out!
          </Alert> */}
        <Snackbar
          open={open}
          // message="Alerta"
          autoHideDuration={1000}
          onClose={() => setOpen(false)}
        >
          <Alert
            severity="success"
            onClose={() => {
              setOpen(false);
            }}
          >
            This is a success alert — check it out!
          </Alert>
        </Snackbar>
        {/* </Collapse> */}
      </Box>
    </>
  );
}
