import React, { useState, useEffect } from 'react';
import { ChevronUp, Globe, Mail, Linkedin, MessageCircle } from 'lucide-react';
import './App.css';
import LogoFundoBranco from './assets/LogoFundoBranco-oficial.png';
import LogoFundoColorido from './assets/LogoFundoColorido.png';
import QuemSomosImage from './assets/quem-somos-real.png';
import ComoTrabalhamosImage from './assets/como-trabalhamos-real.png';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Header fixo - Exatamente como no PPT */}
      <header className="header-fixed">
        <div className="header-content">
          <img src={LogoFundoColorido} alt="Právia" className="header-logo-img" />
          <nav className="nav-menu">
            <button onClick={() => scrollToSection('inicio')} className="nav-button">Início</button>
            <button onClick={() => scrollToSection('quem-somos')} className="nav-button">Quem Somos</button>
            <button onClick={() => scrollToSection('o-que-fazemos')} className="nav-button">O Que Fazemos</button>
            <button onClick={() => scrollToSection('como-trabalhamos')} className="nav-button">Como Trabalhamos</button>
            <button onClick={() => scrollToSection('contato')} className="nav-button">Contato</button>
          </nav>
        </div>
      </header>

      {/* Seção 1: Início - Fundo cinza claro como no PPT */}
      <section id="inicio" className="section-inicio">
        <div className="container">
          <div className="inicio-content">
            <img src={LogoFundoBranco} alt="Právia" className="inicio-logo" />
            <p className="inicio-tagline">
              Resolvemos problemas complexos com <strong>profundidade, criatividade e verdade</strong>
            </p>
            <button className="btn-converse" onClick={() => scrollToSection('contato')}>
              Converse Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Seção 2: Quem Somos - Fundo azul como no PPT */}
      <section id="quem-somos" className="section-quem-somos">
        <div className="container">
          <div className="quem-somos-content">
            <div className="quem-somos-text">
              <h2>QUEM SOMOS</h2>
              <p>
                <strong>PRÁVIA</strong> é uma consultoria de negócios <strong>especializada em gerar resultados concretos e mensuráveis.</strong>
              </p>
              <p>
                Somos movidos por desafios, ajudamos empresas a destravar seu potencial, dando clareza para o caminho a ser percorrido com soluções práticas e exequíveis, indo além de teorias e apresentações.
              </p>
              <p>
                Trabalhamos lado-a-lado com nossos clientes, integrando equipes, ensinando, capacitando e criando conexões reais, com projetos personalizados e corresponsabilização pela entrega dos objetivos acordados.
              </p>
            </div>
            <div className="quem-somos-image">
              <img src={QuemSomosImage} alt="Blocos de construção" className="quem-somos-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Origem do Nome - Exatamente como no PPT */}
      <section className="section-origem-nome">
        <div className="container">
          <h2 className="origem-titulo">O NOME TEM ORIGEM NA JUNÇÃO DE:</h2>
          <div className="origem-main">
            <div className="origem-words">
              <div className="origem-left-word">
                <div className="origem-word-big">PRA</div>
                <div className="origem-pronunciation">prag·má·ti·co</div>
                <div className="origem-definitions-left">
                  <p><strong>1.</strong> que tem como foco o bom êxito da ação; eficiente, objetivo, prático.</p>
                  <p><strong>2.</strong> que trata dos fenômenos históricos, enfocando suas causas, condições, antecedentes e resultados.</p>
                </div>
              </div>
              
              <div className="origem-plus-center">+</div>
              
              <div className="origem-right-word">
                <div className="origem-word-big">VIA</div>
                <div className="origem-pronunciation">via ; di·re·ção</div>
                <div className="origem-definitions-right">
                  <p><strong>1.</strong> orientação do caminho a seguir para chegar a algum lugar.</p>
                  <p><strong>2.</strong> direção que alguém ou algo toma ao se deslocar ou se desenvolver; rumo, trajetória.</p>
                  <p><strong>3.</strong> caminho ou estrada por onde se vai de um ponto a outro.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="origem-fonte">Fonte: Michaelis</div>
        </div>
      </section>

      {/* Seção 4: O Que Fazemos - Layout exato do PPT */}
      <section id="o-que-fazemos" className="section-o-que-fazemos">
        <div className="container">
          <h2>O QUE FAZEMOS</h2>
          <h3>DA ESTRATÉGIA AO RESULTADO</h3>
          <p className="fazemos-intro">
            A PRÁVIA oferece <strong>soluções integradas e personalizadas</strong> em <strong>cinco grandes territórios de atuação</strong>, sempre com foco em <strong>transformar desafios em resultados concretos.</strong>
          </p>
          
          <div className="territorios-grid">
            <div className="territorio-card">
              <div className="territorio-header">
                <h4>Estratégia & Design de Negócio</h4>
              </div>
              <div className="territorio-content">
                <p>_ Desenho de estratégia</p>
                <p>_ Desdobramento da estratégia</p>
                <p>_ Modelagem de negócios</p>
              </div>
            </div>

            <div className="territorio-card">
              <div className="territorio-header">
                <h4>Ganhos Eficiência & Produtividade</h4>
              </div>
              <div className="territorio-content">
                <p>_ Melhoria de Processos</p>
                <p>_ Produtividade e Eficiência</p>
                <p>_ Aceleração de vendas</p>
                <p>_ Centralidade no cliente</p>
                <p>_ Go To Market</p>
                <p>_ Performance Comercial</p>
                <p>_ S&OP</p>
                <p>_ Data Analytics</p>
              </div>
            </div>

            <div className="territorio-card">
              <div className="territorio-header">
                <h4>Novas Alavancas de Crescimento</h4>
              </div>
              <div className="territorio-content">
                <p>_ Novos negócios</p>
                <p>_ Integração Negócio eTecnologia</p>
                <p>_ Frameworks e Pipeline de Inovação</p>
                <p>_ Roadmaps digitais</p>
              </div>
            </div>

            <div className="territorio-card">
              <div className="territorio-header">
                <h4>Desenvolvimento de Pessoas</h4>
              </div>
              <div className="territorio-content">
                <p>_ Cultura Organizacional</p>
                <p>_ Preparação de Liderança</p>
                <p>_ Desenvolvimento de Pessoas</p>
                <p>_ Avaliação de desempenho</p>
                <p>_ Clima Organizacional</p>
                <p>_ Gestão da Mudança</p>
                <p>_ Reestruturação Organizacional</p>
              </div>
            </div>

            <div className="territorio-card">
              <div className="territorio-header">
                <h4>Excelência de Execução</h4>
              </div>
              <div className="territorio-content">
                <p>_ Agilidade</p>
                <p>_ Governança</p>
                <p>_ PMO/Gestão Projeto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Como Trabalhamos - Imagem real do PPT */}
      <section id="como-trabalhamos" className="section-como-trabalhamos">
        <div className="container">
          <div className="como-trabalhamos-content">
            <div className="como-trabalhamos-image">
              <img src={ComoTrabalhamosImage} alt="Equipe trabalhando" className="como-trabalhamos-img" />
            </div>
            <div className="como-trabalhamos-text">
              <h2>COMO TRABALHAMOS</h2>
              
              <div className="metodologia-item">
                <h3>Abordagem Precisa</h3>
                <p>Cada caso é um caso, por isso nossos projetos <strong>são personalizados, com foco multidisciplinar e muita abertura e diálogo</strong> com os times especialistas.</p>
              </div>

              <div className="metodologia-item">
                <h3>Parceria Verdadeira</h3>
                <p>Acreditamos no poder de <strong>"fazermos juntos"</strong>, promovendo maior <strong>disseminação do conhecimento</strong> e geração de <strong>resultados duradouros.</strong></p>
              </div>

              <div className="metodologia-item">
                <h3>Orientada a Resultados</h3>
                <p><strong>Nosso compromisso é com o resultado!</strong> E temos tanta confiança nisso que adotamos formalmente critérios de <strong>corresponsabilização</strong> em nossos projetos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Contato - Exatamente como no PPT */}
      <section id="contato" className="section-contato">
        <div className="container">
          <div className="contato-content">
            <div className="contato-text">
              <h2>VAMOS CONVERSAR?</h2>
              <p>Entre em contato conosco e descubra como sua empresa pode alcançar resultados extraordinários.</p>
            </div>
            <div className="contato-info">
              <div className="contato-item">
                <Globe className="contato-icon" />
                <span>pravia.com.br</span>
              </div>
              <div className="contato-item">
                <Mail className="contato-icon" />
                <span>contato@pravia.com.br</span>
              </div>
              <div className="contato-item">
                <Linkedin className="contato-icon" />
                <span>linkedin.com/company/pravia-consultoria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão WhatsApp flutuante */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Botão Scroll to Top */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top" title="Voltar ao topo">
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
