import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "./Counter.css";

export default function Counter() {
    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    const hideImage = () => {
        setShowImage(!showImage);
    };

    useEffect(() => {
        if (count > 0) {
            alert('React Js adalah sebuah library JavaScript yang di buat oleh facebook. React bukanlah sebuah framework MVC. React adalah library yang bersifat composable user interface, yang artinya kita dapat membuat berbagai UI yang bisa kita bagi menjadi beberapa komponen.');
        }
    },);

    useEffect(() => {
            console.log(`Button ditekan ${count} kali`);
    },);

    return (
        <div className="Main">
            <p className="Text">React JS</p>

            <div className="ViewImage">
                <div className="ViewImage1">
                    <img
                        className="App-logo"
                        style={{ display: showImage === true ? "flex" : "none" }}
                        src={logo}
                        alt="logo"
                    />
                </div>
            </div>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Tentang
                    </button>
                </div>
            </div>
        </div>
    );
}