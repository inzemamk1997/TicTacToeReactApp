import React,{useState} from "react";
import Icons from "./components/Icons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";


const itemArray = new Array(9).fill("empty");
const App = () => {

  const [IsCross, setIsCross] = useState(false);
  const [WinMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);
  };

  const checkIsWinner = () => {
    if(itemArray[0]!=="empty" && itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2]){
      setWinMessage(`${itemArray[0]} wins`);
    }else if(itemArray[3]!=="empty" && itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5]){
      setWinMessage(`${itemArray[3]} wins`);
    }else if(itemArray[6]!=="empty" && itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8]){
      setWinMessage(`${itemArray[6]} wins`);
    }else if(itemArray[0]!=="empty" && itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6]){
      setWinMessage(`${itemArray[0]} wins`);
    }else if(itemArray[1]!=="empty" && itemArray[1]===itemArray[4] && itemArray[1]===itemArray[7]){
      setWinMessage(`${itemArray[1]} wins`);
    }else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[5] && itemArray[2]===itemArray[8]){
      setWinMessage(`${itemArray[2]} wins`);
    }else if(itemArray[0]!=="empty" && itemArray[0]===itemArray[4] && itemArray[0]===itemArray[8]){
      setWinMessage(`${itemArray[0]} wins`);
    }else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[4] && itemArray[4]===itemArray[2]){
      setWinMessage(`${itemArray[2]} wins`);
    }else{
      let isDraw = true;
      for(let i = 0;i<itemArray.length;i++){
        if(itemArray[i]==="empty"){
          isDraw = false;
          break;
        }
      }
      if(isDraw){
        setWinMessage("Game Draw");
      }
    }
  };

  const changeItem = (itemNumber) => {
    if (WinMessage) {
      return toast(WinMessage,{type:"success"});
    }

    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber] = (IsCross) ? "cross" : "circle";
      setIsCross(!IsCross);
    }else{
      return toast("already filled",{type:"error"});
    }
    checkIsWinner();
  };

  return (
      <Container className = "p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {WinMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-uppercase text-center text-success ">
                  {WinMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}>Reload the game</Button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {IsCross ? "Cross" : "Circle"} turns
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item,index) => (
                <Card color="warning" onClick={ () => changeItem(index)}>
                  <CardBody className="box">
                    <Icons name={item}/>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default App;
