import React from 'react'
import { CrowdFunding } from '../Components/CrowdFunding'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import { SlideShow } from '../Components/SlideShow'


const Homepage = () => {
  return (
    <>

      <ImageSlider />

      <div style={{ border: "1px solid black", height: "auto", width: "80%", margin: "auto", marginTop: "10px" }}>
        {/* <div>
      <CrowdFunding/>
      </div> */}
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <div style={{  height: "auto",paddingRight:"10px", paddingBottom:"30px" }}>
            <img width="100%" height="370px"
              src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1662136854/nhkvaqdmlktaxz7cvj4e.jpg"
              alt="cleverse image"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>Our roundup of standup projects</b>
              <b style={{ fontSize: "Small" }}>SEE THE COLLECTION &#10095; </b>
            </div>
          </div>
          <div style={{  height: "auto" ,paddingLeft:"10px" }}><img width="100%" height="370px"
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1663952221/rgdqm0maw6xfl0qmkuxf.png"
          />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>OEPLAY & more team favorites</b>
              <b style={{ fontSize: "Small" }}>SEE THE COLLECTION &#10095; </b>
            </div>
          </div>
          <div style={{  height: "auto",paddingRight:"10px", paddingBottom:"30px" }}><img width="100%" height="370px"
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png"
            alt="cleverse image"
          />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>Check out these innovative steal</b>
              <b style={{ fontSize: "Small" }}>SEE THE COLLECTION &#10095; </b>
            </div>
          </div>
          <div style={{  height: "auto",paddingLeft:"10px" }}><img width="100%" height="370px"
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1659985896/hugs8qpmkxx1uvwalnz4.jpg"
          />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>These campaigns could be in your hands quickly</b>
              <b style={{ fontSize: "Small" }}>SEE THE COLLECTION &#10095; </b>
            </div>
          </div>
        </div>

        <div style={{height: "auto", width: "100%" }}>
          <center>
            <h3 >Which categories interest you?</h3>
          </center>
          <center style={{ color: "rgb(99, 98, 98)" }}>
            Discover projects just for you and get great recommendations when you select your interests.
            <br />
            Or explore our top categories
          </center>
        </div>



        <div style={{  width: "100%", display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <div style={{ height: "130px" }}>
            <img height="80%"
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5462376.jpg"
              alt="Home"
            />
            <div>Home</div>
          </div>
          <div style={{ height: "130px" }}>
            <img height="80%" width="100px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65vKrYldm09kL4qG6EwRAaekumOkrJtAAjg&usqp=CAU"
              alt="Home"
            />
            <p>Phone</p>
          </div>
          <div style={{ height: "130px" }}>
            <img height="80%" width="100px"
              src="https://m.media-amazon.com/images/I/61ImmGPnU7L._AC_UL320_.jpg"
              alt="Home"
            />
            <p>Travel</p>
          </div>
          <div style={{ height: "130px" }}>
            <img height="80%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2Jy3xuaVIWqTmz4KgKw3tBFwKGcS-GlVhmikdYp3tXMFN7xx6cagIGA8trYm7uzWl9Q&usqp=CAU"
              alt="Home"
            />
            <p>Health</p>
          </div>
          <div style={{ height: "130px" }}>
            <img height="80%" width="100px"
              src="https://media.gettyimages.com/photos/rendering-pink-headphones-isolated-on-pink-background-picture-id1051749898?b=1&k=6&m=1051749898&s=170667a&w=0&h=G1P-TDYGCjxwF-yuJ-nKRsHHVn0ROGbwle7jsKf71BM="
              alt="Home"
            />
            <p>Audio</p>
          </div>
          <div style={{ height: "130px" }}>
            <img height="80%"
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6157262.jpg"
              alt="Home"
            />
            <p>Film</p>
          </div>
        </div>


      <div>
        <SlideShow/>
      </div>







      </div>

    </>
  )
}

export default Homepage