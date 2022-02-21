import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

export default function MusicComponent({ openMusic, handleClosePLotMusic }) {
  return (
    <Dialog
      open={openMusic}
      onClose={handleClosePLotMusic}
      scroll="paper"
      id="attrModel"
    >
      <DialogTitle id="scroll-dialog-title">Attributions</DialogTitle>
      <DialogContent>
        <a href="https://www.freepik.es/vectores/marco">
          Vector de Marco creado por macrovector - www.freepik.es
        </a>
        <br />
        <a href="https://www.freepik.es/fotos/fondo">
          Foto de Fondo creado por vanitjan - www.freepik.es
        </a>
      </DialogContent>
    </Dialog>
  );
}
