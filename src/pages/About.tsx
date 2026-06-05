import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaChartLine, FaPrayingHands, FaCode, FaPalette } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const About = () => {
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
              Sobre a VisionTaubaté
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Tecnologia com Visão, Inovação com Propósito
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
              Desde 2015, a <span className="font-bold text-vision-purple">VisionTaubaté</span> une criatividade, tecnologia e valores cristãos para impulsionar negócios e transformar ideias em soluções reais. Começamos nossa história no segmento de comunicação visual, ajudando empresas a se destacarem com identidade e presença de marca.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mas foi em 2019, com a entrada no desenvolvimento de sistemas e aplicativos, que ampliamos nosso propósito: <span className="font-bold text-vision-pink">usar a tecnologia para gerar impacto e transformação.</span>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mais do que entregar projetos, queremos <span className="font-bold text-vision-purple">fazer parte da evolução dos nossos clientes</span>. Por isso, colocamos Deus à frente de tudo que fazemos e conduzimos nosso trabalho com ética, excelência e um verdadeiro espírito de serviço.
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
            O Que Nos Move
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vision-purple/10 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl text-vision-purple" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-vision-purple">Inovação</h3>
              <p className="text-gray-600 leading-relaxed">
                Metodologias ágeis e tecnologias de ponta para entregar soluções modernas e eficientes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vision-pink/10 rounded-full flex items-center justify-center mb-6">
                <FaPrayingHands className="text-3xl text-vision-pink" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-vision-pink">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Princípios cristãos que orientam um atendimento próximo, ético e transparente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vision-orange/10 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-3xl text-vision-orange" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-vision-orange">Propósito</h3>
              <p className="text-gray-600 leading-relaxed">
                Paixão por resolver desafios com criatividade e propósito, gerando impacto real.
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
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-vision-purple to-vision-pink p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <FaCode className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Desenvolvimento de Software</h3>
              <p className="leading-relaxed">
                Soluções personalizadas que impulsionam o crescimento do seu negócio através da tecnologia.
              </p>
            </div>
            <div className="bg-gradient-to-br from-vision-orange to-vision-teal p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <FaPalette className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Comunicação Visual</h3>
              <p className="leading-relaxed">
                Design e identidade visual que contam a história da sua marca de forma impactante.
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
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Somos uma equipe multidisciplinar apaixonada por inovação — de designers e desenvolvedores a consultores estratégicos. Cada projeto é tratado com atenção aos detalhes, porque <span className="font-bold text-vision-purple">sabemos que por trás de cada ideia há pessoas, histórias e sonhos.</span>
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
              Visão de Futuro
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Queremos ser cada vez mais uma <span className="font-bold">referência em tecnologia e comunicação visual no Brasil</span>, entregando soluções que unam eficiência, criatividade e valores sólidos.
            </p>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-xl italic">
                "Mais do que uma empresa, somos uma missão. Tecnologia com valores, inovação com alma."
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