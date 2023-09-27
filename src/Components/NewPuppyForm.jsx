import React, { useState, useEffect } from "react";

function NewPuppyForm() {
  // State variables to store the input values
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Do something with the submitted values (e.g., send them to an API)
    console.log("Puppy Name:", name);
    console.log("Puppy Breed:", breed);

    postPlayer();

    // Optionally, you can reset the form fields after submission
    setName("");
    setBreed("");
  };

  const postPlayer = async () => {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            breed: breed,
          }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Puppy Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="breed" className="form-label">
            Breed:
          </label>
          <input
            type="text"
            className="form-control"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPuppyForm;
