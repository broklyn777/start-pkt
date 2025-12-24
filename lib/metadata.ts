// lib/metadata.ts
import type { Metadata } from "next";

type GuideMetadataInput = {
  title: string;
  description: string;
};

export function guideMetadata({
  title,
  description,
}: GuideMetadataInput): Metadata {
  return {
    title,
    description,
  };
}
