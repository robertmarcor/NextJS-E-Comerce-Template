import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function PgSwitchesSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Switches</h2>
      <div className="flex flex-wrap gap-8 items-center">
        <div className="flex items-center space-x-2">
          <Switch id="switch-default" />
          <Label htmlFor="switch-default">Default Switch</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="switch-checked" defaultChecked />
          <Label htmlFor="switch-checked">Checked Switch</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="switch-disabled" disabled />
          <Label htmlFor="switch-disabled">Disabled Switch</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="switch-disabled-checked" disabled defaultChecked />
          <Label htmlFor="switch-disabled-checked">Disabled Checked</Label>
        </div>
      </div>
    </section>
  );
}
