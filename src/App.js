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
      value1 : 1 ,  value2 : 2 , value3 : 3,
      value4 : 4 ,  value5 : 5 , value6 : 6,
      value7 : 7 ,  value8 : 8 , value0 : 0,
      status : "Click Start to begin the game."
    };

    this.handleStart = this.handleStart.bind(this);
    this.checkWin = this.checkWin.bind(this);
    ArrowKeysReact.config({
      left: () => {
        console.log('left key detected.');
      },
      right: () => {
        console.log('right key detected.');
      },
      up: () => {
        console.log('up key detected.');
      },
      down: () => {
        console.log('down key detected.');
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

    const checkValue0 =  this.state.value0, checkValue1 = this.state.value1, checkValue2 = this.state.value2,
    checkValue3 = this.state.value3, checkValue4 = this.state.value4, checkValue5 = this.state.value5,
    checkValue6 = this.state.value6, checkValue7 = this.state.value7, checkValue8 = this.state.value8;
    
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

    console.log(collection);

    this.setState({
      value1: collection[1], value2: collection[2], value3: collection[3],
      value4: collection[4], value5: collection[5], value6: collection[6],
      value7: collection[7], value8: collection[8], value0: collection[0],
      status: ' '
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
              {this.state.value1}
          </Col>
            <Col sm={3}>
            {this.state.value2}
          </Col>
            <Col sm={3}>
            {this.state.value3}
          </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col sm={3}>
            {this.state.value4}
          </Col>
            <Col sm={3}>
            {this.state.value5}
          </Col>
            <Col sm={3}>
            {this.state.value6}
          </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col sm={3}>
            {this.state.value7}
          </Col>
            <Col sm={3}>
            {this.state.value8}
          </Col>
            <Col sm={3}>
            {this.state.value0}
          </Col>
          </Row>
        </Container>
        <button className="App-switch" onClick = {this.checkWin}>
          Submit
        </button>
        <button className="App-switch" onClick = {this.handleStart}>
          Start
        </button>
        <p>{this.state.status}</p>
      </div>
    );

  }
}

export default App;
