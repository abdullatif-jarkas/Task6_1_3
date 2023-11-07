import './ArrivalsCardStyle.css'

const ArrivalsCard = ({data}) => {
  return (
    <div class="border d-flex flex-column">
      <div class="card-header position-relative overflow-hidden">
        <img class="w-100 object-fit-cover" alt="" />
        <div class="add-to-cart d-flex justify-content-center align-items-center bg-dark w-100">
          <a class="text-decoration-none text-white p-2">Add To Cart</a>
        </div>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center p-1">
        <h4 class="text-center">"asdf"</h4>
        <div class="stars">
        </div>
        <span class="main-color fs-5"></span>
      </div>
    </div>
  )
}

export default ArrivalsCard