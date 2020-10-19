import React, { Component } from "react";
import { useRouter } from "next/router";

const NoteContext = React.createContext();

class NoteProvider extends Component {
  state = {
    data: this.props.stars.slice(0, 8),
    query: "?",
    width: "100%",
    district: [
      null,
      "Nizami",
      "Xetai",
      "Yasamal",
      "Nerimanov",
      "Sebail",
      "Bineqedi",
    ],
    size: [null, "5vs5", "6vs6", "7vs7", "11vs11"],
    floor: [null, "ot", "xalca", "rezin", "taxta"],
    day: [
      null,
      "bazar ertəsi",
      "çərşənbə axşamı",
      "çərşənbə",
      "cümə axşamı",
      "cümə",
      "şənbə",
      "bazar",
    ],
    hour: [
      null,
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ],
    input: {
      district: "",
      size: "",
      floor: "",
      day: "",
      hour: "",
      cafe: false,
      park: false,
      cover: false,
      video: false,
    },
    selectHandler: (input) => {
      const { name, value } = input;
      let formInput = { ...this.state.input };
      switch (name) {
        case "district":
          if (value) {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.district}&`
              ) != -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.district}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.district}&`
              ) != -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.district}&`,
                  ""
                ),
              });
            }
          }
          formInput.district = value;
          break;
        case "size":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.size}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.size}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.size}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.size}&`,
                  ""
                ),
              });
            }
          }
          formInput.size = value;
          break;
        case "floor":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.floor}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.floor}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.floor}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.floor}&`,
                  ""
                ),
              });
            }
          }
          formInput.floor = value;
          break;
        case "day":
          formInput.day = value;
          break;
        case "hour":
          formInput.hour = value;
          break;
      }
      this.setState({ input: formInput });
    },
    checkboxHandler: (input) => {
      const { name, value } = input;
      let formInput = { ...this.state.input };
      switch (name) {
        case "cafe":
          if (formInput.cafe == false) {
            this.setState({ query: this.state.query + `${name}=on` + "&" });
          } else {
            this.setState({
              query: this.state.query.replace(`${name}=on&`, ""),
            });
          }
          formInput.cafe = !formInput.cafe;
          break;
        case "park":
          if (formInput.park == false) {
            this.setState({ query: this.state.query + `${name}=on` + "&" });
          } else {
            this.setState({
              query: this.state.query.replace(`${name}=on&`, ""),
            });
          }
          formInput.park = !formInput.park;
          break;
        case "cover":
          if (formInput.cover == false) {
            this.setState({ query: this.state.query + `${name}=on` + "&" });
          } else {
            this.setState({
              query: this.state.query.replace(`${name}=on&`, ""),
            });
          }
          formInput.cover = !formInput.cover;
          break;
        case "video":
          if (formInput.video == false) {
            this.setState({ query: this.state.query + `${name}=on` + "&" });
          } else {
            this.setState({
              query: this.state.query.replace(`${name}=on&`, ""),
            });
          }
          formInput.video = !formInput.video;
          break;
      }
      this.setState({ input: formInput });
    },
    getData: () => {
      fetch(`http://192.168.31.51:8000/api/stadion/${this.state.query}`)
        .then((res) => res.json())
        .then((result) => {
          // this.setState({ query: "?" });
          this.setState({ data: result });
        })
        .catch((error) => alert("fetch error: ", error));
    },
    setDirectLeft: () => {
      var rect = document
        .querySelector("#wrapper")
        .getBoundingClientRect();
      var width = window.innerWidth;
      setTimeout(function(){
        directLeft = +(width / 100) * 7.5 + (-rect.left - width * 3) + "px";
      }, 200)
    },
  };
  render() {
    return (
      <NoteContext.Provider
        value={{ state: this.state }}
        context={"test"}
        state={this.state}
      >
        {this.props.children}
      </NoteContext.Provider>
    );
  }
}

const NoteConsumer = NoteContext.Consumer;

export default NoteProvider;
export { NoteConsumer };

NoteProvider.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:8000/api/stadion/");
  const json = await res.json();

  const res1 = await fetch("http://localhost:8000/api/user/");
  const json1 = await res1.json();
  if (ctx.query) {
    var query = ctx.query;
  } else {
    var query = "bosh";
  }
  return { stars: json, query: ctx.query, user: json1 };
};
