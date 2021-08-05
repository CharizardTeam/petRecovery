import React from 'react';
import '../GetStarted/getstarted.css';

export default function GetStarted() {
  return (
    <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Fill Out Our Form</h2>
      <p>Answer 8 simple questions about the pet you lost/found</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box red">
      <h2>Find A Match</h2>
      <p>We'll search out database for a match</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down blue">
      <h2>Get Notified</h2>
      <p>If no match is found, we will alert you as soon as there is a match</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  )
}
