import React, { useContext } from 'react'
import styles from './Products.module.css'
export default function Products() {

  let {counter} = useContext();
  console.log(counter);
  return (
    <div>{counter}</div>
  )
}
