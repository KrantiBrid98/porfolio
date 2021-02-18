import React from "react";
import "./project.css";
import github from "../../assets/github.svg";
import data from "../../content/data.json";

let _ = require('lodash');

class Project extends React.Component {

    state = {
        all: { isSelected: true },
        js: { isSelected: false },
        react: { isSelected: false },
        node: { isSelected: false },
    }

    onbuttonSelect = (language) => {
        this.setState({
            all: { isSelected: false },
            js: { isSelected: false },
            react: { isSelected: false },
            node: { isSelected: false },
            [`${language}`]: { isSelected: true },
        })
    }

    render() {
        let selectedLang;
        _.map(this.state, (val, key) => {
            if (val.isSelected)
                selectedLang = key;
        });
        console.log(selectedLang)
        return <div className="block-wrapper" id="proj-section">
            <h3>Projects</h3>
            <div style={{ textAlign: "center" }}>
                <button className={this.state.all.isSelected ? "language-tag active" : "language-tag inactive"} onClick={() => this.onbuttonSelect("all")}>All</button>
                <button className={this.state.js.isSelected ? "language-tag active" : "language-tag inactive"} onClick={() => this.onbuttonSelect("js")}>Javascript</button>
                <button className={this.state.react.isSelected ? "language-tag active" : "language-tag inactive"} onClick={() => this.onbuttonSelect("react")}>React</button>
                <button className={this.state.node.isSelected ? "language-tag active" : "language-tag inactive"} onClick={() => this.onbuttonSelect("node")}>Node</button>
            </div>
            <div className={"card-container"}>
                {
                    selectedLang !== `all` && data.projects.filter(project => project.tag === selectedLang).map((project, index) => <div className="flip-card" key={index}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front content">
                                <div className="project-name">{project.name}</div>
                                <div className="skills">{project.skills}</div>
                            </div>
                            <div className="flip-card-back content">
                                <div className="description">{project.description}</div>
                                {project.link && <a className="github" target="_blank" rel="noopener" href={project.link}></a>}
                            </div>
                        </div>
                    </div>
                    )
                }
                {
                    selectedLang === `all` && data.projects.map((project, index) => <div className="flip-card" key={index}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front content">
                                <div className="project-name">{project.name}</div>
                                <div className="skills">{project.skills}</div>
                            </div>
                            <div className="flip-card-back content">
                                <div className="description">{project.description}</div>
                                {project.link && <a className="github" target="_blank" rel="noopener" href={project.link}></a>}
                            </div>
                        </div>
                    </div>
                    )}
            </div>
            <><p>And many more on</p>
                <a className="github" target="_blank" rel="noopener" href="https://github.com/KrantiBrid98"></a>
            </>
        </div>
    }
}


export default Project