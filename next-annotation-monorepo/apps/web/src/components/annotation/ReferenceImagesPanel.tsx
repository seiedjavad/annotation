"use client";

import Image from "next/image";
import { ReferenceImage } from "@annotation/mock-data";

type ReferenceImagesPanelProps = {
  references: ReferenceImage[];
};

export function ReferenceImagesPanel({ references }: ReferenceImagesPanelProps) {
  return (
    <div className="referenceImageGrid">
      {references.map((image) => (
        <div key={image.id} className="referenceImageCard">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1200px) 100vw, 600px" />
        </div>
      ))}
    </div>
  );
}
