import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Choice from "./choice";

function MC(props) {
  const { questions, setQuestions, index, empty } = props;

  const updateMC = (index) => (e) => {
    let newArr = [...questions];
    newArr[index].prompt = e.target.value;
    setQuestions(newArr);
  };

  const deleteMC = (index) => (e) => {
    let newArr = [...questions];
    newArr.splice(index, 1);
    setQuestions(newArr);
  };

  const addChoice = () => {
    let newArr = [...questions];
    newArr[index].choices.push("");
    setQuestions(newArr);
  };

  return (
    <Box>
      <TextField
        key={index}
        error={empty && !questions[index].prompt}
        onChange={updateMC(index)}
        value={questions[index].prompt}
        placeholder={"Q" + (index + 1)}
        margin="normal"
        autoFocus
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={deleteMC(index)} edge="end">
                <Delete />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {questions[index].choices.map((choice, choiceIndex) => {
        return (
          <Choice
            questions={questions}
            setQuestions={setQuestions}
            index={index}
            choiceIndex={choiceIndex}
            empty={empty && choice === ""}
            key={choiceIndex}
          />
        );
      })}
      <Button variant="contained" onClick={addChoice} sx={{ mt: 1 }}>
        Add Choice
      </Button>
    </Box>
  );
}

export default MC;
