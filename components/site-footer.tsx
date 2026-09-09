import Link from 'next/link';
import { ArrowUpRight, Camera, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Brand } from './site-header';

const whats = (text: string) => `https://wa.me/5511945461252?text=${encodeURIComponent(text)}`;

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={whats('Olá, KortexPetShop! Vim pelo site e quero tirar uma dúvida.')} target="_blank" rel="noreferrer" aria-label="Falar com a KortexPetShop pelo WhatsApp"><MessageCircle/><span>WhatsApp</span></a>;
}

export function SiteFooter() {
  return <footer id="contato" className="site-footer">
    <div className="footer-cta">
      <div><p className="eyebrow eyebrow-light"><span/> Seu pet já está convidado</p><h2>Vamos cuidar<br/>desse focinho?</h2></div>
      <a className="button button-coral" href={whats('Olá, KortexPetShop! Quero saber qual cuidado é ideal para o meu pet.')} target="_blank" rel="noreferrer">Conversar com a equipe <ArrowUpRight/></a>
    </div>
    <div className="footer-grid">
      <div className="footer-brand"><Brand/><p>Um lugar completo para cuidar da saúde, beleza e alegria do seu melhor amigo.</p><a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={18}/> @kortexpetshop</a></div>
      <div><h3>Explore</h3><Link href="/#historia">Nossa história</Link><Link href="/#servicos">Serviços</Link><Link href="/lojinha">Lojinha</Link><Link href="/#faq">Perguntas frequentes</Link></div>
      <div><h3>Visite a Kortex</h3><p><MapPin size={18}/> Rua dos Bigodes, 148<br/>Vila Madalena · São Paulo — SP</p><p><Clock size={18}/> Seg–Sex, 8h–19h<br/>Sábado, 8h–17h</p></div>
      <div><h3>Fale com a gente</h3><a href={whats('Olá, KortexPetShop! Vim pelo site e gostaria de falar com vocês.')} target="_blank" rel="noreferrer"><Phone size={18}/> (11) 94546-1252</a><a href="mailto:oi@kortexpetshop.com.br">oi@kortexpetshop.com.br</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 KortexPetShop</span><span>Feito para patas, focinhos e humanos.</span><span>Site demonstrativo · Dados fictícios</span></div>
  </footer>;
}
