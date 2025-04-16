import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-6 max-w-md">
        {/* 404 Number */}
        <p className="text-9xl font-extrabold tracking-tight text-primary">404</p>

        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight">Page Not Found</h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg">
          We {"couldn't"} find the page you were looking for. It might have been moved, deleted, or
          never existed.
        </p>

        {/* Illustration */}
        <div className="py-8">
          <div className="w-64 h-64 mx-auto rounded-full bg-muted flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 15h8" />
              <path d="M9 9h.01" />
              <path d="M15 9h.01" />
            </svg>
          </div>
        </div>

        {/* Return Home Button */}
        <Button asChild size="lg" className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
