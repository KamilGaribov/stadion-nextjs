import styles from "../styles/components/checkbox.module.css";

function Checkbox(props) {
  const change = (e) => {
    var input = e.target;
    props.checkboxHandler(input);
    // props.changeCheckbox(input);
  };
  return (
    <div className={styles.checkbox} id={props.input==true ? "checkbox" : null}>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        onChange={change}
        checked={props.input==true ? true : false}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}

export { Checkbox };
