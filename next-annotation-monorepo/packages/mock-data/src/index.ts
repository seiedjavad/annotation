export type Decision = "accept" | "reject" | "undone";

export interface ResponseOption {
  id: string;
  text: string;
  answer: Decision;
}

export interface CandidateImage {
  id: string;
  src: string;
  alt: string;
}

export interface ReferenceImage {
  id: string;
  src: string;
  alt: string;
}

export interface AnnotationTask {
  id: string;
  prompt: string;
  context: string;
  tags: string[];
  availableTags: string[];
  references: ReferenceImage[];
  candidates: CandidateImage[];
  responseOptions: ResponseOption[];
}

export const mockAnnotationTask: AnnotationTask = {
  id: "task-bedroom-letter-board",
  prompt:
    "Analyze this cozy bedroom vignette with a letter board and simple decor. Explain how the playful, personal touch guides style decisions for intimate spaces and which rooms benefit most from this look.",
  context:
    "A letter board introduces a personalized, casual mood that pairs well with warm lighting and pared-down furnishings. Discuss why such elements work in study nooks, kids' rooms, and relaxed bedrooms. Emphasize the balance between decor, typography, and clutter-free surfaces to maintain clarity.",
  tags: ["cozy", "bedroom", "minimal", "personalized"],
  availableTags: ["cozy", "bedroom", "minimal", "personalized", "modern", "neutral"],
  references: [
    {
      id: "ref-1",
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      alt: "A cozy bedroom with a letter board",
    },
  ],
  candidates: [
    {
      id: "cand-1",
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
      alt: "Yellow accent pillows on a bed",
    },
    {
      id: "cand-2",
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      alt: "A pink-toned desk corner",
    },
    {
      id: "cand-3",
      src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=600&q=80",
      alt: "Shelf with basket and decor",
    },
    {
      id: "cand-4",
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
      alt: "Plant near white wall decor",
    },
  ],
  responseOptions: [
    {
      id: "resp-1",
      text: "The letter board adds personality while staying visually light.",
      answer: "undone",
    },
    {
      id: "resp-2",
      text: "Warm neutrals and compact decor keep the composition calm and readable.",
      answer: "undone",
    },
    {
      id: "resp-3",
      text: "This style is most effective in bedrooms, study nooks, and low-traffic corners.",
      answer: "undone",
    },
    {
      id: "resp-4",
      text: "Avoiding clutter preserves focus on message-driven accents like typography.",
      answer: "undone",
    },
  ],
};
