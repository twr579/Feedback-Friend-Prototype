import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Results(props) {
  const { questions } = props;

  return (
    <List>
      {questions.map((question, index) => {
        const primary = index + 1 + ". " + question.prompt;
        return (
          <ListItem key={index} sx={{ display: "inline-block" }}>
            <ListItemText primary={primary} />
            Your answer: {question.result}
          </ListItem>
        );
      })}
    </List>
  );
}

export default Results;
