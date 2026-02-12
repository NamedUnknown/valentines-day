import unsure from "../assets/unsure.gif";
import {AnswerStateEnum} from "../enum/AnswerStateEnum";
import {useState} from "react";
import RegretComponent from "./RegretComponent.tsx";

export type DeclineComponentProps = {
    setAnswer: (answer: AnswerStateEnum) => void
    setDidMissTheYesButton: (value: boolean) => void
};

export default function DeclineComponent(props: DeclineComponentProps) {
    const [yesCount, setYesCount] = useState(0);

    if (yesCount > 0) {
        return <RegretComponent setAnswer={props.setAnswer} setDidMissTheYesButton={props.setDidMissTheYesButton}/>
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-5">
            <img src={unsure} className="gif-img" alt="loading..." />
            <h1>Are you sure about that?</h1>
            <div className="d-flex gap-3">
                <button className="btn btn-outline-danger btn-lg" onClick={() => setYesCount(yesCount+1)}>Yes</button>
                <button className="btn btn-primary btn-lg" onClick={() => props.setAnswer(AnswerStateEnum.NONE)}>No</button>
            </div>
        </div>
    );
}
