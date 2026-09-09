import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Bath, Bone, CalendarCheck, ChevronRight, Clock3, HeartPulse, Hotel, MessageCircle, Quote, ShieldCheck, Sparkles, Stethoscope, Syringe, UserRoundCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter, WhatsAppFloat } from '@/components/site-footer';

const whatsapp = (message: string) => `https://wa.me/5511945461252?text=${encodeURIComponent(message)}`;

const services = [
  { icon: Bath, n:'01', title:'Banho & tosa', text:'Banhos sem pressa, produtos adequados à pele e cortes que respeitam o estilo — e os limites — de cada pet.', action:'Quero agendar banho e tosa para o meu pet.' },
  { icon: Stethoscope, n:'02', title:'Consultas veterinárias', text:'Consulta clínica cuidadosa, com tempo para ouvir a família, observar o pet e explicar cada próximo passo.', action:'Quero marcar uma consulta veterinária para o meu pet.' },
  { icon: Syringe, n:'03', title:'Vacinação', text:'Carteirinha em dia, protocolos individualizados e aplicação tranquila, com muito carinho antes e depois.', action:'Quero verificar e agendar as vacinas do meu pet.' },
  { icon: HeartPulse, n:'04', title:'Cuidado preventivo', text:'Check-ups, orientação nutricional, controle de parasitas e acompanhamento para uma vida longa e confortável.', action:'Quero saber mais sobre o cuidado preventivo da Kortex.' },
  { icon: Hotel, n:'05', title:'Hotel & creche', text:'Rotina com brincadeiras, descanso monitorado, socialização responsável e notícias para matar a saudade.', action:'Quero consultar disponibilidade no hotel ou creche para o meu pet.' },
];

const faqs = [
  ['Preciso agendar o banho e tosa?', 'Sim. Trabalhamos com horários marcados para evitar espera e reduzir o estresse dos animais. Pelo WhatsApp, alinhamos porte, pelagem e necessidades antes da visita.'],
  ['Vocês atendem gatos?', 'Atendemos, sim. Temos horários mais silenciosos, sala preparada e manejo gentil para gatos, tanto na clínica quanto nos cuidados de higiene.'],
  ['Como funciona a adaptação na creche?', 'Todo novo hóspede passa por uma avaliação comportamental e uma experiência curta. A integração é gradual, sempre em grupos compatíveis de porte e energia.'],
  ['Posso acompanhar o atendimento?', 'Na consulta veterinária, a família participa o tempo todo. No banho e tosa, mantemos a área técnica reservada para segurança, mas enviamos notícias e avisamos assim que o pet estiver pronto.'],
  ['A lojinha faz entrega?', 'Nesta demonstração, a equipe confirma pelo WhatsApp a disponibilidade, o endereço e a taxa de entrega para bairros próximos da Vila Madalena.'],
];

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span/> Petshop, clínica & hotel em São Paulo</p>
        <h1 id="hero-title">Cuidado que dá<br/><em>vontade de abanar.</em></h1>
        <p className="hero-lede">Na Kortex, cada focinho tem seu jeito — e recebe um cuidado feito sob medida, com técnica, afeto e uma boa dose de brincadeira.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={whatsapp('Olá, KortexPetShop! Quero agendar o primeiro cuidado do meu pet.')} target="_blank" rel="noreferrer">Agendar um cuidado <ArrowUpRight size={19}/></a>
          <a className="text-link" href="#servicos">Conhecer os serviços <ChevronRight size={17}/></a>
        </div>
        <div className="trust-row"><strong>4,9</strong><span>avaliação das famílias</span><i/><strong>+2.800</strong><span>rabinhos atendidos</span></div>
      </div>
      <div className="hero-art">
        <div className="art-sticker">Cuidado<br/><strong>de verdade</strong></div>
        <Image src="/images/kortex-hero.png" alt="Cachorro caramelo e gato cinza, mascotes da KortexPetShop" fill priority sizes="(max-width: 760px) 100vw, 52vw"/>
        <Sparkles className="scribble" aria-hidden="true"/>
      </div>
    </section>

    <section className="ticker" aria-label="Destaques da Kortex">
      <span>Banhos sem pressa</span><Bone/><span>Consulta com escuta</span><Bone/><span>Diversão monitorada</span><Bone/><span>Carinho de casa</span>
    </section>

    <section id="historia" className="story section-shell">
      <div className="story-art">
        <Image src="/images/kortex-care.png" alt="Profissionais da Kortex cuidando de um cão e um gato" width={1456} height={1088} sizes="(max-width: 760px) 90vw, 48vw"/>
        <div className="year-seal"><strong>desde</strong><b>2018</b><span>em cada história</span></div>
      </div>
      <div className="story-copy">
        <p className="kicker">Nossa história</p>
        <h2>Nasceu de uma ideia simples: <em>cuidar sem atropelar.</em></h2>
        <p>A Kortex começou quando a veterinária Marina e o groomer Caio perceberam que muitos pets chegavam ao atendimento já assustados. Eles imaginaram um lugar onde técnica e tempo andassem juntos — e onde cada animal pudesse ser entendido antes de ser tocado.</p>
        <p>Hoje, clínica, banho e tosa, hotel, creche e lojinha compartilham a mesma equipe e o mesmo prontuário de cuidado. Isso significa menos repetição para você e mais segurança para o seu pet.</p>
        <div className="story-note"><ShieldCheck/><span><strong>Manejo gentil, sempre.</strong><br/>Sem contenção desnecessária e com pausas quando o pet pede.</span></div>
      </div>
    </section>

    <section id="servicos" className="services-section">
      <div className="section-heading section-shell"><div><p className="kicker">Tudo no mesmo quintal</p><h2>Um cuidado para<br/>cada momento.</h2></div><p>Da consulta ao dia de brincar, nosso time conversa entre si para enxergar o pet por inteiro.</p></div>
      <div className="services-list section-shell">
        {services.map(({icon:Icon,n,title,text,action}) => <article className="service-row" key={title}>
          <span className="service-number">{n}</span><span className="service-icon"><Icon/></span>
          <div><h3>{title}</h3><p>{text}</p></div>
          <a href={whatsapp(`Olá, KortexPetShop! ${action}`)} target="_blank" rel="noreferrer" aria-label={`Solicitar ${title} pelo WhatsApp`}><ArrowUpRight/></a>
        </article>)}
      </div>
    </section>

    <section className="how section-shell">
      <div className="how-intro"><p className="kicker">Como funciona</p><h2>Da primeira mensagem ao rabo abanando.</h2><p>Um processo claro, sem filas misteriosas nem surpresas no orçamento.</p><a className="button button-primary" href={whatsapp('Olá, KortexPetShop! Quero começar um atendimento para o meu pet.')} target="_blank" rel="noreferrer">Começar pelo WhatsApp <MessageCircle size={18}/></a></div>
      <ol className="steps">
        <li><span><MessageCircle/></span><div><small>PASSO 1</small><h3>Conte quem vem</h3><p>Nome, espécie, porte e o que seu pet precisa. Se ajudar, mande uma foto.</p></div></li>
        <li><span><CalendarCheck/></span><div><small>PASSO 2</small><h3>Escolha o melhor horário</h3><p>A equipe sugere horários e antecipa duração, preparo e estimativa de valor.</p></div></li>
        <li><span><Sparkles/></span><div><small>PASSO 3</small><h3>Deixe o resto com a gente</h3><p>Recepção tranquila, cuidado individual e retorno com todas as orientações.</p></div></li>
      </ol>
    </section>

    <section className="team-section">
      <div className="section-shell"><div className="section-heading compact"><div><p className="kicker">Gente que entende bicho</p><h2>Quem cuida por aqui.</h2></div><p>Especialistas com repertórios diferentes e o mesmo compromisso: respeitar o tempo de cada animal.</p></div>
      <div className="team-grid">
        <article className="person person-a"><div className="person-portrait"><span>MB</span><Stethoscope/></div><small>Veterinária · CRMV-SP 00000</small><h3>Dra. Marina Braga</h3><p>Clínica geral e medicina preventiva. Tem uma gata chamada Teca e uma coleção de cadernos de pacientes.</p></article>
        <article className="person person-b"><div className="person-portrait"><span>CN</span><Bath/></div><small>Groomer especialista</small><h3>Caio Nunes</h3><p>Especialista em manejo gentil, peles sensíveis e cortes funcionais. Faz amizade antes de ligar o secador.</p></article>
        <article className="person person-c"><div className="person-portrait"><span>AL</span><UserRoundCheck/></div><small>Comportamento animal</small><h3>Ana Luz</h3><p>Cuida da creche, das adaptações e dos grupos. Conhece cada hóspede pelo jeito de brincar.</p></article>
      </div></div>
    </section>

    <section id="depoimentos" className="testimonials section-shell">
      <div className="testimonial-lead"><Quote/><p className="kicker">Quem já passou pela Kortex</p><h2>Histórias contadas por quem segura a guia.</h2></div>
      <div className="testimonial-stack">
        <blockquote><p>“O Bento tinha pavor de banho. Na Kortex, o Caio fez duas visitas curtinhas de adaptação. Hoje ele entra puxando a guia — eu nunca achei que isso seria possível.”</p><footer><span>BP</span><div><strong>Bianca & Bento</strong><small>Cliente desde 2021</small></div></footer></blockquote>
        <blockquote><p>“A Dra. Marina explica tudo sem pressa. Quando a Amora ficou doente, saí da consulta sabendo exatamente o que observar e quando retornar.”</p><footer><span>RA</span><div><strong>Rafael & Amora</strong><small>Cliente desde 2023</small></div></footer></blockquote>
        <blockquote><p>“O Chico volta da creche cansado e feliz. Recebo notícias ao longo do dia e sei que o grupo dele é escolhido com cuidado.”</p><footer><span>LC</span><div><strong>Lívia & Chico</strong><small>Cliente desde 2022</small></div></footer></blockquote>
      </div>
    </section>

    <section className="gallery-section">
      <div className="gallery-heading section-shell"><div><p className="kicker">Mural de focinhos</p><h2>Quem passou por aqui.</h2></div><Link className="text-link" href="/lojinha">Visitar a lojinha <ArrowUpRight size={17}/></Link></div>
      <div className="pet-gallery" aria-label="Galeria de animais atendidos">
        {['Joca','Mingau','Lola','Pingo','Teca','Nino'].map((name,i)=><figure className={`pet-shot shot-${i+1}`} key={name}><span/><figcaption>{name}<small>{i%2 ? 'consulta em dia' : 'dia de Kortex'}</small></figcaption></figure>)}
      </div>
    </section>

    <section id="faq" className="faq section-shell">
      <div><p className="kicker">Antes de vir</p><h2>Perguntas de humanos.</h2><p>Se a sua dúvida não estiver aqui, chama a equipe. A gente responde sem robô e sem enrolação.</p></div>
      <div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span>{q}<i/></summary><p>{a}</p></details>)}</div>
    </section>

    <section className="visit section-shell">
      <div className="visit-map"><div className="map-grid"/><span className="map-pin"><Bone/></span><p>Vila Madalena<br/><strong>São Paulo</strong></p></div>
      <div className="visit-copy"><p className="kicker">Onde a matilha se encontra</p><h2>Venha conhecer a nossa casa.</h2><p>Rua dos Bigodes, 148 · Vila Madalena<br/>São Paulo — SP · CEP 05400-000</p><div className="hours"><Clock3/><div><strong>Segunda a sexta</strong><span>8h às 19h</span></div><div><strong>Sábado</strong><span>8h às 17h</span></div></div><a className="button button-outline" href={whatsapp('Olá, KortexPetShop! Quero informações para visitar a unidade da Vila Madalena.')} target="_blank" rel="noreferrer">Pedir localização <ArrowUpRight size={18}/></a></div>
    </section>

    <SiteFooter/><WhatsAppFloat/>
  </main>;
}
