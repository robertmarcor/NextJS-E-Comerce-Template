import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function PgToastsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Sonner Toasts</h2>
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => toast("Default toast notification")} variant="outline">
          Default Toast
        </Button>

        <Button onClick={() => toast.success("Operation completed successfully")} variant="outline">
          Success Toast
        </Button>

        <Button onClick={() => toast.error("Something went wrong")} variant="outline">
          Error Toast
        </Button>

        <Button onClick={() => toast.warning("You should check this out")} variant="outline">
          Warning Toast
        </Button>

        <Button
          onClick={() =>
            toast("Toast with action", {
              action: {
                label: "Undo",
                onClick: () => console.log("Undo clicked"),
              },
            })
          }
          variant="outline">
          Toast with Action
        </Button>

        <Button
          onClick={() =>
            toast("Toast with description", {
              description: "This is additional descriptive text for the toast notification.",
            })
          }
          variant="outline">
          With Description
        </Button>
      </div>
    </section>
  );
}
