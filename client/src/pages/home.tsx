import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Target,
  Award,
  Heart,
  ChevronDown,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Clock,
  Star,
  Flag,
  Shield,
  Zap,
  TrendingUp,
  Building,
  Vote,
  Megaphone,
  HandHeart,
  UsersRound,
} from "lucide-react";

import sanjayBansodeImage from "../assets/Sanjay_Bansode_Img.JPEG";
import ajitPawarImage from "../assets/Ajit_Pawar_Img.JPEG";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const rallyDetails = [
    {
      icon: Calendar,
      title: "निवडणूक दिनांक",
      value: "१५ जानेवारी २०२६",
      subtitle: "गुरुवार",
    },
    {
      icon: Clock,
      title: "मतदान वेळ",
      value: "सकाळी ७:०० ते सायं. ६:००",
      subtitle: "संपूर्ण दिवस",
    },
    {
      icon: Building,
      title: "निवडणूक क्षेत्र",
      value: "पुणे व पिंपरी-चिंचवड",
      subtitle: "महानगरपालिका",
    },
    {
      icon: Vote,
      title: "निवडणूक प्रकार",
      value: "महानगरपालिका सार्वत्रिक",
      subtitle: "नगरसेवक निवडणूक",
    },
  ];

  const campaignHighlights = [
    {
      icon: Target,
      title: "मोहिमेचे उद्दिष्ट",
      description: "पुणे व पिंपरी-चिंचवड महानगरपालिकेत निर्णायक विजय मिळवणे आणि जनतेच्या विकासासाठी सक्षम नेतृत्व स्थापित करणे.",
    },
    {
      icon: UsersRound,
      title: "जनसहभाग",
      description: "लातूर, परभणी, नांदेड आणि बिदर परिसरातील सर्व बांधवांचा एकत्रित प्रयत्न व प्रचारातील सक्रिय सहभाग.",
    },
    {
      icon: Megaphone,
      title: "प्रचार अभियान",
      description: "प्रत्येक घरापर्यंत पोहोचून मतदारांना जागृत करणे आणि विकासाच्या संकल्पांची माहिती देणे.",
    },
    {
      icon: HandHeart,
      title: "सामूहिक जबाबदारी",
      description: "मतदार म्हणूनच नव्हे तर कार्यकर्ता म्हणूनही पूर्ण ताकदीने प्रचारात सहभागी होणे.",
    },
  ];

  const visionPoints = [
    {
      icon: Shield,
      title: "सामाजिक न्याय",
      description: "समाजातील सर्व घटकांना समान संधी, न्याय आणि सन्मान प्रदान करणे.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: TrendingUp,
      title: "शाश्वत विकास",
      description: "पायाभूत सुविधा, रस्ते, पाणी व वीज पुरवठ्यात सुधारणा करणे.",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Users,
      title: "रोजगार निर्मिती",
      description: "स्थानिक युवकांसाठी रोजगाराच्या नव्या संधी उपलब्ध करणे.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "महिला सक्षमीकरण",
      description: "महिला, शेतकरी आणि मजूर वर्गाच्या कल्याणासाठी विशेष योजना.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Zap,
      title: "आधुनिकीकरण",
      description: "स्मार्ट सिटी संकल्पनेअंतर्गत डिजिटल सुविधांचा विस्तार.",
      color: "from-yellow-400 to-amber-600",
    },
    {
      icon: Star,
      title: "पारदर्शक प्रशासन",
      description: "भ्रष्टाचारमुक्त व जनतेला उत्तरदायी प्रशासन निर्माण करणे.",
      color: "from-amber-400 to-orange-600",
    },
  ];

  const participatingRegions = [
    { name: "लातूर", desc: "लातूर जिल्ह्यातील सर्व तालुक्यांचा सहभाग" },
    { name: "परभणी", desc: "परभणी जिल्ह्यातील कार्यकर्त्यांचे योगदान" },
    { name: "नांदेड", desc: "नांदेड विभागातील समर्थकांची एकजूट" },
    { name: "बिदर", desc: "बिदर परिसरातील बांधवांचा पाठिंबा" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-0" />

      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-saffron/15 to-transparent"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-gold/10 to-transparent"
        />
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-gold/5 rounded-full"
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 tricolor-top">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-dark px-4 md:px-8 py-3 md:py-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-2 md:gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white font-bold font-serif text-sm md:text-base">
                
              </div>
              <span className="text-base md:text-xl font-semibold text-gradient-gold">
                जनआंदोलन २०२६
              </span>
            </motion.div>
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
              {[
                { href: "#leaders", label: "नेतृत्व" },
                { href: "#vision", label: "दृष्टिकोन" },
                { href: "#message", label: "संदेश" },
                { href: "#rally", label: "निवडणूक माहिती" },
                { href: "#gallery", label: "गॅलरी" },
                { href: "#contact", label: "संपर्क" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="hover:text-saffron transition-colors relative group"
                  whileHover={{ y: -2 }}
                  data-testid={`nav-${item.label}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-saffron to-gold group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.nav>
      </header>
      
      
	<div className="flex justify-between items-center px-[10%]"> 
     {/* px-[10%] -> 10% margin left & right, adjust as needed */}

  {/* Left Logo */}
  <motion.div
    {...floatAnimation}
    className="relative w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[10vw] lg:h-[10vw] xl:w-[8vw] xl:h-[8vw] rounded-full overflow-hidden border-4 border-gold/50 glow-gold"
    className="relative w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[18vw] md:h-[18vw] lg:w-[15vw] lg:h-[15vw] xl:w-[12vw] xl:h-[12vw] rounded-full overflow-hidden border-4 border-gold/50 glow-gold"
     
 >
    <img
      src="/NCP_Logo.PNG"
      alt="NCP_Logo"
      className="w-full h-full object-cover object-top"
      data-testid="img-leader-hero"
    />
  </motion.div>

  {/* Right Bansode Photo */}
  <motion.div
    {...floatAnimation}
    className="relative w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[10vw] lg:h-[10vw] xl:w-[8vw] xl:h-[8vw] rounded-full overflow-hidden border-4 border-gold/50 glow-gold"
    className="relative w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[18vw] md:h-[18vw] lg:w-[15vw] lg:h-[15vw] xl:w-[12vw] xl:h-[12vw] rounded-full overflow-hidden border-4 border-gold/50 glow-gold"

  >
    <img
      src={sanjayBansodeImage}
      alt="मा. श्री संजयजी बनसोडे"
      className="w-full h-full object-cover object-top"
      data-testid="img-leader-hero"
    />
  </motion.div>
</div>



	  
	  
	  
	<section
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden w-full mx-auto"
  data-testid="section-hero"
>

  <motion.div
    style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
    className="absolute inset-0"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
    <motion.div 
      animate={{ 
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-gradient-radial from-saffron/25 via-gold/15 to-transparent blur-3xl"
    />
  </motion.div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
    {/* Changed grid → flex for proper horizontal centering */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
      
      {/* Left Column: Text */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="order-2 lg:order-1 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-2 rounded-full glass border border-gold/30"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-500"
          />
          <span className="text-gold text-xs md:text-sm font-medium items-center justify-center mx-auto">
            १५ जानेवारी २०२६ | पुणे व पिंपरी-चिंचवड
          </span>
        </motion.div>

        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="block text-foreground"
          >
            पुणे व पिंपरी-चिंचवड
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="block text-gradient-saffron mt-1 md:mt-2"
          >
            महानगरपालिका निवडणूक २०२६
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="block text-gradient-gold text-2xl sm:text-3xl md:text-4xl mt-2 md:mt-3"
          >
            जनआंदोलन व परिवर्तनाचा लढा
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto"
        >
          एकजूट, उत्साह आणि विश्वास यांच्या बळावर यश निश्चित आहे!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
          <motion.a
            href="#message"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,140,0,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-saffron to-gold text-white font-semibold rounded-xl shadow-lg glow-saffron transition-all text-sm md:text-base"
            data-testid="btn-read-message"
          >
            संदेश वाचा
          </motion.a>
          <motion.a
            href="#leaders"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,200,50,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 glass border border-gold/30 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all text-sm md:text-base"
            data-testid="btn-leaders"
          >
            <Users className="w-4 h-4 md:w-5 md:h-5 text-gold" />
            नेतृत्व पहा
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Column: Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="order-1 lg:order-2 flex justify-center"
      >
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-saffron/40 via-gold/30 to-transparent rounded-full blur-3xl scale-125"
          />
        </div>
      </motion.div>
      
    </div>
  </div>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.8 }}
    className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
  >
    <motion.a
      href="#leaders"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="block"
    >
      <ChevronDown className="w-7 h-7 md:w-8 md:h-8 text-gold/60" />
    </motion.a>
  </motion.div>
</section>

	  
	  
	  
	  
	  
	  
	  

	  
	  
	  
	  
	  
      <section id="leaders" className="py-16 md:py-24 relative" data-testid="section-leaders">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-saffron/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                आमचे मार्गदर्शक
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                नेतृत्व
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                variants={fadeInLeft}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 to-gold/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative glass rounded-3xl p-6 md:p-8 border border-gold/20 hover:border-gold/40 transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-gradient-radial from-saffron/20 to-transparent" />
                  <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-gold/30 flex-shrink-0"
                    >
                      <img
                        src={sanjayBansodeImage}
                        alt="मा. श्री संजयजी बनसोडे"
                        className="w-full h-full object-cover object-top"
                        data-testid="img-sanjay-bansode"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    <div className="text-center sm:text-left">
                      <span className="text-gold text-xs md:text-sm font-medium">स्टार प्रचारक</span>
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mt-1 md:mt-2 text-gradient-saffron">
                        मा. श्री संजयजी बनसोडे
                      </h3>
                      <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
                        आमदार, महाराष्ट्र राज्य (माजी मंत्री)
                      </p>
                      <p className="text-muted-foreground text-sm md:text-base">
                        राष्ट्रवादी काँग्रेस पक्ष
                      </p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3 md:mt-4">
                        <span className="px-2 md:px-3 py-1 rounded-full bg-saffron/20 text-saffron text-xs font-medium">
                          दूरदृष्टीपूर्ण नेतृत्व
                        </span>
                        <span className="px-2 md:px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">
                          लोकाभिमुख
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gold/10">
				  {/*<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
				  <p className="text-muted-foreground text-sm md:text-base leading-8 md:leading-9">
					<p className="text-muted-foreground text-sm md:text-base leading-9 md:leading-10 mt-2 md:mt-3">*/}
					<p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2 md:mt-3">
                      सक्षम, दूरदृष्टीपूर्ण आणि लोकाभिमुख नेतृत्वाने जनतेच्या विश्वासाला पात्र ठरलेले नेते. 
                      जनआंदोलन व परिवर्तनाच्या या लढ्याचे प्रमुख मार्गदर्शक.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-saffron/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative glass rounded-3xl p-6 md:p-8 border border-gold/20 hover:border-gold/40 transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-gradient-radial from-gold/20 to-transparent" />
                  <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-gold/30 flex-shrink-0"
                    >
                      <img
                        src={ajitPawarImage}
                        alt="मा. श्री अजितदादा पवार"
                        className="w-full h-full object-cover object-top"
                        data-testid="img-ajit-pawar"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    <div className="text-center sm:text-left">
                      <span className="text-gold text-xs md:text-sm font-medium">मार्गदर्शक नेतृत्व</span>
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mt-1 md:mt-2 text-gradient-gold">
                        मा. श्री अजितदादा पवार
                      </h3>
                      <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
                        उपमुख्यमंत्री, महाराष्ट्र राज्य
                      </p>
                      <p className="text-muted-foreground text-sm md:text-base">
                        राष्ट्रवादी काँग्रेस पक्ष
                      </p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3 md:mt-4">
                        <span className="px-2 md:px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">
                          अनुभवी प्रशासक
                        </span>
                        <span className="px-2 md:px-3 py-1 rounded-full bg-saffron/20 text-saffron text-xs font-medium">
                          विकासाचे शिल्पकार
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gold/10">
				
					{/*<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
				  <p className="text-muted-foreground text-sm md:text-base leading-8 md:leading-9">
					<p className="text-muted-foreground text-sm md:text-base leading-9 md:leading-10 mt-2 md:mt-3">*/}
					<p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2 md:mt-3">
                      महाराष्ट्राच्या विकासाचे शिल्पकार. दीर्घकालीन राजकीय अनुभव व प्रशासकीय कौशल्याने 
                      राज्याच्या प्रगतीत महत्त्वपूर्ण योगदान देणारे नेते.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="rally" className="py-16 md:py-24 relative" data-testid="section-rally">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                महत्त्वाची माहिती
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                निवडणूक तपशील
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {rallyDetails.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass rounded-2xl md:rounded-3xl p-5 md:p-6 border border-gold/10 hover:border-gold/30 transition-all text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center mx-auto mb-3 md:mb-4"
                  >
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <p className="text-muted-foreground text-xs md:text-sm mb-1">{item.title}</p>
                  <p className="font-serif text-lg md:text-xl font-bold text-gradient-saffron mb-1">
                    {item.value}
                  </p>
                  <p className="text-muted-foreground text-xs">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="message" className="py-16 md:py-24 relative" data-testid="section-message">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-saffron/8 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-10 md:mb-12">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                जनतेला आवाहन
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                जनआंदोलनाचा संदेश
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="glass rounded-3xl p-6 sm:p-8 md:p-12 border border-gold/20 relative overflow-hidden"
            >
              <motion.div
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-saffron/10 via-transparent to-gold/10"
              />
              <div className="absolute top-2 md:top-4 left-2 md:left-4 text-6xl md:text-8xl text-gold/10 font-serif select-none">
                "
              </div>

              {/*<div className="relative z-10 space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90">*/}
			  <div className="relative z-10 space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl leading-8 md:leading-9 text-foreground/90">
                <motion.p variants={fadeInUp}>
                  आता वेळ आली आहे आपली <strong className="text-saffron">एकजूट</strong>, <strong className="text-gold">ताकद</strong> आणि <strong className="text-saffron">बहुमत</strong> प्रत्यक्ष कृतीतून सिद्ध करण्याची। येत्या <strong className="text-gold">१५ जानेवारी २०२६</strong> रोजी होणाऱ्या पुणे व पिंपरी-चिंचवड महानगरपालिका निवडणुकांसाठी आपण सर्वांनी मोठ्या संख्येने सहभागी होणे अत्यंत गरजेचे आहे।
                </motion.p>
                <motion.p variants={fadeInUp}>
                  हा <strong className="text-saffron">जनआंदोलनाचा</strong> आणि <strong className="text-gold">परिवर्तनाचा</strong> लढा आपल्या लाडक्या माजी मंत्री <strong className="text-saffron">मा. श्री संजयजी बनसोडे साहेबांच्या</strong> नेतृत्वाखाली चालू आहे। त्यांच्या सक्षम, दूरदृष्टीपूर्ण आणि लोकाभिमुख नेतृत्वाला अधिक बळ देण्यासाठी, त्यांचा हात मजबूत करणे ही आपली सामूहिक जबाबदारी आहे।
                </motion.p>
                <motion.p variants={fadeInUp}>
                  तसेच <strong className="text-gold">लातूर, परभणी, नांदेड आणि बिदर</strong> परिसरातील सर्व बांधवांनी एकत्र येऊन, पुणे व पिंपरी-चिंचवडमध्ये वास्तव्यास असलेल्या आपल्या लोकांना संघटित करावे, प्रचारात सक्रिय सहभाग घ्यावा आणि या लढ्यात आपली ताकद दाखवून द्यावी।
                </motion.p>
                <motion.p variants={fadeInUp}>
                  चला तर मग, <strong className="text-saffron">मतदार</strong> म्हणूनच नव्हे तर <strong className="text-gold">कार्यकर्ता</strong> म्हणूनही पूर्ण ताकदीने प्रचारात उतरूया, प्रत्येक घरापर्यंत पोहोचूया आणि या निवडणुकीत <strong className="text-saffron">भव्य व निर्णायक विजय</strong> मिळवून देऊया।
                </motion.p>
                <motion.p variants={fadeInUp} className="text-center pt-4 md:pt-6 border-t border-gold/10 mt-6 md:mt-8">
                  <span className="block text-lg md:text-xl text-muted-foreground mb-2">
                    आपली उपस्थिती, आपला सहभाग आणि आपला पाठिंबा—यातूनच विजय निश्चित होणार आहे।
                  </span>
                  <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-gradient-gold mt-3 md:mt-4">
                    एकजूट, उत्साह आणि विश्वास यांच्या बळावर यश निश्चित आहे!
                  </span>
                </motion.p>
              </div>
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-6xl md:text-8xl text-gold/10 font-serif rotate-180 select-none">
                "
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center mt-8 md:mt-10"
            >
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-saffron font-serif"
              >
                जय हिंद! ✊
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 relative" data-testid="section-highlights">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                मोहिमेची वैशिष्ट्ये
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                प्रचार अभियान
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {campaignHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gold/10 hover:border-gold/30 transition-all group"
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-saffron/20 to-gold/10 flex items-center justify-center flex-shrink-0 group-hover:from-saffron/30 group-hover:to-gold/20 transition-all"
                    >
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                    </motion.div>
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-bold mb-2 text-gradient-saffron">
                        {item.title}
                      </h3>
                      
					  {/*<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
				  <p className="text-muted-foreground text-sm md:text-base leading-8 md:leading-9">
					<p className="text-muted-foreground text-sm md:text-base leading-9 md:leading-10 mt-2 md:mt-3">*/}
					<p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2 md:mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="vision" className="py-16 md:py-24 relative" data-testid="section-vision">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                विकासाची दिशा
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                आमची दृष्टी व संकल्प
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {visionPoints.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 border border-gold/10 hover:border-gold/30 transition-all text-center group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,140,0,0.05), rgba(255,200,50,0.05))`,
                    }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 relative z-10`}
                  >
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-lg md:text-xl font-bold mb-2 md:mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground relative z-10">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 relative" data-testid="section-gallery">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                छायाचित्र संग्रह
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                फोटो गॅलरी
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                variants={fadeInLeft}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl md:rounded-3xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all"
              >
                <motion.img
                  src={sanjayBansodeImage}
                  alt="मा. श्री संजयजी बनसोडे"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-top"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  data-testid="gallery-img-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6"
                >
                  <span className="text-gold text-xs md:text-sm font-medium">स्टार प्रचारक</span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-1">
                    मा. श्री संजयजी बनसोडे
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">आमदार, महाराष्ट्र राज्य (माजी मंत्री)</p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl md:rounded-3xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all"
              >
                <motion.img
                  src={ajitPawarImage}
                  alt="मा. श्री अजितदादा पवार"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-top"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  data-testid="gallery-img-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6"
                >
                  <span className="text-gold text-xs md:text-sm font-medium">मार्गदर्शक नेतृत्व</span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-1">
                    मा. श्री अजितदादा पवार
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">उपमुख्यमंत्री, महाराष्ट्र राज्य</p>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 relative" data-testid="section-regions">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-saffron/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                आव्हान क्षेत्रे
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                सहभागी परिसर
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
                लातूर, परभणी, नांदेड आणि बिदर परिसरातील सर्व बांधवांचे एकजूटीने प्रचारात योगदान
              </p>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full mt-4 md:mt-6" />
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {participatingRegions.map((region, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gold/10 hover:border-gold/40 transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-7 h-7 md:w-10 md:h-10 text-gold mx-auto mb-2 md:mb-3 group-hover:text-saffron transition-colors" />
                  </motion.div>
                  <p className="font-serif text-lg md:text-xl font-bold text-gradient-saffron">{region.name}</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2 hidden sm:block">{region.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 relative" data-testid="section-contact">
        <div className="absolute inset-0 bg-gradient-to-t from-saffron/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-10 md:mb-12">
              <motion.span 
                className="inline-block text-gold text-sm md:text-base font-medium mb-3 md:mb-4"
                variants={fadeInUp}
              >
                संवाद साधा
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
                संपर्क
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-gold/20 text-center"
            >

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
                {[
				  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1HMwoubkJb/" },
                  { icon: Twitter, label: "Twitter", href: "https://x.com/BansodeSpeaks" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bansodespeaks?igsh=M3hsamJsMTU1Z3Rn" },
                  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@sanjaybansodencp?si=dUokE-FteLsrvQTG" },
                
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -5, boxShadow: "0 0 30px rgba(255,200,50,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white shadow-lg transition-all"
                    data-testid={`social-${social.label.toLowerCase()}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.a>
                ))}
              </div>

<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-muted-foreground text-sm md:text-base">
  {/* Contact 1 */}
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 bg-card/50 p-3 rounded-xl border border-gold/20"
  >
  
	<div className="flex flex-col items-center text-center font-extrabold items-center justify-center">
      <span className="text-base md:text-lg font-bold">
        Kapil Waichalkar
      </span>
	  <span className="flex items-center gap-1 font-semibold text-sm md:text-base">
        <Phone className="w-4 h-4 text-gold font-bold" />
           +91 99703 10544
        </span>   
      <br></br>  
      <span className="font-medium text-xl sm:text-xl md:text-2xl lg:text-4xl" >उदगीर मित्र मंडळ</span>
    </div>
	
	
  </motion.div>
  <br></br>
  <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">जनआंदोलनात सहभागी व्हा आणि विजयाचे साक्षीदार बना</p>
</div>

            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-6 md:py-8 border-t border-gold/10" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div 
              className="flex items-center gap-2 md:gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white font-bold font-serif text-xs md:text-sm">
                ©
              </div>
              <span className="text-2xl md:text-sm text-muted-foreground font-bold">
                © 2026 DHIPAN Software Technologies Private Limited | All Rights Reserved | info@dhipansoft.in
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            > 
			  <span className="text-2xl md:text-sm text-muted-foreground font-bold">
                उदगीर मित्र मंडळ </span>
              <span className="text-gold text-2xl md:text-sm md:text-lg text-muted-foreground font-extrabold" >✊</span>
            </motion.div>
          </div>
        </div>
      </footer>

      <motion.div 
        className="fixed bottom-0 left-0 right-0 h-1 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="h-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
      </motion.div>
    </div>
  );
}
