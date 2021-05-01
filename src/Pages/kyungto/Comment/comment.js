import React from "react";
import "./comment.scss";

class Comment extends React.Component {
  render() {
    return (
      <div className commentcompo>
        {this.props.commentList.map((item) => {
          return (
            <li className="commentList">
              <span>{item.userName}</span>
              <span>{item.content}</span>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Comment;