import './ArrivalsCardStyle.css'

const ArrivalsCard = (props) => {
  return (
    <div className="arrivals-card border d-flex flex-column">
      <div className="card-header position-relative overflow-hidden">
        <div className="slider-img-container position-relative">
          <img src={props.data && props.data.length !== 0? props.data[props.index].images[0] : ""} className="w-100 object-fit-cover" alt="img" />
          <div className="add-to-cart d-flex justify-content-center align-items-center bg-dark w-100">
            <a href='##' className="text-decoration-none text-white p-2">Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="card-body border-top d-flex flex-column justify-content-center align-items-center p-1 py-3">
        <h4 className="text-center">{props.data && props.data.length !== 0? props.data[props.index].title : ""}</h4>
        <div className="stars">
        </div>
        <span className="main-color fs-5">${props.data && props.data.length !== 0? props.data[props.index].price : ""}</span>
      </div>
    </div>
  )
}

export default ArrivalsCard