import Script from "next/script";
import { Counter } from "./components/Counter";

const whatsappUrl =
  "https://wa.me/5584988047809?text=Ol%C3%A1%2C%20Levi.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

const instagramReels = [
  {
    project: "Arquivo Intelectual Brasileiro",
    result: "+100 mil visualizações",
    url: "https://www.instagram.com/reel/DX7lscjBIRb/",
    tone: "Conteúdo cultural",
  },
  {
    project: "Takanimes",
    result: "2,9 milhões de visualizações",
    url: "https://www.instagram.com/reel/DQXxYQNEdHn/",
    tone: "Público jovem",
  },
  {
    project: "Takanimes",
    result: "4,2 milhões de visualizações",
    url: "https://www.instagram.com/reel/DIuRGW4yMnq/",
    tone: "Público jovem",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ReelEmbed({
  project,
  result,
  url,
  tone,
}: (typeof instagramReels)[number]) {
  return (
    <article className="reel-card">
      <div className="reel-heading">
        <div>
          <p>{tone}</p>
          <h3>{project}</h3>
        </div>
        <strong>{result}</strong>
      </div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      >
        <a href={url} target="_blank" rel="noreferrer">
          Assistir ao vídeo no Instagram <Arrow />
        </a>
      </blockquote>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Levi Ferreira, início">
          LEVI FERREIRA
        </a>
        <div className="header-context" aria-label="Localização e modalidade">
          <span>Natal — RN</span>
          <span className="status-dot" />
          <span>Disponível para trabalho remoto</span>
        </div>
        <a
          className="header-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Falar no WhatsApp <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">PORTFÓLIO PROFISSIONAL · 2026</p>
            <p className="pioneer-badge">
              Primeiro no Brasil a restaurar a obra gravada de Mário Ferreira
              dos Santos
            </p>
            <h1>
              Conteúdo que vira <em>audiência.</em>
              <br />
              Projetos que viram <em>resultado.</em>
            </h1>
            <p className="hero-intro">
              Sou Levi Ferreira. Transformei um trabalho pioneiro de
              preservação cultural em um ecossistema de conteúdo, audiência,
              newsletter, produtos e páginas próprias — executando cada etapa.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Vamos conversar <Arrow />
              </a>
              <p>
                Trabalho com autonomia.
                <br />
                Colaboro bem em equipe.
              </p>
            </div>
          </div>

          <div className="hero-proof" aria-label="Amostra de trabalhos reais">
            <div className="proof-label">
              <span>TRABALHO REAL</span>
              <span>RESULTADOS VERIFICÁVEIS</span>
            </div>
            <figure className="proof-profile">
              <img
                src="/work/arquivo-profile.png"
                alt="Perfil do Arquivo Intelectual Brasileiro com 64,2 mil seguidores"
                width="760"
                height="250"
              />
            </figure>
            <div className="proof-grid">
              <figure className="proof-page">
                <img
                  src="/work/formacao-landing-page.png"
                  alt="Landing page da Formação Básica na Vida e Obra de Mário Ferreira dos Santos"
                  width="1391"
                  height="934"
                />
                <figcaption>
                  <span>Landing page</span>
                  Formação MFS
                </figcaption>
              </figure>
              <figure className="proof-metric">
                <img
                  src="/work/arquivo-insights-views.png"
                  alt="Painel de desempenho mensal com visualizações e alcance"
                  width="756"
                  height="436"
                />
                <figcaption>
                  <span>Performance</span>
                  Alcance mensal
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="hero-stats" aria-label="Principais resultados">
            <div>
              <strong>
                <Counter value={64.2} decimals={1} suffix=" mil" />
              </strong>
              <span>seguidores no projeto principal</span>
            </div>
            <div>
              <strong>
                <Counter value={1000000} prefix="+" />
              </strong>
              <span>de alcance mensal</span>
            </div>
            <div>
              <strong>
                <Counter value={5559} />
              </strong>
              <span>assinantes na newsletter</span>
            </div>
            <div>
              <strong>
                <Counter value={150} prefix="+" />
              </strong>
              <span>áudios históricos restaurados</span>
            </div>
          </div>
        </section>

        <section className="statement section-shell">
          <p className="section-index">01 — O QUE JÁ ENTREGUEI</p>
          <div>
            <h2>Menos promessa. Mais trabalho publicado.</h2>
            <div className="delivery-grid">
              <article>
                <span>CONTEÚDO</span>
                <strong>3 perfis</strong>
                <p>
                  Um projeto cultural, uma marca para público jovem e uma
                  orientação estratégica.
                </p>
              </article>
              <article>
                <span>DISTRIBUIÇÃO</span>
                <strong>Milhões de views</strong>
                <p>
                  Conteúdos com 4,2 e 2,9 milhões de visualizações na Takanimes.
                </p>
              </article>
              <article>
                <span>PRODUTO DIGITAL</span>
                <strong>Do conceito à venda</strong>
                <p>
                  Oferta, copy, página, organização do produto e publicação.
                </p>
              </article>
              <article>
                <span>CANAL PRÓPRIO</span>
                <strong>5.559 assinantes</strong>
                <p>
                  Newsletter construída e operada no Substack, sem equipe.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="pioneer-section section-shell">
          <div className="pioneer-lead">
            <p className="section-index">02 — PRESERVAÇÃO CULTURAL</p>
            <p className="pioneer-mark">1º</p>
            <h2>
              Primeiro no Brasil a restaurar a obra gravada de Mário Ferreira
              dos Santos.
            </h2>
            <p>
              Localizei, tratei e organizei mais de 150 registros históricos,
              tornando inteligível e acessível um material que circulava com
              ruído, baixa qualidade e pouca organização.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1M2mmiZmfb1RdFSMrwpR5Ue4vrM5_4TXt?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="archive-link"
            >
              Explorar o acervo restaurado <Arrow />
            </a>
          </div>
          <div className="expanded-archive">
            <p className="archive-eyebrow">O TRABALHO NÃO PAROU EM UM NOME</p>
            <article>
              <span>POESIA</span>
              <h3>Bruno Tolentino</h3>
              <p>Obra gravada preservada e preparada para nova circulação.</p>
            </article>
            <article>
              <span>FORMAÇÃO CULTURAL</span>
              <h3>José Monir Nasser</h3>
              <p>Registros restaurados e incorporados ao acervo intelectual.</p>
            </article>
            <article className="corcao-card">
              <span>TEOLOGIA & CULTURA</span>
              <h3>Gustavo Corção</h3>
              <p>
                Quatro gravações raras recuperadas e preservadas digitalmente.
              </p>
              <strong>4 registros raros</strong>
            </article>
          </div>
        </section>

        <section className="audio-proof section-shell" id="audios">
          <div className="audio-proof-heading">
            <p className="section-index">03 — ANTES × DEPOIS</p>
            <div>
              <h2>Não precisa acreditar na descrição. Ouça o resultado.</h2>
              <p>
                Três amostras reais do processo de restauração. Para perceber
                melhor a redução de ruído e o ganho de inteligibilidade, use
                fones de ouvido e compare o mesmo trecho em cada versão.
              </p>
            </div>
          </div>

          <div className="audio-comparisons">
            <article className="audio-case" id="audio-mario">
              <div className="audio-case-title">
                <span>01 · FILOSOFIA</span>
                <h3>Mário Ferreira dos Santos</h3>
                <p>“Filósofos Portugueses”</p>
              </div>
              <div className="audio-players">
                <div className="audio-version original-version">
                  <div className="audio-version-label">
                    <span>ANTES</span>
                    <strong>Gravação original</strong>
                  </div>
                  <iframe
                    src="https://drive.google.com/file/d/1LARLS3OXCEVz6IroyEYbLZdM6wuI_MN1/preview"
                    title="Áudio original de Filósofos Portugueses, por Mário Ferreira dos Santos"
                    loading="lazy"
                    allow="autoplay"
                  />
                  <a
                    href="https://drive.google.com/file/d/1LARLS3OXCEVz6IroyEYbLZdM6wuI_MN1/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir original <Arrow />
                  </a>
                </div>
                <div className="audio-version restored-version">
                  <div className="audio-version-label">
                    <span>DEPOIS</span>
                    <strong>Versão restaurada</strong>
                  </div>
                  <iframe
                    src="https://drive.google.com/file/d/172rHill5Ky_mupW0M7ZCDojgzK-MWfEn/preview"
                    title="Áudio restaurado de Filósofos Portugueses, por Mário Ferreira dos Santos"
                    loading="lazy"
                    allow="autoplay"
                  />
                  <a
                    href="https://drive.google.com/file/d/172rHill5Ky_mupW0M7ZCDojgzK-MWfEn/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir restaurado <Arrow />
                  </a>
                </div>
              </div>
            </article>

            <article className="audio-case" id="audio-bruno">
              <div className="audio-case-title">
                <span>02 · POESIA</span>
                <h3>Bruno Tolentino</h3>
                <p>“A gênese do enigma”</p>
              </div>
              <div className="audio-players">
                <div className="audio-version original-version">
                  <div className="audio-version-label">
                    <span>ANTES</span>
                    <strong>Gravação original</strong>
                  </div>
                  <iframe
                    src="https://drive.google.com/file/d/1xuS5vxeyOd7YBt0KmMxFsA8FSs6i3VCm/preview"
                    title="Áudio original de A gênese do enigma, por Bruno Tolentino"
                    loading="lazy"
                    allow="autoplay"
                  />
                  <a
                    href="https://drive.google.com/file/d/1xuS5vxeyOd7YBt0KmMxFsA8FSs6i3VCm/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir original <Arrow />
                  </a>
                </div>
                <div className="audio-version restored-version">
                  <div className="audio-version-label">
                    <span>DEPOIS</span>
                    <strong>Versão restaurada</strong>
                  </div>
                  <iframe
                    src="https://drive.google.com/file/d/1nqMuq76mtMzsd_dp_6MvDEPmHbC1vGbx/preview"
                    title="Áudio restaurado de A gênese do enigma, por Bruno Tolentino"
                    loading="lazy"
                    allow="autoplay"
                  />
                  <a
                    href="https://drive.google.com/file/d/1nqMuq76mtMzsd_dp_6MvDEPmHbC1vGbx/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir restaurado <Arrow />
                  </a>
                </div>
              </div>
            </article>

            <article className="audio-case" id="audio-gustavo">
              <div className="audio-case-title">
                <span>03 · TEOLOGIA & CULTURA</span>
                <h3>Gustavo Corção</h3>
                <p>“As aflições dos homens e as consolações de Deus”</p>
              </div>
              <div className="audio-players">
                <div className="audio-version original-version">
                  <div className="audio-version-label">
                    <span>ANTES</span>
                    <strong>Fonte original</strong>
                  </div>
                  <iframe
                    className="youtube-source"
                    src="https://www.youtube-nocookie.com/embed/B7J-qXOv_Qc?rel=0&modestbranding=1"
                    title="Fonte original de As aflições dos homens e as consolações de Deus, por Gustavo Corção"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <a
                    href="https://www.youtube.com/watch?v=B7J-qXOv_Qc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir fonte original <Arrow />
                  </a>
                </div>
                <div className="audio-version restored-version">
                  <div className="audio-version-label">
                    <span>DEPOIS</span>
                    <strong>Versão restaurada</strong>
                  </div>
                  <iframe
                    src="https://drive.google.com/file/d/1QL9dfk1rGUJJPw7AZNX1DVK1F2YalD-p/preview"
                    title="Áudio restaurado de As aflições dos homens e as consolações de Deus, por Gustavo Corção"
                    loading="lazy"
                    allow="autoplay"
                  />
                  <a
                    href="https://drive.google.com/file/d/1QL9dfk1rGUJJPw7AZNX1DVK1F2YalD-p/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir restaurado <Arrow />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="featured-case" id="trabalhos">
          <div className="case-sidebar">
            <p className="section-index">04 — PROJETO PRINCIPAL</p>
            <p className="case-number">01</p>
            <h2>Arquivo Intelectual Brasileiro</h2>
            <p>
              Projeto criado para restaurar, organizar e divulgar a obra do
              filósofo Mário Ferreira dos Santos, além de preservar registros
              raros de outros intelectuais brasileiros.
            </p>
            <dl>
              <div>
                <dt>Papel</dt>
                <dd>Fundador e responsável integral</dd>
              </div>
              <div>
                <dt>Período</dt>
                <dd>2024 — presente</dd>
              </div>
              <div>
                <dt>Frentes</dt>
                <dd>Conteúdo, pesquisa, web, produto, newsletter e acervo</dd>
              </div>
            </dl>
            <div className="case-links">
              <a
                href="https://www.instagram.com/arquivointelectualbrasileiro/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <Arrow />
              </a>
              <a
                href="https://arquivointelectualbrasileiro.substack.com/"
                target="_blank"
                rel="noreferrer"
              >
                Newsletter <Arrow />
              </a>
              <a
                href="https://arquivointelectualbrasileiro.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Página de vendas <Arrow />
              </a>
            </div>
          </div>

          <div className="case-content">
            <div className="case-result-grid">
              <div>
                <span>Audiência</span>
                <strong>
                  <Counter value={64285} />
                </strong>
                <p>seguidores no Instagram</p>
              </div>
              <div>
                <span>Distribuição</span>
                <strong>
                  <Counter value={1000000} prefix="+" />
                </strong>
                <p>de alcance mensal</p>
              </div>
              <div>
                <span>Engajamento</span>
                <strong>
                  <Counter value={168716} />
                </strong>
                <p>interações registradas</p>
              </div>
              <div>
                <span>Canal próprio</span>
                <strong>
                  <Counter value={5559} />
                </strong>
                <p>assinantes na newsletter</p>
              </div>
            </div>

            <div className="evidence-grid">
              <figure className="evidence-wide">
                <img
                  src="/work/arquivo-insights-engagement.png"
                  alt="Painel de interações, seguidores e atividade do perfil do Arquivo Intelectual Brasileiro"
                  width="676"
                  height="897"
                />
                <figcaption>
                  Painel de desempenho do projeto
                  <span>Dados reais fornecidos pelo criador</span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/work/newsletter-subscribers.png"
                  alt="Painel do Substack com 5.559 assinantes"
                  width="900"
                  height="558"
                />
                <figcaption>
                  Newsletter construída do zero
                  <a
                    href="https://arquivointelectualbrasileiro.substack.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir newsletter <Arrow />
                  </a>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/work/formacao-landing-page.png"
                  alt="Página da formação sobre Mário Ferreira dos Santos"
                  width="1391"
                  height="934"
                />
                <figcaption>
                  Formação Básica MFS
                  <a
                    href="https://formacaomfs.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir landing page <Arrow />
                  </a>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/work/acervo-sales-page.png"
                  alt="Página de vendas do acervo de Mário Ferreira dos Santos"
                  width="1460"
                  height="950"
                />
                <figcaption>
                  Acervo digital
                  <a
                    href="https://arquivointelectualbrasileiro.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir página de vendas <Arrow />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="scope-strip" aria-label="Escopo do projeto">
              <span>CURADORIA</span>
              <span>RESTAURAÇÃO</span>
              <span>CONTEÚDO</span>
              <span>NEWSLETTER</span>
              <span>PÁGINAS DE VENDA</span>
            </div>
            <a
              className="preservation-note"
              href="https://drive.google.com/drive/folders/1M2mmiZmfb1RdFSMrwpR5Ue4vrM5_4TXt?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <span>PROVA DE TRABALHO</span>
              <p>
                Abra o acervo restaurado e confira diretamente parte do
                resultado deste trabalho.
              </p>
              <Arrow />
            </a>
          </div>
        </section>

        <section className="secondary-cases section-shell">
          <div className="secondary-heading">
            <p className="section-index">05 — OUTROS PROJETOS</p>
            <h2>Adapto a linguagem sem perder a estratégia.</h2>
            <p>
              Os projetos abaixo atendem públicos diferentes. O princípio é o
              mesmo: entender a audiência, comunicar com clareza e construir
              consistência.
            </p>
          </div>

          <div className="project-row takanimes-row">
            <div className="project-profile">
              <div className="project-label">COFUNDADOR E GESTOR</div>
              <img
                src="/work/takanimes-profile.png"
                alt="Perfil da Takanimes com 13,8 mil seguidores"
                width="739"
                height="243"
              />
            </div>
            <div className="project-copy">
              <p className="case-number">02</p>
              <h3>Takanimes</h3>
              <p>
                Projeto produzido para um público jovem interessado em animes,
                memes e cultura japonesa. Aqui, minha atuação demonstra
                flexibilidade de linguagem, leitura de tendências e capacidade
                de criar conteúdo de alto alcance sem misturar essa identidade
                com a comunicação institucional dos demais projetos.
              </p>
              <div className="mini-results">
                <span>
                  <strong>
                    <Counter value={13.8} decimals={1} suffix=" mil" />
                  </strong>{" "}
                  seguidores
                </span>
                <span>
                  <strong>
                    <Counter value={4.2} decimals={1} suffix=" mi" />
                  </strong>{" "}
                  em um único vídeo
                </span>
                <span>
                  <strong>
                    <Counter value={2.9} decimals={1} suffix=" mi" />
                  </strong>{" "}
                  em outro conteúdo
                </span>
              </div>
              <a
                href="https://www.instagram.com/takanimes/"
                target="_blank"
                rel="noreferrer"
              >
                Ver perfil <Arrow />
              </a>
            </div>
          </div>

          <div className="project-row olavocast-row">
            <div className="project-profile">
              <div className="project-label">ORIENTAÇÃO ESTRATÉGICA</div>
              <img
                src="/work/olavocast-profile.png"
                alt="Perfil da OlavoCast com 100 mil seguidores"
                width="817"
                height="268"
              />
            </div>
            <div className="project-copy">
              <p className="case-number">03</p>
              <h3>OlavoCast</h3>
              <p>
                Atuei ativamente na orientação estratégica do projeto. A
                participação é apresentada pelo que de fato foi realizado:
                direcionamento e visão de crescimento, sem atribuir a mim a
                produção dos vídeos publicados pelo perfil.
              </p>
              <div className="mini-results">
                <span>
                  <strong>
                    <Counter value={100} suffix=" mil" />
                  </strong>{" "}
                  seguidores atuais
                </span>
                <span>
                  <strong>Estratégia</strong> como contribuição
                </span>
              </div>
              <a
                href="https://www.instagram.com/olavocast/"
                target="_blank"
                rel="noreferrer"
              >
                Ver perfil <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="reels-section">
          <div className="reels-intro section-shell">
            <p className="section-index">06 — CONTEÚDO EM MOVIMENTO</p>
            <div>
              <h2>Vídeos publicados. Alcance comprovado.</h2>
              <p>
                Três exemplos de execução para públicos distintos. Os conteúdos
                da Takanimes são identificados como comunicação jovem para
                preservar o contexto de cada trabalho.
              </p>
            </div>
          </div>
          <div className="reels-grid">
            {instagramReels.map((reel) => (
              <ReelEmbed key={reel.url} {...reel} />
            ))}
          </div>
        </section>

        <section className="capabilities section-shell" id="competencias">
          <div className="capabilities-heading">
            <p className="section-index">07 — COMPETÊNCIAS COM PROVA</p>
            <h2>O que sei fazer — e onde já provei.</h2>
            <p>
              Cada competência abaixo está ligada a uma entrega visível neste
              portfólio.
            </p>
          </div>
          <div className="capability-list">
            <article>
              <span>01</span>
              <h3>Conteúdo & crescimento</h3>
              <p>
                Estratégia editorial, pesquisa, copy direta, carrosséis,
                stories, Reels, leitura de métricas e adaptação de linguagem.
              </p>
              <div className="capability-proof">
                <b>PROVA</b>
                <span>64,2 mil seguidores e vídeos com milhões de views</span>
              </div>
            </article>
            <article>
              <span>02</span>
              <h3>Web & produtos digitais</h3>
              <p>
                Landing pages, páginas de vendas, blogs, HTML, CSS, JavaScript,
                estrutura de ofertas e publicação de produtos digitais.
              </p>
              <div className="capability-proof">
                <b>PROVA</b>
                <span>Duas páginas públicas mostradas acima</span>
              </div>
            </article>
            <article>
              <span>03</span>
              <h3>Preservação digital</h3>
              <p>
                Restauração básica de áudios antigos, tratamento de PDFs,
                renovação de livros digitalizados e organização de acervos de
                Mário Ferreira dos Santos, Bruno Tolentino, José Monir Nasser e
                Gustavo Corção.
              </p>
              <div className="capability-proof">
                <b>PROVA</b>
                <span>+150 áudios e quatro acervos intelectuais</span>
              </div>
            </article>
            <article>
              <span>04</span>
              <h3>Newsletter & distribuição</h3>
              <p>
                Substack avançado, crescimento de base, planejamento editorial,
                publicação, automação e relacionamento com assinantes.
              </p>
              <div className="capability-proof">
                <b>PROVA</b>
                <span>5.559 assinantes em canal próprio</span>
              </div>
            </article>
            <article>
              <span>05</span>
              <h3>Idiomas & comunicação</h3>
              <p>
                Inglês fluente, tradução e interpretação em tempo real.
                Conhecimentos em francês, espanhol e italiano.
              </p>
              <div className="capability-proof">
                <b>APLICAÇÃO</b>
                <span>Tradução de textos e interpretação em tempo real</span>
              </div>
            </article>
            <article>
              <span>06</span>
              <h3>Edição & design</h3>
              <p>
                Canva intermediário e Premiere Pro básico, com evolução
                contínua em edição de vídeo e produção visual.
              </p>
              <div className="capability-proof">
                <b>APLICAÇÃO</b>
                <span>Carrosséis, stories, Reels e materiais de produto</span>
              </div>
            </article>
          </div>
        </section>

        <section className="tools section-shell">
          <p className="section-index">08 — FERRAMENTAS & FORMAÇÃO</p>
          <div className="tools-layout">
            <div>
              <h2>Aprendizado autônomo aplicado a projetos reais.</h2>
              <p>
                Ensino médio completo. Formação autodidata em marketing,
                idiomas e produção digital, com cursos de HTML, CSS e
                JavaScript pelo Curso em Vídeo.
              </p>
            </div>
            <ul aria-label="Ferramentas e tecnologias">
              <li>
                <span>Avançado</span>Substack
              </li>
              <li>
                <span>Intermediário / avançado</span>HTML · CSS · JavaScript
              </li>
              <li>
                <span>Intermediário</span>Canva
              </li>
              <li>
                <span>Básico</span>Premiere Pro
              </li>
              <li>
                <span>Prática aplicada</span>Áudio · PDF · OCR
              </li>
            </ul>
          </div>
        </section>

        <section className="contact" id="contato">
          <p className="section-index">09 — CONTATO</p>
          <div className="contact-content">
            <p>Tem um projeto, uma vaga ou um problema para resolver?</p>
            <h2>Vamos direto ao ponto.</h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              Falar com Levi no WhatsApp <Arrow />
            </a>
          </div>
          <div className="contact-meta">
            <div>
              <span>E-mail</span>
              <a href="mailto:peshto@proton.me">
                peshto@proton.me
              </a>
            </div>
            <div>
              <span>Localização</span>
              <p>Natal, Rio Grande do Norte</p>
            </div>
            <div>
              <span>Modalidade</span>
              <p>Disponível para trabalho remoto</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Levi Ferreira</p>
        <p>Conteúdo · Web · Preservação digital</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>

      <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </>
  );
}
