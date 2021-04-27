import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
function CurrencyConverter() {
 
  const [data, setdata] = useState("");
  function click(e)
  {
	  var output=e.target.value;
	  var result=data;
	  var ans=result+output;

	  setdata(parseInt(ans));
  }
  
  function clear(){
	  setdata(0);
	 
  }
  function calculate(e){
		 var x=e.target.value;
		 switch(x)
		 {
			case "usd":setdata(data+74)
						break;
		    case "aed":setdata(data+20)
						break;
		    case "cad":setdata(data+60)
						break;
			case "eur":setdata(data+90)
						break;
			case "cny":setdata(data+12)
						break;
			case "jpy":setdata(data+0.69)
						break;
			case "lkr":setdata(data+0.38)
						break;
		    case "gbp":setdata(data+104)
						break;
		    case "pkr":setdata(data+0.50)
						break;
		    case "hkd":setdata(data+10)
						break;
		    default:
				

			
			            
		 }
  }
  return (
    <React.Fragment>
	  <h3>all value is converting into Indian Rupees</h3>
    <div className="container">
   	<div className="container-width">
   		<input type="text" placeholder="Enter the value" value={data}/>
   		<span className="btn-1">
   			<button onClick={click} value="9">9</button>
   			<button onClick={click} value="8">8</button>
   			<button onClick={click} value="7">7</button>
   		</span>
   		<span className="btn-2">
   			<button onClick={click} value="6">6</button>
   			<button onClick={click} value="5">5</button>
   			<button onClick={click} value="4">4</button>
   		</span>
   		<span className="btn-3">
   			<button onClick={click} value="3">3</button>
   			<button onClick={click} value="2">2</button>
   			<button onClick={click} value="1">1</button>
   		</span>
   		<span className="btn-4">
   			<button onClick={click} value="0">0</button>
   			<button onClick={clear}>Clear</button>
   			<button onClick={calculate} value="usd">America</button>
   		</span>
   		<span className="btn-5">
   			<button onClick={calculate} value="aed">Dubai</button>
   			<button onClick={calculate} value="cad">Canada</button>
   			<button onClick={calculate} value="eur">Europe</button>
   		</span>
   		<span className="btn-6">
   			<button onClick={calculate} value="cny">China</button>
   			<button onClick={calculate} value="jpy">Japan</button>
   			<button onClick={calculate} value="lkr">SriLanka</button>
   		</span>
   		<span className="btn-7">
   			<button onClick={calculate} value="gbp">Britain</button>
   			<button onClick={calculate} value="pkr">Pakistan</button>
   			<button onClick={calculate} value="hkd">HongKong</button>
   		</span>
   </div>
   </div>
   </React.Fragment>
  )
}

ReactDOM.render(
  <CurrencyConverter/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
