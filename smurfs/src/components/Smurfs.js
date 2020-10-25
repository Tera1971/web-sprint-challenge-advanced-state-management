import React, { useContext } from "react";
import smurfContext from "./contexts/smurfContext";
import Smurf from "./Smurfs";


export default function Smurfs() {
  const { smurfs } = useContext(smurfContext);
  console.log("comp", smurfs);
  return (
    <div>
      <h1>Smurfs Village</h1>
      <>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </>
    </div>
  );
} 