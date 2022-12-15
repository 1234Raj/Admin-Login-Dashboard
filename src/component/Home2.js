import React   from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
 
import './View.css';
 
 
const Home1 = ( ) => {
    const location = useLocation();
    const users = location.state;
    
    return (
        <div className="bg3">
        <main className="layout3">
    
        <section className="Example3">
        
            <div className="title3">
                <h2> Product Details</h2>
                {/* <h1>{props.name}</h1> */}
            </div>
            <div id="APIcards3">
             
                <div className="cards3" >
        <div className="Images" >
         <img src= { users.user.url} alt="img"  />
        </div>
        <div className="Name-Price"    >
            <h5>Name: { users.user.title} </h5>
            <p> Price: ${ users.user.price}</p>
            <p>{users.user.Description1}</p>
        </div>
        <div className=" AddCart">
        <Link to='/Next'><button>Buy Now</button></Link>
        </div>
    </div>
    
            </div>
        </section>
    </main>
    </div>
    );
}
export default Home1;