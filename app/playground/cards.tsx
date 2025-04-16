import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PgCardsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>A simple card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards are used to group related content and actions.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>

        <Card className="border-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle>Highlighted Card</CardTitle>
            <CardDescription>With primary border and background</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards can be styled with different borders and backgrounds.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Cancel</Button>
            <Button className="ml-2">Submit</Button>
          </CardFooter>
        </Card>

        <Card className="bg-secondary/10">
          <CardHeader>
            <CardTitle>Secondary Card</CardTitle>
            <CardDescription>With a secondary background</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards can have different background colors.</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="secondary">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
