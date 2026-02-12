import sad from "../assets/sad.gif";

export default function SadAcceptanceComponent() {
    return (
        <div className="container">
            <img src={sad} alt="loading..." />
            <div className="yay-text">
                Ok.. 💔
            </div>
        </div>
    );
}
