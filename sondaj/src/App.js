import React, { Component } from "react";
import Rezultat from "./rezultat";
import Formular from "./formular";
import Detalii from "./detalii";
import { Route } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chestionari: [
        {
          id: 1,
          animal: "Caine",
          rasa: "Canis",
          informatii: "dresat panala maturitate",
          detalii: "placut de toata lumea"
        },
        {
          id: 2,
          animal: "Pisica",
          rasa: "Birmaneza",
          informatii: "Foarte jucausa",
          detalii: "placuta de toata lumea"
        },
        {
          id: 3,
          animal: "Papagal",
          rasa: "Pelus",
          informatii: "Foarte povestitor",
          detalii: "este compania ideala"
        }
      ]
    };

    this.adaugaChestionar = this.adaugaChestionar.bind(this);
    this.stergeChestionar = this.stergeChestionar.bind(this);
  }

  adaugaChestionar(che) {
    const { chestionari } = this.state;
    var sirChe = chestionari;
    sirChe.push({
      id: sirChe.length ? sirChe[sirChe.length - 1].id + 1 : 1,
      animal: che.animal,
      rasa: che.rasa,
      informatii: che.informatii,
      detalii: che.detalii
    });
    this.setState({ chestionari: sirChe });
    localStorage.setItem("sondaj", JSON.stringify(sirChe));
  }

  stergeChestionar(ev) {
    const idSup = parseInt(ev.target.id); //  id e convertit in intreg
    const { chestionari } = this.state;
    const sirChe = chestionari.filter(item => {
      return item.id !== idSup;
    });
    this.setState({ chestionari: sirChe });
    localStorage.setItem("sondaj", JSON.stringify(sirChe));
  }
  componentDidMount() {
    if (localStorage.getItem("sondaj")) {
      this.setState({
        chestionari: JSON.parse(localStorage.getItem("sondaj"))
      });
    } else {
      this.setState({ chestionari: [] });
    }
  }

  render() {
    return (
      <div className="container">
        <MDBNavbar color="green" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Chestionar</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Rezultat chestionare</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/adauga">Adauga</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/detalii">Detalii</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
        <Route
          exact
          path="/"
          render={props => (
            <Rezultat
              {...props}
              chestionari={this.state.chestionari}
              stergeChestionar={this.stergeChestionar}
            />
          )}
        />
        <Route
          path="/adauga"
          render={props => (
            <Formular {...props} adaugaChestionar={this.adaugaChestionar} />
          )}
        />
        <Route path="/detalii" component={Detalii} />
      </div>
    );
  }
}

export default App;
