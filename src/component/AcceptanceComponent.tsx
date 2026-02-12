import yay from "../assets/yay.gif";

export type AcceptanceComponentProps = {
    didMissTheYesButton: boolean
};

export default function AcceptanceComponent(props: AcceptanceComponentProps) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-5">
            <img src={yay} className="gif-img" alt="loading..." />
            <h1>Yayy!!! ❤️️</h1>
            <h2 className="text-muted">You're my valentine!</h2>
            {props.didMissTheYesButton && <h4 className="text-muted">You missed the Yes button! 😈</h4>}
            {props.didMissTheYesButton && <h4 className="text-muted">No take backsies... 😈</h4>}
        </div>
    );
}
