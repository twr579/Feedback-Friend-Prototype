import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";

function FRQ(props) {
  const { questions, setQuestions, index, empty } = props;

  const updateFRQ = (index) => (e) => {
    let newArr = [...questions];
    newArr[index].prompt = e.target.value;
    setQuestions(newArr);
  };

  const deleteFRQ = (index) => (e) => {
    let newArr = [...questions];
    newArr.splice(index, 1);
    setQuestions(newArr);
  };

  return (
    <Box>
      <TextField
        key={index}
        error={empty}
        onChange={updateFRQ(index)}
        value={questions[index].prompt}
        placeholder={"Q" + (index + 1)}
        margin="normal"
        autoFocus
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={deleteFRQ(index)} edge="end">
                <Delete />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default FRQ;
