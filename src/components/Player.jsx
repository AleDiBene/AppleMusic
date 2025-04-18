import React from "react";

function MusicPlayer() {
  return (
    <div className="music-player bg-dark rounded-pill py-2 px-3 d-flex align-items-center">
      <div className="album-art rounded me-3 d-flex justify-content-center align-items-center">
        <div style={{ fontSize: "1.5em", color: "#a7a7a7" }}>♫</div>
      </div>
      <div className="flex-grow-1 text-white song-info">
        <p className="mb-0 small text-truncate">Titolo della canzone</p>
        <p className="mb-0 small text-secondary text-truncate">
          Nome dell'artista
        </p>
      </div>
      <div className="controls d-flex align-items-center">
        <div
          style={{
            fontSize: "1.8em",
            color: "white",
            marginLeft: "8px",
            marginRight: "8px",
          }}
        >
          &#x25BA;
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
