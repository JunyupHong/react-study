import React from 'react';
import logo from '../../asset/logo.svg';
import './main.scss';

function Main({history}) {
    const projects = [ 'week1' ];
    return (
        <div className="main">
            <div className="main-contents">
                <img src={logo} className="main-logo" alt="logo" />
                <p>My First React Project</p>
                <a className="main-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <div className="project-list">
                    {projects.map((project, i) => 
                        <div className="project" onClick={() => {history.push(project)}} key={`link-${i}-${project}`}>{project}</div>
                    // <Link to={project} style={{textDecoration: "none",}}  key={`link-${i}`}>
                    //     <div className="project">{project}</div>
                    // </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
