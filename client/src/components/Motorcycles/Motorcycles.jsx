import "./Motorcycles.css";

const Motorcycles = (props) => {

return (
  <div className="motorcycle-container" key={props.index}>
  <div>
    {props.name} 
  </div>
  <div>
    {props.price}
  </div>
  <div>
    <img src={props.img} alt={props.name}/>
  </div>
  </div>
  )
}

export default Motorcycles;