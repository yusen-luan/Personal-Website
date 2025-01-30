import SPFCard from "./SPFCard";
import CatxCard from "./CatxCard";
import PsWebsite from "./PsWebsite";

function Projects() {
    return(
        <>
            <h2 className="projects" id="projects">Projects</h2>
            <PsWebsite />
            <SPFCard />
            <CatxCard />
        </>
    )
}

export default Projects;