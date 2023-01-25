import React, { useState } from "react";
import "../css/calcii.css";
 function Calcii() {
  const [result, setresult] = useState("");
  const [input, setinput] = useState("");

  const put = (value) => {
    let str = input;
    str += value.target.value;
    setinput(str);
  };
  const clearInput = () => {
    setinput("");
    setresult("");
  };
  const deleteInput = () => {
    let str = " ";
    str = input;
    let len = str.length;
    let sub = str.substring(0, len - 1);
    setinput(sub);
  };
  const Readinput = (event) => {
    setinput(event.target.value);
  };
  const calculate = () => {
    if (input != "") {
      try {
        setresult("Ans " + eval(input));
      } catch (err) {
        setresult("Ans Invalid");
        setTimeout(() => {
          setinput("");
          setresult("");
        }, 2000);
      }
    } else {
      alert("Enter the Expression !!");
    }
  };
  return (
    <div>
      <div className="contanier">
        <div className="main">
          <h1 className="textname">Calculator</h1>
          <div className="display">
            <div>
              <input
                type="text"
                name=""
                id="Input"
                placeholder="Enter expression"
                onChange={Readinput}
                value={input}
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id="Result"
                readOnly
                placeholder="Result"
                value={result}
              />
            </div>
          </div>
          <div>
            <input
              type="submit"
              className="INBTN operator"
              onClick={put}
              value="("
            />
            <input
              type="submit"
              className="INBTN operator"
              onClick={put}
              value=")"
            />
            <input
              type="submit"
              className="INBTN operator"
              value="%"
              onClick={put}
            />
            <input
              type="submit"
              id="del"
              value="⌫"
              className="operator"
              onClick={deleteInput}
            />
          </div>
          <div>
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="7"
            />
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="8"
            />
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="9"
            />
            <input
              type="submit"
              className="INBTN operator"
              onClick={put}
              value="/"
            />
          </div>
          <div>
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="4"
            />
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="5"
            />
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="6"
            />
            <input
              type="submit"
              className="INBTN operator"
              onClick={put}
              value="*"
            />
          </div>
          <div>
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="1"
            />
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="2"
            />
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="3"
            />
            <input
              type="submit"
              className="INBTN operator"
              onClick={put}
              value="-"
            />
          </div>
          <div>
            <input
              type="submit"
              className="INBTN operator"
              onClick={put}
              value="."
            />
            <input
              type="submit"
              className="INBTN Number"
              onClick={put}
              value="0"
            />
            <input
              type="submit"
              className="clear operator"
              value="clear"
              onClick={clearInput}
            />
            <input
              type="submit"
              className="INBTN operator"
              onClick={put}
              value="+"
            />
          </div>
          <div>
            <input
              type="submit"
              className="calculate"
              onClick={calculate}
              value="="
            />
          </div>
        </div>
      </div>
      <div id="footer">
        <hr className="hr1" />
        <footer>
          <center>copywrite © www.ST/Calculator...</center>
        </footer>
      </div>
    </div>
  );
}
export default Calcii;