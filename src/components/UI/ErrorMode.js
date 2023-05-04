import React,{Fragment} from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const ErrorMode = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
  };
  const OverLay = (props) => {
    return (
      <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>OKAY</Button>
      </footer>
    </Card>
    );
  };
  return (
    <Fragment>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={props.onConfirm} />,
      document.getElementById("backdrop_root")
    )}
    {ReactDOM.createPortal(
      <OverLay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />,
      document.getElementById("modal_root")
    )}
  </Fragment>
  );
};

export default ErrorMode;