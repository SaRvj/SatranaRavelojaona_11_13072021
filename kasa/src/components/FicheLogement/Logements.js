import "./accommodation.css";
import React from "react";
import Card from "../Home/Cards.js";

//Ce composant rend tous les hébergements dans les cartes pour la page principale
export default class Accommodations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    fetch("./logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Oops, quelque chose s'est mal passé");
        }
      })
      .then((data) => this.setState({ data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="gallery">
        <div className="gallery_grid">
          {this.state.data
            ? this.state.data.map((housing) => (
                <Card accommodations={this.state.data} accommodation={housing} key={housing.id} />
              ))
            : ""}
        </div>
      </div>
    );
  }
}
