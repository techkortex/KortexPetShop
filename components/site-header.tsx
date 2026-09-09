'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { assetPath, pagePath } from '@/lib/site';

const whats = (text: string) => `https://wa.me/5511945461252?text=${encodeURIComponent(text)}`;

export function Brand() {
  return <a href={assetPath('/')} className="brand" aria-label="KortexPetShop — início">
    <span className="brand-mark" aria-hidden="true"><i/><i/><i/><i/><b/></span>
    <span>Kortex<span>PetShop</span></span>
  </a>;
}

export function SiteHeader({ shop = false }: { shop?: boolean }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href={assetPath('/')}>Início</a>
        <a href={assetPath('/#historia')}>Nossa história</a>
        <a href={assetPath('/#servicos')}>Serviços</a>
        <a href={pagePath('/lojinha')} className={shop ? 'active' : ''}>Lojinha</a>
        <a href={assetPath('/#depoimentos')}>Depoimentos</a>
        <a href={assetPath('/#contato')}>Contato</a>
      </nav>
      <a className="button button-dark header-cta" href={whats(shop ? 'Olá, KortexPetShop! Preciso de ajuda para escolher um produto da lojinha.' : 'Olá, KortexPetShop! Quero marcar um atendimento para o meu pet.')} target="_blank" rel="noreferrer">
        {shop ? 'Falar com a loja' : 'Marcar atendimento'} <ArrowUpRight size={18}/>
      </a>
      <button className="menu-button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>
    <div className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <nav aria-label="Navegação móvel">
        <a onClick={close} href={assetPath('/')}>Início</a>
        <a onClick={close} href={assetPath('/#historia')}>Nossa história</a>
        <a onClick={close} href={assetPath('/#servicos')}>Serviços</a>
        <a onClick={close} href={pagePath('/lojinha')}>Lojinha</a>
        <a onClick={close} href={assetPath('/#depoimentos')}>Depoimentos</a>
        <a onClick={close} href={assetPath('/#contato')}>Contato</a>
        <a className="button button-primary" href={whats('Olá, KortexPetShop! Quero conversar sobre o meu pet.')} target="_blank" rel="noreferrer">Chamar no WhatsApp <ArrowUpRight size={18}/></a>
      </nav>
    </div>
  </>;
}
