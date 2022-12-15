import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Home.css';
 
const Home = () => {
    
    const [Data, setData] = useState([]);

    useEffect(() => {
            console.log("hii");
            loadUser();
          }, []);
        
          const loadUser = async () => {
            const result = await axios.get("https://api.escuelajs.co/api/v1/products");
            setData(result.data);
          }
        
    return (
        <div className="bg">
        <main className="layout">
    
        <section className="Example">
        
            <div className="title">
                <h2>Get Product</h2>
                <Link to="/Next"><h4>Next</h4></Link>
            </div>
            <div id="APIcards">
            {
                Data.map((user, index) => {
                   if(index<20) {
            return(
                <div className="cards" key={index} >
        <div className="Images" >
         <img src= {user.category.image} alt="img" />
        </div>
        <div className="Name-Price" key={index}>
            <h5>{user.title} </h5>
            <p>${user.price} </p>
             
        </div>
        <div className=" AddCart">
       <Link to={`/View/${user.id}`}><button>View Details</button></Link>
        </div>
    </div>
                 )} })
            }
            </div>
        </section>
    </main>
    </div>
    );
}
export default Home;