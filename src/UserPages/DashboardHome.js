import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const DashRap = styled.div`
padding: 30px;
.all-dash {
    background: #ffffff;
    border-radius: 20px;
}
.all-dash h2 {
    padding: 30px;
    color: #1c1c1c;
    font-size: 24px;
    font-weight: 600;
}
button {
background: #8b4513;
color: #ffffff;
font-size: 16px;
font-weight: 600;
border: none;
border-radius: 5px;
padding: 12px 20px;
cursor: pointer;
width: 180px;
  height: 48px;
 animation: fadeInUp 1s ease-out;
  animation-delay: 0.9s;

  position: relative;   /* for ::before */
  overflow: hidden;     /* keep overlay inside */
  z-index: 0
}

button::before {
      content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(
  180deg,
  #8b4513 0%,   
  #025726 50%,  
  #1c1c1c 100%  
);  
  z-index: -1;
  transition: height 0.5s ease;
}
button:hover::before {
     height: 100%;
}
`


const DashboardHome = () => {

    const  homeManage = [
        {
            id: 1,
            name: "Home Banner"
        },
          {
            id: 2,
            name: "Who We Are Section"
        },
          {
            id: 3,
            name: "Document Section"
        },
          {
            id: 4,
            name: " Counter Section"
        },
          {
            id: 5,
            name: "Why Choose Us Section"
        },
          {
            id: 6,
            name: "Testimony Section"
        },
         {
            id: 7,
            name: "Enquiry Section"
        },
    ]
    const [selectedId, setSelectedId] = useState(null)
const navigate = useNavigate()

    const handleClick = (id) => {
        if (id === 1) {
            navigate(`/users/homeSliderSection`)
        } else if (id === 2) {
              navigate(`/users/homeAboutSection`)
          
        }  else if (id === 3) {
              navigate(`/users/homeDocumentSection`)
          
        } else if (id === 4) {
              navigate(`/users/homeCounterSection`)
          
        } else if (id === 5) {
              navigate(`/users/homeWhyChooseSection`)
          
        } else if (id === 6) {
              navigate(`/users/homeWTestimonySection`)
          
        } else if (id === 7) {
              navigate(`/users/homeEnquirySection`)
          
        }
    } 
    return (
        <DashRap>
            <div className="all-dash">
                <h2>Manage Home Page Contents</h2>
                <div className="table-scroll">
          <table className="custom-table">
            <thead>
              <tr style={{ background: "#f4f4f4" }}>
                <th style={{ textAlign: "left" }}>S/N</th>
                <th style={{ textAlign: "left" }}>Title </th>
                <th style={{ textAlign: "left" }}> Action</th>
               
               
               
              </tr>
            </thead>
            <tbody>
             {homeManage.map((items, index) => (
<tr
                      className="tr-hover"
                     
                    >
                        <td>{index + 1}</td>
                        <td>{items.name}</td>
                    <td><button onClick={()=> handleClick(items.id)}>Manage</button></td>
                    </tr>
             ))}
                    
             
            </tbody>
          </table>
        </div>
            </div>
        </DashRap>
    )
}


export default DashboardHome