import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Comment from "../Comment/comment";
import COMMENT from "../commentData";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: "",
    };
  }

  componentDidMound() {
    this.setState({
      commentList: COMMENT
    });
  }

  handleChange = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = () => {
    this.setState({
      commentList: [
        ...this.state.commentList,
        { id: Date.now(), userName: "Oscar", content: this.state.commentValue },
      ],
      commentValue: "",
    });
  };

  render() {
    return (
      <div className="maincontainer">
        <header>
          <Nav />
        </header>
        <div className="mainPage">
          <div className="feeds">
            <img
              alt="follow"
              src="https://images.unsplash.com/photo-1525874684015-58379d421a52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGl0YWx5JTIwc3BhaW4lMjBzcXVhcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <img
              alt="follow"
              src="https://images.unsplash.com/photo-1489401645581-907b695b9bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGl0YWx5JTIwZmxvcmVuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <img
              alt="follow"
              src="https://images.unsplash.com/photo-1529688499411-262f191fe29e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Z2VsYXRvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <img
              alt="follow"
              src="https://images.unsplash.com/photo-1553632544-9bae92ffb225?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGl0YWx5JTIwdG9zY2FuYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <img
              alt="follow"
              src="https://images.unsplash.com/photo-1424161318821-cb73e69b9422?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGl0YWx5JTIwdG9zY2FuYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <img
              alt="follow"
              src="https://images.unsplash.com/photo-1495563893439-5e257f2bc3ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHNwYWluJTIwdG9sZWRvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <img
              alt="follow"
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FudG9yaW5pfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="article">
            <div className="articleUser">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1523590564318-491748f70ea7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9uJTIwZXllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <span>iamtototo</span>
              <p>Venezia Ponte di Rialto</p>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="articleMainImg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGl0YWx5JTIwc3BhaW4lMjBzcXVhcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>

            <div className="articleCommentsContain">
              <div className="articleWrite">
                <ul>
                  <Comment commentList={this.state.commentList} />
                </ul>
              </div>
              <div className="articleContent">
                <form onSubmit={this.addComment}>
                  <input
                    onChange={this.handleChange}
                    className="newContent"
                    type="text"
                    placeholder="댓글 달기..."
                    value={this.state.commentValue}
                  />
                </form>
                <button className="newContentBtn" onClick={this.addComment}>
                  게시
                </button>
              </div>
            </div>
          </div>
          <div className="mainRight">boxxx</div>
        </div>
      </div>
    );
  }
}

export default Main;
