import { useState, useEffect } from "react";
import useFetchContacts from "../../hooks/useFetchContacts";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { StyledDiv } from "./style";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const fetchContacts = useFetchContacts(setContacts);
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <StyledDiv>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {contacts.map((contact) => (
            <FormControlLabel
              key={contact}
              value={contact}
              control={<Radio />}
              label={
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                  {contact}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button style={{ padding: 0, color: "#3c5699" }}>
        <b>Add New Mobile Number</b>
      </Button>
    </StyledDiv>
  );
};

export default Contacts;
