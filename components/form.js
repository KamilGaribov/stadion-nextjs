import styles from "../styles/components/form.module.css";
import { Component } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Select } from "./select";
import { Checkbox } from "./checkbox";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      formErrors: {
        search: "",
        name: "",
        district: "",
      },
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.props.state.query)
    this.props.state.getData()
  };
  inputHandler = (e) => {
    const { name, value } = e.target;
    const data = ["Kamil", "Aydin"];
    let formErrors = { ...this.state.formErrors };
    var inputEl = e.target.closest("#inputEl");
    switch (name) {
      case "name":
        if (value.length != 0) {
          inputEl.querySelector("#icon2").style.opacity = "1";
          if (value.length < 3) {
            formErrors.name = "minimum 3 herf daxil edin";
            break;
          }
          if (data.includes(value)) {
            formErrors.name = "bu ad zanitdir";
          } else {
            formErrors.name = "";
            this.setState({ name: value });
          }
        } else {
          formErrors.name = "";
          inputEl.querySelector("#icon2").style.opacity = "0";
        }
        break;
      default:
        break;
    }
    this.setState({ formErrors: formErrors });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler} className={styles.form}>
        <div>
          <Input
            width="100%"
            name="search"
            label="axtar.."
            tabIndex="1"
            icon="../static/icons/search.svg"
            inputHandler={this.inputHandler}
            error={this.state.formErrors.search}
          />
        </div>
        <div>
          <Checkbox
            name="cafe"
            label="kafe"
            checkboxHandler={this.props.state.checkboxHandler}
            input={this.props.state.input.cafe}
          />
          <Checkbox
            name="park"
            label="parkinq"
            checkboxHandler={this.props.state.checkboxHandler}
            input={this.props.state.input.park}
          />
          <Checkbox
            name="cover"
            label="ortuk"
            checkboxHandler={this.props.state.checkboxHandler}
            input={this.props.state.input.cover}
          />
          <Checkbox
            name="video"
            label="video"
            checkboxHandler={this.props.state.checkboxHandler}
            input={this.props.state.input.video}
          />
        </div>
        <div>
          <Select
            data={this.props.state.district}
            width={this.props.state.width}
            name="district"
            label="rayon"
            icon="../static/icons/icons8-marker-48.png"
            error={this.state.formErrors.district}
            input={this.props.state.input.district}
            selectHandler={this.props.state.selectHandler}
          />
          <Select
            data={this.props.state.size}
            width={this.props.state.width}
            name="size"
            label="olcu"
            icon="../static/icons/size.png"
            error={this.state.formErrors.size}
            input={this.props.state.input.size}
            selectHandler={this.props.state.selectHandler}
          />
          <Select
            data={this.props.state.floor}
            width={this.props.state.width}
            name="floor"
            label="doseme"
            icon="../static/icons/grass.png"
            error={this.state.formErrors.floor}
            input={this.props.state.input.floor}
            selectHandler={this.props.state.selectHandler}
          />
          {/* </div>
        <div> */}
          <Select
            data={this.props.state.day}
            width={this.props.state.width}
            name="day"
            label="gun"
            icon="../static/icons/calendar.png"
            error={this.state.formErrors.day}
            input={this.props.state.input.day}
            selectHandler={this.props.state.selectHandler}
          />
          <Select
            data={this.props.state.hour}
            width={this.props.state.width}
            name="hour"
            label="saat"
            icon="../static/icons/clock.png"
            error={this.state.formErrors.hour}
            input={this.props.state.input.hour}
            selectHandler={this.props.state.selectHandler}
          />
          <Button width={this.state.width} title="axtar" id="contained" />
        </div>
      </form>
    );
  }
}

export { SearchForm };
