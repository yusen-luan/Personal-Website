import thisSiteImg from "../../assets/thisSite.png";
function PsWebsite() {
    return (
        <div className="card">
            <img className="card-img" src={thisSiteImg} alt="img not available"></img>
            <div className="card-content">
                <h2 className="card-title"> This Website</h2>
                <p className="card-desc"><br />The repository for the source code of this website <br /></p>
                <button className="card-button" onClick={() => {
                    window.open("https://github.com/yusen-luan/Personal-Website", "_blank");
                }}>
                    Github
                </button>
            </div>
            
        </div>
    );
}

export default PsWebsite;