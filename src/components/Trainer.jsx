import React from 'react'
import Card from '../utils/Card'
import PropTypes from 'prop-types'

const Trainer = ({ image, name, job, socials }) => {
    // console.log('socials', socials)
    return (
        <Card className="trainer">
            <div className="trainer__img">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className="trainer__socials">
                {socials.map(({ icon, link }, index) => {
                    return (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {icon}
                        </a>
                    )
                })}
            </div>
        </Card>
    )
}

Trainer.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    socials: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Trainer
