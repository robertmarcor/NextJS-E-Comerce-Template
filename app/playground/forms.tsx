import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function PgFormsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Forms</h2>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
          <CardDescription>A sample contact form with various input types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select>
              <SelectTrigger id="subject" className="w-full">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Support Request</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the terms and conditions
            </Label>
          </div>

          <div className="space-y-2">
            <Label>Preferred contact method</Label>
            <RadioGroup defaultValue="email">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="contact-email" />
                <Label htmlFor="contact-email" className="text-sm font-normal">
                  Email
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="contact-phone" />
                <Label htmlFor="contact-phone" className="text-sm font-normal">
                  Phone
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Login Form</CardTitle>
            <CardDescription>A simple login form example</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input id="login-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-password">Password</Label>
                <Button variant="link" className="p-0 h-auto text-xs">
                  Forgot password?
                </Button>
              </div>
              <Input id="login-password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="remember-me" />
              <Label htmlFor="remember-me" className="text-sm font-normal">
                Remember me
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Newsletter Signup</CardTitle>
            <CardDescription>Subscribe to our newsletter</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email address</Label>
              <div className="flex space-x-2">
                <Input id="newsletter-email" type="email" placeholder="you@example.com" />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing" className="text-sm font-normal">
                I want to receive marketing emails
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
