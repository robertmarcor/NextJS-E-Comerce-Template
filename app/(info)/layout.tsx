import React from "react";

function InfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col min-h-screen">
      <div className="max-w-4xl mx-auto my-12 flex-1">{children}</div>
    </article>
  );
}

export default InfoLayout;
