import { ghostAtom, evidenceAtom } from "./Atom"
import { useRecoilValue} from "recoil"
import React, {useState, useEffect} from "react"
import './App.css';
import GhostComponent from "./components/GhostComponent";

function App() {

  const ghosts = useRecoilValue(ghostAtom),
    evidence = useRecoilValue(evidenceAtom),
    [foundEvidence, setFoundEvidence] = useState([]),
    [possibleGhosts, setPossibleGhosts] = useState(ghosts),
    [possibeEv, setPossibleEv] = useState(evidence)

  function handleEvidence(e){
    let newEv = e.target.innerText
    setFoundEvidence([...foundEvidence, newEv])
  }
  
  return (
    <div className="App">
      <div>
        {foundEvidence.map(f => <div key={f}>{f}</div>)}
      </div>
      <div>
        {evidence.map(ev => <div onClick={handleEvidence} key={ev}>{ev}</div>)}
      </div>
      <div>
        {possibleGhosts.map(ghost=> <GhostComponent key={ghost.name} ghost={ghost}/>)}
      </div>
    </div>
  );
}

export default App;
