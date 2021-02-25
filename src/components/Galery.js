const Galery = (props)=>{
  return (
    <div className="container">
      <div className="card-group" style={{paddingTop:10}}>
        {props.children}
      </div>
    </div>
  )
}
export default Galery
