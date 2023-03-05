import './Thank.css';

export default function Thank(props) {
  return (
    <div className="thank-you">
      <img src="/phone.svg" alt="phone" />
      <div className="feedback">You selected {props.rating} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating.
        if you ever need more support, dont hesitate to get in touch!
      </p>
    </div>
  );
}
