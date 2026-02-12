import {useRef, useState} from "react";
import suspicous from "../assets/suspicious.gif";
import {AnswerStateEnum} from "../enum/AnswerStateEnum.ts";
import SadAcceptanceComponent from "./SadAcceptanceComponent.tsx";

export type RegretComponentProps = {
    setAnswer: (answer: AnswerStateEnum) => void
};

export default function RegretComponent(props: RegretComponentProps) {
    const yesButtonRef = useRef<HTMLButtonElement | null>(null);
    const [yesButtonStyles, setYesButtonStyles] = useState<object>({});
    const [yesCount, setYesCount] = useState(0);

    const onMouseOverYesButton = (): void => {
        if (!yesButtonRef.current) {
            return;
        }

        const goX: -1 | 1 = Math.random() < 0.5 ? -1 : 1;
        const goY: -1 | 1 = Math.random() < 0.5 ? -1 : 1;
        const left: number = yesButtonRef.current.offsetLeft + (60 * goX);
        const top: number = yesButtonRef.current.offsetTop + (60 * goY);
        setYesButtonStyles({left: `${left}px`, top: `${top}px`, position: 'absolute'});
    }

    if (yesCount  > 0) {
        return <SadAcceptanceComponent/>
    }

    return (
        <div className="container">
            <img src={suspicous} alt="loading..." />
            <p className="yay-text">Are you sure sure?</p>
            <div className="button-container">
                <button className="regret-button"
                        style={yesButtonStyles}
                        ref={yesButtonRef}
                        onMouseOver={onMouseOverYesButton} onClick={() => setYesCount(yesCount + 1)}>Yes</button>
                <button onClick={() => props.setAnswer(AnswerStateEnum.NONE)}>No</button>
            </div>
        </div>
    );
}
