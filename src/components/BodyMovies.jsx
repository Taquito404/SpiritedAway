import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import ChairIcon from "@mui/icons-material/Chair";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import EmbedVideo from "./EmbedVideo";
import PlotComponent from "./PlotComponent";
import MusicComponent from "./MusicComponent";

export default function BodyMovies() {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [openPlot, setOpenPlot] = useState(false);
  const [openMusic, setOpenMusic] = useState(false);

  const handleClickOpenTrailer = () => {
    setOpenTrailer(true);
  };
  const handleCloseTrailer = () => {
    setOpenTrailer(false);
  };
  const handleClickOpenPlot = () => {
    setOpenPlot(true);
  };
  const handleClosePLot = () => {
    setOpenPlot(false);
  };
  const handleClickOpenMusic = () => {
    setOpenMusic(true);
  };
  const handleClosePLotMusic = () => {
    setOpenMusic(false);
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "pink",
    },
    // "& .MuiRating-iconHover": {
    //   color: "#ff3d47",
    // },
  });

  return (
    <div className="bodyMoviesContainer">
      <EmbedVideo
        openTrailer={openTrailer}
        handleCloseTrailer={handleCloseTrailer}
      />
      <PlotComponent openPlot={openPlot} handleClosePLot={handleClosePLot} />
      <MusicComponent
        openMusic={openMusic}
        handleClosePLotMusic={handleClosePLotMusic}
      />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col">
                <Tooltip
                  title="Trailer"
                  placement="right"
                  TransitionComponent={Zoom}
                  onClick={() => {
                    handleClickOpenTrailer();
                  }}
                >
                  <div className="movieImage"></div>
                </Tooltip>
              </div>
              <div className="col flex-column">
                <Tooltip
                  title="Plot"
                  placement="left"
                  TransitionComponent={Zoom}
                  onClick={() => {
                    handleClickOpenPlot();
                  }}
                >
                  <div className="plotImage"></div>
                </Tooltip>
                <Tooltip
                  title="Plot"
                  placement="left"
                  TransitionComponent={Zoom}
                  onClick={() => {
                    handleClickOpenMusic();
                  }}
                >
                  <div className="musicImage"></div>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="col-4">
            <StyledRating
              name="read-only"
              value={5}
              readOnly
              precision={0.5}
              icon={<ChairIcon fontSize="inherit" />}
              emptyIcon={<ChairOutlinedIcon fontSize="inherit" />}
            />
            <div className="reviewContainer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
