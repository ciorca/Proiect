import React, { Component } from "react";
import Chestionar from "./chestionar";

class Rezultat extends Component {
  render() {
    const lista = this.props.chestionari.map(item => (
      <Chestionar
        key={item.id}
        id={item.id}
        animal={item.animal}
        informatii={item.informatii}
        rasa={item.rasa}
        detalii={item.detalii}
        stergeChestionar={this.props.stergeChestionar}
      />
    ));
    return (
      <div>
        <h2 className="text-center">Chestionarul</h2>
        <hr />
        {lista}
      </div>
    );
  }
}

export default Rezultat;
