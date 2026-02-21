
import HeroSection from '@/components/HeroSection';
import OurDepartments from '@/components/OurDepartments';
import OurDoctors from '@/components/OurDoctors';
import WhyChooseUs from '@/components/WhyChooseUs';
import AppointmentSection from '@/components/AppointmentForm';
import VisitSection from '@/components/VisitSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EmergencyContactBar from '@/components/EmergencyContactBar';


export default function Home() {
  return (
    <main>
      
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection /> 
      <OurDepartments />           
      <OurDoctors />
      <TestimonialsSection />
      <AppointmentSection />
      <VisitSection />
      <EmergencyContactBar />
      
    </main>
  );
}