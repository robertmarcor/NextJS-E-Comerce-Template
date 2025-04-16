import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PgTabsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Tabs</h2>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Make changes to your account information here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm password</Label>
                <Input id="confirm" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Change password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your application settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <select
                  id="email-notifications"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm">
                  <option value="all">All emails</option>
                  <option value="important">Important only</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <select
                  id="theme"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="mt-4 p-4 border rounded-md border-border bg-muted/50">
          <div className="text-center py-8">
            <h3 className="text-xl font-medium">Preview Content</h3>
            <p className="text-muted-foreground mt-2">This is a preview of your content.</p>
            <Button className="mt-4">Take action</Button>
          </div>
        </TabsContent>
        <TabsContent
          value="code"
          className="mt-4 p-4 border rounded-md border-border bg-muted/50 overflow-auto">
          <pre className="text-sm">
            {`<Button className="mt-4">
  Take action
</Button>`}
          </pre>
        </TabsContent>
      </Tabs>
    </section>
  );
}
