"use client";

import { Card, Pill } from "@annotation/ui";

type PromptContextPanelProps = {
  prompt: string;
  context: string;
  tags: string[];
};

export function PromptContextPanel({ prompt, context, tags }: PromptContextPanelProps) {
  return (
    <div className="leftColumn">
      <Card title="Prompt">
        <p className="bodyText">{prompt}</p>
      </Card>
      <Card title="Context">
        <p className="bodyText">{context}</p>
        <div className="tagRow">
          {tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </Card>
    </div>
  );
}
