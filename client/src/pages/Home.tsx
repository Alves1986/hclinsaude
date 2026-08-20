import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight, Instagram, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";

const WHATSAPP_NUMBER = "5542988095848";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const specialties = [
  { index: "01", title: "Psicologia", text: "Escuta qualificada para diferentes fases, contextos e necessidades." },
  { index: "02", title: "Nutrição", text: "Orientação alimentar conectada à rotina, saúde e bem-estar." },
  { index: "03", title: "Psicopedagogia", text: "Apoio especializado para aprender, desenvolver e participar." },
  { index: "04", title: "TEA e Autismo", text: "Cuidado multidisciplinar com atenção à singularidade de cada pessoa." },
];

const publicData = [
  "Av. Eliomar Meira Xavier, 389 — Telêmaco Borba, Paraná",
  "Atendimento integrado para diferentes momentos da vida",
  "Contato direto e acolhedor pelo WhatsApp",
];

function whatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = `Olá, HCLIN! Meu nome é ${form.name}. Tenho interesse em ${form.interest || "conhecer os atendimentos"}.${form.message ? ` ${form.message}` : " Gostaria de saber mais informações e disponibilidade."}`;
    setSent(true);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#17313a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17313a]/10 bg-[#f7f4ed]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="HCLIN Saúde Integrada - início">
            <img src="/manus-storage/hclin-mark_6bbd5686.png" alt="Símbolo H+" className="h-11 w-11 object-contain" />
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.28em] text-[#0f4c5c] sm:block">HCLIN <span className="font-normal tracking-[0.16em] text-[#9d8152]">saúde integrada</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#17313a]/75 md:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#sobre">A HCLIN</a>
            <a className="nav-link" href="#especialidades">Especialidades</a>
            <a className="nav-link" href="#contato">Contato</a>
          </nav>
          <a href={whatsappLink("Olá, HCLIN! Gostaria de agendar um atendimento.")} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#1ebc5a] sm:flex">
            <MessageCircle size={15} /> WhatsApp
          </a>
          <button className="rounded-full p-2 md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-[#17313a]/10 bg-[#f7f4ed] px-5 py-5 md:hidden"><div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.2em]"><a href="#sobre" onClick={() => setMenuOpen(false)}>A HCLIN</a><a href="#especialidades" onClick={() => setMenuOpen(false)}>Especialidades</a><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a><a className="mt-2 inline-flex items-center gap-2 text-[#128c4a]" href={whatsappLink("Olá, HCLIN! Gostaria de agendar um atendimento.")} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Falar no WhatsApp</a></div></div>}
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[720px] max-w-[1400px] items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-24 lg:pt-40">
          <div className="relative z-10 max-w-[560px] animate-fade-up">
            <div className="eyebrow"><span className="eyebrow-line" /> Cuidado conectado em Telêmaco Borba</div>
            <h1 className="mt-7 max-w-[580px] font-display text-[clamp(3.4rem,7vw,6.8rem)] leading-[0.91] tracking-[-0.055em] text-[#0f4c5c]">Mais cuidado <em className="font-normal text-[#9d8152]">conectado</em> à sua rotina.</h1>
            <p className="mt-8 max-w-[440px] text-[17px] leading-8 text-[#17313a]/72">A HCLIN reúne diferentes caminhos de cuidado para que você encontre orientação, escuta e acompanhamento em um só lugar.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#contato" className="inline-flex items-center gap-3 rounded-full bg-[#0f4c5c] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-[#17313a]">Conversar com a HCLIN <ArrowUpRight size={16} /></a><a href="#especialidades" className="inline-flex items-center gap-2 px-2 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0f4c5c] underline decoration-[#c7a96b] underline-offset-8 transition hover:decoration-2">Ver especialidades <ChevronRight size={15} /></a></div>
          </div>
          <div className="relative min-h-[490px] lg:min-h-[600px] animate-fade-in"><div className="absolute -right-16 top-4 h-44 w-44 rounded-full border border-[#c7a96b]/45 lg:right-10" /><div className="absolute -bottom-10 left-0 h-40 w-40 rounded-full border border-[#0f4c5c]/20" /><div className="hero-image absolute inset-y-0 right-0 w-[88%] overflow-hidden rounded-[48%_12%_42%_10%/25%_20%_28%_15%] bg-[#dce5e1]"><img src="/manus-storage/hclin-hero_a21f169d.jpg" alt="Ambiente luminoso de cuidado integrado" className="h-full w-full object-cover" /></div><div className="absolute bottom-6 left-0 flex max-w-[250px] items-start gap-3 rounded-2xl border border-[#17313a]/10 bg-[#f7f4ed]/95 p-4 shadow-[0_20px_60px_rgba(23,49,58,0.12)] backdrop-blur"><span className="mt-1 block h-2 w-2 rounded-full bg-[#c7a96b]" /><p className="text-xs font-medium leading-5 text-[#17313a]/75">Um olhar integrado para cuidar do que importa.</p></div></div>
        </section>

        <section className="border-y border-[#17313a]/10 bg-[#0f4c5c] text-[#f7f4ed]" aria-label="Pilares da HCLIN"><div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 py-6 lg:px-10"><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c7a96b]">H+ / presença / cuidado</span><div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/75"><span>Escuta</span><span>Orientação</span><span>Acompanhamento</span><span>Integração</span></div></div></section>

        <section id="sobre" className="mx-auto grid max-w-[1240px] gap-14 px-5 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-36"><div className="lg:pt-6"><div className="eyebrow"><span className="eyebrow-line" /> 01 / A HCLIN</div><h2 className="mt-6 max-w-[380px] font-display text-5xl leading-[0.98] tracking-[-0.04em] text-[#0f4c5c] lg:text-6xl">Cuidado que olha o todo.</h2></div><div className="grid gap-9 lg:grid-cols-[1fr_0.82fr] lg:items-center"><div><p className="text-xl leading-9 text-[#17313a]/80">A HCLIN Saúde Integrada nasce para aproximar diferentes especialidades e tornar o cuidado mais possível, claro e conectado com a vida real.</p><p className="mt-6 text-base leading-8 text-[#17313a]/60">Em Telêmaco Borba, você encontra um espaço para conversar sobre saúde com mais calma e encontrar o caminho de atendimento que faz sentido para o seu momento.</p><a href={whatsappLink("Olá, HCLIN! Gostaria de entender qual atendimento pode fazer sentido para mim.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0f4c5c] underline decoration-[#c7a96b] underline-offset-8">Tirar uma dúvida pelo WhatsApp <ArrowUpRight size={15} /></a></div><div className="relative mx-auto w-full max-w-[330px]"><div className="absolute -inset-3 rounded-[42%_12%_42%_12%] border border-[#c7a96b]/50" /><img src="/manus-storage/hclin-space_b4df1ee6.jpg" alt="Sala de atendimento acolhedora" className="relative aspect-[4/5] w-full rounded-[42%_12%_42%_12%] object-cover" /></div></div></section>

        <section id="especialidades" className="bg-[#e9efea] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1240px]"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="eyebrow"><span className="eyebrow-line" /> 02 / Caminhos de cuidado</div><h2 className="mt-6 max-w-[600px] font-display text-5xl leading-[0.98] tracking-[-0.045em] text-[#0f4c5c] lg:text-7xl">Encontre o cuidado que combina com você.</h2></div><p className="max-w-[270px] text-sm leading-6 text-[#17313a]/65">A equipe e a disponibilidade podem variar. Fale com a clínica para receber a orientação atualizada.</p></div><div className="relative mt-16 border-t border-[#0f4c5c]/20">{specialties.map((item, itemIndex) => <a key={item.index} href={whatsappLink(`Olá, HCLIN! Tenho interesse em informações sobre ${item.title}.`)} target="_blank" rel="noreferrer" className={`group relative grid gap-5 border-b border-[#0f4c5c]/20 py-7 transition hover:bg-[#f7f4ed]/45 md:grid-cols-[84px_1fr_1.25fr_48px] md:items-center ${itemIndex % 2 === 1 ? "md:pl-16" : "md:pr-16"}`}><span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#c7a96b] bg-[#e9efea] font-mono text-xs text-[#9d8152]">{item.index}</span><h3 className="font-display text-3xl text-[#0f4c5c]">{item.title}</h3><p className="max-w-[410px] text-sm leading-6 text-[#17313a]/65">{item.text}</p><ArrowUpRight size={19} className="text-[#0f4c5c]/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0f4c5c]" />{itemIndex < specialties.length - 1 && <span className="absolute left-[23px] top-[72px] h-8 border-l border-dashed border-[#c7a96b]/70" />}</a>)}</div></div></section>

        <section className="relative overflow-hidden bg-[#f7f4ed] px-5 py-24 lg:px-10 lg:py-32"><img src="/manus-storage/hclin-pattern_fcb4f8ae.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply" /><div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"><div><div className="eyebrow"><span className="eyebrow-line" /> 03 / Como chegar</div><h2 className="mt-6 max-w-[650px] font-display text-5xl leading-[0.98] tracking-[-0.045em] text-[#0f4c5c] lg:text-7xl">Um espaço para cuidar com mais presença.</h2><div className="mt-10 flex items-start gap-4"><MapPin className="mt-1 text-[#9d8152]" size={22} /><div><p className="font-bold text-[#0f4c5c]">Av. Eliomar Meira Xavier, 389</p><p className="mt-1 text-sm text-[#17313a]/65">Telêmaco Borba — Paraná</p></div></div></div><div className="rounded-[28px] border border-[#0f4c5c]/15 bg-[#f7f4ed]/80 p-7 backdrop-blur"><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9d8152]">Para começar</p><p className="mt-4 font-display text-3xl leading-tight text-[#0f4c5c]">Conte o que você precisa. A gente orienta o próximo passo.</p><a href="#contato" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0f4c5c] underline decoration-[#c7a96b] underline-offset-8">Abrir formulário <ChevronRight size={16} /></a></div></div></section>

        <section id="contato" className="bg-[#0f4c5c] px-5 py-24 text-[#f7f4ed] lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><div className="eyebrow light"><span className="eyebrow-line" /> 04 / Vamos conversar</div><h2 className="mt-6 max-w-[500px] font-display text-5xl leading-[0.98] tracking-[-0.045em] lg:text-7xl">Seu cuidado começa com uma conversa.</h2><p className="mt-7 max-w-[390px] text-base leading-8 text-white/65">Preencha o formulário. Ao enviar, você será direcionado para o WhatsApp da HCLIN com uma mensagem pronta.</p><div className="mt-9 space-y-3 text-sm text-white/75"><p className="flex items-center gap-3"><Phone size={16} className="text-[#c7a96b]" /> (42) 98809-5848</p><p className="flex items-center gap-3"><MapPin size={16} className="text-[#c7a96b]" /> Telêmaco Borba, Paraná</p></div></div><form onSubmit={handleSubmit} className="rounded-[28px] bg-[#f7f4ed] p-6 text-[#17313a] shadow-2xl sm:p-9"><div className="grid gap-5 sm:grid-cols-2"><label className="field-label sm:col-span-2">Seu nome<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Como podemos chamar você?" /></label><label className="field-label sm:col-span-2">Tenho interesse em<select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}><option value="">Selecione uma opção</option>{specialties.map((item) => <option key={item.title}>{item.title}</option>)}<option value="Outro atendimento">Outro atendimento</option></select></label><label className="field-label sm:col-span-2">Mensagem <span className="font-normal normal-case tracking-normal text-[#17313a]/40">(opcional)</span><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Escreva uma dúvida ou conte brevemente o que você procura." rows={4} /></label></div><button type="submit" className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-[#1ebc5a]"><MessageCircle size={17} /> {sent ? "Abrir novamente no WhatsApp" : "Enviar para o WhatsApp"}</button><div className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-[#17313a]/50"><Check size={14} className="mt-0.5 shrink-0 text-[#128c4a]" /> Seus dados não ficam armazenados nesta página. O envio acontece diretamente no WhatsApp.</div></form></div></section>
      </main>

      <footer className="bg-[#0a3945] px-5 py-9 text-white/60 lg:px-10"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src="/manus-storage/hclin-mark_6bbd5686.png" alt="Símbolo H+" className="h-10 w-10 object-contain" /><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-white">HCLIN</p><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#c7a96b]">Saúde integrada</p></div></div><div className="flex flex-wrap items-center gap-5 text-xs"><a className="footer-link" href="https://www.instagram.com/hclin_integrada/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a className="footer-link" href={WHATSAPP_BASE} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><span>© 2026 HCLIN</span></div></div></footer>
    </div>
  );
}
