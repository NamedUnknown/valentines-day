import './App.css'
import dinoGif from './assets/dino.gif'
import {useState} from 'react'
import AcceptanceComponent from "./component/AcceptanceComponent.tsx";
import DeclineComponent from "./component/DeclineComponent.tsx";
import {AnswerStateEnum} from "./enum/AnswerStateEnum.ts";

export default function App() {
    const [answer, setAnswer] = useState(AnswerStateEnum.NONE);

    if (answer === AnswerStateEnum.YES) {
        return <AcceptanceComponent/>
    } else if (answer === AnswerStateEnum.NO) {
        return <DeclineComponent setAnswer={setAnswer}/>
    } else {
        return (
            <div className="container">
                <img src={dinoGif} alt="loading..." />
                <span className="question">
                Will you be my valentine?
                <span className="heart-icon">
                    💗💗💗
                </span>
            </span>
                <div className="button-container">
                    <button onClick={() => setAnswer(AnswerStateEnum.YES)}>
                        Yes! ❤️️
                    </button>
                    <button className="no-button" onClick={() => setAnswer(AnswerStateEnum.NO)}>
                        No 😢
                    </button>
                </div>
            </div>
        )
    }
}
