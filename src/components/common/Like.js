import React from "react";

class Like extends React.Component {
  render() {
    let classes = "fa fa-heart";
    return (
      <p>
        <i
          className={this.props.liked ? classes : classes + "-o"}
          aria-hidden="true"
          style={{ cursor: "pointer" }}
          onClick={this.props.onLike}
        />
      </p>
    );
  }
}

export default Like;
