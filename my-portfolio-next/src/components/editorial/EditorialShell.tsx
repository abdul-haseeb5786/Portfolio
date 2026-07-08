import React, { type ReactNode } from "react";

interface EditorialShellProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export default function EditorialShell({
  children,
  className = "",
  as: Tag = "section",
  id,
}: EditorialShellProps) {
  return (
    <Tag id={id} className={`editorial-shell ${className}`.trim()}>
      {children}
    </Tag>
  );
}
