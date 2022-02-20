import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

export default function MusicComponent({ openMusic, handleClosePLotMusic }) {
  return (
    <Dialog open={openMusic} onClose={handleClosePLotMusic} scroll="paper">
      <DialogTitle id="scroll-dialog-title">Music</DialogTitle>
      <DialogContent>
        <p>ihniuhniuhiuh</p>
      </DialogContent>
    </Dialog>
  );
}
