import React from "react"

export default function GhostComponent(props){

    return(
        <div className="ghost-component">
            <h3>{props.ghost.name}</h3>
            {props.ghost.evidence.map((evidence, index) => <div key={`${evidence}${index}`}>{evidence}</div>)}
        </div>
    )
}
