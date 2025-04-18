import { ProgressBar } from "react-bootstrap";

function Player({ position }) {
  const isTop = position === "top";

  return (
    <div className={`text-white p-2 ${isTop ? "" : "border-top"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>🎵 Brano in riproduzione</div>
        <div>⏯️</div>
      </div>
      <ProgressBar now={60} variant="danger" />
    </div>
  );
}

export default Player;
