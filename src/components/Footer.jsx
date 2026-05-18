import { Instagram, Twitter, Youtube, Heart } from 'lucide-react'
import logoUrl from '../assets/logo2.svg'

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-navy/10">
      <div className="container-page py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logoUrl} alt="VidaPet" className="h-8 w-auto select-none" />
          <p className="text-sm text-navy/65 mt-4 max-w-xs">
            O app mais completo para tutores e veterinários cuidarem do que mais amam.
          </p>
          <div className="flex items-center gap-3 mt-5 text-navy/55">
            <a href="#" className="hover:text-navy"><Instagram size={18} /></a>
            <a href="#" className="hover:text-navy"><Twitter size={18} /></a>
            <a href="#" className="hover:text-navy"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-wider text-navy/55 uppercase">Produto</p>
          <ul className="mt-4 space-y-2 text-sm text-navy/75">
            <li><a href="#funcionalidades" className="hover:text-navy">Funcionalidades</a></li>
            <li><a href="#planos" className="hover:text-navy">Planos e preços</a></li>
            <li><a href="#veterinarios" className="hover:text-navy">Para veterinários</a></li>
            <li><a href="#" className="hover:text-navy">Demo do painel</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-wider text-navy/55 uppercase">Suporte</p>
          <ul className="mt-4 space-y-2 text-sm text-navy/75">
            <li><a href="#" className="hover:text-navy">Central de ajuda</a></li>
            <li><a href="#" className="hover:text-navy">Status do sistema</a></li>
            <li><a href="mailto:contato@vidapet.app" className="hover:text-navy">contato@vidapet.app</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-wider text-navy/55 uppercase">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-navy/75">
            <li><a href="#" className="hover:text-navy">Termos de uso</a></li>
            <li><a href="#" className="hover:text-navy">Privacidade</a></li>
            <li><a href="#" className="hover:text-navy">Cookies</a></li>
            <li><a href="#" className="hover:text-navy">LGPD</a></li>
          </ul>
        </div>
      </div>

      <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-navy/10 text-xs text-navy/55">
        <p>© 2026 VidaPet — vidapet.app — Todos os direitos reservados.</p>
        <p className="inline-flex items-center gap-1">
          Feito com <Heart size={12} className="text-orange fill-orange" /> para pets e seus humanos.
        </p>
      </div>
    </footer>
  )
}
