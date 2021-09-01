
import React, {Component} from 'react';
import Button from './Button.js';
import Area from './gamearea.js';
import Reset from './reset.js';

const grp = () => {

  return Math.floor(Math.random() * 2 + 1);

}

const initialstate = {

  matrice: [["", "", ""], ["", "", ""], ["", "", ""]],
  get_value: ["", "X", "O"],
  player: grp(),
  a: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  s: " ",
  k: 0

}

class App extends Component{

  state = initialstate;

  clickTriggered = e => {

    if(this.state.s == " " && this.state.k != 9){

      this.setState({k: this.state.k + 1});

      let linie = e.target.getAttribute('data-line');
      let coloana = e.target.getAttribute('data-col');
    
      let c = Number(linie);
      let l = Number(coloana);

      let temp = this.state.matrice;
      let temp2 = this.state.a;
      temp[c - 1][l - 1] = this.state.get_value[this.state.player];
      temp2[c - 1][l - 1] = this.state.player;

      this.setState({matrice: temp});
      this.setState({a: temp2});

      if(this.state.player == 1)
        this.setState({player: 2});
      else this.setState({player: 1});
      
      this.gameover();

    }
  }


  gameover(){

    let v = this.state.a;

    if(v[0][0] != 0 && v[0][0] == v[0][1] && v[0][2] == v[0][1]){

      this.setState({s: this.state.get_value[v[0][0]]});

    }else if(v[0][0] != 0 && v[0][0] == v[1][0] && v[2][0] == v[1][0]){

      this.setState({s: this.state.get_value[v[0][0]]});

    }else if(v[2][2] != 0 && v[2][2] == v[1][2] && v[0][2] == v[1][2]){

      this.setState({s: this.state.get_value[v[2][2]]});

    }else if(v[2][2] != 0 && v[2][2] == v[2][1] && v[2][0] == v[2][1]){

      this.setState({s: this.state.get_value[v[2][2]]});

    }else if(v[1][0] != 0 && v[1][0] == v[1][2] && v[1][1] == v[1][2]){

      this.setState({s: this.state.get_value[v[1][0]]});

    }else if(v[0][1] != 0 && v[0][1] == v[1][1] && v[2][1] == v[1][1]){

      this.setState({s: this.state.get_value[v[0][1]]});

    }else if(v[0][0] != 0 && v[0][0] == v[1][1] && v[2][2] == v[1][1]){

      this.setState({s: this.state.get_value[v[0][0]]});

    }else if(v[0][2] != 0 && v[0][2] == v[1][1] && v[2][0] == v[1][1]){

      this.setState({s: this.state.get_value[v[0][2]]});

    }

  }

  clickreset = () => {

    let m = [["", "", ""], ["", "", ""], ["", "", ""]];
    let gv = ["", "X", "O"];
    let a2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    this.setState({matrice: m});
    this.setState({get_value : gv});
    this.setState({player: grp()});
    this.setState({a: a2});
    this.setState({s: " "});
    this.setState({k: 0});

  }


  render(){

    return(

      <div className = "App">

        <p>
          Player: {this.state.get_value[this.state.player]}
        </p>

        <p>
          Winner : {this.state.s}
        </p>

        <Reset onClick = {this.clickreset} />

      <Area>

          <div>
        <Button onClick = {this.clickTriggered} line = "1" col = "1" symbol = {this.state.matrice[0][0]} />
        <Button onClick = {this.clickTriggered} line = "1" col = "2" symbol = {this.state.matrice[0][1]} />
        <Button onClick = {this.clickTriggered} line = "1" col = "3" symbol = {this.state.matrice[0][2]} />
          </div>

          <div>
        <Button onClick = {this.clickTriggered} line = "2" col = "1" symbol = {this.state.matrice[1][0]} />
        <Button onClick = {this.clickTriggered} line = "2" col = "2" symbol = {this.state.matrice[1][1]} />
        <Button onClick = {this.clickTriggered} line = "2" col = "3" symbol = {this.state.matrice[1][2]} />
          </div>


          <div>
        <Button onClick = {this.clickTriggered} line = "3" col = "1" symbol = {this.state.matrice[2][0]} />
        <Button onClick = {this.clickTriggered} line = "3" col = "2" symbol = {this.state.matrice[2][1]} />
        <Button onClick = {this.clickTriggered} line = "3" col = "3" symbol = {this.state.matrice[2][2]} />
          </div>


      </Area>

      </div>

    );

  }

}

export default App;