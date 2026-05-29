import { useEffect, useState } from 'react'
import { Instagram, Twitter, Youtube, Heart, X } from 'lucide-react'
import logoUrl from '../assets/logo2.svg'

const legalDocs = {
  termos: {
    title: 'Termos de uso',
    body: `[Conteúdo a ser fornecido por Pedro]

Bem-vindo ao VidaPet. Ao utilizar nosso aplicativo, você concorda com os termos descritos neste documento.

1. Aceitação dos termos
2. Cadastro e responsabilidades do usuário
3. Uso do serviço
4. Pagamentos e cancelamento
5. Limitações de responsabilidade
6. Disposições gerais

Versão preliminar — conteúdo definitivo em breve.`
  },
  privacidade: {
    title: 'Política de Privacidade',
    body: `[Conteúdo a ser fornecido por Pedro]

A VidaPet respeita a privacidade dos seus usuários. Esta política descreve como coletamos, usamos e protegemos seus dados.

1. Dados que coletamos
2. Como utilizamos seus dados
3. Compartilhamento com terceiros
4. Segurança da informação
5. Seus direitos
6. Contato

Versão preliminar — conteúdo definitivo em breve.`
  },
  lgpd: {
    title: 'LGPD',
    body: `[Conteúdo a ser fornecido por Pedro]

A VidaPet está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).

1. Finalidade do tratamento
2. Base legal
3. Direitos do titular dos dados
4. Encarregado (DPO)
5. Como exercer seus direitos

Versão preliminar — conteúdo definitivo em breve.`
  }
}

function LegalModal({ docKey, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const doc = legalDocs[docKey]
  if (!doc) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-soft overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between px-6 py-4 border-b border-navy/10">
          <h3 className="font-serif font-bold text-xl text-navy">{doc.title}</h3>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full hover:bg-navy/5 flex items-center justify-center text-navy/60 hover:text-navy transition"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </header>
        <div className="px-6 py-5 overflow-y-auto text-sm text-navy/80 leading-relaxed whitespace-pre-line">
          {doc.body}
        </div>
        <footer className="px-6 py-3 border-t border-navy/10 bg-cream/50">
          <button onClick={onClose} className="text-xs text-navy/60 hover:text-navy">
            Fechar
          </button>
        </footer>
      </div>
    </div>
  )
}

export default function Footer() {
  const [openDoc, setOpenDoc] = useState(null)

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
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-wider text-navy/55 uppercase">Suporte</p>
          <ul className="mt-4 space-y-2 text-sm text-navy/75">
            <li><a href="mailto:contato@vidapet.app" className="hover:text-navy">contato@vidapet.app</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-wider text-navy/55 uppercase">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-navy/75">
            <li>
              <button onClick={() => setOpenDoc('termos')} className="hover:text-navy text-left">
                Termos de uso
              </button>
            </li>
            <li>
              <button onClick={() => setOpenDoc('privacidade')} className="hover:text-navy text-left">
                Privacidade
              </button>
            </li>
            <li>
              <button onClick={() => setOpenDoc('lgpd')} className="hover:text-navy text-left">
                LGPD
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page py-5 border-t border-navy/10 text-xs text-navy/55 text-center space-y-1">
        <p>© 2026 VidaPet — vidapet.app — Todos os direitos reservados.</p>
        <p className="inline-flex items-center gap-1 justify-center">
          Feito com <Heart size={12} className="text-orange fill-orange" /> para pets e seus humanos.
        </p>
      </div>

      {openDoc && <LegalModal docKey={openDoc} onClose={() => setOpenDoc(null)} />}
    </footer>
  )
}
