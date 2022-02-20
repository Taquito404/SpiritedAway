import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttributionComponent from "./AttributionComponent";

export default function Footer() {
  const [openMusic, setOpenMusic] = useState(false);
  const handleClickOpenMusic = () => {
    setOpenMusic(true);
  };
  const handleClosePLotMusic = () => {
    setOpenMusic(false);
  };
  return (
    <div className="footerContainer d-flex">
      <AttributionComponent openMusic={openMusic} />
      <div>
        <a href="https://github.com/Taquito404/SpiritedAway">
          <GitHubIcon />
        </a>
      </div>
      <div
        onClick={() => {
          handleClickOpenMusic();
        }}
      >
        Attribution
      </div>
    </div>
  );
}
