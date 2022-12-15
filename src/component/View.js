import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {  useParams } from "react-router-dom";
import './View.css';
 
const View = ( ) => {
     
    const {id} = useParams({});
    const [Data, setData] = useState([]);

    useEffect(() => {
            console.log("hii");
            loadUser();
          }, []);
        
          const loadUser = async () => {
            const result = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            setData(result.data);
          }
        
    return (
        <div className="bg3">
        <main className="layout3">
    
        <section className="Example3">
        
            <div className="title3">
                <h2>Product Details</h2>
               
                 
            </div>
            <div id="APIcards3">    
           
                <div className="cards3" >
        <div className="Images" >
         <img src= {Data.images} alt="img" />
        </div>
        <div className="Name-Price"  >
            <h5>{Data.title} </h5>
            <p>${Data.price} </p>
            <p>{Data.description} </p>
             
        </div>
        <div className=" AddCart">
        <Link to="/"><button>Buy Now</button></Link>
        </div>
    </div>

            </div>
        </section>
    </main>
    </div>
    );
}
export default View;