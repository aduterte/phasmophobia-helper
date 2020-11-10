import { atom } from "recoil"

export const ghostAtom = atom({
    key: "ghostAtom",
    default: [
        {name: "Spirit", evidence: ["Spirit Box", "Fingerprints", "Ghost Writing"]},
        {name: "Wraith", evidence: ["Spirit Box", "Fingerprints", "Freezing Temperatures"]},
        {name: "Phantom", evidence: ["EMF Level 5", "Ghost Orb", "Freezing Temperatures"]},
        {name: "Poltergeist", evidence: ["Spirit Box", "Ghost Orb", "Fingerprints"]},
        {name: "Banshee", evidence: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"]},
        {name: "Jinn", evidence: ["EMF Level 5", "Ghost Orb", "Spirit Box"]},
        {name: "Mare", evidence: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"]},
        {name: "Revenant", evidence: ["EMF Level 5", "Ghost Writing", "Fingerprints"]},
        {name: "Shade", evidence: ["EMF Level 5", "Ghost Orb", "Ghost Writing"]},
        {name: "Demon", evidence: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"]},
        {name: "Yurei", evidence: ["Ghost Writing", "Ghost Orb", "Freezing Temperatures"]},
        {name: "Oni", evidence: ["EMF Level 5", "Spirit Box", "Ghost Writing"]},
    ]
})

export const evidenceAtom = atom({
    key: "evidence",
    default: ["Ghost Orb", "Spirit Box", "Fingerprints", "EMF Level 5", "Freezing Temperatures", "Ghost Writing"]
})