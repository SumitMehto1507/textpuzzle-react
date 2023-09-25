import React from "react";

export default function Aboutus() {
    const myStyle = {
        backgroundImage:
            "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div>
            <div style={myStyle}>
                <div className="grid text-center">
                    <h1 className="about-1 mx-5">About Us</h1>
                    <div className="grid-about">
                        <div className="g-col-6 about-2">
                            The TextPuzzle.com team comprises of experts in different fields,
                            all with the same primary focus: helping our clients generate
                            greater business by use of online services.
                        </div>
                        <div className="g-col-6">.g-col-6</div>
                        <div className="g-col-6">.g-col-6</div>
                        <div className="g-col-6">.g-col-6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
