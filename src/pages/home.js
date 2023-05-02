import React from "react";
import FluidGrid from 'react-fluid-grid'
import Element from "./element.js"



const Home = () => {
    return;
    <div>

    <div class="fluid_container">
    <FluidGrid>
    <Element projekti="Testiprojekti"
    image="https://cdn.pixabay.com/photo/2020/03/21/14/45/moon-4954228_1280.jpg"
    text="Tämä on minun tekeleeni vähän väsyneenä"
    link="https://unity.com/"/>
    <Element projekti="Fluidi testaus"
    image="https://i.pinimg.com/originals/d0/d5/1f/d0d51f9fdc9b71600672560da9afbff7.png"
    text="Tämä on minun tekeleeni pirteänä"
    link="https://unity.com/"/>
    </FluidGrid>
    </div>

    </div>
};

  
  export default Home;