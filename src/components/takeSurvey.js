import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function TakeSurvey(props) {
  const { questions, setQuestions } = props;
  const [unanswered, setUnanswered] = useState(false);

  const handleSubmit = (e) => {
    const unanswered = questions.some((question) => question.result === "");
    if (unanswered) {
      e.preventDefault();
    }
    setUnanswered(unanswered);
  };

  const setResult = (index) => (e) => {
    let newArr = [...questions];
    newArr[index].result = e.target.value;
    setQuestions(newArr);
  };

  const prompts = questions.map((question, index) => {
    const primary = index + 1 + ". " + question.prompt;
    return (
      <ListItem key={index} sx={{ display: "inline-block" }}>
        <ListItemText primary={primary} />
        {question.type === "FRQ" ? (
          <TextField
            error={unanswered && !question.result}
            onChange={setResult(index)}
            margin="normal"
            fullWidth
          />
        ) : (
          <FormControl error={unanswered && !question.result}>
            <RadioGroup onChange={setResult(index)}>
              {question.choices.map((choice, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={question.choices[index]}
                    control={<Radio />}
                    label={question.choices[index]}
                  />
                );
              })}
              {unanswered && !question.result && (
                <FormHelperText>Please select an option</FormHelperText>
              )}
            </RadioGroup>
          </FormControl>
        )}
      </ListItem>
    );
  });

  return (
    <List>
      {prompts}
      <Button
        variant="contained"
        component={Link}
        to="/results"
        onClick={handleSubmit}
        sx={{ ml: 2 }}
      >
        Submit
      </Button>
    </List>
  );
}

export default TakeSurvey;
