import './InnovateCardStyle.css'

const InnovateCard = ({url, title, text, right}) => {
  return (
    <div className={right? 'innovate-card d-flex flex-column flex-xl-row text-right':'innovate-card d-flex flex-column flex-xl-row text-right'}>
      <div className={right? "innovate-card-text order-1" : "innovate-card-text"}>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      <div className="innovate-card-img">
        <img src={url} alt="Img" />
      </div>
    </div>
  )
}

export default InnovateCard