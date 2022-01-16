
import { Rating } from "react-simple-star-rating";
export const TrendingCards = ()=>{
    const data=[
        {
            title:"Pizza Paperoni",
            label:"Pizza",
            imgPath:'/assets/img/trending/1.png',
            backgroundColor:"#E6F3F5",
            star:4
        },
        {
            title:"Pizza Meat",
            label:"Pizza",
            imgPath:'/assets/img/trending/2.png',
            backgroundColor:"#E6F3F5",
            star:3
        },
        {
            title:"Doner Kebab",
            label:"Pizza",
            imgPath:'/assets/img/trending/3.png',
            backgroundColor:"#EAEEFA",
            star:5
        },
        {
            title:"Salmon Roll",
            label:"Pizza",
            imgPath:'/assets/img/trending/4.png',
            backgroundColor:"#F9EEF3",
            star:4
        },
        {
            title:"Cupcake Choco",
            label:"Pizza",
            imgPath:'/assets/img/trending/5.png',
            backgroundColor:"#F0FEEB",
            star:4
        },
        {
            title:"Doughnut Milk",
            label:"Pizza",
            imgPath:'/assets/img/trending/6.png',
            backgroundColor:"#F3F7D9",
            star:5
        },
        {
            title:"Doughnut Unicorn",
            label:"Pizza",
            imgPath:'/assets/img/trending/7.png',
            backgroundColor:"#F3F7D9",
            star:4
        },
        {
            title:"Kathi Kebab",
            label:"Pizza",
            imgPath:'/assets/img/trending/8.png',
            backgroundColor:"#EAEEFA",
            star:4
        }
    ]
    return(
        <>
        {data.map(({backgroundColor,imgPath,title,label,star},idx)=>(
            
        <div key={idx} className="trending col-12 custom-col-md-3 mx-4 mx-md-2 mb-4 p-3 py-4 shadow-sm" style={{
            backgroundColor,
            borderRadius:"17px",
            // width:"23%"
        }}>
            <img className="img-fluid mb-3" src={imgPath}/>
            <h3 className="fw-bold">{title}</h3>
            <p className="fw-bold text-success">{label}</p>
              <Rating className="d-flex align-items-center" fillColor={"#FF8412"} size={20}
              initialValue={star}
              iconsCount={5}
              readonly
              />
        </div>
        ))}
        </>
    )
}