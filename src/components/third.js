import React from "react";
import { withRouter } from "react-router-dom";

const Third = ({history}) => {

  return (
    <div>the third component
      <div>
        <button onClick={() => history.push(`/third/${1}`)}>1</button>
        <button onClick={() => history.push(`/third/${2}`)}>2</button>
        <button onClick={() => history.push(`/third/${3}`)}>3</button>
      </div>
    </div>
  );
};


/*
* withRouter - HOC для передачи компоненту объект react router
*/

export default withRouter(Third);
