import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return <>
  
  <style global jsx>{`
      .btn-success,.btn-success:hover,.bg-success{
        background-color:#8bac3e !important;
        border-color:#8bac3e;
      }
      .text-success {
       color:#8bac3e !important;
      }
      .kategori:hover {
        padding-bottom: 30% !important;
      }
      .kategori:hover,.trending:hover {
        background-image:url('/assets/img/pattern.png');
      }
      .review-slider {
        padding-bottom:5%;
      }
      .sosmed:hover{
        background:#8bac3e;
        color:white !important
      }
      .sosmed:hover path {
        stroke:white !important
      }
      .sosmed{
        background:white
      }
        .fly-badge {
          left:30%
        }
      @media (min-width: 768px){
        .fly-badge {
          left:10%
        }
        .custom-col-md-3 {
          width:23%
        }
      }
    `}</style>
  <Component {...pageProps} /></>
}

export default MyApp
