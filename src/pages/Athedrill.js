import React from "react";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import { Accordion, Divider, Progress, TextInput } from "@mantine/core";

const Athedrill = () => {
  const groceries = [
    {
      emoji: (
        <div
          className="d-flex gap-4"
          style={{ justifyContent: "space-between" }}
        >
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M13.2109 10L9.46094 7.5V12.5L13.2109 10Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              4 drills
            </p>
          </div>
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M10.7109 5.625V10H15.0859"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              51 min
            </p>
          </div>
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2734 6.5625L5.39844 13.4375L1.96094 10.0002"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.4627 6.5625L12.5877 13.4375L10.7617 11.6116"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              25% finish
            </p>
          </div>
        </div>
      ),
      value: "Day 1",
      description: (
        <div style={{ height: "150px", overflowY: "scroll" }}>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
           
          </div>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      emoji: (
        <div
          className="d-flex gap-4"
          style={{ justifyContent: "space-between" }}
        >
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M13.2109 10L9.46094 7.5V12.5L13.2109 10Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              4 drills
            </p>
          </div>
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M10.7109 5.625V10H15.0859"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              51 min
            </p>
          </div>
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2734 6.5625L5.39844 13.4375L1.96094 10.0002"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.4627 6.5625L12.5877 13.4375L10.7617 11.6116"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              25% finish
            </p>
          </div>
        </div>
      ),
      value: "Day 2",
      description: (
        <div style={{ height: "150px", overflowY: "scroll" }}>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      emoji: (
        <div
          className="d-flex gap-4"
          style={{ justifyContent: "space-between" }}
        >
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M13.2109 10L9.46094 7.5V12.5L13.2109 10Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              4 drills
            </p>
          </div>
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M10.7109 5.625V10H15.0859"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              51 min
            </p>
          </div>
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2734 6.5625L5.39844 13.4375L1.96094 10.0002"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.4627 6.5625L12.5877 13.4375L10.7617 11.6116"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              25% finish
            </p>
          </div>
        </div>
      ),
      value: "Day 3",
      description: (
        <div style={{ height: "150px", overflowY: "scroll" }}>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
             
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
                
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
          <div className="tasks">
            <div className="task-title-cont">
              {" "}
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="1.21021"
                    y="0.5"
                    width="17"
                    height="17"
                    rx="3.5"
                    stroke="#7257FF"
                  />
                </svg>
              </div>
              <p className="task-title">1. Welcome to Ares Elite</p>
            </div>
            <div className="d-flex gap-3" style={{alignItems:"center"}}>
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                    fill="#A1A5B3"
                  />
                </svg>
              </div>
              <div>
              <p style={{margin:0,fontSize:"small",color:"#A1A5B3",textAlign:"center"}}>07:31</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} style={{ borderRadius: "12px" }}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <AtheleteMenu>
      <div
        style={{ padding: "30px ", display: "flex", flexDirection: "column" }}
      >
        <div className="drill-main-box weeks">
          <div className="weekbuttons">
            <button className="week-button">Week 1</button>
            <button className="week-button">Week 2</button>
            <button className="week-button">Week 3</button>
            <button className="week-button">Week 4</button>
          </div>
          <div>
            <button className="upgrade-plan">Upgrade Plan</button>
          </div>
        </div>
        <div className="drill-main-box video-cont">
          <div className="video-player" style={{ height: "100%" }}>
            <h5>Elite (P1)- Week 1/Day1/NeuroTrainer(Calibration)</h5>
            <div style={{height:"400px",display:"flex",alignItems:"center"} }>
            <video width="90%" controls style={{ borderRadius: "26.78px" }}>
              <source src="produ.mp4" type="video/mp4" />
            </video>
            </div>
          </div>

          <div className="accordion">
            <div className="drill-progress">
              <div className="d-flex justify-content-between">
                <h4>Drill Contents</h4>
                <p style={{ color: "green" }}>50% Complete</p>
              </div>
              <Progress
                color="green"
                value={50}
                style={{ background: "transparent" }}
              />
            </div>
            <Accordion chevronPosition="left" variant="filled">
              {items}
            </Accordion>
          </div>
        </div>
        <div className="drill-main-box calibration-forms">
          <h4>NeuroTrainer (Calibration)</h4>
          <p style={{ color: "#8C90AA", marginTop: "-1px" }}>Drill 2 of 4</p>
          <div className="calibration-forms-cont">
            <div><TextInput label="Head Check Speed #1 *"
      variant="filled"
      placeholder="Enter Head "/></div>
           
            <div><TextInput label="Pass Accuracy Score #1*"
      variant="filled"
      placeholder="Enter Head "/></div>
            <div><TextInput label="Pass Accuracy Score #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            <div><TextInput label="Swat Accuracy Score #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            <div><TextInput label="Bonus #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            <div><TextInput label="Score #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            
       
          </div>
        </div>
      </div>
    </AtheleteMenu>
  );
};

export default Athedrill;
