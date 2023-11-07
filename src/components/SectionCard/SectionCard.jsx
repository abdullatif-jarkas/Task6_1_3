import './SectionCardStyle.css'

const SectionCard = ({url, title1, title2, text}) => {
  return (
    <div className='section-card'>
      <img src={url} alt="card img" />
      <h6>{title1}</h6>
      <h4>{title2}</h4>
      <p>{text}</p>
    </div>
  )
}

export default SectionCard