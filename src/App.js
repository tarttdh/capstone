import "./App.css";
import Nav from "react-bootstrap/Nav";
import Profile from "./Frontend/Pages/Profile";
import { useAuth0 } from '@auth0/auth0-react';
import Button from "react-bootstrap/esm/Button";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./Frontend/Pages/About";
import { AllCategories } from "./Frontend/Pages/AllCategories";
import ArticleDetails from "./Frontend/components/ArticleDetails";
import { Navbar } from "react-bootstrap";
import React, { useState } from "react";
import blankProfile from "./Frontend/components/blankprofile.png"
import UpdateUsername from "./Frontend/utils/editProfile";
import LogoutMessage from "./Frontend/Pages/logout"; 
import SearchProfile from "./Frontend/components/userSearchProfile";

import ricon from "./Frontend/components/ricon.png"
import aicon from "./Frontend/components/aicon.png"

import ArcReports from "./Frontend/Pages/archives/a_reports";
import ArcBroad from "./Frontend/Pages/archives/a_Broad";
import ArcSustainability from "./Frontend/Pages/archives/a_sustainability";
import ArcCompany from "./Frontend/Pages/archives/a_company";
import ArcRussia from "./Frontend/Pages/archives/a_Russia";
import ArcGov from "./Frontend/Pages/archives/a_Gov";
import ArcMacro from "./Frontend/Pages/archives/a_macro";
import ArcMicro from "./Frontend/Pages/archives/a_micro";
import ArcPandemic from "./Frontend/Pages/archives/a_Pandemic";


import Categorymac from "./Frontend/Pages/recent/Category_mac";
import Reports from "./Frontend/Pages/recent/reports";
import Sustainability from "./Frontend/Pages/recent/sustainability";
import Broad from "./Frontend/Pages/recent/Broad";
import Company from "./Frontend/Pages/recent/company";
import Russia from "./Frontend/Pages/recent/Russia";
import Gov from "./Frontend/Pages/recent/Gov";
import Micro from "./Frontend/Pages/recent/micro";
import Pandemic from "./Frontend/Pages/recent/Pandemic";

//changes were made




function App() {


  const [searchTerm, setSearchTerm] = useState("");




  // const handleSearch = () => {

  //   if(searchTerm !== ""){
    
  //   }


  //   // Do something with the searchTerm, such as pass it to an API call or update a search results component
  //   console.log(searchTerm);
  // //    searchUser(searchTerm).then((result) => {
  // //   if (searchTerm) {

  // //   }
  // // });
  
  // };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const { user, isLoading, isAuthenticated, logout, loginWithRedirect } = useAuth0();


  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav)
    setShowArc(false);
  }
  const [showArc, setShowArc] = useState(false);

  function toggleArc() {
    setShowArc(!showArc)
    setShowNav(false);
  }
  
  if (isLoading) return <div>Loading...</div>
  
  return (
    <Router> 
         <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Song+Myung"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma"></link>
        </head> 
          <header className="px-2 py-2 text-white bg-primary">
            <container className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-lg-auto me-lg-auto align-items-center mb-md-0">
              <li className="px-1"></li>
                <li className="d-block d-sm-none col-12">
                <h3 as={Link} href={"/"} className="nav-link px-2 pb-0 text-white fs-5 text-center">
                    SupplyChainNews
                  </h3>
                </li>
                <li className="d-none d-sm-block d-md-block align-items-center mb-0">
                <h3 as={Link} href={"#"} className="nav-link px-2 pb-0 text-white fs-5">
                    SupplyChainNews
                  </h3>
                </li>
                <li className="fs-5 px-3 d-none d-sm-block d-md-block">
                  |
                </li>
                <li>
                  <Link to="/" className="nav-link px-2 text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="nav-link px-2 text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Profile" className="nav-link px-2 text-white">
                    Profile
                  </Link>
                </li>
                <li className="fs-5 px-3 d-none d-sm-block">
                  |
                </li>
                <li>
                  <img className="mt-0 img-fluid" style={{width: "25px", height: "25px"}} src={ricon} />
                </li>
                <li>
                  <div onClick={toggleNav} className="btn px-0 text-white dropdown-toggle">Recent</div>
                </li>
                <li className="px-2"></li>
                <li>
                  <img className="mt-0 img-fluid" style={{width: "25px", height: "25px"}} src={aicon} />
                </li>
                <li>
                  <div onClick={toggleArc} className="btn px-0 text-white dropdown-toggle">Archives</div>
                </li>
                </ul>
              <ul class="nav col-lg-auto align-items-center mb-md-0 justify-content-right justify-content-center float-right">
              <li>
              <div class="input-group" className="">
                <ul className="nav">
                <li>
                <input type="search" placeholder="User Search" aria-label="Search" aria-describedby="search-addon" className="form-control rounded justify-content-start"  
                value={searchTerm} onChange={handleInputChange} />
                </li>
                <li className="px-1"></li>
                <li>
                <button type="button" className="btn btn-outline-light me-2 justify-content-end btn-sm"> 
                  <Link to="/SearchProfile" className="nav-link px-2 text-white">
                    Search
                  </Link> 
                </button>

                </li>
                <li className="py-sm-3 d-block d-sm-none">
                </li>
                </ul>
              </div>
              </li>
              <li className="nav align-items-center">
                {/* diplays userprofile is logged in  */}
              <div className="text-center align-items-center justify-content-center">
                  {isAuthenticated && (
                  <div className="nav align-items-center">
                    <ul className="nav align-items-center py-2">
                    <li>
                    <img className="round-img" style={{width: "30px", height: "30px", borderRadius: "25px"}} src={user.picture} alt={user.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = blankProfile;
                    }}/>
                    </li>
                    <li className="nav align-items-center justify-content-center flex">
                    <p className="px-1 nav align-items-center justify-content-center flex">Welcome {user.name}!</p>
                    </li>
                    </ul>
                   </div>
                  )}
              </div>
              </li>
              <li className="px-2"></li>
              <li>
              </li>
              <li>
              <div className="text-end pb-sm-0 pb-2 pl-sm-0 pl-1 justify-content-end justify-content-end right-0">
              <Button className="btn bg-primary btn-bg-primary btn-outline-light me-2" onClick={() => loginWithRedirect()}>
                  Login
                </Button>
                <Button className="btn bg-primary btn-outline-light me-2" onClick={() => logout() }>
                  Logout
                </Button>
              </div>
              </li>
              </ul>
            </container>
        </header>
          {showNav && (
            <div className="d-block d-sm-none">
            <Navbar className="dropdown-custom-r py-0 bg-secondary inset-shadow flex-column">
              <div onClick={toggleNav} className="small-caps btn px-3 text-white">Recent</div>
              <div className= "text-white bold"> | </div>
                <Nav.Link as={Link} to={"/micro"} className="text-white">micro</Nav.Link>
                <Nav.Link as={Link} to={"/macro"} className="text-white">macro</Nav.Link>
                <Nav.Link as={Link} to={"/company_activity"} className="text-white">Company Activity</Nav.Link>
                <Nav.Link as={Link} to={"/sustainability"} className="text-white">Sustainability</Nav.Link>
                <Nav.Link as={Link} to={"/Reports"} className="text-white">Reports</Nav.Link>
                <Nav.Link as={Link} to={"/Russia/Ukraine"} className="text-white">Russia/Ukraine</Nav.Link>
                <Nav.Link as={Link} to={"/Pandemic"} className="text-white">Pandemic</Nav.Link>
                <Nav.Link as={Link} to={"/Gov"} className="text-white">Gov</Nav.Link>
                <Nav.Link as={Link} to={"/Broad_SCIM_Trends"} className="text-white">Broad SCIM Trends</Nav.Link>
              </Navbar>
            </div>
          )}
          {showNav && (
               <div className="d-none d-sm-block d-md-block">
               <Navbar className="dropdown-custom-r py-0 bg-secondary inset-shadow">
                 <div onClick={toggleNav} className="small-caps btn px-3 text-white">Recent</div>
                 <div className= "text-white bold"> | </div>  
                <Nav.Link as={Link} to={"/micro"} className="text-white">micro</Nav.Link>
                <Nav.Link as={Link} to={"/macro"} className="text-white">macro</Nav.Link>
                <Nav.Link as={Link} to={"/company_activity"} className="text-white">Company Activity</Nav.Link>
                <Nav.Link as={Link} to={"/sustainability"} className="text-white">Sustainability</Nav.Link>
                <Nav.Link as={Link} to={"/Reports"} className="text-white">Reports</Nav.Link>
                <Nav.Link as={Link} to={"/Russia/Ukraine"} className="text-white">Russia/Ukraine</Nav.Link>
                <Nav.Link as={Link} to={"/Pandemic"} className="text-white">Pandemic</Nav.Link>
                <Nav.Link as={Link} to={"/Gov"} className="text-white">Gov</Nav.Link>
                <Nav.Link as={Link} to={"/Broad_SCIM_Trends"} className="text-white">Broad SCIM Trends</Nav.Link>
              </Navbar>
            </div>
          )}

          
          
          {showArc && (
           <div className="d-block d-sm-none">
           <Navbar className="dropdown-custom-a py-0 bg-secondary inset-shadow flex-column">
             <div onClick={toggleArc} className="small-caps btn px-3 text-white">Archives</div>
             <div className= "text-white bold"> | </div> 
                <Nav.Link as={Link} to={"/arc_micro"} className="text-white">Micro</Nav.Link>
                <Nav.Link as={Link} to={"/arc_macro"} className="text-white">Macro</Nav.Link>
                <Nav.Link as={Link} to={"/arc_company_activity"} className="text-white">Company Activity</Nav.Link>
                <Nav.Link as={Link} to={"/arc_sustainability"} className="text-white">Sustainability</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Reports"} className="text-white">Reports</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Russia/Ukraine"} className="text-white">Russia/Ukraine</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Pandemic"} className="text-white">Pandemic</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Gov"} className="text-white">Gov</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Broad_SCIM_Trends"} className="text-white">Broad Scrim Trends</Nav.Link>
              </Navbar>
            </div>
          )}
          {showArc && (
            <div className="d-none d-sm-block d-md-block">
            <Navbar className="dropdown-custom-a py-0 bg-secondary inset-shadow">
              <div onClick={toggleArc} className="small-caps btn px-3 text-white">Archives</div>
              <div className= "text-white bold"> | </div>
                <Nav.Link as={Link} to={"/arc_micro"} className="text-white">Micro</Nav.Link>
                <Nav.Link as={Link} to={"/arc_macro"} className="text-white">Macro</Nav.Link>
                <Nav.Link as={Link} to={"/arc_company_activity"} className="text-white">Company Activity</Nav.Link>
                <Nav.Link as={Link} to={"/arc_sustainability"} className="text-white">Sustainability</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Reports"} className="text-white">Reports</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Russia/Ukraine"} className="text-white">Russia/Ukraine</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Pandemic"} className="text-white">Pandemic</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Gov"} className="text-white">Gov</Nav.Link>
                <Nav.Link as={Link} to={"/arc_Broad_SCIM_Trends"} className="text-white">Broad Scim Trends</Nav.Link>
              </Navbar>
            </div>
          )}
        <Routes>
          <Route path="/logout" element={<LogoutMessage />} />
          <Route path="/" element={<AllCategories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Home/details" element={<ArticleDetails />} />
          <Route path="/edit_Profile" element={<UpdateUsername />} />
          <Route path="/SearchProfile" element= {<SearchProfile searchTerm={searchTerm} />} />


          {/* Archived Routes */}
        
          <Route path="/arc_reports" element={<ArcReports />} />
          <Route path="/arc_Broad_SCIM_Trends" element={<ArcBroad />} />
          <Route path="/arc_sustainability" element={<ArcSustainability />} />
          <Route path="/arc_company_activity" element={<ArcCompany />} />
          <Route path="/arc_Russia/Ukraine" element={<ArcRussia />} />
          <Route path="/arc_Pandemic" element={<ArcPandemic />} />
          <Route path="/arc_Gov" element={<ArcGov />} />
          <Route path="/arc_macro" element={<ArcMacro />} />
          <Route path="/arc_micro" element={<ArcMicro />} />

            {/* Recent Routes */}

          <Route path="/reports" element={<Reports />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/Broad_SCIM_Trends" element={<Broad />} />
          <Route path="/company_activity" element={<Company />} />
          <Route path="/Russia/Ukraine" element={<Russia />} />
          <Route path="/Pandemic" element={<Pandemic />} />
          <Route path="/Gov" element={<Gov />} />
          <Route path="/macro" element={<Categorymac />} />
          <Route path="/micro" element={<Micro />} />
          

          
          {/* <Route path= "/Home/details" element={<ArticleDetails />} /> */}


        </Routes>
    </Router>
  );
}


export default App;
