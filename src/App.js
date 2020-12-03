import React,{useState} from "react";
import Icons from "./components/Icons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";


const itemArray = new Array(9).fill("empty");
function App() {

  const [IsCross, setIsCross] = useState(false);
  const [WinMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);
  };

  const checkIsWinner = () => {
    //
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
