import {QuestionProps} from '../types';

export const Question = ({currentQuestion, radioValue, setRadioValue, checking, hiddenResult}: QuestionProps) => {
   return (
      <div className={hiddenResult ? 'question' : 'question hidden'}>
         <h2 className='title'>
            <span className='title__id'>{currentQuestion.id}.</span> {currentQuestion.question}
         </h2>
         <div className='answers'>
            {currentQuestion.answers.map((answer, i) => (
               <label
                  key={i}
                  className={
                     checking && String(i) === currentQuestion.correct
                        ? 'correct'
                        : radioValue === String(i)
                        ? 'active'
                        : ''
                  }
               >
                  <input
                     className='radio'
                     type='radio'
                     name='answer'
                     value={i}
                     checked={radioValue === String(i)}
                     onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <span className='radio-style'></span>
                  <span className='answer'>{answer}</span>
               </label>
            ))}
         </div>
      </div>
   );
};
