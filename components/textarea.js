import styles from "../styles/components/textarea.module.css";

function Textarea(props) {
  const focus = (e) => {
    var textareaEl = e.target.closest("#textareaEl");
    var textarea = textareaEl.querySelector("textarea");
    textarea.addEventListener("focus", function () {
      textareaEl.querySelector("label").classList.add("labelFocus");
    });
    textarea.addEventListener("blur", function () {
      if (textarea.value == "")
        textareaEl.querySelector("label").classList.remove("labelFocus");
    });
  };
  const focus2 = (e) => {
    var textareaEl = e.target.closest("#textareaEl");
    var textarea = textareaEl.querySelector("textarea");
    textarea.addEventListener("focus", function () {
      textareaEl.querySelector("label").classList.add("labelFocus");
    });
    textarea.addEventListener("blur", function () {
      if (textarea.value == "")
        textareaEl.querySelector("label").classList.remove("labelFocus");
    });
    textarea.focus()
  };
  return (
    <div className={styles.textareaDiv} id="textareaDiv">
      <div className={styles.textareaEl} id="textareaEl">
        <div onClick={focus2} className={styles.icon1} id="icon1">
          <img src={props.icon}></img>
        </div>
        <textarea
          onFocus={focus}
          onBlur={props.textareaHandler}
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
      <div className={styles.textareaError}>
        {props.error ? props.error : null}
      </div>
      <style jsx>{`
        .labelFocus {
          font-size: 12px !important;
          top: -2px !important;
          color: #20212488;
        }
        #textareaDiv {
          width: ${props.width} !important;
        }
      `}</style>
    </div>
  );
}
export { Textarea };
