"use client";

import { Decision, ResponseOption } from "@annotation/mock-data";
import { Card, PrimaryButton, SecondaryButton } from "@annotation/ui";

import { AcceptRejectResponsesList } from "./AcceptRejectResponsesList";

type ResponsesPanelProps = {
  options: ResponseOption[];
  editMode: boolean;
  validationError: string | null;
  onToggleEditMode: () => void;
  onDecisionChange: (optionId: string, nextDecision: Decision) => void;
  onReset: () => void;
  onSubmit: () => void;
};

export function ResponsesPanel({
  options,
  editMode,
  validationError,
  onToggleEditMode,
  onDecisionChange,
  onReset,
  onSubmit,
}: ResponsesPanelProps) {
  const isSubmitDisabled = options.some((option) => option.answer === "undone");

  return (
    <div className="rightColumn">
      <Card title="Responses">
        <AcceptRejectResponsesList
          options={options}
          editMode={editMode}
          onDecisionChange={onDecisionChange}
        />
        <div className="actionRow">
          <PrimaryButton type="button" onClick={onSubmit} disabled={isSubmitDisabled || !editMode}>
            Submit Your Response
          </PrimaryButton>
          <SecondaryButton type="button" onClick={onReset}>
            Reset
          </SecondaryButton>
          <SecondaryButton type="button" onClick={onToggleEditMode}>
            {editMode ? "Exit Edit" : "Edit Response"}
          </SecondaryButton>
        </div>
        {validationError ? <p className="validationError">{validationError}</p> : null}
      </Card>
    </div>
  );
}
