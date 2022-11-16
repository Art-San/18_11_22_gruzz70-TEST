import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const FAQ = ({question, answer}) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false)

  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
           <button className="faq__icon">
            {
              isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
            }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ


/* 2-32-22 закончил видео смотреть FQQs плохо работает без flex-start */