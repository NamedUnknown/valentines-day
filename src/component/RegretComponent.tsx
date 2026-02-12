import {useState} from "react";
import suspicous from "../assets/suspicious.gif";
import {AnswerStateEnum} from "../enum/AnswerStateEnum.ts";
import SadAcceptanceComponent from "./SadAcceptanceComponent.tsx";

export type RegretComponentProps = {
    setAnswer: (answer: AnswerStateEnum) => void,
    setDidMissTheYesButton: (value: boolean) => void
};

export default function RegretComponent(props: RegretComponentProps) {
    const [yesCount, setYesCount] = useState(0);

    if (yesCount > 21) {
        return <SadAcceptanceComponent/>
    }

    function getRandomMissMessage(): string {
        const messages = [
            "You missed. Try again.",
            "Oops! That's not it.",
            "Not quite there yet.",
            "Keep trying!",
            "Almost there, but not quite."
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    function getConfirmationText(): string {
        if (yesCount === 0) {
            return "Are you sure sure?";
        } else if (yesCount === 1) {
            return "You're sure sure? 😠";
        } else if (yesCount === 2) {
            return "Try again"
        } else if (yesCount === 15) {
            return "Careful... You'll miss it"
        } else if (yesCount === 21) {
            return "Wow... Ok. I'll make it easy for you..."
        } else if (yesCount >= 3 && yesCount <= 14 || yesCount > 15) {
            return getRandomMissMessage();
        }

        return "";
    }

    function onFakeYesButtonClicked() {
        props.setDidMissTheYesButton(true);
        props.setAnswer(AnswerStateEnum.YES);
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-5">
            <img src={suspicous} className="gif-img" alt="loading..." />
            <h1>{getConfirmationText()}</h1>
            {yesCount >= 4 && yesCount < 21 && <h4 className="text-muted">Miss count: {yesCount}</h4>}
            <div className="d-flex gap-3">
                {(yesCount <= 20 && yesCount !== 15) && (
                    <>
                        <button className="btn btn-outline-danger btn-lg" onClick={() => setYesCount(yesCount + 1)}>
                            Yes
                        </button>
                        <button className="btn btn-primary btn-lg" onClick={() => props.setAnswer(AnswerStateEnum.NONE)}>
                            No
                        </button>
                    </>
                )}
                {(yesCount === 15) && (
                    <>
                        <button className="btn btn-outline-danger btn-lg" onClick={() => onFakeYesButtonClicked()}>
                            No
                        </button>
                        <button className="btn btn-primary btn-lg" onClick={() => setYesCount(yesCount + 1)}>
                            Yes
                        </button>
                    </>
                )}
                {yesCount === 21 && (
                    <button className="btn btn-outline-danger btn-lg" onClick={() => setYesCount(yesCount + 1)}>
                        Yes
                    </button>
                )}
            </div>
        </div>
    );
}
