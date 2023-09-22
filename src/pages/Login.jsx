import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
export default function Login() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("NOTIFICACIÓN", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  // anchorOrigin:
  // Type: { horizontal: left | center | right, vertical: top | bottom }
  // Default: { horizontal: left, vertical: bottom }

  // variant:
  // Type: default | error | success | warning | info
  // Default: default
  return (
    <>
      <h1>Login</h1>
      <Button
        variant="contained"
        onClick={handleClick}
      >
        Open
      </Button>
    </>
  );
}
