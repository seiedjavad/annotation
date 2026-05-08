import React, { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  title?: string;
  className?: string;
}>;

export function Card({ title, className, children }: CardProps) {
  return (
    <section className={`card ${className ?? ""}`.trim()}>
      {title ? <h3 className="cardTitle">{title}</h3> : null}
      {children}
    </section>
  );
}

type PillProps = {
  children: React.ReactNode;
};

export function Pill({ children }: PillProps) {
  return <span className="pill">{children}</span>;
}

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({ children, ...rest }: PrimaryButtonProps) {
  return (
    <button {...rest} className={`btn btnPrimary ${rest.className ?? ""}`.trim()}>
      {children}
    </button>
  );
}

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SecondaryButton({ children, ...rest }: SecondaryButtonProps) {
  return (
    <button {...rest} className={`btn btnSecondary ${rest.className ?? ""}`.trim()}>
      {children}
    </button>
  );
}
