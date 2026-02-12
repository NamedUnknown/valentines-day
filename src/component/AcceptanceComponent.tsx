import yay from "../assets/yay.gif";

export default function AcceptanceComponent() {
    return (
        <div className="container">
            <img src={yay} alt="loading..." />
            <div className="yay-text">
                Yayy!!! ❤️️
            </div>
            <div className="evil-text">
                No take backsies... 😈
            </div>
        </div>
    );
}
