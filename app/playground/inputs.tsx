import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PgInputsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Inputs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="default-input">Default Input</Label>
          <Input id="default-input" placeholder="Enter some text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="disabled-input">Disabled Input</Label>
          <Input id="disabled-input" placeholder="Disabled input" disabled />
        </div>
        <div className="space-y-2">
          <Label htmlFor="with-icon">Input with Icon</Label>
          <div className="relative">
            <Input id="with-icon" placeholder="Search..." />
            <div className="absolute right-2 top-2.5 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="with-validation">With Validation</Label>
          <Input id="with-validation" placeholder="Error state" className="border-destructive" />
          <p className="text-sm text-destructive">This field is required</p>
        </div>
      </div>
    </section>
  );
}
