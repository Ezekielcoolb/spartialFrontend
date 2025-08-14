import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AreaPracticeReuse from "./AreaPracticeReuse";


const PracticeAreaRap = styled.div`
 background: black;
 padding-bottom: 100px;
@media (max-width: 778px) {
  padding-top: 60px;
 }
  .link-container {
    display: flex;
    align-items: center;
    padding: 0px 50px;
    justify-content: space-between;
    min-width: 1000px;
    border-bottom: 1px solid #fffffffa;
    
   
  }
  .link {
    white-space: nowrap;
    padding: 20px 20px;
    text-decoration: none;
    color: #12d27d;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 2px solid transparent; /* Default underline */
    transition: all 0.3s ease;
  }
  .link.active {
    font-weight: 600;
    font-size: 14px;
    border-bottom: 3px solid #12d27d; /* Black underline for the active link */
    color: #12d27d;
  }
  .practice-1 {
    border-bottom: 1px solid #0c1d551a;
  }
  
`;
const Services = () => {
   
    
  const [activeLink, setActiveLink] = useState("litigation");
  
 
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <PracticeAreaRap>
      <div className="practice-1">
        <div style={{width: "100%", overflowX: "auto"}}>
            
        <div className="link-container">
          <Link
            className={`link ${activeLink === "litigation" ? "active" : ""}`}
            onClick={() => handleLinkClick("litigation")}
          >
            EAM
          </Link>
          <Link
            className={`link ${activeLink === "corporate" ? "active" : ""}`}
            onClick={() => handleLinkClick("corporate")}
          >
            Health & Safety 
          </Link>
          <Link
            className={`link ${activeLink === "criminal" ? "active" : ""}`}
            onClick={() => handleLinkClick("criminal")}
          >
            Geospatial Technology 
          </Link>
       
       
         
        </div>

        </div>
      </div>
      {activeLink === "litigation" && 
        <AreaPracticeReuse 
        backgroundColor="#1a1a1a"
        imgLink="/images/image_13.png"
        h1Text="Environmental Assessment & Management"
        h2Text="These services support organizations in evaluating, managing, and minimizing environmental and social impacts in compliance with national and international standards."
 textColor="#ffffff"
 textColorTwo="#ffffffb2"
          serviceHead= "Environmental and Social Impact Assessment (ESIA)"
 serviceHeadText="Evaluation of potential environmental and social impacts of proposed projects, along with mitigation measures to minimize negative outcomes."
 subServicehead1="Environmental and Social Impact Assessment & Due Diligence"
 subServiceText1 ="Evaluation of potential environmental and social impacts of proposed projects, with mitigation measures to reduce negative outcomes. Risk-based evaluation of environmental and social factors to inform investment decisions or acquisitions."
subServicehead2="Monitoring and Impact Management"
 subServiceText2 ="Ongoing tracking of environmental conditions to ensure activities remain within acceptable thresholds. Monitoring the effectiveness of mitigation strategies to ensure they address identified impacts adequately."
 subServicehead3="Monitoring and Impact Management"
 subServiceText3 ="Ongoing tracking of environmental conditions to ensure activities remain within acceptable thresholds.  Monitoring the effectiveness of mitigation strategies to ensure they address identified impacts adequately."
 subServicehead4="Community Resettlement and Social Safeguards"
 subServiceText4 ="Framework for relocating and compensating affected communities during project development, ensuring fair and sustainable resettlement."

        />
      }
       {activeLink === "corporate" && 
        <AreaPracticeReuse 
        backgroundColor="#8b4513"
        imgLink="/images/image_14.png"
        h1Text="Health, Safety & Regulatory Compliance"
        h2Text="Focused on developing systems and assessments that promote workplace safety, regulatory compliance, and risk management."
        // bottomMove="-230px"
        special="special"
        newSpecial="newSpecial"
         textColor="#ffffff"
          textColorTwo="#ffffffb2"
        serviceHead= "HSE Management System Development and Implementation"
 serviceHeadText="Comprehensive design and execution of Health, Safety, and Environment (HSE) management frameworks, tailored to organizational needs, ensuring alignment with industry best practices and legal requirements."
 subServicehead1="Health, Safety and Environment (HSE) Risk Assessment"
 subServiceText1 ="Thorough identification, evaluation, and documentation of HSE risks to prevent incidents, enhance workplace safety, and promote a culture of proactive hazard management."
subServicehead2="HSE Training"
 subServiceText2 ="Practical and engaging capacity-building sessions to equip staff with essential knowledge, hands-on skills, and real-world strategies to maintain a safe, compliant, and efficient work environment."
 subServicehead3="Facilitation with the Regulators"
 subServiceText3 ="Dedicated support in navigating complex regulatory requirements, maintaining compliance, and securing necessary permits, licenses, or approvals for environmental and safety operations."
 subServicehead4="Development of Oil Spill Contingency Plan"
 subServiceText4 ="Strategic creation of proactive, well-structured response plans to manage, contain, and mitigate oil spill emergencies, minimizing environmental damage and operational downtime."
        />
      }
       {activeLink === "criminal" && 
        <AreaPracticeReuse 
        backgroundColor="#0d4e1cff"
        imgLink="/images/image_15.png"
        h1Text="Geospatial Technology & Land Use Services"
        h2Text="These services support organizations in evaluating, managing, and minimizing environmental and social impacts in compliance with national and international standards."
         textColorTwo="#ffffffb2"
        textColor="#ffffff"
 serviceHead= "GIS Technology Application in Ecosystem"
 serviceHeadText="Utilization of advanced Geographic Information Systems (GIS) for detailed ecosystem mapping, spatial analysis, environmental monitoring, and informed decision-making"
 subServicehead1="Remote Sensing, and Land Use Planning"
 subServiceText1 ="Integration of high-resolution remote sensing data and advanced mapping tools to visualize land use patterns, monitor environmental changes, and plan for sustainable urban and rural development."
subServicehead2="Sea Bed Survey"
 subServiceText2 ="Comprehensive exploration, mapping, and analysis of seabed conditions using state-of-the-art tools and methodologies to support marine research, engineering, and development projects."
 subServicehead3="Procurement Services"
 subServiceText3 ="Efficient sourcing, supply, and delivery of high-quality HSE and environmental equipment, tools, and materials essential for the successful execution of various projects."
 subServicehead4="Waste Handling and Disposal Management"
 subServiceText4 ="Strategic planning, coordination, and implementation of effective waste collection, segregation, treatment, and safe disposal systems to minimize environmental impact and ensure regulatory compliance."
        />
      }
      <div></div>
    </PracticeAreaRap>
  );
};

export default Services;
