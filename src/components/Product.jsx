import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Product() {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        overflow: "hidden",
        mt: 2,
      }}
    >
      <Img
        src="https://via.placeholder.com/200"
        alt="random"
      />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 4 }}>
        <h2>Product Name</h2>
        <p>Product Description</p>
        <Button variant="contained">Add cart</Button>
      </Box>
      <Box
        component="p"
        sx={{ mr: 2 }}
      >
        $19.99
      </Box>
    </Paper>
  );
}
