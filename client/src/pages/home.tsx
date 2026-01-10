import { motion, useScroll, useTransform } from "framer-motion";
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
  ExternalLink,
} from "lucide-react";
import leaderImage from "@assets/images_(4)_1768026471036.jpeg";
import supporterImage from "@assets/images_1768026479280.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-0" />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-saffron/10 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-gold/5 to-transparent opacity-40" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 tricolor-top">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-dark px-4 md:px-8 py-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white font-bold font-serif">
                स
              </div>
              <span className="text-lg md:text-xl font-semibold text-gradient-gold">
                जनआंदोलन 2025
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="hover:text-saffron transition-colors" data-testid="nav-about">
                परिचय
              </a>
              <a href="#vision" className="hover:text-saffron transition-colors" data-testid="nav-vision">
                दृष्टिकोन
              </a>
              <a href="#message" className="hover:text-saffron transition-colors" data-testid="nav-message">
                संदेश
              </a>
              <a href="#gallery" className="hover:text-saffron transition-colors" data-testid="nav-gallery">
                गॅलरी
              </a>
              <a href="#contact" className="hover:text-saffron transition-colors" data-testid="nav-contact">
                संपर्क
              </a>
            </div>
          </div>
        </motion.nav>
      </header>

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        data-testid="section-hero"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-saffron/20 via-gold/10 to-transparent blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block mb-6 px-4 py-2 rounded-full glass border border-gold/30"
              >
                <span className="text-gold text-sm font-medium">
                  १५ जानेवारी २०२५ | पुणे व पिंपरी-चिंचवड
                </span>
              </motion.div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="block text-foreground">माजी मंत्री</span>
                <span className="block text-gradient-saffron mt-2">
                  मा. श्री संजयजी
                </span>
                <span className="block text-gradient-gold">बनसोडे</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                सक्षम, दूरदृष्टीपूर्ण आणि लोकाभिमुख नेतृत्व
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#message"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-saffron to-gold text-white font-semibold rounded-xl shadow-lg glow-saffron transition-all"
                  data-testid="btn-read-message"
                >
                  संदेश वाचा
                </motion.a>
                <motion.a
                  href="#video"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass border border-gold/30 font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gold/10 transition-all"
                  data-testid="btn-watch-video"
                >
                  <Play className="w-5 h-5 text-gold" />
                  व्हिडिओ पहा
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-saffron/30 via-gold/20 to-transparent rounded-full blur-3xl scale-110 animate-pulse-slow" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold/40 glow-gold">
                  <img
                    src={leaderImage}
                    alt="मा. श्री संजयजी बनसोडे"
                    className="w-full h-full object-cover object-top"
                    data-testid="img-leader"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-dashed border-gold/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gold/60" />
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="py-20 relative" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Target,
                title: "दृष्टिकोन",
                desc: "लोकाभिमुख विकासाच्या दिशेने निर्णायक पाऊल",
              },
              {
                icon: Award,
                title: "अनुभव",
                desc: "माजी मंत्री म्हणून सिद्ध नेतृत्व कौशल्य",
              },
              {
                icon: Heart,
                title: "समर्पण",
                desc: "जनतेच्या सेवेसाठी अखंड वचनबद्धता",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron/20 to-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-gradient-gold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="message" className="py-20 relative" data-testid="section-message">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-saffron/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
                जनआंदोलनाचा संदेश
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass rounded-3xl p-8 md:p-12 border border-gold/20 relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 text-8xl text-gold/10 font-serif">
                "
              </div>
              <div className="relative z-10 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
                <p>
                  आता वेळ आली आहे आपली एकजूट, ताकद आणि बहुमत प्रत्यक्ष कृतीतून सिद्ध
                  करण्याची. येत्या <strong className="text-gold">१५ जानेवारी २०२५</strong> रोजी होणाऱ्या
                  पुणे व पिंपरी-चिंचवड महानगरपालिका निवडणुकांसाठी आपण सर्वांनी
                  मोठ्या संख्येने सहभागी होणे अत्यंत गरजेचे आहे.
                </p>
                <p>
                  हा जनआंदोलनाचा आणि परिवर्तनाचा लढा आपल्या लाडक्या माजी मंत्री
                  <strong className="text-saffron"> मा. श्री संजयजी बनसोडे साहेबांच्या</strong> नेतृत्वाखाली
                  चालू आहे. त्यांच्या सक्षम, दूरदृष्टीपूर्ण आणि लोकाभिमुख
                  नेतृत्वाला अधिक बळ देण्यासाठी, त्यांचा हात मजबूत करणे ही आपली
                  सामूहिक जबाबदारी आहे.
                </p>
                <p>
                  तसेच लातूर, परभणी, नांदेड आणि बिदर परिसरातील सर्व बांधवांनी
                  एकत्र येऊन, पुणे व पिंपरी-चिंचवडमध्ये वास्तव्यास असलेल्या
                  आपल्या लोकांना संघटित करावे, प्रचारात सक्रिय सहभाग घ्यावा आणि
                  या लढ्यात आपली ताकद दाखवून द्यावी.
                </p>
                <p>
                  चला तर मग, मतदार म्हणूनच नव्हे तर कार्यकर्ता म्हणूनही पूर्ण
                  ताकदीने प्रचारात उतरूया, प्रत्येक घरापर्यंत पोहोचूया आणि या
                  निवडणुकीत भव्य व निर्णायक विजय मिळवून देऊया.
                </p>
                <p className="text-center font-semibold text-gold text-xl md:text-2xl pt-4">
                  एकजूट, उत्साह आणि विश्वास यांच्या बळावर यश निश्चित आहे!
                </p>
              </div>
              <div className="absolute bottom-4 right-4 text-8xl text-gold/10 font-serif rotate-180">
                "
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center mt-8"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient-saffron font-serif">
                जय हिंद! ✊
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="py-20 relative" data-testid="section-vision">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
                आमची दृष्टी
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "सामाजिक न्याय",
                  desc: "समाजातील सर्व घटकांना समान संधी आणि न्याय",
                },
                {
                  icon: Target,
                  title: "विकास",
                  desc: "शाश्वत आणि समतोल प्रादेशिक विकास",
                },
                {
                  icon: Award,
                  title: "रोजगार",
                  desc: "युवकांसाठी रोजगाराच्या नव्या संधी",
                },
                {
                  icon: Heart,
                  title: "कल्याण",
                  desc: "महिला, शेतकरी आणि मजूर वर्गाचे कल्याण",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-card rounded-2xl p-6 border border-gold/10 hover:border-gold/30 transition-all text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-election">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 via-transparent to-gold/10" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
                निवडणूक माहिती
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="glass rounded-3xl p-8 border border-gold/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">निवडणूक तारीख</h3>
                    <p className="text-muted-foreground">महत्त्वाची तारीख</p>
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient-saffron font-serif">
                  १५ जानेवारी २०२५
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="glass rounded-3xl p-8 border border-gold/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">क्षेत्र</h3>
                    <p className="text-muted-foreground">निवडणूक क्षेत्र</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-gold">पुणे महानगरपालिका</p>
                  <p className="text-xl font-semibold text-saffron">
                    पिंपरी-चिंचवड महानगरपालिका
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="video" className="py-20 relative" data-testid="section-video">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
                व्हिडिओ संग्रह
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative aspect-video rounded-3xl overflow-hidden border border-gold/20 glow-gold"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Campaign Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-muted-foreground mt-6"
            >
              प्रचार व्हिडिओ - आमची दृष्टी आणि संकल्प
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-20 relative" data-testid="section-gallery">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
                फोटो गॅलरी
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-3xl overflow-hidden border border-gold/20"
              >
                <img
                  src={leaderImage}
                  alt="मा. श्री संजयजी बनसोडे"
                  className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  data-testid="gallery-img-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-xl font-bold text-white">
                    मा. श्री संजयजी बनसोडे
                  </h3>
                  <p className="text-white/70 text-sm">माजी मंत्री</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-3xl overflow-hidden border border-gold/20"
              >
                <img
                  src={supporterImage}
                  alt="कार्यकर्ता"
                  className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  data-testid="gallery-img-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-xl font-bold text-white">
                    समर्थक
                  </h3>
                  <p className="text-white/70 text-sm">जनआंदोलन कार्यकर्ता</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-regions">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
                सहभागी क्षेत्रे
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                लातूर, परभणी, नांदेड आणि बिदर परिसरातील सर्व बांधवांचा सहभाग
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full mt-4" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["लातूर", "परभणी", "नांदेड", "बिदर"].map((region, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center border border-gold/10 hover:border-gold/40 transition-all"
                >
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-serif text-lg font-semibold">{region}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 relative" data-testid="section-contact">
        <div className="absolute inset-0 bg-gradient-to-t from-saffron/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
                संपर्क
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass rounded-3xl p-8 md:p-12 border border-gold/20 text-center"
            >
              <p className="text-lg text-muted-foreground mb-8">
                आमच्याशी संपर्क साधा आणि जनआंदोलनात सहभागी व्हा
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {[
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Youtube, label: "YouTube", href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white shadow-lg hover:glow-gold transition-all"
                    data-testid={`social-${social.label.toLowerCase()}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-gold" />
                  <span>contact@example.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-gold/10" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white font-bold font-serif text-sm">
                स
              </div>
              <span className="text-sm text-muted-foreground">
                © 2025 जनआंदोलन | सर्व हक्क राखीव
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>एकजूट, उत्साह आणि विश्वास</span>
              <span className="text-gold">✊</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 h-1 z-50">
        <div className="h-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
      </div>
    </div>
  );
}
