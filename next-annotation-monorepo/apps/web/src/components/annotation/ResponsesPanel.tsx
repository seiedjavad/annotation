"use client";

import Image from "next/image";
import { CandidateImage, Decision, ResponseOption } from "@annotation/mock-data";
import { Card, PrimaryButton, SecondaryButton } from "@annotation/ui";

import { ResponseItem } from "./ResponseItem";

type ResponsesPanelProps = {
  options: ResponseOption[];
  candidateImages: CandidateImage[];
  editMode: boolean;
  validationError: string | null;
  onToggleEditMode: () => void;
  onDecisionChange: (optionId: string, nextDecision: Decision) => void;
  onReset: () => void;
  onSubmit: () => void;
};

export function ResponsesPanel({
  options,
  candidateImages,
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
        <div className="candidateGrid">
          {candidateImages.map((image, index) => (
            <div key={image.id} className="candidateRow">
              <div className="candidateImageCard">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 400px"
                />
              </div>
              <div className="dropBox">Drop here ({index + 1})</div>
            </div>
          ))}
        </div>
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
