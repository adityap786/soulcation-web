import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import CollageSection from "@/components/CollageSection";
import TransformationSection from "@/components/TransformationSection";
import JourneySection from "@/components/JourneySection";
import TrustSection from "@/components/TrustSection";
import MountainSection from "@/components/MountainSection";
import FounderSection from "@/components/FounderSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import AboutSoulcation from "@/components/AboutSoulcation";
import MissionVisionSection from "@/components/MissionVisionSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <EmpathySection />
      <AboutSoulcation />
      <CollageSection />
      <TransformationSection />
      <MissionVisionSection />
      <JourneySection />
      <TrustSection />
      <MountainSection />
      <FounderSection />
      <FormSection />
      <Footer />
    </main>
  );
}
