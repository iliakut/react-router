import React from "react";
import FourthItem from "./fourthItem";
import { withRouter } from "react-router-dom";

const Fourth = ({ history, match }) => {
  const { id } = match.params;
  return (
    <div>
      the fourth component<br/>
      <div>
        <button onClick={() => history.push('1')}>1</button>
        <button onClick={() => history.push('2')}>2</button>
        <button onClick={() => history.push('3')}>3</button>
      </div>
      <FourthItem id={id}/>
    </div>
  );
};

export default withRouter(Fourth);
