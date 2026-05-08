"use client";

import { Decision } from "@annotation/mock-data";

type ResponseItemProps = {
  text: string;
  answer: Decision;
  editMode: boolean;
  onDecisionChange: (nextDecision: Decision) => void;
};

export function ResponseItem({ text, answer, editMode, onDecisionChange }: ResponseItemProps) {
  return (
    <div className={`responseItem ${answer}`}>
      <div className="responseActionArea">
        <button
          type="button"
          disabled={!editMode}
          className={`iconChoice ${answer === "accept" ? "activeAccept" : ""}`}
          onClick={() => onDecisionChange("accept")}
        >
          ✓
        </button>
        <button
          type="button"
          disabled={!editMode}
          className={`iconChoice ${answer === "reject" ? "activeReject" : ""}`}
          onClick={() => onDecisionChange("reject")}
        >
          ✕
        </button>
      </div>
      <div className="responseTextArea">{text}</div>
    </div>
  );
}
