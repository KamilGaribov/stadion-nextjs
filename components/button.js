import styles from "../styles/components/button.module.css";

function Button(props) {
  const button = (e) => {
    // alert("S")
  };
  return (
    <button onClick={props.clickEvent} className={styles.button} id={props.id}>
      {props.icon ? (
        <div className={styles.btn_icon}>
          <img src={`../../static/icons/${props.icon}.png`} />
        </div>
      ) : null}
      <div className={styles.btn_title} id="btn_title">{props.title}</div>
      <style jsx>{`
        #contained {
          width: ${props.width} !important;
          background-color: #19b853;
          color: white;
        }
        #outlined {
          width: ${props.width} !important;
          background-color: white;
          color: #19b853;
          border: 1px solid #19b853;
        }
        #text {
          width: ${props.width} !important;
          background-color: white;
          color: #19b853;
        }
        #btn_title{
          width: ${props.icon ? "auto" : "100%"};
          justify-items: ${props.icon ? "left" : "center"};
          padding-left: ${props.icon ? null : "20px"};
        }
      `}</style>
    </button>
  );
}

export { Button };
