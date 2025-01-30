import EduX from "../../assets/EduX.png";

function CatxCard() {
    return (
        <div className="card">
            <img className="card-img" src={EduX} alt="img not available"></img>
            <div className="card-content">
                <h2 className="card-title"> EduX UI Design</h2>
                <p className="card-desc">A UI design I made for the EduX AI chatbot <br />
                aimed at dyslexic children for the CatalystX Startathon 2024</p>
                <button className="card-button" onClick={() => {
                    window.open("https://www.figma.com/design/qk4CYJ5GpGsfGkZiBtikC2/EduX?m=auto&t=gqr00wPJDVXOOtON-6", "_blank")
                }}>
                    Figma
                </button>
             </div>
             
        </div>
    );
}

export default CatxCard;