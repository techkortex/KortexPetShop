import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter, WhatsAppFloat } from '@/components/site-footer';
import { Shop } from '@/components/shop';

export const metadata: Metadata = { title: 'Lojinha | KortexPetShop', description: 'Rações, petiscos, brinquedos e acessórios escolhidos pela equipe Kortex.' };

export default function ShopPage(){
  return <main><SiteHeader shop/><Shop/><SiteFooter/><WhatsAppFloat/></main>;
}
