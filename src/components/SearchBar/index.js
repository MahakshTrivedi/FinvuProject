import { useState, useEffect, useCallback } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledBank,
  StyledContent,
  StyledDiv,
  StyledHeader,
  StyledIcon,
  StyledTooltip,
} from "./style";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Checkbox from "@mui/material/Checkbox";
import searchHelper from "../../utils/searchHelper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const PAGE_SIZE = 10;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SearchBar = () => {
  const [searchResults, updateSearchResults] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [curPage, setCurPage] = useState(1);

  const handleSearch = useCallback((e) => {
    setCurPage(1);
    setSearchText(e.target.value);
  }, []);

  const handleLoadMore = useCallback(() => {
    setCurPage((prev) => prev + 1);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === " " && searchText === "") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    searchHelper({
      pageNumber: curPage,
      searchText,
      pageSize: PAGE_SIZE,
    }).then(({ result, hasMore }) => {
      setShowLoadMore(hasMore);
      updateSearchResults((prevResult) => {
        if (curPage === 1) return result;
        else return prevResult.concat(result);
      });
    });
  }, [curPage, searchText]);
  return (
    <div>
      <StyledHeader>
        <StyledDiv>Search from all banks</StyledDiv>
        <StyledTooltip>Can't find your bank?</StyledTooltip>
      </StyledHeader>
      <br />
      <TextField
        label="Search Bank"
        variant="outlined"
        fullWidth
        sx={{
          "& fieldset": { border: "none" },
        }}
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          borderWidth: 0,
        }}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon style={{ alignSelf: "center" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <Grid container spacing={2}>
        {searchResults.map((bank) => (
          <Grid item xs={6} key={bank}>
            <StyledBank>
              <StyledContent>
                <StyledIcon>
                  <AccountBalanceIcon color="#a2acb1" />
                </StyledIcon>
                {bank}
              </StyledContent>
              <Checkbox {...label} />
            </StyledBank>
          </Grid>
        ))}
      </Grid>
      <br />
      {showLoadMore && (
        <>
          <Button variant="contained" onClick={handleLoadMore}>
            Load More
          </Button>
        </>
      )}
    </div>
  );
};

export default SearchBar;
