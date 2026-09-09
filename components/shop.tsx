'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Minus, Plus, Search, ShoppingBag, SlidersHorizontal, Sparkles, Trash2, X } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { assetPath } from '@/lib/site';

type Product = {id:number; name:string; category:string; price:number; description:string; variation:string; badge?:string; art:string};
const categories = ['Todos','Rações','Petiscos','Coleiras e guias','Brinquedos','Higiene','Caminhas','Acessórios'];
const products: Product[] = [
  {id:1,name:'Ração Quintal Feliz',category:'Rações',price:149.90,description:'Receita premium para cães adultos, com frango, arroz integral e prebióticos.',variation:'2,5 kg · 10 kg',badge:'Mais vendido',art:'food'},
  {id:2,name:'Biscoitos Croc-Croc',category:'Petiscos',price:24.90,description:'Biscoitos assados com abóbora e aveia, sem corantes artificiais.',variation:'Pacote 180 g',badge:'Novidade',art:'treat'},
  {id:3,name:'Coleira Passeio Roxo',category:'Coleiras e guias',price:69.90,description:'Fita macia e resistente, regulagem fácil e ferragens douradas.',variation:'P · M · G',art:'collar'},
  {id:4,name:'Guia Vai Junto',category:'Coleiras e guias',price:84.90,description:'Guia confortável de 1,5 m com mosquetão de giro livre.',variation:'Roxo · Coral',art:'leash'},
  {id:5,name:'Mordedor Nó de Festa',category:'Brinquedos',price:34.90,description:'Corda firme de algodão para brincadeiras supervisionadas.',variation:'M · G',badge:'Mais vendido',art:'toy'},
  {id:6,name:'Shampoo Folha Limpa',category:'Higiene',price:42.90,description:'Limpeza suave com fragrância delicada e fórmula para peles sensíveis.',variation:'Frasco 500 ml',art:'shampoo'},
  {id:7,name:'Caminha Abraço Lavanda',category:'Caminhas',price:219.90,description:'Laterais acolchoadas, tecido macio e capa removível para lavagem.',variation:'M · G',badge:'Novidade',art:'bed'},
  {id:8,name:'Bandana Confete',category:'Acessórios',price:29.90,description:'Tecido leve, dupla face e ajuste por amarração. Estampa exclusiva Kortex.',variation:'P · M · G',art:'bandana'},
  {id:9,name:'Kit Primeiro Passeio',category:'Acessórios',price:129.90,description:'Coleira, guia e porta-saquinhos coordenados para sair com estilo.',variation:'P · M',art:'kit'},
];

const money = (value:number) => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const wa = (text:string) => `https://wa.me/5511945461252?text=${encodeURIComponent(text)}`;

export function Shop(){
  const [query,setQuery] = useState(''); const [category,setCategory] = useState('Todos'); const [cart,setCart] = useState<Record<number,number>>({}); const [notice,setNotice] = useState('');
  const filtered = useMemo(()=>products.filter(p => (category==='Todos'||p.category===category) && p.name.toLowerCase().includes(query.toLowerCase())),[query,category]);
  const count = Object.values(cart).reduce((a,b)=>a+b,0); const total = Object.entries(cart).reduce((sum,[id,q])=>sum+(products.find(p=>p.id===+id)?.price||0)*q,0);
  const add = (id:number) => {setCart(c=>({...c,[id]:(c[id]||0)+1})); const p=products.find(x=>x.id===id);setNotice(`${p?.name} entrou na sacola`);setTimeout(()=>setNotice(''),2200)};
  const change=(id:number,delta:number)=>setCart(c=>{const next={...c,[id]:Math.max(0,(c[id]||0)+delta)};if(!next[id])delete next[id];return next});
  const cartMessage = ['Olá, KortexPetShop! Gostaria de solicitar este orçamento:','',...Object.entries(cart).map(([id,q])=>{const p=products.find(x=>x.id===+id)!;return `• ${q}x ${p.name} (${p.variation}) — ${money(p.price*q)}`;}),'',`Total estimado: ${money(total)}`,'Podem confirmar disponibilidade e entrega, por favor?'].join('\n');
  return <>
    <section className="shop-hero">
      <div><p className="eyebrow"><span/> Curadoria Kortex</p><h1>Coisas boas para<br/><em>focinhos exigentes.</em></h1><p>Produtos escolhidos pela equipe que cuida do seu pet. Você monta a sacola, a gente confirma tudo pelo WhatsApp.</p></div>
      <div className="shop-hero-art"><Image src={assetPath('/images/kortex-products.png')} alt="Seleção ilustrada de produtos da KortexPetShop" fill priority sizes="(max-width: 760px) 100vw, 50vw"/><span><Sparkles/> testado pela matilha</span></div>
    </section>

    <section className="catalog section-shell" aria-labelledby="catalog-title">
      <div className="catalog-top"><div><p className="kicker">Prateleira boa</p><h2 id="catalog-title">Escolha sem pressa.</h2></div>
        <Sheet><SheetTrigger className="cart-trigger"><ShoppingBag/><span>Sacola</span>{count>0&&<b>{count}</b>}</SheetTrigger>
          <SheetContent className="cart-sheet" showCloseButton={false}>
            <SheetClose className="sheet-close" aria-label="Fechar sacola"><X/></SheetClose>
            <SheetHeader><SheetTitle>Sacola de orçamento</SheetTitle><SheetDescription>Você não paga por aqui. Envie a lista e a equipe confirma disponibilidade e entrega.</SheetDescription></SheetHeader>
            <div className="cart-items">{count===0?<div className="empty-cart"><ShoppingBag/><h3>Sua sacola está passeando vazia.</h3><p>Adicione produtos para montar um orçamento pelo WhatsApp.</p></div>:Object.entries(cart).map(([id,q])=>{const p=products.find(x=>x.id===+id)!;return <div className="cart-item" key={id}><div className={`mini-art ${p.art}`} style={{backgroundImage:`url(${assetPath('/images/kortex-products.png')})`}}/><div><strong>{p.name}</strong><small>{p.variation}</small><div className="qty"><button onClick={()=>change(p.id,-1)} aria-label={`Diminuir ${p.name}`}><Minus/></button><span>{q}</span><button onClick={()=>change(p.id,1)} aria-label={`Aumentar ${p.name}`}><Plus/></button></div></div><button className="remove" onClick={()=>change(p.id,-q)} aria-label={`Remover ${p.name}`}><Trash2/></button></div>})}</div>
            {count>0&&<div className="cart-total"><div><span>Total estimado</span><strong>{money(total)}</strong></div><a className="button button-primary" href={wa(cartMessage)} target="_blank" rel="noreferrer">Enviar sacola no WhatsApp <ArrowUpRight/></a><small>Valores demonstrativos. Disponibilidade sujeita à confirmação.</small></div>}
          </SheetContent>
        </Sheet>
      </div>
      <div className="shop-controls"><label className="search-box"><Search/><span className="sr-only">Pesquisar produtos</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar na lojinha..."/></label><div className="filter-label"><SlidersHorizontal/> Categorias</div><fieldset className="category-list"><legend className="sr-only">Filtrar por categoria</legend>{categories.map(c=><button type="button" className={category===c?'selected':''} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</fieldset></div>
      <div className="results-line"><span>{filtered.length} {filtered.length===1?'produto encontrado':'produtos encontrados'}</span><span>Retirada na loja ou entrega a combinar</span></div>
      {filtered.length===0?<div className="no-results"><Search/><h3>Nada por aqui ainda.</h3><p>Tente outro termo ou explore todas as categorias.</p><button className="button button-outline" onClick={()=>{setQuery('');setCategory('Todos')}}>Limpar filtros</button></div>:<div className="product-grid">{filtered.map((p)=><article className="product-card" key={p.id}>
        <div className={`product-art ${p.art}`} style={{backgroundImage:`url(${assetPath('/images/kortex-products.png')})`}}>{p.badge&&<span className={p.badge==='Novidade'?'new':''}>{p.badge}</span>}<button className="quick-add" onClick={()=>add(p.id)} aria-label={`Adicionar ${p.name} à sacola`}><Plus/></button></div>
        <div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p>{p.description}</p><span className="variation">{p.variation}</span><div><strong>{money(p.price)}</strong><button onClick={()=>add(p.id)}>Adicionar <ShoppingBag/></button></div><a href={wa(`Olá, KortexPetShop! Tenho interesse no produto ${p.name}, na variação ${p.variation}. Podem me passar mais informações?`)} target="_blank" rel="noreferrer">Pedir só este item <ArrowUpRight/></a></div>
      </article>)}</div>}
    </section>
    <section className="shop-help"><div><Sparkles/><div><strong>Não sabe qual escolher?</strong><span>Conte para a equipe a idade, o porte e a rotina do seu pet.</span></div></div><a className="button button-dark" href={wa('Olá, KortexPetShop! Quero ajuda para escolher o produto certo para o meu pet.')} target="_blank" rel="noreferrer">Pedir uma indicação <ArrowUpRight/></a></section>
    <output className={`toast ${notice?'show':''}`} aria-live="polite"><ShoppingBag/>{notice}</output>
  </>;
}
