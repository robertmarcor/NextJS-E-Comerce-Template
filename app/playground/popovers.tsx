import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function PgPopoversSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Popovers</h2>
      <div className="flex flex-wrap gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Basic Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h3 className="font-medium">Popover Title</h3>
              <p className="text-sm text-muted-foreground">
                Popovers are used to display additional information or actions.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">With Form</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h3 className="font-medium">Settings</h3>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex justify-end">
                <Button size="sm">Save</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}
