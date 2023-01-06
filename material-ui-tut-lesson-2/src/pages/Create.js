import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";
import { Container } from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContnet: "center",
    alignItems: "flex-start",
  },
  fields: {
    marginTop: 5,
    marginBottom: 5,
  },
});
export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [validTitle, setvalidTitle] = useState(true);
  const [validDetails, setvalidDetails] = useState(true);
  const [category, setCategory] = useState("todos");
  const hanldeSubmit = () => {
    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, details, category }),
    });
  };
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={hanldeSubmit}
      >
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={classes.fields}
          variant="outlined"
          label="Note Title"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className={classes.fields}
          variant="outlined"
          label="Details"
          fullWidth
          required
          multiline
          minRows={4}
        />
        <FormControl className={classes.form}>
          <FormLabel>choose category</FormLabel>
          <RadioGroup value={category} onChange={handleChange}>
            <FormControlLabel value="money" control={<Radio />} label="money" />
            <FormControlLabel control={<Radio />} value="time" label="time" />
            <FormControlLabel control={<Radio />} value="todos" label="todos" />
            <FormControlLabel
              control={<Radio />}
              value="travel"
              label="travel"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
          style={{ marginTop: 10 }}
        >
          submit
        </Button>
      </form>
    </Container>
  );
}
