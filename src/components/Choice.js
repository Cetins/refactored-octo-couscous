import React from "react";
import {useParams} from "react-router-dom"

const Choice = () => {

  const {wildcard} = useParams()

  return(
    <>
      <h1>Choice</h1>
      <p>You're on page {wildcard}</p> 
    </>
  )
}

export default Choice;