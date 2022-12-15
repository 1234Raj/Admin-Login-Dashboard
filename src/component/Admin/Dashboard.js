import React,{useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase,ref, onValue } from "firebase/database";
import './Dashboard.css';
const Dashboard = () => {
const [listUsers,setListUsers]=useState([]);

const [searchdata,setSearch]=useState([]);

const [filterValue,setFilterVlaue]=useState('');

const handlefilter=(e)=>{
  
  if(e.target.value === ''){
    setListUsers(searchdata);
  }else{
   const filterResult = searchdata.filter(user=>JSON.stringify(user.name).includes(e.target.value));
   setListUsers(filterResult);
  }
  setFilterVlaue(e.target.value);
}


useEffect(() => {
const db = (getDatabase( ));
 let ListData=[];
 const dbRef = ref(db, 'users');
 onValue(dbRef  ,(snapshot)=>{
  // setListUsers(data.val());
  snapshot.forEach(childSnapshot => {
    let Data = childSnapshot.val();
    ListData.push(Data);
  });
  setListUsers(ListData);
  setSearch(ListData);
 });
},[]);
     
    return (
         
        <div className="bg2">
            <nav className="navbar1">
                <div className="head-navbar1">
                    <div className="logo"><a href="#">Dashboard<i className="fa fa-cart-arrow-down"></i></a></div>
                    <ul className="menu">
                        <li   className="menu-btn">Home </li>
                        <li  className="menu-btn">About </li>
                        <li  className="menu-btn">Contact </li>
                       <Link to='/Add'><li  className="menu-btn">Add Product </li></Link> 
                       <Link to='/Home'><li  className="menu-btn">LogOut </li></Link>
                    </ul>
                </div>

            </nav>
            <div className="container mt-5"><input type='search' className="Search" placeholder="Search" value={filterValue} onChange={(e)=>handlefilter(e)}></input></div>
            <div className="container mt-5 pt-5">
      <div className="py-4">
        <table className="table">
          <thead class="thead-white">
            <tr className="bg-light text-dark">
              <th scope="col">ID</th>
              <th scope="col">FullName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
                listUsers.map((user, index) => {
                 
            return(
              <tr className="text-white" key={index}>
                  <th scope="row"  >{index+1}</th>
                  <td>{ user.username} </td>
                  <td>{ user.email}</td>
                  <td>{ user.password}</td>
                  <td>
                     
                    <Link className="btn btn-outline-primary m-2 "  >Edit</Link>
                    {/* <Link className="btn btn-outline-primary m-2" onClick={()=>deleteData}>Delete</Link> */}
                  </td>
                </tr>
                )
            }  )
            }
          </tbody>
        </table>
      </div>
    </div>
     </div>
   );
};

export default Dashboard;