import mainImg from "../../assets/mainImg.jpg";

function Home() {
    return (
        <div className="home" id="home">
            <img className="main-img" src={mainImg} alt="img not found"></img>
            <div className="about">
                <h1 className="about-me">About me</h1>
                <p className="self-intro">Hi everyone! My name is Yusen and I am a current computer science undergraduate student at NUS. <br />
                I enjoy working on side projects such as this website that requires application of knowledge I've learnt <br />
                This is where i showcase a compilation of all my projects.
                </p>

            </div>
        </div>
    )
}

export default Home