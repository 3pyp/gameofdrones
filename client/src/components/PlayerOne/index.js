import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";
import addWeapon from "../../redux/actions/addWeapon";

class PlayerOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weapon: ""
    };
  }

  onReady = () => {
    const weapon = {
      weapon_player_one: this.state.weapon
    }
    this.props.addWeapon(weapon)
    this.props.history.push('/p2')
  };

  chooseWeapon = e => {
    const element = e.target;
    const lastSelected = document.getElementsByClassName("scaled")[0];
    if (lastSelected) {
      lastSelected.classList.remove("scaled");
    }
    element.parentElement.className += " scaled";
    this.setState({
      weapon: element.alt
    });
  };

  render() {
    return (
      <Page
        player_name={this.props.players[0].player_one}
        player_weapon={this.state.weapon}
        onReady={this.onReady}
        chooseWeapon={this.chooseWeapon}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    players: state.Players
  };
};
const mapDispatchToProps = {
  addWeapon
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerOne);
