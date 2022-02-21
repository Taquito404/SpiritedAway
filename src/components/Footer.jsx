import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
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
    <div>
      <AttributionComponent
        openMusic={openMusic}
        handleClosePLotMusic={handleClosePLotMusic}
      />
      <div className="footerContainer d-flex justify-content-between align-items-center">
        <IconButton
          href="https://github.com/Taquito404/SpiritedAway"
          size="large"
        >
          <GitHubIcon size="large" />
        </IconButton>

        <Button
          onClick={() => {
            handleClickOpenMusic();
          }}
          variant="text"
        >
          Attribution
        </Button>
      </div>
    </div>
  );
}
