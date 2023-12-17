import {Dispatch, SetStateAction} from 'react';

export interface QuestionObj {
  id: number;
  question: string;
  answers: Array<string>;
  correct: string;
}

export interface QuestionProps {
  currentQuestion: QuestionObj;
  radioValue: string;
  setRadioValue: Dispatch<SetStateAction<string>>;
  checking: boolean;
  hiddenResult: boolean;
}
