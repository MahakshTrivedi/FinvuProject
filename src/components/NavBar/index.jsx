import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  StyledBackButton,
  StyledDiv,
  StyledNextButton,
  StyledText,
} from "./style";

const NavBar = () => {
  return (
    <StyledDiv>
      <StyledBackButton>
        <ArrowBackIcon className="back-button" />
        <StyledText>Add New Bank</StyledText>
      </StyledBackButton>
      <StyledNextButton>
        <Button
          variant="contained"
          fullWidth
          style={{
            textTransform: "none",
            fontWeight: "bold",
            backgroundColor: "#174a8e",
            borderRadius: "15px",
            height: "40px"
          }}
        >
          Next
        </Button>
      </StyledNextButton>
    </StyledDiv>
  );
};

export default NavBar;
