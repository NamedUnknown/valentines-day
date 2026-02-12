import unsure from "../assets/unsure.gif";
import {AnswerStateEnum} from "../enum/AnswerStateEnum";
import {useState} from "react";
import RegretComponent from "./RegretComponent.tsx";

export type DeclineComponentProps = {
    setAnswer: (answer: AnswerStateEnum) => void
};

export default function DeclineComponent(props: DeclineComponentProps) {
    const [yesCount, setYesCount] = useState(0);

    if (yesCount > 0) {
        return <RegretComponent setAnswer={props.setAnswer}/>
    }

    return (
        <div className="container">
            <img src={unsure} alt="loading..." />
            <p className="yay-text">Are you sure about that?</p>
            <div className="button-container">
                <button onClick={() => setYesCount(yesCount+1)}>Yes</button>
                <button onClick={() => props.setAnswer(AnswerStateEnum.NONE)}>No</button>
            </div>
        </div>
    );
}
