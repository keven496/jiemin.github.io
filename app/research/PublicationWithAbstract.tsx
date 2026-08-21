"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";

type PublicationWithAbstractProps = {
  title: string;
  citation: ReactNode;
  abstract: ReactNode;
};

export function PublicationWithAbstract({
  title,
  citation,
  abstract,
}: PublicationWithAbstractProps) {
  const [isOpen, setIsOpen] = useState(false);
  const abstractId = useId();

  return (
    <>
      <p className="publication-title">
        <button
          type="button"
          className="publication-title-button"
          aria-expanded={isOpen}
          aria-controls={abstractId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <strong>{title}</strong>
          <span className="abstract-toggle-icon" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>{" "}
        {citation}
      </p>
      <div id={abstractId} hidden={!isOpen}>
        <p className="abstract">{abstract}</p>
      </div>
    </>
  );
}
