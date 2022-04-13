import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateSurvey from "./components/createSurvey";
import TakeSurvey from "./components/takeSurvey";
import Results from "./components/results";

function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <CreateSurvey questions={questions} setQuestions={setQuestions} />
          }
        />
        <Route
          path="/survey"
          element={
            <TakeSurvey questions={questions} setQuestions={setQuestions} />
          }
        />
        <Route path="/results" element={<Results questions={questions} />} />
      </Routes>
    </Router>
  );
}

export default App;
