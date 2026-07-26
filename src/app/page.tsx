import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import CollageSection from "@/components/CollageSection";
import TransformationSection from "@/components/TransformationSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CorporateSection from "@/components/CorporateSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
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
      <WhyChooseUsSection />
      <CorporateSection />
      <ReviewsSection />
      <FaqSection />
      <FormSection />
      <Footer />
    </main>
  );
}
