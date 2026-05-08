"use client";

import { useMemo, useState } from "react";
import { AnnotationTask, Decision, mockAnnotationTask } from "@annotation/mock-data";

import { PromptContextPanel } from "./PromptContextPanel";
import { ResponsesPanel } from "./ResponsesPanel";

function cloneTask(task: AnnotationTask): AnnotationTask {
  return {
    ...task,
    tags: [...task.tags],
    availableTags: [...task.availableTags],
    references: task.references.map((item) => ({ ...item })),
    candidates: task.candidates.map((item) => ({ ...item })),
    responseOptions: task.responseOptions.map((item) => ({ ...item })),
  };
}

const initialTask = cloneTask(mockAnnotationTask);

export function AnnotationShell() {
  const [task, setTask] = useState<AnnotationTask>(initialTask);
  const [isEditMode, setIsEditMode] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  const hasPendingResponse = useMemo(
    () => task.responseOptions.some((item) => item.answer === "undone"),
    [task.responseOptions],
  );

  const onDecisionChange = (optionId: string, nextDecision: Decision) => {
    setTask((prev) => ({
      ...prev,
      responseOptions: prev.responseOptions.map((item) =>
        item.id === optionId ? { ...item, answer: nextDecision } : item,
      ),
    }));
    setValidationError(null);
  };

  const onReset = () => {
    setTask(cloneTask(mockAnnotationTask));
    setValidationError(null);
    setIsEditMode(true);
  };

  const onSubmit = () => {
    if (hasPendingResponse) {
      setValidationError("Please provide responses for all options before submitting.");
      return;
    }
    setValidationError("Mock submit succeeded. You can reset to try again.");
    setIsEditMode(false);
  };

  return (
    <main className="annotationPage">
      <section className="annotationGrid">
        <div>
          <PromptContextPanel prompt={task.prompt} context={task.context} tags={task.tags} />
        </div>
        <ResponsesPanel
          options={task.responseOptions}
          editMode={isEditMode}
          validationError={validationError}
          onToggleEditMode={() => setIsEditMode((prev) => !prev)}
          onDecisionChange={onDecisionChange}
          onReset={onReset}
          onSubmit={onSubmit}
        />
      </section>
    </main>
  );
}
