import React, {useEffect, useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log('Uppercase clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }

    const handleLoClick = () => {
        //console.log('Lowercase clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");

    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!","success");
    }

    const handleOnChange = (event) => {
        //console.log('On-Change');
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success")
    }
    
const [text, setText] = useState('');

useEffect(() => {
    console.log("Mode changed:", props.mode);
}, [props.mode]);

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props
                .mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter in textbox above something to preview it here'}</p>
    </div>
    </>
  )
}
