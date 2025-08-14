import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";


const ReuseableRap = styled.div`
.new-h1 {
  font-size: 60px;
  font-weight: 600;
  max-width: 800px;
  line-height: 60px;
  text-align: center;
  color: #0c1d55;
}
.h1-p {
  font-size: 19.84px;
  font-weight: 400;
  line-height: 28px;
  max-width: 659px;
  color: #444e6e;
  text-align: center;
}
.new-p {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  max-width: 264px;
  color: #444e6e;
}
.practice-getStated,
.practicecontact-sales {
  background: #12d27d;
  width: 136px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  
}
.practicecontact-sales {
  background: #ffffff;
  width: 154px;
  height: 42px;
  border: 1px solid #edf0f2;
  color: #1a2b3b;
}
.practice-link-btn {
  display: flex;
  gap: 15px;
}
.sub-practice-1 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.practice-2 {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  margin-top: 50px;
  border-radius: 20px;
  height: 554px;
  margin-bottom: 270px;
  padding: 50px 0px;
}
.practice-2-img {
  border: 1px solid black;
  max-width: 941px !important;
  height: 366px;
  border-radius: 15px;
  position: absolute;
  bottom: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.practice-2-img img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  object-position: right;
}
.pt-sub-col-1 img {
  height: 18px;
  width: 18px;
}
.pt-sub-col-1 {
  display: flex;
  align-items: center;
  gap: 5px;
}
.sub-practice-2 {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.sub-practice-2 h2 {
  max-width: 397px;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: white;
}
.sub-practice-2 p {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffffb2;
  max-width: 387px;
}
.sub-practice-3 p {
  max-width: 264px;
  color: #ffffffb2;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.sub-practice-3 h3 {
  color: white;
  font-size: 18px;
  font-weight: 500;
  max-width: 260px;
}
.sub-practice-3 {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}

.sub-practice-3 div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.practice-3 {
  display: flex;
  justify-content: space-between;
}
.practice-4 h2 {
  font-size: 35px;
  font-weight: 700;
  line-height: 44px;
  color: #0c1d55;
  max-width: 500px;
  
  margin: auto;
  margin-bottom: 25px;
  text-align: center;
}
.practice-4 {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 820px;
 
}
.sub-div-prac h4 {
  font-size: 20px;
  font-weight: 500;
  color: #0c1d55;
  max-width: 645px;
}
.sub-div-prac {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sub-prac-1 {
border-bottom: 1px solid #0C1D5526;
padding: 20px 0px;
}
  @media (max-width: 1024px) {
    .practice-2-img {
  border: 1px solid black;
  max-width: 800px !important;
    }
    .practice-3 {
        flex-direction: column;
        gap: 20px;
    }
  }
   @media (max-width: 992px) {
    .practice-2-img {
  border: 1px solid black;
  max-width: 600px !important;
    }
    .new-h1 {
        font-size: 40px;
        line-height: 40px;
    }
  }
   @media (max-width: 700px) {
    .practice-2-img {
  border: 1px solid black;
  max-width: 450px !important;
    }
  }
    @media (max-width: 550px) {
    .practice-2-img {
  border: 1px solid black;
  max-width: 350px !important;
  height: 350px;
   bottom: -200px;
    }
      .practice-3  {
        align-items: center;
      }
    .sub-practice-3 {
  
  grid-template-columns: repeat(1, 1fr);
}
.sub-practice-2 h2, .sub-practice-3 h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 23px;
    text-align: center;
}
.sub-practice-2 p, .sub-practice-3 p {
 text-align: center;
}
  }
    @media (max-width: 400px) {
    .practice-2-img {
  border: 1px solid black;
  max-width: 300px !important;
   bottom: -220px;
    }
  }
`



const AreaPracticeReuse = ({
    backgroundColor,
    imgLink,
    h1Text,
    h2Text,
    bottomMove,
    textColor,
    textColorTwo,
    special,
    newSpecial,
    serviceHead,
 serviceHeadText,
 subServicehead1,
 subServiceText1 ,
subServicehead2,
 subServiceText2 ,
 subServicehead3,
 subServiceText3 ,
 subServicehead4,
 subServiceText4 ,

}) => {


    const [clicked, setClicked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
      };
     
      const handleIsClick = () => {
        setIsClicked(!isClicked);
      };
      const handleIsOpen = () => {
        setIsOpen(!isOpen);
      };
      const handleOpen = () => {
        setOpen(!open);
      };
    return(
        <ReuseableRap>
        <div >
            <div  className="containers">
          <div style={{backgroundColor}} className="practice-2 containers">
            <div className="sub-practice-1">
              <h1 style={{color: textColor}} className="new-h1">{h1Text}</h1>
              <p style={{color: textColorTwo}}  className="h1-p">
                {h2Text}
              </p>
              {/* <div className="practice-link-btn">
                <Link className="practice-getStated">Get started</Link>
                <Link className="practicecontact-sales">Contact sales</Link>
              </div> */}
            </div>
            <div style={{bottom: bottomMove}} className={`practice-2-img ${special}`}>
              <img src={imgLink} alt="..." />
            </div>
          </div>
          </div>

          <div className={`containers practice-3 ${newSpecial}`}>
            <div className="sub-practice-2">
              
                <h2>{serviceHead}
                    </h2>
                <p>{serviceHeadText}</p>
            </div>
            <div className="sub-practice-3">
                <div>
                    <h3>{subServicehead1}</h3>
                    <p>{subServiceText1}</p>
                </div>
                <div>
                    <h3>{subServicehead2}</h3>
                    <p>{subServiceText2}</p>
                </div>
                <div>
                    <h3>{subServicehead3}</h3>
                    <p>{subServiceText3}</p>
                </div>
                <div>
                <h3>{subServicehead4}</h3>
                <p>{subServiceText4}</p>
                    </div>
            </div>
          </div>

    
        </div>
        </ReuseableRap>
    )
}
export default AreaPracticeReuse