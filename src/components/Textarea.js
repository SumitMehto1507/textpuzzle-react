
import React, { useState } from 'react';


export default function Textarea(props) {


    const [text, settext] = useState('')

    const handleonchange = (event) => {
        settext(event.target.value)

    }
    const handleup = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showalert("Succses", "Converted to UpperCase")
    }
    const handlelow = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showalert("Succses", "Converted to LowerCase")
    }
    const handleclear = () => {
        let newtext = '';
        settext(newtext)
        props.showalert("Succses", "Text clear")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Succses", "Copy to clipboard")
    }

    const capitalFirstLetter = () => {
        let tempText = text.split(/[  ]+/);
        let newText = "";
        tempText.forEach((e) => {
            e = e.charAt(0).toUpperCase() + e.slice(1);
            newText = newText + e + " ";
        })
        settext(newText);
        props.showalert("Succses", "Abz")

    }
    const ReverseText = () => {
        settext(text.split('').reverse().join(''));
        props.showalert("Succses", "Text Reverse")
    }
    const Speak = () => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Succses", "Volume Up")
    }



    return (
        <div>
            <div className="container">
                <div className="container ">
                    <div className="container ">
                        <div className={`mb-3" ${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <label htmlFor="exampleFormControlTextarea1" className={`form-label center text-${props.mode === 'light' ? 'dark' : 'light'}`}><h1 className='textarea-heading'>Enter Your Text To Puzzle</h1></label>
                            <textarea className="form-control dot " value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                    </div>
                   
                    <div className="container px-2 p-3 " style={{ padding: '10px' }}>

                        <button disabled={text.length === 0} type="button" onClick={handleup} className="btn btn-primary ">Convert to Uppercase</button> 
                        <span>    </span>
                        <button disabled={text.length === 0} type="button" onClick={handlelow} className="btn btn-primary ">Convert to Lowercase</button>
                        <span>    </span>
                        <button disabled={text.length === 0} type="button" onClick={Speak} className="btn btn-primary ">Speak Text</button>
                        <span>    </span>
                        <button disabled={text.length === 0} type="button" onClick={ReverseText} className="btn btn-primary  ">Reverse Text</button>
                        <span>    </span>
                        <button disabled={text.length === 0} type="button" onClick={capitalFirstLetter} className="btn btn-primary  ">Abz</button>
                        <span>    </span>
                        <button disabled={text.length === 0} type="button" onClick={handleCopy} className="btn btn-primary  ">Copy To Clipboard</button>
                        <span>    </span>
                        <button disabled={text.length === 0} type="button" onClick={handleclear} className="btn btn-primary  ">Clear Text</button>
                    </div>
                </div>

                <div className="container mx-3">

                    <div className="container mx-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h3>Your Text Summary</h3>
                        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008} Minute Read</p>
                        <p><b> #Preview</b></p>
                        <hr />
                        <p><b>{text.length > 0 ? text : "Write something to preview"}</b></p>

                    </div>
                </div>
            </div>

        </div>
    )
}
