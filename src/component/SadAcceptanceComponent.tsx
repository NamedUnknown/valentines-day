import sad from "../assets/sad.gif";

export default function SadAcceptanceComponent() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-5">
            <img src={sad} className="gif-img" alt="loading..." />
            <h3 className="text-muted">
                Ouch 💔
            </h3>
        </div>
    );
}
