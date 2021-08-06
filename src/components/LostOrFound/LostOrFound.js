import React from "react";
import "../LostOrFound/lostorfound.css";
import dog from "../../images/02-bull-dog.png";
import cat from "../../images/17-persian.png";
import { Link } from "react-router-dom";

export default function LostOrFound() {
  return (
    //     <Container className='Button-Container'>
    // <Cardbox/>
    // <Cardbox/>
    //     </Container>
    <div class="container flex justify-center">
      <Link to={"/lost-pet"}>
        <div class="card">
          <div class="boxes">
            <div class="content">
              <h2>Lost</h2>
              <h3>I Lost My Pet</h3>
              <img src={dog} alt="dog" class="img-responsive" />
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/found-pet"}>
        <div class="card">
          <div class="boxes">
            <div class="content">
              <h2>Found</h2>
              <h3>I Found a Pet</h3>
              <img src={cat} alt="dog" class="img-responsive" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
