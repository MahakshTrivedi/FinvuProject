import { useState, useEffect } from "react";
import useFetchBanks from "../../hooks/useFetchFeaturedBanks";
import Checkbox from "@mui/material/Checkbox";
import { StyledBank, StyledDiv, StyledContent, StyledImage } from "./style";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FeaturedBanks = () => {
  const [banks, setBanks] = useState([]);
  const fetchBanks = useFetchBanks(setBanks);
  useEffect(() => {
    fetchBanks();
  }, []);

  return (
    <StyledDiv>
      {banks.map((bank) => (
        <StyledBank key={bank.name}>
          <StyledContent>
            <StyledImage>
              <img src={bank.logo} alt={bank.name} />
            </StyledImage>
            {bank.name}
            <Checkbox {...label} />
          </StyledContent>
        </StyledBank>
      ))}
    </StyledDiv>
  );
};

export default FeaturedBanks;
