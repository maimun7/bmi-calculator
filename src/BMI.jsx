

import {useState} from "react";
import "./BMI.css";
import logo from './assets/bmi.svg';

export default function BMI(){

const [gender,setGender]=useState("male");
const [age,setAge]=useState("");

const [ft,setFt]=useState("");
const [inch,setInch]=useState("");

const [cm,setCm]=useState("");
const [useCM,setUseCM]=useState(false);

const [weight,setWeight]=useState("");

const [bmi,setBmi]=useState("--");
const [status,setStatus]=useState("");
const [message,setMessage]=useState("");

const [pointer,setPointer]=useState(0);


// SWITCH HEIGHT

const switchUnit=()=>{

setUseCM(!useCM)

}


// BMI CALCULATION

const calculateBMI=()=>{

let heightMeter=0;

if(useCM){

heightMeter=cm/100

}else{

heightMeter=((ft*12)+Number(inch))*0.0254

}

let result=weight/(heightMeter*heightMeter)

if(!result || result===Infinity){

setBmi("--")
return

}

result=result.toFixed(2)

setBmi(result)



if(result<18.5){

setStatus("Underweight")
setMessage("Time to grab a bite!")
setPointer(10)

}

else if(result<25){

setStatus("Normal")
setMessage("Great shape")
setPointer(30)

}

else if(result<30){

setStatus("Overweight")
setMessage("Time to run!")
setPointer(65)

}

else{

setStatus("Obesity")
setMessage("Time to run!")
setPointer(90)

}

}


return(

<div className="main">



<div className="titleSection">

<img src={logo} className="titleLogo"/>

<div>

<h1>BMI Calculator</h1>

<p className="subtitle">
Body Mass Index
</p>

</div>

</div>



<div className="card">



<div className="left">

<label>GENDER</label>

<div className="gender">

<button
className={gender==="male"?"active":""}
onClick={()=>setGender("male")}
>
Male
</button>

<button
className={gender==="female"?"active":""}
onClick={()=>setGender("female")}
>
Female
</button>

</div>



<label>AGE</label>

<div className="age">

<input
type="number"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<span>Years</span>

<p>Between 2 years to 120 years</p>

</div>



<label>HEIGHT</label>

{
useCM?

<div className="height">

<input
type="number"
placeholder="cm"
value={cm}
onChange={(e)=>setCm(e.target.value)}
/>

<span className="switch" onClick={switchUnit}>
Switch to ft
</span>

</div>

:

<div className="height">

<input
type="number"
placeholder="FT"
value={ft}
onChange={(e)=>setFt(e.target.value)}
/>

<input
type="number"
placeholder="IN"
value={inch}
onChange={(e)=>setInch(e.target.value)}
/>

<span className="switch" onClick={switchUnit}>
Switch to cm
</span>

</div>

}



<label>WEIGHT</label>

<div className="weightBox">

<input
type="number"
value={weight}
onChange={(e)=>setWeight(e.target.value)}
/>

<span>in Kgs</span>

</div>



<button
className="btn"
onClick={calculateBMI}
>
Calculate
</button>

</div>



<div className="right">

<div className="result">


<h3>Your BMI is</h3>


<div className="bmiValue">

{bmi}

</div>



<div className="bar">

<div className="yellow"></div>
<div className="green"></div>
<div className="orange"></div>
<div className="red"></div>


<div
className="pointer"
style={{left:pointer+"%"}}
></div>

</div>



<div className="labels">

<span>Underweight</span>
<span>Normal</span>
<span>Overweight</span>
<span>Obesity</span>

</div>



<h2 className={status==="Normal"?"good":"bad"}>
{message}
</h2>


<p className="text">

By maintaining a healthy weight, you lower your risk of developing serious health problems.

</p>


<p className="range">

Healthy BMI range: 18.5 kg/m² - 25 kg/m²

</p>


</div>

</div>



</div>

</div>

)

}