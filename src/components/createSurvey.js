import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FRQ from "./FRQ";
import MC from "./MC";
import MCDialog from "./MCDialog";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function CreateSurvey(props) {
  const { questions, setQuestions } = props;
  const [empty, setEmpty] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const addFRQ = () => {
    const question = {
      type: "FRQ",
      prompt: "",
      choices: null,
      result: "",
    };

    setQuestions([...questions, question]);
  };

  const handleSubmit = (e) => {
    const emptyFields = questions.some(
      (question) =>
        question.prompt === "" ||
        (question.type === "MC" &&
          question.choices.some((choice) => choice === ""))
    );
    if (emptyFields || questions.length === 0) {
      e.preventDefault();
    }
    setEmpty(emptyFields);
  };

  return (
    <Box fullWidth>
      <Stack
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        sx={{ m: 2 }}
      >
        <Box>
          <Button variant="contained" onClick={addFRQ} sx={{ mr: 5 }}>
            Add Free-response question
          </Button>
          <Button variant="contained" onClick={handleClickOpen} sx={{ mr: 5 }}>
            Add multiple choice question
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/survey"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
        {questions.map((question, index) => {
          return question.type === "FRQ" ? (
            <FRQ
              questions={questions}
              setQuestions={setQuestions}
              index={index}
              empty={empty && !question.prompt}
              key={index}
            />
          ) : (
            <MC
              questions={questions}
              setQuestions={setQuestions}
              index={index}
              empty={
                empty &&
                (!question.prompt ||
                  question.choices.some((choice) => choice === ""))
              }
              key={index}
            />
          );
        })}
        {empty && (
          <Box>
            <Alert severity="error" sx={{ mt: 1 }}>
              Please fill out all fields
            </Alert>
          </Box>
        )}
      </Stack>
      <MCDialog
        open={open}
        setOpen={setOpen}
        questions={questions}
        setQuestions={setQuestions}
      />
    </Box>
  );
}

export default CreateSurvey;
