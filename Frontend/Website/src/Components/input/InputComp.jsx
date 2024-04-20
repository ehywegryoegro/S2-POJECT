import React from 'react';
import './InputComp.scss';

export default function InputComp(props) {
  return (
    <>
      <input defaultValue={props.value} type={props.type} name={props.name} id={props.id} className={`input-component ${props.className}`} placeholder={props.placeholder} />
    </>
  )
}
