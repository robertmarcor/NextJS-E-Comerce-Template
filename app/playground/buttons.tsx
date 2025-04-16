import { Button } from "@/components/ui/button";

export function PgButtonsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Buttons</h2>
      <div className="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small</Button>
        <Button>Default Size</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
      </div>
    </section>
  );
}
