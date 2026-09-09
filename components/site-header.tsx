'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const whats = (text: string) => `https://wa.me/5511945461252?text=${encodeURIComponent(text)}`;

export function Brand() {
  return <Link href="/" className="brand" aria-label="KortexPetShop — início">
    <span className="brand-mark" aria-hidden="true"><i/><i/><i/><i/><b/></span>
    <span>Kortex<span>PetShop</span></span>
  </Link>;
}

export function SiteHeader({ shop = false }: { shop?: boolean }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal">
        <Link href="/">Início</Link>
        <Link href="/#historia">Nossa história</Link>
        <Link href="/#servicos">Serviços</Link>
        <Link href="/lojinha" className={shop ? 'active' : ''}>Lojinha</Link>
        <Link href="/#depoimentos">Depoimentos</Link>
        <Link href="/#contato">Contato</Link>
      </nav>
      <a className="button button-dark header-cta" href={whats(shop ? 'Olá, KortexPetShop! Preciso de ajuda para escolher um produto da lojinha.' : 'Olá, KortexPetShop! Quero marcar um atendimento para o meu pet.')} target="_blank" rel="noreferrer">
        {shop ? 'Falar com a loja' : 'Marcar atendimento'} <ArrowUpRight size={18}/>
      </a>
      <button className="menu-button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>
    <div className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <nav aria-label="Navegação móvel">
        <Link onClick={close} href="/">Início</Link>
        <Link onClick={close} href="/#historia">Nossa história</Link>
        <Link onClick={close} href="/#servicos">Serviços</Link>
        <Link onClick={close} href="/lojinha">Lojinha</Link>
        <Link onClick={close} href="/#depoimentos">Depoimentos</Link>
        <Link onClick={close} href="/#contato">Contato</Link>
        <a className="button button-primary" href={whats('Olá, KortexPetShop! Quero conversar sobre o meu pet.')} target="_blank" rel="noreferrer">Chamar no WhatsApp <ArrowUpRight size={18}/></a>
      </nav>
    </div>
  </>;
}
