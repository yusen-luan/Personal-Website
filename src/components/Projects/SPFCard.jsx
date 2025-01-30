import SPF from "../../assets/SPF.png";
function SPFCard() {
    return (
        <div className="card">
            <img className="card-img" src={SPF} alt="img not available"></img>
            <div className="card-content">
                <h2 className="card-title"> Security Allocator App</h2>
                <p className="card-desc">A desktop app that allocate personel 
                according to crowd pattern <br />
                I made for the Singapore Police force hackathon</p>
                <button className="card-button" onClick={() => {
                    window.open("https://github.com/yusen-luan/DinoFun-Security-Allocation", "_blank");
                }}>
                    Github
                </button>
            </div>
            
        </div>
    );
}

export default SPFCard;