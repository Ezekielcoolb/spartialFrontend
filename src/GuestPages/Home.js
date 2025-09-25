import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchHomepage, fetchObjectpage } from "../Redux/slice/homeSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

gsap.registerPlugin(ScrollTrigger);

const HomeRap = styled.div`
  background: #000000;
  @media (max-width: 778px) {
    padding-top: 60px;
  }
  .home-1 {
    /* background-size: cover;
    background-repeat: no-repeat; */
    height: 100vh;
    width: 100%;
    /* border-radius: 24px; */

    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
    padding-left: 50px;
    gap: 20px;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide-content {
    animation: fadeInUp 1s ease-out;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .slide-heading {
    font-size: 2.5rem;
    font-weight: bold;
    animation: fadeInUp 1s ease-out;
    animation-delay: 0.3s;
  }

  .slide-subtitle {
    font-size: 1.25rem;
    animation: fadeInUp 1s ease-out;
    animation-delay: 0.6s;
  }

  .get-in-touch {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    background: #025726ff;
    color: white;
    width: 231px;
    height: 48px;
    border-radius: 100px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    animation: fadeInUp 1s ease-out;
    animation-delay: 0.9s;

    position: relative; /* for ::before */
    overflow: hidden; /* keep overlay inside */
    z-index: 0;
  }

  /* overlay background */
  .get-in-touch::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(180deg, #8b4513 0%, #025726 50%, #1c1c1c 100%);
    border-radius: 100px;
    z-index: -1;
    transition: height 0.5s ease;
  }

  /* grow background on hover */
  .get-in-touch:hover::before {
    height: 100%;
  }

  .slider-wrapper {
    padding: 0px;
  }
  .home-1-img-banner {
    width: 100vw;
    height: 100vh;
  }

  .home-1 h1 {
    color: #ffffff;
    font-size: 45px;
    font-weight: 600;
    max-width: 720px;
    line-height: 55px;
  }
  .home-1 p {
    color: #ffffffb2;
    font-weight: 450;
    font-size: 18px;
    max-width: 427px;
  }

  .home-2-upper-left,
  .home-2-upper-left-two {
    border: 1px solid #cc8825;
    border-radius: 20px;
    padding: 10px 15px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 130px;
  }
  .home-2-upper-left p,
  .home-2-upper-left p {
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: 700 !important;
    font-size: 10px !important;
  }

  .home-2-upper-left-two p {
    color: #cc8825;
  }

  .home-2-upper-right h2 {
    color: #ffffff !important;
    font-size: 60px !important;
    font-weight: 700;
    line-height: 65px !important;
    max-width: 792px;
  }
  .mission-upper img {
    width: 24px;
    height: 24px;
  }
  .mission-upper h4 {
    color: #191816;
    font-size: 24px;
    font-weight: 700;
  }
  .mission-upper {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .mission-vission p {
    color: #42413e;
    font-size: 18px;
    font-weight: 400;
    max-width: 365px;
    line-height: 26px;
  }
  .mission-vission {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .all-mission-vision {
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }

  .home-2-upper-right h2,
  .home-2-upper-right .mission-vission {
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.8s ease-out;
  }

  /* When in view */
  .home-2-upper-right.in-view h2 {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
  }

  .home-2-upper-right.in-view .mission-vission:nth-child(1) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
  }

  .home-2-upper-right.in-view .mission-vission:nth-child(2) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  }

  /* Extra polish: mission card hover effect */
  .mission-vission {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .mission-vission:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  .home-2-upper-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .home-2-upper {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  .home-2-inner {
    width: 300px;
    height: 320px;
    border-radius: 25px;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  /* Hover grows gradient from top-right down */
  .home-2-inner::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 25px;
    background: linear-gradient(to top, #b47c1f, #cc9430, #523803, #816924);
    background-size: 0% 0%; /* start hidden */
    background-position: top right;
    background-repeat: no-repeat;
    transition: background-size 1s ease-out;
    z-index: 0; /* behind text */
  }

  .home-2-inner:hover::before {
    background-size: 200% 200%; /* expand from corner */
  }

  .home-2-inner:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  /* Keep text above gradient */
  .home-2-inner * {
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
  }

  .home-2-inner h6 {
    color: #e77817;
    font-size: 11px;
    font-weight: 700;
    border-bottom: 1px solid #e77817;
    padding-bottom: 5px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .home-2-inner-sub h4 {
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
  }

  .home-2-inner-sub p {
    color: #ffffffb2;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    max-width: 250px;
  }

  .home-2-inner-sub span {
    color: #cc8825 !important;
    font-size: 42px !important;
  }
  .home-2-inner-sub {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .home-2-inner:hover h6,
  .home-2-inner:hover h4 {
    color: #ffffff;
  }

  .home-2-inner:hover .home-2-inner-sub span {
    color: #ffe08a !important;
  }
  .home-2-sub img {
    width: 300px;
    height: 320px;
    border-radius: 25px;
  }
  .home-2-sub {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  .home-2-down-img {
    width: 100%;
    height: 700px;
    max-width: 500px;
    border-radius: 25px;
  }
  .home-2-down {
    display: flex;
    gap: 30px;
  }
  .home-2 {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .home-8 {
    background-size: cover; /* ensures the image fits */
    background-repeat: no-repeat;
    background-position: center;
    margin: 30px;
    padding: 50px;
    margin-top: 100px;
    position: relative;
    border-radius: 30px;
    background-image: url("./images/footer.png");
  }
  .home-8-upper h2 {
    max-width: 584px;
    text-align: center;
    font-weight: 700;
    line-height: 36px;
    color: #191816;
    font-size: 35px;
  }
  .home-8-upper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  input {
    background: #f7f6f2;
    width: 300px;
    border: none;
    height: 60px;
    border-radius: 30px;
    padding-left: 15px;
  }
  .home-8-input {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .home-8-down-sub h4 {
    max-width: 279px;
    color: #42413e;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  }
  .home-8-down-sub {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
  }
  .home-8-down {
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 3;
  }
  .home-8-all {
    background: #ffffff;
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    border-radius: 30px;
    position: relative;
  }
  .side-img-1 {
    position: absolute;
    bottom: -10px;
    right: -30px;
    z-index: 1;
  }
  .side-img-2 {
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 1;
  }

  .schedule-btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: #ffffff;
    background: #025726ff; /* base color */
    font-size: 13px;
    font-weight: 700;
    width: 188px;
    height: 60px;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
  }

  /* Gradient overlay with 4 colors */
  .schedule-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #8b4513 0%, #025726 50%, #1c1c1c 100%);
    transform: translateY(100%);
    transition: transform 0.4s ease-in-out;
    z-index: 0;
    border-radius: inherit;
  }

  .schedule-btn:hover::before {
    transform: translateY(0);
  }

  /* Make sure button text & icons are visible above gradient */
  .schedule-btn * {
    position: relative;
    z-index: 1;
  }

  .schedule-btn span {
    position: relative;
    z-index: 1;
  }

  .schedule-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 100px;
    width: 50px;
    height: 50px;
  }
  .slide-left {
    animation: slideFromLeft 1s ease-out forwards;
  }

  .slide-right {
    animation: slideFromRight 1s ease-out forwards;
  }

  @keyframes slideFromLeft {
    from {
      transform: translateX(-1000px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideFromRight {
    from {
      transform: translateX(1000px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media (max-width: 1200px) {
    .home-2-down {
      flex-direction: column;
    }
    .home-2-down-img {
      max-width: 100% !important;
    }
  }
  @media (max-width: 1024px) {
    .home-2-new-down {
      flex-direction: column;
    }
    .home-2-new-down-inner {
      margin-left: 0px;
      margin-top: -40px;
    }
    .home-3-new-all {
      flex-direction: column;
    }
  }

  @media (max-width: 992px) {
    .home-2-upper-right h2 {
      font-size: 50px !important;
      line-height: 55px !important;
      text-align: center;
    }
    .home-2-upper {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 700px) {
    .home-2-new-down img {
      max-width: 500px;
    }
    .home-2-sub {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
    .home-2-down-img {
      height: 600px !important;
    }
  }

  @media (max-width: 600px) {
    .all-mission-vision {
      flex-direction: column;
      align-items: centers;
    }
  }
  @media (max-width: 550px) {
    .home-2-new-down img {
      max-width: 400px;
      height: 400px;
    }
    .home-2-sub {
      margin-bottom: 70px;
    }
    .home-2-down-img {
      height: 500px !important;
    }
  }
  @media (max-width: 400px) {
    .home-2-new-down img {
      max-width: 350px;
      height: 400px;
    }
  }
  .over-4-header p {
    max-width: 480px;
    line-height: 23px;
    text-align: justify;
  }
  .over-4-header {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .over-4-header h4 {
    color: white;
    font-size: 40px;
    font-weight: 600;
  }
  .over-4-header-all p {
    font-weight: 400;
    font-size: 18px;
    color: #ffffffb2;
    line-height: 28px;
    max-width: 516px;
  }
  .over-4-header-all {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .over-4-header button {
    background: #e06f29;
    width: 166px;
    height: 52px;
    border-style: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
  }

  .over-4-inner {
    display: flex;
    gap: 20px;
  }

  .over-4-inner img {
    width: 250px;
    height: 200px;
  }
  .modal-overlay {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .modal-content {
    position: relative;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    width: 90%;
    height: 80%;
  }

  .modal-content img {
    width: 100%;
    max-height: 70vh;
    border-radius: 4px;
  }

  .close-btn {
    position: absolute;
    top: -10px;
    right: -10px;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    cursor: pointer;
    font-size: 16px;
  }

  .img-magin {
    margin-right: 20px;
  }
  .over-4 {
    background: radial-gradient(
      circle at center,
      #2a2a2a,
      #1a1a1a,
      #000000,
      #6e4223ff,
      #28a745
    );
    background-size: 200% 200%;
    animation: pulseGlow 10s ease-in-out infinite;

    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 50px 20px;
  }

  /* Inside-out growing animation */
  @keyframes pulseGlow {
    0% {
      background-size: 100% 100%;
      background-position: center;
    }
    50% {
      background-size: 150% 150%;
      background-position: center;
    }
    100% {
      background-size: 100% 100%;
      background-position: center;
    }
  }

  .gallery-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    margin: 20px 0;
  }

  .gallery-slider {
    overflow: hidden;
    width: 100%;
  }

  .gallery-inner {
    display: flex;
    gap: 20px;
    width: fit-content;
    transition: transform 0.3s ease-in-out;
  }

  .gallery-img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    margin-right: 5px;
    flex-shrink: 0;
    border-radius: 8px;
    cursor: pointer;
  }
  .banner-wrapper {
    position: relative;
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .banner-link {
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #e77817;
    margin: 20px;
    margin-top: 0px;
    padding-bottom: 20px !important;
    margin-bottom: 20px !important;
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    color: red;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .galery-div {
    width: 40%;
    flex: 0 0 50%; /* Each item takes 50% of container */
    box-sizing: border-box;
    height: auto;
    border-radius: 8px;
    background: linear-gradient(180deg, #1c1c1c 0%, #025726 50%, #8b4513 100%);
    padding-bottom: 20px;
    cursor: pointer;
    position: relative; /* needed for ::before */
    overflow: hidden; /* keep hover effect inside */
    z-index: 0;
    color: #00001c;
  }

  /* overlay background */
  .galery-div::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(180deg, #8b4513 0%, #025726 50%, #1c1c1c 100%);
    border-radius: 8px;
    z-index: -1;
    color: #ffff;
    transition: height 0.5s ease;
  }

  /* grow background on hover */
  .galery-div:hover::before {
    height: 100%;
  }

  .galery-div-inner {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .galery-div-inner h4 {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }
  .galery-div p {
    font-size: 16px;
    font-weight: 400;
    max-width: 592px;
    color: #ffffff;
    line-height: 23px;
  }
  .galery-div-inner-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #c1bfbeff;
  }
  .nav-btn {
    background-color: white;
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }

  .left-btn {
    left: 10px;
  }

  .right-btn {
    right: 10px;
  }

  .modal-overlay {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .modal-content {
    position: relative;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    max-width: 55%;
    max-height: 90%;
  }

  .modal-content img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .close-btn {
    position: absolute;
    top: -10px;
    right: -10px;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    cursor: pointer;
    font-size: 16px;
  }

  .choose-div-header h2 {
    color: white;
    max-width: 440px;
    line-height: 100%;
    font-weight: 600;
    font-size: 40px;
    text-align: center;
  }
  .choose-div-header {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .choose-div-sub h4 {
    color: black;
    font-weight: 600;
    font-size: 24px;
  }
  .choose-div-sub p {
    line-height: 28px;
    font-weight: 400;
    color: #424141ff;
    font-size: 18px;
    max-width: 337px;
  }
  .choose-div-sub {
    display: flex;
    background: white; /* default state */
    padding: 20px;
    border-radius: 20px;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative; /* needed for overlay */
    overflow: hidden; /* keeps hover effect inside */
    z-index: 0;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  /* gradient overlay */
  .choose-div-sub::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0; /* grows on hover */
    background: linear-gradient(180deg, #8b4513 0%, #025726 50%, #1c1c1c 100%);
    border-radius: 20px;
    z-index: -1;
    transition: height 0.6s ease;
  }

  /* hover effect */
  .choose-div-sub:hover::before {
    height: 100%;
  }

  .choose-div-sub:hover h4,
  .choose-div-sub:hover p {
    color: #ffffff; /* text turns white for contrast */
    transition: color 0.4s ease;
  }

  .choose-div-body {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .choose-div-all {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: #000000;
    padding-bottom: 80px;
    padding-top: 80px;
  }
  .choose-div-icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #12121229;
  }

  .choose-div-sub:hover .choose-div-icon {
    background: #ffffff;
  }
  .choose-div-icon img {
    width: 20px;
    height: 20px;
  }

  .sub-col-5 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    flex: 1;
    width: 100%;

    padding-top: px;
  }

  .sub-col-5 h2,
  .sub-col-5-mobile h2 {
    max-width: 374px;
    margin: 0px;
    text-align: start;
    font-weight: 600;
    color: #ffffff;
    font-size: 40px;
  }
  .sub-col-5 p,
  .sub-col-5-mobile p {
    font-size: 16px;
    line-height: 26px;
    max-width: 402px;
    font-weight: 400;
    color: #e1dbdb;
  }
  .sub-col-5-btn {
    color: #ffffff;
    background: #025726ff;
    width: 200px;
    height: 50px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;

    position: relative; /* needed for ::before */
    overflow: hidden; /* keep overlay inside */
    z-index: 0;
  }

  /* overlay background */
  .sub-col-5-btn::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(180deg, #8b4513 0%, #025726 50%, #1c1c1c 100%);

    border-radius: 100px;
    z-index: -1;
    transition: height 0.5s ease;
  }

  /* grow background on hover */
  .sub-col-5-btn:hover::before {
    height: 100%;
  }

  .sub-col-5-mobile p {
    max-width: 700px !important;
  }
  .not-align {
    justify-content: flex-start;
  }
  .sub-col-5-btn {
    width: 156px;
    height: 44px;
  }
  .home-4,
  .mobile4-home {
    background: linear-gradient(-45deg, #04250bff, #1d1007ff, #2a2a2a, #1c1c1c);
    background-size: 300% 300%;
    animation: darkShadeShift 20s ease-in-out infinite;

    margin: 100px 20px;
    overflow: hidden;
    padding-top: 80px;
    border-radius: 30px;
  }

  /* Subtle gradient movement */
  @keyframes darkShadeShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .mobile4-home {
    display: none;
  }
  .home-4-mobile {
    display: none !important;
    background: #1a1a1a;
    margin: 100px 20px;
    overflow: hidden;
    padding-top: 80px;
    border-radius: 30px;
  }
  .home-4-img {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    justify-content: start;
    align-items: center;
    position: relative;
    max-width: 452px !important;
  }

  .img-4 {
    object-fit: cover;
    max-width: 452px !important;
    height: 447px;
  }
  .col-5 {
    height: 1470px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
  }
  .col-5-mobile {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .services-text h4 {
    font-weight: 600;
    font-size: 25px;
  }
  .services-text p {
    font-weight: 400;
    font-weight: 18px;
    line-height: 23px;
    max-width: 544px;
  }

  .sub-col-2 {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
  }
  .sub-col-2 p {
    color: #576284;
    font-size: 14px;
  }
  .sub-col-2 img {
    width: 16px;
    height: 16px;
  }
  .green-svg {
    width: 16px;
    height: 16px;
  }
  .col-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 100px;
  }
  .col-3 h2,
  .counter-head h2 {
    max-width: 589px;
    margin: 0px;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    line-height: 40px;
    color: #ffffff;
  }

  .col-3 p,
  .counter-head p {
    font-size: 18px;
    text-align: center;
    color: #ffffffb2;
    margin: 0px;
  }
  /* .task-div {
    background: #f1f4fd;
    min-height: 304px;
    position: relative;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */

  .task-div h3 {
    color: #0c1d55;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
  .task-div p {
    color: #576284;
    font-size: 14px;
    text-align: center;
    max-width: 885px;
  }

  .task-img {
    width: 350px;
    height: 233px;
  }
  .bill-img {
    width: 260px;
    height: 233px;
  }
  .receipt-img {
    position: absolute;
    right: 0px;
  }

  .task-mgn {
    padding-top: 70px;
    background: linear-gradient(180deg, rgba(241, 244, 253, 0) 0%, #f1f4fd 40%);
    position: absolute;
    height: 100px;
    padding-bottom: 50px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .task-mgn p {
    margin: 0px;
  }
  .document-div {
    display: flex;
    position: relative;
  }
  .bill-div {
    min-height: 352px !important;
  }
  .grid-container-1,
  .grid-container-2 {
    display: grid;
    gap: 16px; /* Space between grid items */
    grid-template-columns: repeat(
      auto-fit,
      minmax(250px, 1fr)
    ); /* Responsive columns */
    margin: 16px 0;
  }

  .triangle-carousel {
    position: relative;
    width: 100%;
    max-width: 1000px;
    height: 600px;
    margin: auto;
    perspective: 1000px;
  }

  .card {
    position: absolute;
    width: 30vw;
    max-width: 350px;
    padding: 20px;
    background: #f1f4fd;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    opacity: 0;
    padding-top: 0px;
    transform: scale(0.8);
  }

  .card img {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .card.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
    z-index: 3;
  }

  .card.left {
    top: 60%;
    left: 15%;
    transform: translate(-50%, -50%) rotate(-10deg) scale(0.9);
    opacity: 0.7;
    z-index: 2;
  }

  .card.right {
    top: 60%;
    right: 15%;
    transform: translate(50%, -50%) rotate(10deg) scale(0.9);
    opacity: 0.7;
    z-index: 2;
  }

  .card.hidden {
    opacity: 0;
    transform: scale(0.5);
    pointer-events: none;
  }

  .counter-div {
    width: 100%;
    height: fit-content; /* adjust to your need */
    border-radius: 30px; /* optional: smooth corners */
    background: linear-gradient(
      -45deg,
      #031e01ff,
      #401e05ff,
      #1d0943ff,
      #0f1510ff,
      #1c1c1c,
      #080604ff
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    gap: 70px;
    justify-content: space-between;
    color: white; /* so text is visible */
    font-size: 2rem;
    margin: 50px 20px;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .counter-head {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .counter-head h2,
  .counter-head p {
    text-align: center;
  }

  .counter-sub h4 {
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
  }

  .counter-sub p {
    color: #ffffff;
    font-size: 18px;
    font-weight: 450;
  }

  .counter-sub {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .counter-body {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .home-10-sub h6 {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .home-10-sub span {
    background: #3a954f;
    width: 10px;
    height: 3px;
  }
  .home-10-sub h2 {
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    max-width: 551px;
    text-align: center;
  }
  .home-10-sub {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
  }
  .home-11-inner-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .home-11-inner-1 h2 {
    color: #34302f;
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    max-width: 571px;
    margin: 0px;
  }
  .home-11-inner-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .home-11-inner-2 img {
    width: 270px;
    height: 245px;
  }
  .logitech img {
    width: 50px;
    height: 50px;
  }
  .logitech p {
    color: #e9e6e6ff;
    font-size: 18px;
    font-weight: 450;
    line-height: 23px;
    max-width: 600px;
    text-align: center;
  }
  .logitech h5 {
    color: #8b4513;
    font-size: 16px;
    font-weight: 600;
  }
  .logitech {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .home-11 {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  .home-10 {
    background: radial-gradient(circle at top, #0c2813ff, #0b0b0bff 80%);
    position: relative; /* ensure stacking context */
    z-index: 0;
    border-radius: 30px;
    margin: 50px 30px;
    margin-top: 130px;
    padding-top: 150px;
    padding-bottom: 50px !important;
    margin-bottom: 0px !important;
  }

  .home-11-cut {
    position: absolute;
    top: 0px;
    right: 40%;
  }
  .all-circle-con {
    position: absolute;
    top: -70px;
    right: 46%;
  }

  .circle-container {
    position: relative;
    height: 170px;
  }

  .center-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle-text {
    width: 100%;
    height: 100%;
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .orbit-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center -125px; /* radius of orbit */
  }

  .orbit-text:nth-child(1) {
    transform: rotate(0deg);
  }
  .orbit-text:nth-child(2) {
    transform: rotate(90deg);
  }
  .orbit-text:nth-child(3) {
    transform: rotate(180deg);
  }
  .orbit-text:nth-child(4) {
    transform: rotate(270deg);
  }

  /* Stars effect */
  .home-10::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: transparent;
    background-image: radial-gradient(2px 2px at 20px 30px, #fff, transparent),
      radial-gradient(1.5px 1.5px at 200px 150px, #fff, transparent),
      radial-gradient(2px 2px at 400px 100px, #fff, transparent),
      radial-gradient(1.5px 1.5px at 600px 200px, #fff, transparent),
      radial-gradient(2px 2px at 800px 50px, #fff, transparent),
      radial-gradient(2px 2px at 1000px 250px, #fff, transparent);
    animation: starsMove 60s linear infinite;
    opacity: 0.8;

    z-index: -1; /* push behind content */
    pointer-events: none; /* make sure it never blocks clicks */
  }

  /* fade/slide effects */
  .slide-left {
    animation: slideLeft 0.6s ease;
  }
  .slide-right {
    animation: slideRight 0.6s ease;
  }

  .counter-1 {
    border-left: 1px solid #FFFFFF;
    width: 300px;
    position: relative;
    padding-left: 50px;

}
.counter-1:nth-child(1) {
  height: 300px;
}

.counter-1:nth-child(2) {
  height: 400px;
}

.counter-1:nth-child(3) {
  height: 280px;
}

.counter-1:nth-child(4) {
  height: 350px;
}
.all-circle-contain {
    position: absolute;
    left: -20px;
    top: -20px;
    
}
.circular-cirle {
    background: #ffffff;
    width: 5px;
    height: 5px;
    border-radius: 100px;
    position: absolute;
    top: -3px;
    left: -3px;
}
.counter-text h4 {
    color: #ffffff;
    font-size: 73px;
    font-weight: 700;
    display: flex;
    gap: 4px;
    align-items: flex-start;
}
.counter-text span {
    color: #cc8825;
    font-size: 54px;
    font-weight: 700;
}
.counter-text p {
    color: #FFFFFF99;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    max-width: 109px;

}
.counter-text {
    margin-top: -70px;
}
.circle-container {
  position: relative;
  height: 40px;
 
}



.circle-text {
  width: 100%;
  height: 100%;
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.orbit-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center -125px; /* radius of orbit */
}

.orbit-text:nth-child(1) { transform: rotate(0deg); }
.orbit-text:nth-child(2) { transform: rotate(90deg); }
.orbit-text:nth-child(3) { transform: rotate(180deg); }
.orbit-text:nth-child(4) { transform: rotate(270deg); }


.all-counter {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
   align-items: flex-end;
    justify-content: space-between;
    margin-top: 50px;
}

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(1000px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(-1000px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Stars moving slowly */
  @keyframes starsMove {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-200px);
    }
  }

  /* ✅ Responsive styles */
  @media screen and (max-width: 768px) {
    .triangle-carousel {
      height: 500px;
    }

    .card {
      width: 70vw;
    }

    .card.left {
      top: 65%;
      left: 10%;
      transform: translate(-50%, -50%) rotate(-5deg) scale(0.85);
    }

    .card.right {
      top: 65%;
      right: 10%;
      transform: translate(50%, -50%) rotate(5deg) scale(0.85);
    }
  }
 @media (max-width: 1300px) { 
.counter-1 {
  width: 200px ;
}
  }
  @media (max-width: 1130px) {
    .modal-content {
      max-width: 90% !important;
      height: 60%;
    }
  }
  @media (max-width: 1024px) {
    .over-4-header-all {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1000px) {
  }
  @media (max-width: 992px) {
    .choose-div-body {
      flex-wrap: wrap;
    }
    .home-11-cut {
      position: absolute;
      top: 0px;
      right: 30% !important;
    }
    .all-circle-con {
      position: absolute;
      top: -70px;
      right: 39%;
    }
    .home-8-input {
      grid-template-columns: repeat(1, 1fr);
    }
    input {
      width: 70vw;
    }
    .home-8-down-sub {
      flex-direction: column;
    }
    .home-8-all,
    .home-8 {
      padding: 50px 10px !important;
    }
    .mobile4-home {
      display: block !important ;
    }
    .home-4-gone {
      display: none;
    }
    .home-4-mobile {
      display: block;
    }
    .all-counter {
      grid-template-columns: repeat(2, 1fr);
      gap: 0px !important;
    }
    .counter-1 {
      width: 300px;
      height: 250px !important;
    }
  }

  @media (max-width: 800px) {
    .home-11-cut {
      position: absolute;
      top: 0px;
      right: 30% !important;
    }
    .all-circle-con {
      position: absolute;
      top: -70px;
      right: 39%;
    }
  }
  @media (max-width: 800px) {
    /* .home-11-cut {
    position: absolute;
    top: 0px;
    right: 25% !important;
  }
  .all-circle-con {
    position: absolute;
    top: -70px;
    right: 36%;
  } */
  }
  @media (max-width: 678px) {
    .home-1,
    .home-1-img-banner {
      height: 50vh;
    }
    .home-1 {
      gap: 20px;
      padding-bottom: 10px;
    }
    .home-11-cut {
      position: absolute;
      top: 0px;
      right: 20% !important;
    }
    .all-circle-con {
      position: absolute;
      top: -70px;
      right: 33%;
    }
    .home-1 h1 {
      font-size: 40px;
      line-height: 50px;
    }
    .gallery-inner {
      flex-wrap: wrap;
    }
    .galery-div {
      width: 100%;
      flex: 0 0 100%;
    }
    .nav-btn {
      display: none;
    }
    .icon-home-11 {
      display: none;
    }

     .counter-1 {
      width: 200px;
      height: 250px !important;
    }
  }
  @media (max-width: 550px) {
    .home-8 {
      margin-left: 10px;
      margin-right: 10px;
    }
    .over-4 {
      margin: 0px 0px !important;
      margin-top: 80px !important;
    }
    .home-1 {
      padding-left: 10px !important;
    }
    .home-4,
    .about-3 {
      margin: 0px 0px !important;
      padding-bottom: 0px !important;
      margin-top: 80px;
    }

    .counter-div,
    .mobile4-home,
    .home-10 {
      margin: 0px 0px !important;
    }

    .counter-div {
      margin-top: 50px !important;
    }
    .all-counter {
      padding-left: 40px;
      grid-template-columns: repeat(1, 1fr);
    }
    /* .counter-body {
  flex-direction: column;
  align-items: center;
} */
  }
  @media (max-width: 450px) {
    .home-11-cut {
      position: absolute;
      top: 0px;
      right: 15% !important;
    }
    .all-circle-con {
      position: absolute;
      top: -70px;
      right: 32%;
    }
  }

  @media (max-width: 410px) {
    .home-11-cut {
      position: absolute;
      top: 0px;
      right: 10% !important;
    }
    .all-circle-con {
      position: absolute;
      top: -70px;
      right: 29%;
    }
  }
  @media (max-width: 370px) {
    .home-11-cut {
      position: absolute;
      top: 0px;
      right: 5% !important;
    }
    .all-circle-con {
      position: absolute;
      top: -70px;
      right: 26%;
    }
  }
`;

const useInViewAnimation = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 } // 20% visible triggers it
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

const Home = () => {
  const slider = [
    {
      id: 0,
      banner: "/images/image-1.jpeg",

      title: "Leading Experts in HSE and Environmental Management",
      sub_title:
        "Delivering sustainable, world-class solutions through NEBOSH, IOSH, and OSHA-certified practices.",
    },
    {
      id: 1,
      video: "/images/video-1.mp4",
      title: "Sustainable Solutions for Complex Environments",
      sub_title:
        "From consulting to project execution — we thrive in challenging and critical conditions.",
    },
    {
      id: 2,
      banner: "/images/image-3.jpg",
      title: "Empowering Safety, Driving Excellence",
      sub_title:
        "Indigenous expertise with global standards for Health, Safety, and Environmental compliance.",
    },
    {
      id: 3,
      video: "/images/video-2.mp4",
      title: "Your Trusted Partner in HSE & Project Management",
      sub_title:
        "Audits, training, and consulting services designed to protect people, projects, and the planet.",
    },
  ];

  const images = [
    "/images/image_2.png",
    "/images/image_3.png",
    "/images/image_4.png",
  ];

  const services = [
    {
      id: 0,
      banner: "/images/image-1.jpeg",
      title: "Environmental Assessment & Management",
      sub_title:
        "These services support organizations in evaluating, managing, and minimizing environmental and social impacts in compliance with national and international standards.",
    },
    {
      id: 1,
      banner: "/images/image-2.jpg",
      title: "Health, Safety & Regulatory Compliance",
      sub_title:
        "Focused on developing systems and assessments that promote workplace safety, regulatory compliance, and risk management.",
    },
    {
      id: 2,
      banner: "/images/image-3.jpg",
      title: "Geospatial Technology & Land Use Services",
      sub_title:
        "These services utilize advanced mapping and spatial tools to support planning, resource management, and environmental monitoring.",
    },
    // {
    //     id: 3,
    //     banner: "/images/image-4.jpg",
    //     title: "Waste, Emergency, & Capacity Services",
    //     sub_title: "These offerings support waste management, emergency response, and institutional capacity building for both public and private sectors.",
    // },
  ];

  const documents = [
    {
      id: 0,
      title: "Task management",
      overview: "Lorem ipsum dolor sit amet consectetur. Et diam aenean",
      image: "/images/task_img.png",
    },
    {
      id: 1,
      title: "Environmental certification",
      overview: "Lorem ipsum dolor sit amet consectetur. Et diam aenean",
      image: "/images/task_img.png",
    },
    {
      id: 2,
      title: "Document management",
      overview: "Lorem ipsum dolor sit amet consectetur. Et diam aenean",
      image: "/images/task_img.png",
    },
    {
      id: 3,
      title: "Training management",
      overview: "Lorem ipsum dolor sit amet consectetur. Et diam aenean",
      image: "/images/task_img.png",
    },
  ];

  const testimonials = [
    {
      id: 1,
      full_name: "MARIA JABLONSKI",
      testimony:
        "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
      image: "/images/image-8.png",
      pic: "images/img-3.png",
    },
    {
      id: 2,
      full_name: "LIONEL MESSI",
      testimony:
        "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
      image: "/images/image-8.png",
      pic: "images/img-3.png",
    },
  ];

  const counters = [
    {
      counter: "Our Training",
      title:
        "We engage as early as possible, typically during the conceptual or schematic stage",
    },
    {
      counter: "Our Impact",
      title:
        "Engage as early as possible, typically during the conceptual or schematic stage",
      image: "/images/image-3.jpg",
    },
    {
      counter: "Local experties",
      title: "We engage as early as possible, typically during the conceptual.",
      image: "/images/image-4.jpg",
    },
  ];

  const [activeSlideIndexes, setActiveSlideIndexes] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(services[0]);
  const [currentIndexNew, setCurrentIndexNew] = useState(0);

  const currentTestimony = testimonials[currentIndexNew];

  const [animation, setAnimation] = useState("");

  const handleNextNew = () => {
    setAnimation("slide-left");
    setCurrentIndexNew((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevNew = () => {
    setAnimation("slide-right");
    setCurrentIndexNew((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  useInViewAnimation(".home-2-upper-right");
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextNew(),
    onSwipedRight: () => handlePrevNew(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // works for mouse drag too
  });

  const settingsing = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const containerRef = useRef(null);
  const textDivRef = useRef(null);
  const imagesDivRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // start when 30% visible
  });

  useEffect(() => {
    const container = containerRef.current;
    const imagesDiv = imagesDivRef.current;
    console.log(imagesDiv.scrollHeight);
    // Pin the textDiv while the imagesDiv scrolls
    ScrollTrigger.create({
      trigger: container,
      start: "-100px top",
      end: () => `+=900`, // Dynamically calculate scroll height
      pin: textDivRef.current, // Pin the text div
      scrub: true, // Smooth pinning
    });

    // Cleanup on component unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { homeObject, aboutObject, loading, error } = useSelector(
    (state) => state.content || []
  );
  console.log(homeObject);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);
  const isPausedTwoRef = useRef(false);

  const [currentDiv, setCurrentDiv] = useState(0);
  const [currentIndexp, setCurrentIndexp] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerView = 2;
  const itemsPerViewTwo = 1;
  console.log(selectedImage);
  const [activeLink, setActiveLink] = useState("home");

  //   const slider = homeObject?.data?.slider || [];
  const about = homeObject?.data?.about;
  const footerTitle = homeObject?.data?.footerTitle;
  const moreServices = homeObject?.data?.moreServices;
  const newsletter = homeObject?.data?.newsletter;
  // const portfolio = homeObject?.data?.portfolio;
  const servicess = homeObject?.data?.services;
  const whyChoseUs = homeObject?.data?.whyChoseUs;
  const sectionOne = aboutObject?.data?.sectionOne;
  const sectionTwo = aboutObject?.data?.sectionTwo;
  const sectionThree = aboutObject?.data?.secThree;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slider[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  // const currentSlide = slider[currentIndex];
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // ✅ Autoplay enabled
    autoplaySpeed: 5000, // ✅ 5 seconds (adjust as needed)
    beforeChange: (oldIndex, newIndex) => {
      setActiveSlideIndex(newIndex); // Track active index
      setCurrentSlide(slider[newIndex]); // Keep your existing logic
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % documents.length);
    }, 5000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index) => {
    const relativeIndex =
      (index - activeIndex + documents.length) % documents.length;
    if (relativeIndex === 0) return "center";
    if (relativeIndex === 1) return "right";
    if (relativeIndex === documents.length - 1) return "left";
    return "hidden"; // hide other items
  };

  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchObjectpage()); // Call API on component mount
  }, [dispatch]);

  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 300; // width + gap
    if (scrollRef.current) {
      direction === "left"
        ? scrollRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          })
        : scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
    }
  };

  const servicesTwo = servicess?.serviceList || [];

  const maxIndex = Math.ceil(services?.length / itemsPerView) - 1;
  const maxIndexTwo = Math.ceil(servicesTwo?.length / itemsPerViewTwo) - 1;

  const handleNextMobile = () => {
    if (currentIndexTwo < maxIndexTwo) {
      setCurrentIndexTwo((prev) => prev + 1);
    }
  };

  const handlePrevMobile = () => {
    if (currentIndexTwo > 0) {
      setCurrentIndexTwo((prev) => prev - 1);
    }
  };

  const startAutoSlide = (servicesLength, itemsPerView) => {
    const totalSlides = Math.ceil(servicesLength / itemsPerView);

    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }
    }, 5000);
  };

  useEffect(() => {
    if (!services || services.length === 0) return;

    startAutoSlide(services.length, itemsPerView);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [services, itemsPerView]);

  useEffect(() => {
    if (!servicesTwo || servicesTwo.length <= 1) return;

    const totalSlidesTwo = Math.ceil(servicesTwo.length / itemsPerViewTwo);

    const interval = setInterval(() => {
      if (!isPausedTwoRef.current) {
        setCurrentIndexTwo((prev) => (prev + 1) % totalSlidesTwo);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [servicesTwo, itemsPerViewTwo]);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const portfolio = [
    {
      image: "/images/image-2.jpg",
      video: "/images/video-1.mp4",
      title: "Environmental Impact Assessment (EIA) for CNG Facility",
      content:
        "Conducted a comprehensive EIA to assess the potential environmental and socio-economic impacts of a proposed Compressed Natural Gas (CNG) facility. The study ensured alignment with regulatory standards and provided mitigation strategies to support sustainable energy development.",
      client: "Basswood Energy Limited",
      address: "Lagos-Ibadan Expressway, Ogun State",
    },
    {
      image: "/images/image-3.jpg",
      video: "/images/video-2.mp4",
      title: "Environmental and Social Due Diligence (ESDD)",
      content:
        ": Conducted an ESDD to assess environmental, health, safety, and social risks associated with industrial operations. The findings informed risk mitigation plans and compliance strategies in line with international best practices.",
      client: "Supertech Industries Limited",
      address: "Ondo State",
    },
    {
      image: "/images/image-4.jpg",
      video: "",
      title: "Training in Occupational Health",
      content:
        "Development and implementation of a certified management system covering environment, quality, and occupational safety. Risk prevention and safety culture in telecom operations.",
      client: "Ikeja Electricity Distribution Company",
      address: "Lagos",
    },
  ];

  const visibleImages = 2;
  const totalSlides = Math.ceil((portfolio.length || 0) / visibleImages);

  const handlePrevTwo = () => {
    if (currentIndexp > 0) {
      setCurrentIndexp((prev) => prev - 1);
    }
  };

  const handleNextTwo = () => {
    if (currentIndexp < totalSlides - 1) {
      setCurrentIndexp((prev) => prev + 1);
    }
  };

  const translateXPercent = currentIndexp * 101;

  const handleGoToOtherServices = (id) => {
    navigate(`/otherservices/details/${id}`);
  };

  // const handleMovetoDetailsService = (id) => {
  //   navigate(`/management/${id}`)
  // }

  let parsedContent = [];
  try {
    parsedContent = JSON.parse(about?.paragraph_one);
  } catch (e) {
    console.error("Failed to parse content:", e);
  }

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log(link);
    }
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -200, y: -100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100, y: -100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };

  console.log(parsedContent);

  return (
    <HomeRap>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slider?.map((slide, index) => (
            <div key={index}>
              <div
                id="home"
                className="home-1"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "100vh",
                }}
              >
                {/* ✅ Conditionally render background video or image */}
                {slide?.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "blur(2px)",
                      zIndex: -3,
                    }}
                    src={slide.video}
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${slide?.banner})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(4px)",
                      zIndex: -3,
                    }}
                  />
                )}

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
                    zIndex: -2,
                  }}
                />

                {/* Foreground Content */}
                <div
                  className="slide-content"
                  style={{
                    position: "relative",
                    color: "white",
                    padding: "3rem",
                  }}
                >
                  <h1 className="slide-heading">{slide?.title}</h1>
                  <p className="slide-subtitle">{slide?.sub_title}</p>
                  <Link
                    onClick={() => handleLinkClick("contact")}
                    className="get-in-touch"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="home-2 containers">
        <div className="home-2-upper">
          <div className="home-2-upper-left">
            <p>Who we are</p>
          </div>
          <div className="home-2-upper-right">
            <h2>
              The largest privately held Health, safety and regulatory
              compliance in the world
            </h2>
            <div className="all-mission-vision">
              <div className="mission-vission">
                <div className="mission-upper">
                  <Icon
                    className="icon"
                    width="30px"
                    height="30px"
                    icon="game-icons:extra-vision"
                    color="black"
                  />
                  <h4>Our Vision</h4>
                </div>
                <p>
                  To empower businesses with cutting-edge web solutions that
                  enhance their digital presence and drive growth.
                </p>
              </div>
              <div className="mission-vission">
                <div className="mission-upper">
                  <Icon
                    className="icon"
                    width="30px"
                    height="30px"
                    icon="icon-park-outline:user-to-user-transmission"
                    color="black"
                  />
                  <h4>Our Mission</h4>
                </div>
                <p>
                  Our solutions are designed to meet the needs of modern
                  enterprises, ensuring they thrive in today’s competitive
                  online landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-2-down">
          <motion.img
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="home-2-down-img"
            src="/images/image-1.jpeg"
            alt=""
          />
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="home-2-sub"
          >
            {counters?.map((items, index) => (
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${items?.image})`,
                }}
                className="home-2-inner"
              >
                <h6>0{index + 1}</h6>
                <div className="home-2-inner-sub">
                  <h4>{items?.counter}</h4>
                  <p>{items?.title}</p>
                </div>
              </div>
            ))}

            <img src="/images/image-3.jpg" alt="" />
          </motion.div>
        </div>
      </div>

      <div>
        <div className="home-4 home-4-gone containers" ref={containerRef}>
          <div className=" col-5">
            <div className="sub-col-5" ref={textDivRef}>
              {/* <div className="sub-col-2 not-align">
                <img src="/images/green_svg.png" />
                <p>The modern standard</p>
              </div> */}
              <h2>Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum tellus eu
                pulvinar amet aliquam nullam massa augue. Lorem suspendisse
                interdum bibendum morbi neque nullam. Etiam mattis nulla.
              </p>
              <Link className="sub-col-5-btn btn" to="">
                Learn{" "}
                <Icon
                  icon="charm:arrow-right"
                  width="12"
                  height="12"
                  style={{ color: "white" }}
                />
              </Link>
            </div>
            <div className="home-4-img" ref={imagesDivRef}>
              {services?.map((service, index) => (
                <div
                  className="services-text"
                  key={index}
                  style={{
                    //   flex: `0 0 ${100 / services?.length}%`,
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3), #000), url(${service?.banner})`,
                    height: "418px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    padding: "20px",
                    paddingBottom: "40px",
                    display: "flex",
                    gap: "15px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    color: "#fff",
                  }}
                >
                  <h4>{service.title}</h4>
                  <p>{service.sub_title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mobile4-home containers">
          <div className="sub-col-5">
            {/* <div className="sub-col-2 not-align">
                <img src="/images/green_svg.png" />
                <p>The modern standard</p>
              </div> */}
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum tellus eu
              pulvinar amet aliquam nullam massa augue. Lorem suspendisse
              interdum bibendum morbi neque nullam. Etiam mattis nulla.
            </p>
            <Link className="sub-col-5-btn btn" to="">
              Learn{" "}
              <Icon
                icon="charm:arrow-right"
                width="12"
                height="12"
                style={{ color: "white" }}
              />
            </Link>
          </div>
          <div
            style={{
              maxWidth: "1000px",
              margin: "auto",
              paddingRight: "10px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Slider {...settingsing}>
              {services.map((service, index) => (
                <div key={index}>
                  <div
                    className="services-text"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3), #000), url(${service.banner})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "400px",
                      borderRadius: "12px",
                      padding: "20px",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      gap: "15px",
                      padding: "40px",
                    }}
                  >
                    <h4>{service.title}</h4>
                    <p>{service.sub_title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="containers home-2">
        <div className="col-3">
          <h2>Beautiful documentation that converts users</h2>
          <p>A platform you can rely on to reach your audience</p>
        </div>
        <div>
          <div className="triangle-carousel">
            {documents.map((doc, index) => (
              <div key={doc.id} className={`card ${getPositionClass(index)}`}>
                <img src={doc.image} alt={doc.title} />
                <div className="task-div">
                  <h3>{doc.title}</h3>
                  <p>{doc.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="counter-div containers">
        <div className="counter-head">
          <h2>Helping Small Business to Grow and Expand</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        {/* <div className="counter-body" ref={ref}>
          <div className="counter-sub">
            <Icon
              className="icon"
              width="40px"
              height="40px"
              icon="file-icons:microsoft-project"
              color="white"
            />
            <h4>{inView && <CountUp end={200} duration={3} />}+</h4>
            <p>Project Done</p>
          </div>
          <div className="counter-sub">
            <Icon
              className="icon"
              width="40px"
              height="40px"
              icon="arcticons:pixel-experience"
              color="white"
            />
            <h4>{inView && <CountUp end={15} duration={3} />}+</h4>
            <p>Years of Experience</p>
          </div>
          <div className="counter-sub">
            <Icon
              className="icon"
              width="40px"
              height="40px"
              icon="hugeicons:star-award-01"
              color="white"
            />
            <h4>{inView && <CountUp end={56} duration={3} />}+</h4>
            <p>Award Winning</p>
          </div>
          <div className="counter-sub">
            <Icon
              className="icon"
              width="40px"
              height="40px"
              icon="streamline:information-desk-customer-remix"
              color="white"
            />
            <h4>{inView && <CountUp end={200} duration={3} />}+</h4>
            <p>Satisfied Customers</p>
          </div>
        </div> */}
        <div className="all-counter" ref={ref}> 

        <div className="counter-1">
          <div className="counter-text">
            <h4>
             {inView && <CountUp end={200} duration={3} />}
            </h4>
            <p>Project Done</p>
          </div>
          <div className="all-circle-contain">
            <div class="circle-container">
              <svg class="circle-text" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150
                    m -120, 0
                    a 120,120 0 1,1 240,0
                    a 120,120 0 1,1 -240,0"
                  />
                </defs>
                <text fill="#ffffff" font-size="100" font-weight="700">
                  <textPath href="#circlePath" startOffset="0%">
                    - - - - - - - - - - - -
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="circular-cirle"></div>
        </div>
         <div className="counter-1">
          <div className="counter-text">
            <h4>
              {inView && <CountUp end={15} duration={3} />}
            </h4>
            <p>Years of Experience</p>
          </div>
          <div className="all-circle-contain">
            <div class="circle-container">
              <svg class="circle-text" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150
                    m -120, 0
                    a 120,120 0 1,1 240,0
                    a 120,120 0 1,1 -240,0"
                  />
                </defs>
                <text fill="#ffffff" font-size="100" font-weight="700">
                  <textPath href="#circlePath" startOffset="0%">
                    - - - - - - - - - - - -
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="circular-cirle"></div>
        </div>
         <div className="counter-1">
          <div className="counter-text">
            <h4>
              {inView && <CountUp end={56} duration={3} />}
            </h4>
            <p>Number of Training Conducted</p>
          </div>
          <div className="all-circle-contain">
            <div class="circle-container">
              <svg class="circle-text" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150
                    m -120, 0
                    a 120,120 0 1,1 240,0
                    a 120,120 0 1,1 -240,0"
                  />
                </defs>
                <text fill="#ffffff" font-size="100" font-weight="700">
                  <textPath href="#circlePath" startOffset="0%">
                    - - - - - - - - - - - -
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="circular-cirle"></div>
        </div>
         <div className="counter-1 ">
          <div className="counter-text">
            <h4>
              {inView && <CountUp end={200} duration={3} />}
            </h4>
            <p>Satisfied customers</p>
          </div>
          <div className="all-circle-contain">
            <div class="circle-container">
              <svg class="circle-text" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150
                    m -120, 0
                    a 120,120 0 1,1 240,0
                    a 120,120 0 1,1 -240,0"
                  />
                </defs>
                <text fill="#ffffff" font-size="100" font-weight="700">
                  <textPath href="#circlePath" startOffset="0%">
                    - - - - - - - - - - - -
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="circular-cirle"></div>
        </div>
        </div>
      </div>

      <div id="company" className="over-4 containers">
        <div className="over-4-header-all">
          <div className="over-4-header">
            <h4>Explore Ongoing Projects</h4>
            <p>
              We have successfully executed numerous high-impact environmental
              projects across various industries and regions in Nigeria. Below
              are some of our most recent engagements:
            </p>
          </div>
        </div>

        <div className="gallery-container">
          <button onClick={handlePrevTwo} className="nav-btn left-btn">
            ◀
          </button>

          <div className="gallery-slider">
            <div
              className="gallery-inner"
              style={{ transform: `translateX(-${translateXPercent}%)` }}
            >
              {portfolio.map((item, index) => (
                <div className="galery-div" key={index}>
                  <div
                    className="banner-wrapper"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedImage(item);
                    }}
                  >
                    <img
                      src={item?.image}
                      alt={`pic-${index}`}
                      className="gallery-img"
                    />
                    {item?.video && <div className="play-button">▶</div>}
                  </div>
                  <div className="galery-div-inner">
                    <h4>{item.title}</h4>
                    <p>{item?.content}</p>
                    <div className="galery-div-inner-icon">
                      <Icon
                        width="14px"
                        height="14px"
                        icon="ion:people-sharp"
                        style={{ color: "#c1bfbeff" }}
                      />

                      {item.client}
                    </div>
                    <div className="galery-div-inner-icon">
                      <Icon
                        width="14px"
                        height="14px"
                        icon="ep:location"
                        style={{ color: "#c1bfbeff" }}
                      />

                      {item.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={handleNextTwo} className="nav-btn right-btn">
            ▶
          </button>
        </div>

        

        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {selectedImage?.video ? (
                // If it's YouTube or YouTube short link
                selectedImage.video.includes("youtube") ||
                selectedImage.video.includes("youtu.be") ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${
                      selectedImage.video.includes("?")
                        ? `${selectedImage.video}&playsinline=1&autoplay=1`
                        : `${selectedImage.video}?playsinline=1&autoplay=1`
                    }`}
                    title="Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // For mp4 or other video formats
                  <video
                    width="100%"
                    height="100%"
                    controls
                    playsInline // ✅ iPhone inline support
                    autoPlay // ✅ autoplay when modal opens
                  >
                    <source src={selectedImage.video} />
                    Your browser does not support this video format.
                  </video>
                )
              ) : (
                <img src={selectedImage?.image} alt="enlarged" />
              )}

              <button
                onClick={() => setSelectedImage(null)}
                className="close-btn"
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="choose-div-all  containers">
        <div className="choose-div-header">
          <h2>We're reliable and trusted by clients</h2>
        </div>
        <div className="choose-div-body">
          {/* Left Card */}
          <motion.div
            className="choose-div-sub"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="choose-div-icon">
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="grommet-icons:user-expert"
                color="black"
              />
            </div>
            <h4>People</h4>
            <p>
              Our people are professionals from different industry with a wealth
              of experience in HSE management. They are able to discover and
              uncover underlying issues challenging many companies as regards to
              safety management.
            </p>
          </motion.div>

          {/* Middle Card */}
          <motion.div
            className="choose-div-sub"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="choose-div-icon">
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="fluent:calendar-record-16-regular"
                color="black"
              />
            </div>
            <h4>Process</h4>
            <p>
              Our process flow is guided by ISO and globally accepted standards
              and certifications. We ensure that our solutions meet with
              regulatory policies and put our clients in the green as far as
              compliance is concerned
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="choose-div-sub"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="choose-div-icon">
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="ph:user-focus-bold"
                color="black"
              />
            </div>
            <h4>Technology</h4>
            <p>
              In a technology driven world, Spatial Ecosystem deploy the latest
              E-solutions when needed, incorporating management information
              systems that will ensure a smooth running of processes with lesser
              effort but with greater results.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="home-8">
        <div className="home-8-all">
          <div className="home-8-upper">
            <div className="home-2-upper-left">
              <p
                style={{
                  color: "black",
                }}
              >
                Quick Enquiry
              </p>
            </div>
            <h2>
              Get specialist advice for residential, commercial or property
            </h2>
          </div>
          <div className="home-8-down">
            <div className="home-8-input">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="You inquiry about..." />
            </div>
            <div className="home-8-down-sub">
              <h4>
                We're excited to connect with you! Required fields are marked *
              </h4>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="schedule-btn"
              >
                <span> Get a call back </span>
                <div className="schedule-circle">
                  <Icon
                    width="18px"
                    height="18px"
                    icon="tabler:arrow-up-right"
                    style={{ color: "#cc9430" }}
                  />
                </div>
              </Link>
            </div>
          </div>
          <img className="side-img-1" src="/images/side-img-1.png" alt="" />
          <img className="side-img-2" src="/images/side-img-2.png" alt="" />
        </div>
      </div>

      <div className="home-10 containers">
        <div className="home-10-sub">
          <h6>
            <span></span>A world wide Distributor green energy
          </h6>
          <h2>Our customers also share their success stories.</h2>
        </div>
        <div className="home-11-inner-2" {...handlers}>
          <Icon
            className="icon-home-11"
            icon="solar:arrow-left-outline"
            width="24"
            height="24"
            style={{ color: "#ffffff", cursor: "pointer" }}
            onClick={handlePrevNew}
          />

          <div
            className={`logitech ${animation}`}
            onAnimationEnd={() => setAnimation("")} // reset animation after it plays
          >
            <p>{currentTestimony?.testimony}</p>
            <img
              src="/images/listener-person.png"
              alt={currentTestimony?.full_name}
            />
            <h5 className="leonel">{currentTestimony?.full_name}</h5>
          </div>

          <Icon
            className="icon-home-11"
            icon="icons8:right-arrow"
            width="24"
            height="24"
            style={{ color: "#ffffff", cursor: "pointer" }}
            onClick={handleNextNew}
          />
        </div>
        <img className="home-11-cut" src="/images/cut-in-2.png" alt="" />
        <div className="all-circle-con">
          <div class="circle-container">
            <img
              src="/images/image-1.jpeg"
              alt="round image"
              class="center-image"
            />

            <svg class="circle-text" viewBox="0 0 300 300">
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150
           m -120, 0
           a 120,120 0 1,1 240,0
           a 120,120 0 1,1 -240,0"
                />
              </defs>
              <text fill="#e77817" font-size="22" font-weight="700">
                <textPath href="#circlePath" startOffset="0%">
                  What people say • What people say • What people say • What
                  people say •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </HomeRap>
  );
};
export default Home;
