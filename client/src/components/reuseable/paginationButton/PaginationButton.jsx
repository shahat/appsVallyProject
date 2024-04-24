import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export default function PaginationButton({ action, type, disabled }) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className="btn  PaginationButton"
    >
      {type === "left" ? (
        <FaArrowLeft className="PaginationButtonIcon" />
      ) : (
        <FaArrowRight className="PaginationButtonIcon" />
      )}
    </button>
  );
}
