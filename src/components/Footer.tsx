import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
const favicon = "/lovable-uploads/favicon.png";
import { segmentPaths } from "@/data/segmentBranding";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <Link
                to={segmentPaths.gateway}
                className="text-2xl font-bold flex flex-row items-end gap-2"
              >
                <img src={favicon} alt="VisionTaubaté Logo" className="h-10" />{" "}
                VisionTaubaté
              </Link>
            </div>
            <p className="text-gray-300 mb-6">
              Transformando ideias em soluções digitais inovadoras para
              impulsionar o crescimento do seu negócio.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-vision-300 hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp size={16} />
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Segmentos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to={segmentPaths.tech}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  VisionTaubaté Tech
                </Link>
              </li>
              <li>
                <Link
                  to={segmentPaths.design}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Comunicação Visual
                </Link>
              </li>
              <li>
                <Link
                  to={segmentPaths.sobre}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  to={segmentPaths.metodologia}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Metodologia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Soluções SaaS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to={segmentPaths.techSolucoes}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Soluções para seu negócio
                </Link>
              </li>
              <li>
                <Link
                  to={`${segmentPaths.techSolucoes}#ativabot`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ativabot (CRM)
                </Link>
              </li>
              <li>
                <Link
                  to={`${segmentPaths.techSolucoes}#ativaerp`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AtivaERP
                </Link>
              </li>
              <li>
                <Link
                  to={`${segmentPaths.techSolucoes}#petverse`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  PetVerse
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Rua Alemanha, 21 - Jardim das Nações,
                <br />
                Taubaté/SP CEP 12030-430
              </p>
              <p className="text-gray-300">
                comercial@visiontaubate.com.br
                <br />
                +55 (12) 99785-6012 | (12) 98199-9857
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VisionTaubaté. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
