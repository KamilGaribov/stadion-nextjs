import styles from "../styles/components/select.module.css";

function Select(props) {
  const start = (e) => {
    var selectDiv = e.target.closest("#select_div");
    var options = selectDiv.querySelector("#options");
    if (options.classList.contains("display-block")) {
      selectDiv.classList.remove("zIndex3");
      options.classList.remove("display-block");
      selectDiv
        .querySelector("#select_arrow")
        .classList.remove("select-arrow-down");
    } else {
      selectDiv.classList.add("zIndex3");
      options.classList.add("display-block");
      selectDiv
        .querySelector("#select_arrow")
        .classList.add("select-arrow-down");
      var body = e.target.closest("body");
      body.addEventListener("click", function (e) {
        if (e.target.closest("#select_div") != selectDiv) {
          selectDiv.classList.remove("zIndex3");
          options.classList.remove("display-block");
          selectDiv
            .querySelector("#select_arrow")
            .classList.remove("select-arrow-down");
        }
      });
    }
  };
  const select = (e) => {
    var selectDiv = e.target.closest("#select_div");
    var label = selectDiv.querySelector("label");
    var input = selectDiv.querySelector("input");
    var options = selectDiv.querySelector("#options");
    if (e.target.innerHTML == "") {
      label.classList.remove("label-focus");
      input.value = "";
    } else {
      label.classList.add("label-focus");
      input.value = e.target.innerHTML;
    }
    selectDiv.classList.remove("zIndex3");
    options.classList.remove("display-block");
    selectDiv
      .querySelector("#select_arrow")
      .classList.remove("select-arrow-down");
    props.selectHandler(input);
  };
  return (
    <div className={styles.select_div} id="select_div">
      <div className={styles.select_el} onClick={start}>
        <div className={styles.icon} id="icon">
          <img src={props.icon}></img>
        </div>
        <input
          disabled
          spellCheck="false"
          autoComplete="off"
          id={props.name}
          name={props.name}
          value={props.input ? props.input : ""}
        />
        <label htmlFor={props.name} className={props.input ? "label-focus" : null}>{props.label}</label>
        <div className={styles.select_arrow} id="select_arrow"></div>
      </div>
      <div className={styles.options} id="options">
        {props.data.map((item, i) => (
          <li key={i} onClick={select}>
            {item}
          </li>
        ))}
      </div>
      <div className={styles.select_error}>
        {props.error ? props.error : null}
      </div>
      <style jsx>{`
        .select-arrow-down {
          border-color: transparent transparent #19b853 transparent;
          top: 15px;
        }
        .label-focus {
          color: #20212488;
          font-size: 12px;
          top: -2px;
        }
        #label-focus {
          color: #20212488;
          font-size: 12px;
          top: -2px;
        }
        .zIndex3 {
          z-index: 3;
        }
        .display-block {
          display: block;
        }
        #select_div {
          width: ${props.width} !important;
        }
        @media screen and (max-width: 1024px) {
          .label-focus{
            top: -3px !important;
          }
          .select-arrow-down{
            top: 10.5px !important
          }
        }
        @media screen and (min-width: 768px) and (max-width: 925px){
          .label-focus {
            font-size: 10px !important;
          }
          .select-arrow-down{
            top: 8.5px !important
          }
        }
      `}</style>
    </div>
  );
}

export { Select };