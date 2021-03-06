import Head from "next/head";
import Image from "next/image";
import { TrendingCards } from "../components/cards";
import { CustomSlider } from "../components/slider";
import styles from "../styles/Home.module.css";
import { Rating } from "react-simple-star-rating";
import { InputGroup,FormControl } from "react-bootstrap";
import { IgIcon, ListIcon, MailIcon, PhoneIcon } from "../components/icons"; 
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Rubik:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section
        style={{
          backgroundImage: "url('/assets/img/pattern.png')"
        }}
      >
        <div className="container">
          <div className="d-flex flex-row justify-content-between">
            <div className="py-4">
              <img width="150" src="/assets/img/elemes-logo.png" />
            </div>
            <nav className="d-none d-md-flex navbar navbar-expand-lg navbar-light bg-transparent py-4">
              <div className="container-fluid">
                <a
                  className="text-decoration-none fw-bold text-muted px-3"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="text-decoration-none fw-bold text-muted px-3"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-decoration-none fw-bold text-muted px-3"
                  href="#"
                >
                  Promotions{" "}
                  <span
                    className="fw-normal px-2 badge bg-danger position-absolute rounded-pill"
                    style={{
                      top: "20%",
                      marginLeft: "-5%"
                    }}
                  >
                    Hot
                  </span>
                </a>
                <a
                  className="text-decoration-none fw-bold text-muted px-3"
                  href="#"
                >
                  Blogs
                </a>
                <a
                  className="text-decoration-none fw-bold text-muted px-3"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4">
              <div className="container-fluid">
                <a
                  className="d-none d-md-flex text-decoration-none text-dark fw-bold px-3"
                  href="#"
                >
                  Masuk
                </a>
                <button
                  type="button"
                  className="btn btn-success rounded-pill px-3"
                >
                  Daftar Sekarang
                </button>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 my-5 align-self-center">
              <h1 className="fw-bold text-success">
                Good Food Us
                <br />
                Good Mood
              </h1>
              <p className="py-3">
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
              <div className="flex-row">
                <button
                  type="button"
                  className="btn btn-success rounded-pill px-3 me-3 shadow-lg"
                >
                  Daftar Sekarang
                </button>
                <button
                  type="button"
                  className="btn btn-light rounded-pill px-3"
                >
                  About Us
                </button>
              </div>
            </div>
            <div className="col-10 col-md-8 d-flex justify-content-start justify-content-center position-relative">
              <img
                className="rounded-circle img-fluid"
                style={{
                  border: "2.9em solid #eee"
                }}
                src="/assets/img/header.png"
              />
              <div
                className="fly-badge position-absolute row"
                style={{
                  width: "292px",
                  bottom: "10%",
                  background: "#fffc",
                  backdropFilter: "blur(5px)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, .25)",
                  borderRadius: "17px"
                }}
              >
                <div className="col-4 align-self-center p-3">
                  <img src="/assets/img/header.png" className="w-100" />
                </div>

                <div className="col-8 align-self-center p-3">
                  <h6 className="m-0">Green Salad Tomato</h6>
                  <p className="text-muted m-0">Tomato</p>
                  <Rating
                    className="d-flex align-items-center"
                    fillColor={"#FF8412"}
                    size={20}
                    initialValue={4}
                    iconsCount={5}
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container my-5">
          <h1 className="fw-bold">Browser Our Category</h1>
          <h1 className="fw-bold text-success">Receipt</h1>
        </div>
        <div className="container">
          <CustomSlider />
        </div>
      </section>
      <section className="bg-white">
        <div className="container my-5">
          <h1 className="fw-bold">Browser Our Trending</h1>
          <h1 className="fw-bold text-success">Receipt</h1>
        </div>
        <div className="container">
          <div className="row">
            <TrendingCards />
          </div>
          <div className="d-none d-md-flex my-5 justify-content-center">
            <button
              type="button"
              className="btn btn-success rounded-pill py-3 px-5"
            >
              All Receipt
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white d-none d-md-block">
        <div
          className="container row my-5 mx-auto p-5"
          style={{
            background: "#F9FFF7",
            borderRadius: "17px"
          }}
        >
          <div className="col-12 col-md-4 me-5 d-flex flex-column">
            <img
              className="img-fluid mb-3"
              width="200"
              src="/assets/img/elemes-logo.png"
            />
            <p>
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className="d-flex flex-row">
              <a className="sosmed rounded-pill p-3 me-3 text-success text-decoration-none">
                <MailIcon color={"#8bac3e"}/>
              </a>
              <a className="sosmed rounded-pill p-3 me-3 text-success text-decoration-none">
                <PhoneIcon color={"#8bac3e"}/>
              </a>
              <a className="sosmed rounded-pill p-3 me-3 text-success text-decoration-none">
                <IgIcon color={"#8bac3e"}/>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-auto me-5 d-flex flex-column">
            <h5 className="mb-3">Categories</h5>
            <a>Cupcake</a>
            <a>Pizza</a>
            <a>Kebab</a>
            <a>Salmon</a>
            <a>Doughnut</a>
          </div>
          <div className="col-12 col-md-auto me-5 d-flex flex-column">
            <h5 className="mb-3">About Us</h5>
            <a>About Us</a>
            <a>FAQ</a>
            <a>Report Problem</a>
          </div>
          <div className="col-12 col-md-3 me-5 d-flex flex-column">
            <h5 className="mb-3">Newsletter</h5>
            <p>
              Get now free 50% discount for alll products on your first order
            </p>

            <InputGroup className="mb-3 rounded">
              <FormControl
                placeholder="Your email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text className="bg-success text-white" id="basic-addon2">Send</InputGroup.Text>
            </InputGroup>
            <a><MailIcon color={"#8bac3e"}/> elemesid@gmail.com</a>
            <a><PhoneIcon color={"#8bac3e"}/> 0888 1111 2222</a>
          </div>
        </div>
      </section>
      <section className="footer">
      <div className="d-none d-md-flex my-5 justify-content-center">
      ?? 2021 Elemes id. All rights reserved
          </div>
      </section>
<nav className="navbar navbar-light bg-light navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none p-0">
    <ul className="navbar-nav nav-justified w-100">
        <li className="nav-item">
            <a href="#" className="nav-link text-center">
              <ListIcon/>
                <span className="small d-block">Home</span>
            </a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link text-center">
              <ListIcon/>
                <span className="small d-block">Promotions</span>
            </a>
        </li>
        <li className="nav-item dropup">
            <a href="#" className="nav-link text-center" role="button" id="dropdownMenuProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              <ListIcon/>
                <span className="small d-block">Others</span>
            </a>
        </li>
    </ul>
</nav>
    </>
  );
}
