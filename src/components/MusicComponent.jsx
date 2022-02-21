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
      id="musicModalStyles"
    >
      <DialogTitle id="scroll-dialog-title">Music</DialogTitle>
      <DialogContent>
        <p>
          The film score of Spirited Away was composed and conducted by
          Miyazaki's regular collaborator Joe Hisaishi, and performed by the New
          Japan Philharmonic. The soundtrack received awards at the 56th
          Mainichi Film Competition Award for Best Music, the Tokyo
          International Anime Fair 2001 Best Music Award in the Theater Movie
          category, and the 17th Japan Gold Disk Award for Animation Album of
          the Year. Later, Hisaishi added lyrics to "One Summer's Day" and named
          the new version of the song "The Name of Life" (いのちの名前, "Inochi
          no Namae") which was performed by Ayaka Hirahara.The closing song,
          "Always With Me" (いつも何度でも, "Itsumo Nando Demo", lit. 'Always,
          No Matter How Many Times') was written and performed by Youmi Kimura,
          a composer and lyre-player from Osaka. The lyrics were written by
          Kimura's friend Wakako Kaku. The song was intended to be used for Rin
          the Chimney Painter (煙突描きのリン, Entotsu-kaki no Rin), a different
          Miyazaki film which was never released. In the special features of the
          Japanese DVD, Hayao Miyazaki explains how the song in fact inspired
          him to create Spirited Away. The song itself would be recognized as
          Gold at the 43rd Japan Record Awards.[34] Besides the original
          soundtrack, there is also an image album, titled Spirited Away Image
          Album (千と千尋の神隠し　イメージアルバム, Sen to Chihiro no
          Kamikakushi Imēji Arubamu), that contains 10 tracks.[35]
        </p>
      </DialogContent>
    </Dialog>
  );
}
