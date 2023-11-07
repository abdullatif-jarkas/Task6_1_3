import './SectionHeaderStyle.css'

const SectionHeader = ({title, text}) => {
  return (
    <div className='section-header'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default SectionHeader