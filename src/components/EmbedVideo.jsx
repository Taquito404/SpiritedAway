import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function EmbedVideo({ openTrailer, handleCloseTrailer }) {
  return (
    <Dialog open={openTrailer} onClose={handleCloseTrailer} id="videoEmbed">
      <DialogContent>
        <iframe
          width="560"
          height="320"
          src="https://www.youtube.com/embed/ByXuk9QqQkk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
