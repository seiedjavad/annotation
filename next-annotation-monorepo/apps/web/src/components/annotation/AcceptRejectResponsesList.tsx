"use client";

import { Decision, ResponseOption } from "@annotation/mock-data";

import { ResponseItem } from "./ResponseItem";

type AcceptRejectResponsesListProps = {
  options: ResponseOption[];
  editMode: boolean;
  onDecisionChange: (optionId: string, nextDecision: Decision) => void;
};

export function AcceptRejectResponsesList({
  options,
  editMode,
  onDecisionChange,
}: AcceptRejectResponsesListProps) {
  return (
    <div className="responseList">
      {options.map((item) => (
        <ResponseItem
          key={item.id}
          text={item.text}
          answer={item.answer}
          editMode={editMode}
          onDecisionChange={(nextDecision) => onDecisionChange(item.id, nextDecision)}
        />
      ))}
    </div>
  );
}
