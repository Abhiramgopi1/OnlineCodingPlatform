import React, { useState } from "react";
import axios from "axios";
import "./UploadProblem.css";

function UploadProblem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [constraints, setConstraints] = useState("");
  const [test_cases, setTest_cases] = useState("");
  const [URL, setURL] = useState("");
  const [sample_input, setSample_input] = useState("");
  const [sample_output, setSample_output] = useState("");
  const [Topic_difficulty, setTopic_difficulty] = useState("");

  const ProblemDetails = {
    title,
    description,
    constraints,
    test_cases,
    URL,
    sample_input,
    sample_output,
    Topic_difficulty,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/post_problem", ProblemDetails)
      .then((response) => {
        alert("Problem uploaded successfully!");
        setTitle("");
        setDescription("");
        setConstraints("");
        setTest_cases("");
        setURL("");
        setSample_input("");
        setSample_output("");
        setTopic_difficulty("");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("A problem with this title already exists!");
        } else {
          console.error("Error uploading problem:", error);
        }
      });
  };

  return (
    <div className="upload-problem">
      <h2>Upload New Problem</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Topic Difficulty:
          <input
            type="text"
            value={Topic_difficulty}
            onChange={(e) => setTopic_difficulty(e.target.value)}
            required
            placeholder="e.g: Easy"
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Constraints:
          <textarea
            value={constraints}
            onChange={(e) => setConstraints(e.target.value)}
            required
            placeholder="e.g., Time limit in ms"
          />
        </label>
        <label>
          Sample Input:
          <textarea
            value={sample_input}
            onChange={(e) => setSample_input(e.target.value)}
            required
          />
        </label>
        <label>
          Sample Output:
          <textarea
            value={sample_output}
            onChange={(e) => setSample_output(e.target.value)}
            required
          />
        </label>
        <label>
          Test Cases:
          <textarea
            value={test_cases}
            onChange={(e) => setTest_cases(e.target.value)}
            placeholder='e.g., input: "output"'
          />
        </label>
        <button onClick={handleSubmit}>Upload Problem</button>
      </form>
    </div>
  );
}

export default UploadProblem;
