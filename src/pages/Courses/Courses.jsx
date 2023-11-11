import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Courses = () => {
  return (
    <div className="about py-5 my-5">
      <div className="my-5 pb-5">
        <h1> <span>FocalX</span></h1>
        <p className="pt-5 fs-4">
          And to my wonderful training colleagues, thank you for the beautiful moments, 
          shared visions and collaborative spirit. Learning alongside you has been truly 
          inspiring. I am grateful for the opportunities, knowledge and friendships gained 
          during this journey. Here's to the next chapter!<FontAwesomeIcon icon={faHeart} className='ms-2' />
        </p>
      </div>
    </div>
  )
}

export default Courses