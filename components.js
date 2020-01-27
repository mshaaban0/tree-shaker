import React, { Component, useState } from 'react';

export const FunModuleOne = () => {
  const [count, setCount] = setState(0);

  function handleClick() {
    setCount(count++)
  }

  return (
    <div>
      <button onClick={handleClick}>FunModuleOne</button>
    </div>
  )
}

export const FunModuleTwo = () => {
  const [count, setCount] = setState(0);

  function handleClick() {
    setCount(count++)
  }

  return (
    <div>
      <button onClick={handleClick}>FunModuleTwo</button>
    </div>
  )
}



export class StatefulModuleOne extends Component {
  render() {
    return(
      <div>StatefulModuleOne</div>
    )
  }
}

export class StatefulModuleTwo extends Component {
  render() {
    return(
      <div>StatefulModuleTwo</div>
    )
  }
}

