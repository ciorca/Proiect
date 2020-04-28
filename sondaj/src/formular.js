import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";

class Formular extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      animal: "",
      rasa: "",
      informatii: "",
      detalii: "",
      id: 0
    };

    //  Initializez obiectul "state"
    this.state = this.initialState;

    //  Functii de tratare a evenimentelor "change" si "submit"
    this.handleChange = this.handleChange.bind(this);
    this.adaugaChestionar = this.adaugaChestionar.bind(this);
  }
  handleChange(ev) {
    const { name, value } = ev.target;

    this.setState({
      [name]: value
    });
  }
  adaugaChestionar() {
    this.props.adaugaChestionar(this.state);
    this.setState(this.initialState); // Golesc formularul
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Chestionarul</h2>

        <form className="mx-3 black-text">
          <MDBInput
            name="animal"
            label="Animal"
            icon="paw"
            hint=""
            group
            type="text"
            value={this.state.animal}
            onChange={this.handleChange}
          />
          <MDBInput
            name="rasa"
            label="Rasa"
            icon="dog"
            hint=""
            group
            type="text"
            value={this.state.rasa}
            onChange={this.handleChange}
          />
          <MDBInput
            name="informatii"
            label="Informatii persoana chestionata"
            icon="users"
            group
            type="textarea"
            value={this.state.informatii}
            onChange={this.handleChange}
          />
          <MDBInput
            name="detalii"
            label="Detalii alegere"
            icon="sticky-note"
            group
            type="textarea"
            value={this.state.detalii}
            onChange={this.handleChange}
          />
          <div className="text-center">
            <MDBBtn color="green" onClick={this.adaugaChestionar}>
              Adaugă
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default Formular;
