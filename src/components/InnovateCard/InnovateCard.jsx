import './InnovateCardStyle.css'

const InnovateCard = ({url, title, text, right, left}) => {
  return (
    <div className={right? 'innovate-card d-flex flex-column flex-xl-row align-items-center align-items-sm-start align-items-xl-start': left? 'innovate-card d-flex flex-column flex-xl-row align-items-center align-items-sm-end align-items-xl-start' : ""}>
      <div className={right? "innovate-card-text order-1" : left? "innovate-card-text order-1 order-xl-0" : ""}>
        <h5>{title}</h5>
        <p className='text-black-50'>{text}</p>
      </div>
      <div className="innovate-card-img mx-2">
        <img src={url} alt="Img" />
      </div>
    </div>
  )
}

export default InnovateCard