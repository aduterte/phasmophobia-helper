import { ghostAtom, evidenceAtom } from "./Atom"
import { useRecoilValue} from "recoil"
import React, {useState} from "react"
import './App.css';
import GhostComponent from "./components/GhostComponent";

function App() {

  const ghosts = useRecoilValue(ghostAtom),
    evidence = useRecoilValue(evidenceAtom),
    [foundEvidence, setFoundEvidence] = useState([]),
    [possibleGhosts, setPossibleGhosts] = useState(ghosts),
    [possibleEv, setPossibleEv] = useState(evidence)

  function handleEvidence(e){
    let newEv = e.target.innerText
    setFoundEvidence([...foundEvidence, newEv])
    let posGhosts = possibleGhosts.filter( x => x.evidence.find(e => e === newEv))
    setPossibleGhosts(posGhosts)
 
    let remaining = Array.from(new Set(posGhosts.map(x => x.evidence).flat()))
    // finds all possible remaining evidence
    let temp = remaining.map(x=> {
      if (!foundEvidence.includes(x) && x !==newEv){
        return x
      }
      return null
    }).flat().filter(x=> x !== null)
    // removes evidence from evidence pool
    console.log(temp)
    setPossibleEv(temp)
    // 
    // console.log(temp)
    // temp = possibleEv.filter(x=> x !== newEv)
    // console.log(temp)
    // setPossibleEv(temp)
    // testing aliases
  }
  
  return (
    <div className="App">
      <div className="container">
        <h3>Found Evidence</h3>
        <div className="possible-evidence-container">
        {foundEvidence.map(f => <div className="possible-evidence" key={f}>{f}</div>)}
        </div>
      </div>
      <div className="container">
        <h3>Possible Evidence</h3>
        <div className="possible-evidence-container">
          {possibleEv.map((ev,i) => <div className="possible-evidence" onClick={handleEvidence} key={`${ev}${i}`}>{ev}</div>)}
        </div>
      </div>
      <div className="container">
        <h3>Possible Ghosts</h3>
        <div className="possible-ghost-container">
          {possibleGhosts.map(ghost=> <GhostComponent key={ghost.name} ghost={ghost}/>)}
        </div>
        
      </div>
    </div>
  );
}

export default App;
