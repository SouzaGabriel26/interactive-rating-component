import { useState } from 'react';
import './Form.css';

export default function Form(props) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    props.handleResult(submitted);
    props.selectedRating(selectedRating);
  }

  function handleSelectedRating(rating) {
    setSelectedRating(rating);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <img className="star" src="/icon-star.svg" alt="star" />
      <h1>How did we do?</h1>
      <p className="description">
        Please let us know how we did your support request.
        All feedback is appreciated to help us improve our offering!
      </p>
      <div className="rating-buttons">
        {[1, 2, 3, 4, 5].map((rating, idx) => (
          <button key={idx} onClick={() => handleSelectedRating(rating)} type="button">{rating}</button>
        ))}
      </div>

      <button disabled={selectedRating === undefined} type="submit">SUBMIT</button>
    </form>
  );
}
