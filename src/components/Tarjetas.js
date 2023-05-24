import "./creditCard.css"
import visaLogo from "../assets/images/visa.png"

function CreditCard(props){
    return(
<div>
    <div className="card--logo" ></div>
    <img src={visaLogo} />
    <div>{props.number}</div>
    <div>
        <span>Expires 03/21</span>
        <span>N26</span>
    </div>

    <div>Mercedes Bouret</div>
</div>
    
    )};

export default CreditCard