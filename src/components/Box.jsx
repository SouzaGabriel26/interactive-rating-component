import './Box.css';

export default function Box(props) {
  return (

    <div className="box-model">
      {props.children}
    </div>

  );
}
