import styles from "../styles/components/input.module.css";

function Input(props) {
  const focus = (e) => {
    var inputEl = e.target.closest("#inputEl");
    var input = inputEl.querySelector("input");
    input.addEventListener("focus", function () {
      inputEl.querySelector("label").classList.add("labelFocus");
    });
    input.addEventListener("blur", function () {
      if (input.value == "")
        inputEl.querySelector("label").classList.remove("labelFocus");
    });
  };
  const focus2 = (e) => {
    var inputEl = e.target.closest("#inputEl");
    var input = inputEl.querySelector("input");
    input.addEventListener("focus", function () {
      inputEl.querySelector("label").classList.add("labelFocus");
    });
    input.addEventListener("blur", function () {
      if (input.value == "")
        inputEl.querySelector("label").classList.remove("labelFocus");
    });
    input.focus()
  };
  return (
    <div className={styles.inputDiv} id="inputDiv">
      <div className={styles.inputEl} id="inputEl">
        <div onClick={focus2} className={styles.icon1} id="icon1">
          <img src={props.icon}></img>
        </div>
        <input
          onFocus={focus}
          onBlur={props.inputHandler}
          name={props.name}
          id={props.name}
          spellCheck="false"
          autoComplete="off"
          tabIndex={props.tabIndex}
        />
        <label htmlFor={props.name} className={styles.label}>
          {props.label}
        </label>
        <div onClick={focus2} className={styles.icon2} id="icon2">
          <img
            src={
              props.error
                ? "../static/icons/icons8-box-important-48.png"
                : "../static/icons/icons8-checked-48.png"
            }
          ></img>
        </div>
      </div>
      <div className={styles.inputError}>
        {props.error ? props.error : null}
      </div>
      <style jsx>{`
        .labelFocus {
          font-size: 12px !important;
          top: -2px !important;
          color: #20212488;
        }
        #inputDiv {
          width: ${props.width} !important;
        }
      `}</style>
    </div>
  );
}
export { Input };
