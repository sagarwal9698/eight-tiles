import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import ArrowKeysReact from 'arrow-keys-react';
import shuffle from 'shuffle-array';


function customShuffle(collection) {
  // TODO: Write custom logic to shuffle this collection
  return shuffle(collection);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : [0, 1, 2, 3, 4, 5, 6, 7, 8], index :9,
      status : "Click Start to begin the game."
    };

    this.handleStart = this.handleStart.bind(this);
    this.checkWin = this.checkWin.bind(this);
    ArrowKeysReact.config({
      left: () => {
        console.log('left key detected.');

        // Index at which the command will not be accepted: 3,6,9

        var i = this.state.index;

        if(i === 3 || i=== 6 || i === 0){
          this.setState({ status: "Invalid Move"});
        }
        else{
          var temp = this.state.value;
          var temp1 = temp[i];
          temp[i] =  temp[i+1];
          temp[i+1] = temp1;

          this.setState({ value : temp,  index : i+1});


        }


      },
      right: () => {
        console.log('right key detected.');
        // Index at which the command will not be accepted: 1,4,7

        var i = this.state.index;

        if(i === 1 || i=== 4 || i === 7){
          this.setState({ status: "Invalid Move"});
        }
        else{
          var temp = this.state.value;
          var temp1 = temp[i];
          temp[i] =  temp[i-1];
          temp[i-1] = temp1;

          this.setState({ value : temp,  index : i-1});


        }
      },
      up: () => {
        console.log('up key detected.');
        // Index at which the command will not be accepted: 789
        var i = this.state.index;


        if(i === 1 || i=== 2 || i === 3){
          this.setState({ status: "Invalid Move"});
        }
        else{
          var temp = this.state.value;
          var temp1 = temp[i];
          temp[i] =  temp[i-3];
          temp[i-3] = temp1;

          this.setState({ value : temp,  index : i-3});


        }
      },
      down: () => {
        console.log('down key detected.');
        // Index at which the command will not be accepted: 123

        var i = this.state.index;


        if(i === 7 || i=== 8 || i === 0){
          this.setState({ status: "Invalid Move"});
        }
        else{
          var temp = this.state.value;
          var temp1 = temp[i];
          temp[i] =  temp[i+3];
          temp[i+3] = temp1;

          this.setState({ value : temp,  index : i+3});


        }
      }
    });
  } 

  // randomizer(){
  //   const max = 8;
  //   const min = 0;

  //   var newNum =  Math.floor(Math.random()*(max-min+1)+min);

  // }

  // handleStart(){
  //   this.setState({
  //     value1 : this.randomizer() ,  value2 : this.randomizer() , value3 : this.randomizer(),
  //     value4 : this.randomizer() ,  value5 : this.randomizer() , value6 : this.randomizer(),
  //     value7 : this.randomizer() ,  value8 : this.randomizer() , value9 : this.randomizer(),
    

  //   });
  // }

  checkWin() {

    const checkValue0 =  this.state.value[0], checkValue1 = this.state.value[1], checkValue2 = this.state.value[2],
    checkValue3 = this.state.value[3], checkValue4 = this.state.value[4], checkValue5 = this.state.value[5],
    checkValue6 = this.state.value[6], checkValue7 = this.state.value[7], checkValue8 = this.state.value[8];
    
    this.handleStart();

    if(checkValue0 === 0 && checkValue1 === 1 && checkValue2 === 2 &&
      checkValue3 === 3 && checkValue4 === 4 && checkValue5 === 5 &&
      checkValue6 === 6 && checkValue7 === 7 && checkValue8 ===8){
        
      this.setState({status : "You Win!!!"});
    }

    else{
      this.setState({status : "You Loose!!!"});

    }
  }


  handleStart() {
    const collection = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    customShuffle(collection);

    var i =0;

    for(i =0; i<=8; i++){

      if(collection[i] === 0){
        this.setState({index : i});
      }
    }

    console.log(collection);

    this.setState({
      value : collection,   status: ' '
    });
  }




  render() {
    return (
      <div className="App"  {...ArrowKeysReact.events} tabIndex="1">
        <header className="App-header">
          8 - Tiles
      </header>
        <Container className="App-container">
          <br></br>
          <Row>
            <Col sm={3}>
              {this.state.value[1]}
          </Col>
            <Col sm={3}>
            {this.state.value[2]}
          </Col>
            <Col sm={3}>
            {this.state.value[3]}
          </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col sm={3}>
            {this.state.value[4]}
          </Col>
            <Col sm={3}>
            {this.state.value[5]}
          </Col>
            <Col sm={3}>
            {this.state.value[6]}
          </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col sm={3}>
            {this.state.value[7]}
          </Col>
            <Col sm={3}>
            {this.state.value[8]}
          </Col>
            <Col sm={3}>
            {this.state.value[0]}
          </Col>
          </Row>
        </Container>
        <button className="App-switch" onClick = {this.checkWin}>
          Submit
        </button>
        <button className="App-switch" onClick = {this.handleStart}>
          Start
        </button>
        <p>{this.state.status}
        {this.state.index}
        </p>
      </div>
    );

  }
}

export default App;
