import { ArrowLeft, Bone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { assetPath } from '@/lib/site';

export default function NotFound(){return <main><SiteHeader/><section className="not-found"><div className="lost-art"><span>4</span><i><Bone/></i><span>4</span></div><p className="kicker">Farejamos por todo lado</p><h1>Essa página fugiu<br/>pela portinha.</h1><p>Talvez ela tenha ido brincar no quintal. A boa notícia é que sabemos o caminho de volta.</p><a className="button button-primary" href={assetPath('/')}><ArrowLeft/> Voltar ao início</a></section></main>}
