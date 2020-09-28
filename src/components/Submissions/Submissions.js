import React, {Component} from "react";

class Submission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submissions: []
    };

  }
  mapStateToProps = (state, { params }) => {
    debugger
    const rootPage = params.rootPage || '';
    return {
      users: state.users,
      rootPage
     }
  }
  render() {
    return (
      <div onClick={this.getData} >
      <p>Recive submissions</p>
      </div>
    );
  }
 
}



export default Submission;
