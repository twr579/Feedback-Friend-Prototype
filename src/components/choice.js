import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Choice(props) {
  const { questions, setQuestions, index, choiceIndex, empty } = props;

  const updateChoice = (choiceIndex) => (e) => {
    let newArr = [...questions];
    newArr[index].choices[choiceIndex] = e.target.value;
    setQuestions(newArr);
  };

  const deleteChoice = (choiceIndex) => (e) => {
    let newArr = [...questions];
    newArr[index].choices.splice(choiceIndex, 1);
    setQuestions(newArr);
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <RadioButtonUncheckedIcon sx={{ mr: 1 }} />
      <TextField
        key={choiceIndex}
        error={empty}
        value={questions[index].choices[choiceIndex]}
        onChange={updateChoice(choiceIndex)}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disabled={questions[index].choices.length === 2}
                onClick={deleteChoice(choiceIndex)}
                edge="end"
              >
                <Delete />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Choice;
