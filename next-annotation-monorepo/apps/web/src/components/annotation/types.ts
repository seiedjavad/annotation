import { AnnotationTask, Decision } from "@annotation/mock-data";

export type AnnotationState = {
  task: AnnotationTask;
  isEditMode: boolean;
  validationError: string | null;
};

export type DecisionMap = Record<string, Decision>;
