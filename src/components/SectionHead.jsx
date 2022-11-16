

const SectionHead = ({icon, title, className}) => {
  // console.log('className', className, title)
  return (
    <div className={`section__head ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead