import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
class Chestionar extends Component {
  render() {
    return (
      <>
        <h4>
          {this.props.animal} - {this.props.rasa}
        </h4>
        <h6>
          informatii: {this.props.informatii}
          detalii:{this.props.detalii}
          <MDBBtn
            color="green"
            className="float-right"
            id={this.props.id}
            onClick={this.props.stergeChestionar}
          >
            Șterge
          </MDBBtn>
        </h6>
        <p>Detalii: {this.props.detalii}</p>
        <hr />
      </>
    );
  }
}

export default Chestionar;
