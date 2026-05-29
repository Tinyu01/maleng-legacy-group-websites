import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import ParallaxSection from '../components/ParallaxSection';
import NewsUpdates from '../components/NewsUpdates';
import LiveStats from '../components/LiveStats';
import WhyChooseUs from '../components/WhyChooseUs';
import ValueProposition from '../components/ValueProposition';
import Subsidiaries from '../components/Subsidiaries';
import SectorCoverage from '../components/SectorCoverage';
import TrustSignals from '../components/TrustSignals';
import IndustryRecognition from '../components/IndustryRecognition';
import StrategicPartners from '../components/StrategicPartners';
import ClientSuccess from '../components/ClientSuccess';
import VideoSection from '../components/VideoSection';
import InvestmentTimeline from '../components/InvestmentTimeline';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Maleng Legacy Group Holdings | Diversified Holding Company SA</title>
        <meta name="description" content="South Africa's premier diversified holding company. 18+ subsidiaries across infrastructure, professional services, protection, and agri-consumer sectors." />
        <meta name="keywords" content="holding company SA, business solutions, infrastructure, professional services, diversified portfolio, B-BBEE Level 1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Maleng Legacy Group Holdings | Diversified Solutions" />
        <meta property="og:description" content="Building sustainable economic legacies through diversified solutions across key sectors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.malenglegacy.co.za" />
        <meta property="og:image" content="https://www.malenglegacy.co.za/og-image.jpg" />
        <link rel="canonical" href="https://www.malenglegacy.co.za" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative">
        <ParallaxHero />
        <NewsUpdates />
        
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920" backgroundColor="bg-primary/95">
          <LiveStats />
        </ParallaxSection>
        
        <WhyChooseUs />
        <ValueProposition />
        
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920" backgroundColor="bg-secondary/90">
          <Subsidiaries />
        </ParallaxSection>
        
        <SectorCoverage />
        <TrustSignals />
        
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920" backgroundColor="bg-primary/95">
          <IndustryRecognition />
        </ParallaxSection>
        
        <StrategicPartners />
        <ClientSuccess />
        <VideoSection />
        
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920" backgroundColor="bg-secondary/90">
          <InvestmentTimeline />
        </ParallaxSection>
        
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
  
}
