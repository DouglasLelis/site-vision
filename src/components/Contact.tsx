
import { useState, useRef, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-10 w-10 text-vision-600" />,
      title: 'Email',
      content: 'comercial@visiontaubate.com.br',
      href: 'mailto:comercial@visiontaubate.com.br'
    },
    {
      icon: <FaWhatsapp className="h-10 w-10 text-vision-600" />,
      title: 'WhatsApp - Gráfica',
      content: '+55 (12) 981999857',
      href: 'https://api.whatsapp.com/send/?phone=5512981999857&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:'
    },
    {
      icon: <FaWhatsapp className="h-10 w-10 text-vision-600" />,
      title: 'WhatsApp - Central T.i',
      content: '+55 (12) 997856012',
      href: 'https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:'
    }
  ];

  return (
    <div id="contact" ref={sectionRef} className="py-24 bg-white opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-header">Entre em Contato</h2>
          <p className="section-subheader">
            Estamos prontos para transformar sua ideia em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-8">
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.href}
                className="block group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-vision-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-vision-50 rounded-lg transition-colors group-hover:bg-vision-100">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-vision-900 mb-1">{method.title}</h3>
                      <p className="text-gray-600">{method.content}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-vision-900 mb-6">Envie-nos uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-500 focus:border-vision-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-500 focus:border-vision-500 transition-colors"
                  placeholder="seu-email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-500 focus:border-vision-500 transition-colors"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center"
              >
                {loading ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
