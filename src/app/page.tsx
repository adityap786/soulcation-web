import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import EmpathySection from "@/components/EmpathySection";
import CollageSection from "@/components/CollageSection";
import TransformationSection from "@/components/TransformationSection";
import JourneySection from "@/components/JourneySection";
import TrustSection from "@/components/TrustSection";
import MountainSection from "@/components/MountainSection";
import FounderSection from "@/components/FounderSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <StorySection />
      <EmpathySection />
      <CollageSection />
      <TransformationSection />
      <JourneySection />
      <TrustSection />
      <MountainSection />
      <FounderSection />
      <FormSection />
      <Footer />
    </main>
  );
}
