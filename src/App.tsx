import {useState} from 'react';
import {state} from './state';
import {Question} from './components/Question';

export const App = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [radioValue, setRadioValue] = useState('');
   const [checking, setChecking] = useState(false);
   const [result, setResult] = useState(0);
   const [hiddenResult, setHiddenResult] = useState(true);

   const notCheckingAndCorrect: boolean = !checking && radioValue === state[currentQuestion].correct;

   const settingRes = () => {
      if (notCheckingAndCorrect) {
         setResult((prev) => prev + 1);
      }
   };

   const reset = () => {
      setRadioValue('');
      setChecking(false);
   };

   const onNextQuestionBtnClick = () => {
      settingRes();
      setCurrentQuestion((prev) => prev + 1);
      reset();
   };

   const onShowResultBtnClick = () => {
      settingRes();
      reset();
      setHiddenResult(false);
   };

   const onCheckingBtnClick = () => {
      settingRes();
      setChecking(true);
   };

   return (
      <div className='wrapper'>
         <Question
            currentQuestion={state[currentQuestion]}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
            checking={checking}
            hiddenResult={hiddenResult}
         />
         <div className={hiddenResult ? 'result hidden' : 'result'}>
            <h3>
               Верно <span className='blue'>{result}</span> из <span className='blue'>{state.length}</span>
            </h3>
         </div>
         <div className='btn-wrapper'>
            <div className='btns'>
               <button className='next-btn' onClick={onCheckingBtnClick} disabled={!radioValue}>
                  Проверить ответ
               </button>
               {currentQuestion === state.length - 1 ? (
                  <button className='next-btn' onClick={onShowResultBtnClick} disabled={!radioValue}>
                     Показать результат
                  </button>
               ) : (
                  <button className='next-btn' onClick={onNextQuestionBtnClick} disabled={!radioValue}>
                     Следующий вопрос
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};
