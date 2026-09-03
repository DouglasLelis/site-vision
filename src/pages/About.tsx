import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaChartLine, FaPrayingHands, FaCode, FaPalette } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vision-purple to-vision-pink text-white mt-[88px]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("aboutPage.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl font-light">
              {t("aboutPage.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <Trans i18nKey="aboutPage.intro.p1">
                Desde 2015, a <span className="font-bold text-vision-purple">VisionTaubaté</span> une criatividade, tecnologia e valores cristãos para impulsionar negócios e transformar ideias em soluções reais. Começamos nossa história no segmento de comunicação visual, ajudando empresas a se destacarem com identidade e presença de marca.
              </Trans>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <Trans i18nKey="aboutPage.intro.p2">
                Mas foi em 2019, com a entrada no desenvolvimento de sistemas e aplicativos, que ampliamos nosso propósito: <span className="font-bold text-vision-pink">usar a tecnologia para gerar impacto e transformação.</span>
              </Trans>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <Trans i18nKey="aboutPage.intro.p3">
                Mais do que entregar projetos, queremos <span className="font-bold text-vision-purple">fazer parte da evolução dos nossos clientes</span>. Por isso, colocamos Deus à frente de tudo que fazemos e conduzimos nosso trabalho com ética, excelência e um verdadeiro espírito de serviço.
              </Trans>
            </p>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            {t("aboutPage.values.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vision-purple/10 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl text-vision-purple" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-vision-purple">{t("aboutPage.values.items.0.title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("aboutPage.values.items.0.description")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vision-pink/10 rounded-full flex items-center justify-center mb-6">
                <FaPrayingHands className="text-3xl text-vision-pink" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-vision-pink">{t("aboutPage.values.items.1.title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("aboutPage.values.items.1.description")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vision-orange/10 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-3xl text-vision-orange" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-vision-orange">{t("aboutPage.values.items.2.title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("aboutPage.values.items.2.description")}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            {t("aboutPage.services.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-vision-purple to-vision-pink p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <FaCode className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t("aboutPage.services.items.0.title")}</h3>
              <p className="leading-relaxed">
                {t("aboutPage.services.items.0.description")}
              </p>
            </div>
            <div className="bg-gradient-to-br from-vision-orange to-vision-teal p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <FaPalette className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t("aboutPage.services.items.1.title")}</h3>
              <p className="leading-relaxed">
                {t("aboutPage.services.items.1.description")}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              {t("aboutPage.team.title")}
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              <Trans i18nKey="aboutPage.team.text">
                Somos uma equipe multidisciplinar apaixonada por inovação — de designers e desenvolvedores a consultores estratégicos. Cada projeto é tratado com atenção aos detalhes, porque <span className="font-bold text-vision-purple">sabemos que por trás de cada ideia há pessoas, histórias e sonhos.</span>
              </Trans>
            </p>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-vision-purple to-vision-pink rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-8">
              {t("aboutPage.vision.title")}
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              <Trans i18nKey="aboutPage.vision.text">
                Queremos ser cada vez mais uma <span className="font-bold">referência em tecnologia e comunicação visual no Brasil</span>, entregando soluções que unam eficiência, criatividade e valores sólidos.
              </Trans>
            </p>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-xl italic">
                {t("aboutPage.vision.quote")}
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default About;