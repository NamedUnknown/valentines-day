import './App.css'
import dinoGif from './assets/dino.gif'
import {useState} from 'react'
import AcceptanceComponent from "./component/AcceptanceComponent.tsx";
import DeclineComponent from "./component/DeclineComponent.tsx";
import {AnswerStateEnum} from "./enum/AnswerStateEnum.ts";

export default function App() {
    const [answer, setAnswer] = useState(AnswerStateEnum.NONE);
    const [didMissTheYesButton, setDidMissTheYesButton] = useState(false);

    if (answer === AnswerStateEnum.YES) {
        return <AcceptanceComponent didMissTheYesButton={didMissTheYesButton}/>
    } else if (answer === AnswerStateEnum.NO) {
        return <DeclineComponent setAnswer={setAnswer} setDidMissTheYesButton={setDidMissTheYesButton}/>
    } else {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center gap-5">
                <img src={dinoGif} className="gif-img" alt="loading..." />
                <h1>Will you be my valentine? 💗💗💗</h1>
                <div className="d-flex gap-3">
                    <button className="btn btn-primary btn-lg" onClick={() => setAnswer(AnswerStateEnum.YES)}>
                        Yes! ❤️️
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => setAnswer(AnswerStateEnum.NO)}>
                        No 😢
                    </button>
                </div>
            </div>
        )
    }
}
