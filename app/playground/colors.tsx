import React from "react";

function ColorPalette() {
  return (
    <React.Fragment>
      <h2>Colors</h2>
      <div className="flex gap-2 *:p-1 *:rounded-md">
        <div className="bg-primary text-primary-foreground">Primary</div>
        <div className="bg-secondary text-secondary-foreground">Secondary</div>
        <div className="bg-accent text-accent-foreground">Accent</div>
        <div className="bg-background text-foreground">Background</div>
        <div className="bg-foreground text-background">Foreground</div>
        <div className="bg-muted">Muted</div>
        <div className="bg-muted-foreground">Muted Foreground</div>
        <div className="bg-destructive">Destructive</div>
      </div>
    </React.Fragment>
  );
}

export default ColorPalette;
