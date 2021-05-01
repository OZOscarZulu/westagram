import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: "",
      pwValue: "",
    };
  }

  handleIdInput = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  };

  handlePwInput = (event) => {
    this.setState({
      pwValue: event.target.value,
    });
  };

  // handleInput = (e) => {
  //   const input = e.target.className[0];
  //   this.setState({
  //     [input]: e.target.value,
  //   });
  // };

  goToMain = () => {
    this.props.history.push("/Main");
  };

  testGo = () => {
    fetch("api주소", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.nameValue,
        password: this.state.pwValue,
      }),
    })
      .then((response) => response.json())
      // .then((res) => this.testJoin(res));
      .then((res) => this.testLogin(res));
  };

  testJoin = (res) => {
    if (res.message === "SUCCESS") {
      alert("회원가입 추카");
    } else {
      alert("g회원가입 실패염");
    }
  };

  testLogin = () => {
    this.goToMain();
  };

  render() {
    return (
      <div className="logInmainPage">
        <h1>westagram</h1>
        <div className="inputContainer">
          <input
            onChange={this.handleIdInput}
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            className="userPassword"
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <button
          className={
            this.state.nameValue.includes("@") && this.state.pwValue.length > 5
              ? "loginButton activeBtn"
              : "loginButton inactiveBtn"
          }
          type="button"
          // onClick={this.testGo}
          onClick={this.goToMain}
        >
          로그인
        </button>

        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default withRouter(Login);
