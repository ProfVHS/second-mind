import React from "react";
interface EditToolsBoxProps {
  isEditToolsMode: boolean;
  onDeleteTask: () => void;
  onDoneTask: () => void;
}
export function EditToolsBox({
  isEditToolsMode,
  onDeleteTask,
  onDoneTask,
}: EditToolsBoxProps) {
  return (
    <div className={`task-card_toolsBox ${isEditToolsMode ? "active" : ""}`}>
      <div className="task-card_delete" onClick={onDeleteTask}>
        <svg
          width="15"
          height="18"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.37 7L13.37 8.73L1.24 1.73L2.24 0L5.28 1.75L6.64 1.38L10.97 3.88L11.34 5.25L14.37 7ZM0 17.09V5.09H5.07L12 9.09V17.09C12 17.6204 11.7893 18.1291 11.4142 18.5042C11.0391 18.8793 10.5304 19.09 10 19.09H2C1.46957 19.09 0.960859 18.8793 0.585786 18.5042C0.210714 18.1291 0 17.6204 0 17.09Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="task-card_edit">
        <svg
          width="15"
          height="15"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 20.525C1.45 20.525 0.979002 20.3293 0.587002 19.938C0.195002 19.5467 -0.000664969 19.0757 1.69779e-06 18.525V4.525C1.69779e-06 3.975 0.196002 3.504 0.588002 3.112C0.980002 2.72 1.45067 2.52433 2 2.525H10.925L8.925 4.525H2V18.525H16V11.575L18 9.575V18.525C18 19.075 17.804 19.546 17.412 19.938C17.02 20.33 16.5493 20.5257 16 20.525H2ZM13.175 3.1L14.6 4.5L8 11.1V12.525H9.4L16.025 5.9L17.45 7.3L10.825 13.925C10.6417 14.1083 10.429 14.2543 10.187 14.363C9.945 14.4717 9.691 14.5257 9.425 14.525H7C6.71667 14.525 6.479 14.429 6.287 14.237C6.095 14.045 5.99934 13.8077 6 13.525V11.1C6 10.8333 6.05 10.579 6.15 10.337C6.25 10.095 6.39167 9.88267 6.575 9.7L13.175 3.1ZM17.45 7.3L13.175 3.1L15.675 0.6C16.075 0.2 16.5543 0 17.113 0C17.6717 0 18.1423 0.2 18.525 0.6L19.925 2.025C20.3083 2.40833 20.5 2.875 20.5 3.425C20.5 3.975 20.3083 4.44167 19.925 4.825L17.45 7.3Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="task-card_done" onClick={onDoneTask}>
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
