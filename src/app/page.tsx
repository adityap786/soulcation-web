import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import CollageSection from "@/components/CollageSection";
import TransformationSection from "@/components/TransformationSection";
import JourneySection from "@/components/JourneySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import MountainSection from "@/components/MountainSection";
import FaqSection from "@/components/FaqSection";
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
      <WhyChooseUsSection />
      <ReviewsSection />
      <MountainSection />
      <FaqSection />
      <FounderSection />
      <FormSection />
      <Footer />
    </main>
  );
}
