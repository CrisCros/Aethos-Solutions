import { LandingPage } from "@/components/landing-page";

export default function HomePage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return <LandingPage calendlyUrl={calendlyUrl} />;
}
