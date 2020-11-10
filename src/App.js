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
    [possibleEv, setPossibleEv] = useState(evidence)

  function handleEvidence(e){
    let newEv = e.target.innerText
    setFoundEvidence([...foundEvidence, newEv])
    let posGhosts = possibleGhosts.filter( x => x.evidence.find(e => e === newEv))
    setPossibleGhosts(posGhosts)
 
    let remaining = Array.from(new Set(posGhosts.map(x => x.evidence).flat()))
    // finds all possible remaining evidence
    let temp = remaining.filter(x=> {
      if (!foundEvidence.includes(x) && x !==newEv){
        return x
      }
    })
    // removes evidence from evidence pool
    console.log(temp)
    setPossibleEv(temp)
    // 
    // console.log(temp)
    // temp = possibleEv.filter(x=> x !== newEv)
    // console.log(temp)
    // setPossibleEv(temp)
  }
  
  return (
    <div className="App">
      <div>
        <h3>Found Evidence</h3>
        {foundEvidence.map(f => <div key={f}>{f}</div>)}
      </div>
      <div>
        <h3>Possible Evidence</h3>
        {possibleEv.map(ev => <div onClick={handleEvidence} key={ev}>{ev}</div>)}
      </div>
      <div>
        <h3>Possible Ghosts</h3>
        {possibleGhosts.map(ghost=> <GhostComponent key={ghost.name} ghost={ghost}/>)}
      </div>
    </div>
  );
}

export default App;
