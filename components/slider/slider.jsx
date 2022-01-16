
import Slider from "react-slick";
import React,{ useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export const CustomSlider = ()=>{
    let sliderOnClick = null;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: false,
      prevArrow: false,
      
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ],
    appendDots: (dots) => (
      <div>
      <div
      className="d-none d-md-flex"
        style={{
            margin:"-60px 0",
          display: "flex",
          justifyContent: "end",
          alignItems: "center"
        }}
      >
        
        <button type="button" className="btn btn-success rounded-pill me-3 d-flex">
            <div className="rounded-circle bg-white me-2">
          
        <HiChevronLeft
          className="chevronLeft"
          style={{ cursor: "pointer",color:"#8bac3e" }}
          size="30"
          onClick={() => sliderOnClick.slickPrev()}
        />      
          </div>
        PREV
            </button>
        <button type="button" className="btn btn-success rounded-pill d-flex">
              NEXT 
              <div className="rounded-circle bg-white ms-2">
        <HiChevronRight
          className="chevronRight"
          style={{ cursor: "pointer",color:"#8bac3e" }}
          size="30"
          onClick={() => sliderOnClick.slickNext()}
        />
        </div>
            </button>
      </div></div>
      )
    };

    const RevCard=({backgroundColor="#f0feeb",icon=null,title="Pizza",itemCount="22"})=>(
        <>
        <div className="kategori p-5 justify-content-center text-dark me-3 text-center"
        style={{
            backgroundColor,
            height:'fit-content',
            borderRadius:'17px !important'
        }}
        ><img style={{
                display:'initial'
            }} src={icon}/>
        <h6>{title}</h6>
        <p>{itemCount} items</p>
        </div>
        </>
      )
        const data = [
            {
                backgroundColor:"#f0feeb",
                icon:'/assets/img/cupcake.png',
                title:'cupcake',
                itemCount:22
            },
            {
                backgroundColor:"#e6f3f5",
                icon:'/assets/img/pizza%201.png',
                title:'cupcake',
                itemCount:22
            },
            {
                backgroundColor:"#eaeefa",
                icon:'/assets/img/kebab%201.png',
                title:'cupcake',
                itemCount:22
            },
            {
                backgroundColor:"#f9eef3",
                icon:'/assets/img/salmon%201.png',
                title:'cupcake',
                itemCount:22
            },
            {
                backgroundColor:"#f3f7d9",
                icon:'/assets/img/pizza%201.png',
                title:'cupcake',
                itemCount:22
            },
            {
                backgroundColor:"#f0feeb",
                icon:'/assets/img/kebab%201.png',
                title:'cupcake',
                itemCount:22
            },
            {
                backgroundColor:"#f0feeb",
                icon:'/assets/img/salmon%201.png',
                title:'cupcake',
                itemCount:22
            }
        ]
    return(
        
        <Slider
        className="review-slider" ref={(c) => (sliderOnClick = c)} {...settings}>
           { data.map((dataprop,idx)=>(
               <div key={idx}>
               <RevCard {...dataprop}/></div>
           ))}
        </Slider>
    )
}