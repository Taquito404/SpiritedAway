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
          Vector de Marco creado por macrovector
        </a>
        <br />
        <a href="https://www.freepik.es/fotos/fondo">
          Foto de Fondo creado por vanitjan
        </a>
        <br />
        <a href="https://www.rottentomatoes.com/m/spirited_away/reviews?intcmp=rt-what-to-know_read-critics-reviews">
          Reviews
        </a>
        <br />
        <a href="https://en.wikipedia.org/wiki/Spirited_Away">Wikipedia</a>
      </DialogContent>
    </Dialog>
  );
}
