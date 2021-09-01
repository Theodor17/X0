
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
  a: [[0, 0, 0, 0, 3], [0, 0, 0, 0, 3], [0, 0, 0, 0, 3], [3, 3, 3, 3, 3]],
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
    

      if(this.state.player == 1){

        // X
        temp2[l - 1][4]++;
        temp2[3][c]++;

          if(l == c){ // diagonala principala

            temp2[3][4]++;

            if(l == 2 && c == 2)
              temp2[3][0]++;
            
          }else if(l == 4 - c) // diagoanal secundara
            temp2[3][0]++;

      }else{

        // O
        temp2[l - 1][4]--;
        temp2[3][c]--;

        if(l == c){ // diagonala principala

            temp2[3][4]--;
            
            if(l == 2 && c == 2)
              temp2[3][0]--;
            
        }else if(l == 4 - c) // diagonala secundara
          temp2[3][0]--;

      }

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

    for(let i = 0; i < 5; i++){

      if(v[3][i] == 6 || v[3][i] == 0){

        if(v[3][i] == 6)
          this.setState({s: "X"});
        else this.setState({s: "O"});

      }

    }

    for(let i = 0; i < 4; i++){

      if(v[i][4] == 6 || v[i][4] == 0){

        if(v[i][4] == 6)
          this.setState({s: "X"});
        else this.setState({s: "O"});

      }

    }

  }

  clickreset = () => {

    let m = [["", "", ""], ["", "", ""], ["", "", ""]];
    let gv = ["", "X", "O"];
    let a2 = [[0, 0, 0, 0, 3], [0, 0, 0, 0, 3], [0, 0, 0, 0, 3], [3, 3, 3, 3, 3]];

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
