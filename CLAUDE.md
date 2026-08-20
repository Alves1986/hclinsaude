# CLAUDE.md — HCLIN Saúde Integrada

## Visão geral

Este repositório contém a landing page institucional da **HCLIN Saúde Integrada**, clínica localizada em Telêmaco Borba, Paraná. O objetivo do sistema é apresentar a clínica, suas especialidades, profissionais, convênios e formas de contato, conduzindo o visitante principalmente para o WhatsApp oficial.

O projeto é uma aplicação frontend estática. Não existe backend próprio para formulários, autenticação, banco de dados ou processamento de mensagens. O formulário de contato apenas monta uma mensagem e abre o WhatsApp da clínica.

> Ao alterar este projeto, preserve a experiência de uma clínica acolhedora, integrada, editorial e confiável. Evite transformar a interface em um template genérico de saúde.

## Stack e comandos

A aplicação usa React 19, TypeScript, Vite 7, Tailwind CSS 4, Wouter e Lucide React. Os componentes visuais disponíveis em `client/src/components/ui/` são baseados em shadcn/ui e Radix UI.

| Comando | Finalidade |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento Vite. |
| `pnpm check` | Executa o TypeScript sem emitir arquivos. Deve passar antes de entregar alterações. |
| `pnpm build` | Gera o frontend de produção e empacota o servidor de compatibilidade. |
| `pnpm preview` | Abre uma prévia do build do Vite. |
| `pnpm format` | Formata os arquivos com Prettier. |

Sempre execute `pnpm check` e `pnpm build` depois de mudanças relevantes. Para alterações visuais, revise também a versão desktop e a versão mobile no preview.

## Estrutura principal

```text
client/
  index.html                 # HTML base, metadados e fontes/scripts não condicionais
  public/                    # Somente arquivos pequenos de configuração
  src/
    App.tsx                  # Rotas e composição global
    index.css                # Tokens, identidade visual, animações e responsividade
    main.tsx                 # Bootstrap da aplicação
    pages/
      Home.tsx               # Landing page principal e seus dados de conteúdo
      Privacy.tsx            # Política de Privacidade e Cookies
      NotFound.tsx           # Rota 404 alinhada à marca
    components/
      ui/                    # Primitivos Radix/shadcn reutilizáveis
      Map.tsx                # Componente de mapa do template; há fallback incorporado no Home
    contexts/                # Contextos globais do template
    hooks/                   # Hooks compartilhados
    lib/                     # Utilitários
server/
  index.ts                   # Compatibilidade de produção; não alterar para tarefas somente frontend
shared/
  const.ts                  # Constantes compartilhadas do template
CLAUDE.md                    # Este documento
ideas.md                     # Direção visual e decisões de design
research-notes.md            # Registro de descobertas e decisões verificadas
todo.md                     # Checklist de evoluções do projeto
```

## Rotas atuais

A aplicação usa Wouter para roteamento client-side.

| Rota | Uso |
|---|---|
| `/` | Landing page completa da HCLIN. |
| `/privacidade` | Política de Privacidade e Cookies. |
| `/404` | Página de não encontrado alinhada à identidade HCLIN. |
| Qualquer outra rota | Fallback para a página 404. |

A landing page é composta por âncoras internas. O cabeçalho deve permanecer limpo e exibir somente as abas essenciais: **A HCLIN**, **Especialidades**, **Equipe**, **Localização** e **Contato**. Dicas, Convênios, Avaliações e FAQ continuam acessíveis dentro da página ou por chamadas contextuais, mas não devem voltar ao menu principal sem uma decisão explícita de design.

## Identidade visual

A direção visual é **Cuidado em Camadas**, inspirada em uma clínica integrada, acolhedora e editorial. A composição usa espaços amplos, formas arquitetônicas suaves, recortes em arco, linhas finas e detalhes de camadas.

| Elemento | Diretriz |
|---|---|
| Fundo principal | Marfim quente, próximo de `#f7f4ed`. |
| Cor de autoridade | Azul-petróleo profundo, próximo de `#0f4c5c`. |
| Acento | Champagne/dourado discreto, próximo de `#c7a96b` e `#9d8152`. |
| Tipografia de títulos | Fraunces ou fonte editorial equivalente já configurada. |
| Corpo de texto | Sans-serif legível, com alto contraste e espaçamento confortável. |
| Logo | Símbolo H+ da clínica; não substituir por texto simples ou ícone genérico. |
| Motivos | Arcos, bordas finas, camadas translúcidas, divisores editoriais e textura sutil. |

Não usar roxo genérico, gradientes chamativos, excesso de cards uniformes, excesso de bordas arredondadas ou layouts completamente centralizados. Toda decisão deve responder à pergunta: **isso reforça ou dilui o cuidado integrado da HCLIN?**

## Conteúdo institucional e dados sensíveis

Os nomes e especialidades da equipe devem ser tratados como conteúdo institucional verificável. Não inventar profissionais, registros, biografias, horários ou qualificações. Quando uma informação não estiver confirmada, usar uma indicação clara como **“a confirmar com a clínica”**.

Não criar avaliações, notas ou depoimentos fictícios. O carrossel de avaliações deve receber somente relatos reais, autorizados e revisados pela clínica. Enquanto não houver conteúdo aprovado, manter uma mensagem neutra explicando que o espaço está reservado para depoimentos oficiais.

O endereço público usado pela página é:

> Av. Eliomar Meira Xavier, 389 — Telêmaco Borba, Paraná.

O WhatsApp oficial usado nos links é `+55 (42) 98867-6700`. Alterações nesse número devem ser confirmadas antes de modificar `WHATSAPP_NUMBER` em `client/src/pages/Home.tsx`.

O perfil social principal é o Instagram público da clínica: [@hclin_integrada](https://www.instagram.com/hclin_integrada/). Não coletar conteúdo privado, não contornar bloqueios de plataforma e não reutilizar retratos sem autorização de uso.

## Imagens e assets

Imagens e mídias não devem ser armazenadas em `client/public/` ou `client/src/assets/`. Os assets persistentes ficam fora do projeto, em `/home/ubuntu/webdev-static-assets/`, e são enviados usando o fluxo de armazenamento do WebDev. No código, usar exatamente as URLs `/manus-storage/...` retornadas pelo upload.

Para imagens da equipe:

1. Preservar o retrato, o enquadramento e a identidade da clínica.
2. Não reutilizar a mesma foto em áreas diferentes sem motivo claro.
3. Aplicar `loading="lazy"` e `decoding="async"` em imagens não críticas.
4. Manter skeleton loading, fallback de erro e `alt` descritivo.
5. Usar zoom apenas de forma sutil e respeitar `prefers-reduced-motion`.
6. Não remover ou adicionar elementos de uma foto sem autorização e sem revisar o resultado visual.

A imagem principal da hero é crítica para a primeira dobra e deve carregar de forma estável. A hero deve manter proporção equilibrada, sem encostar na seção seguinte e sem ficar escondida pelo cabeçalho fixo.

## WhatsApp e conversões

Todos os links de WhatsApp devem usar o helper `whatsappLink()` e abrir em nova aba com `target="_blank"` e `rel="noreferrer"`. A ação deve registrar o evento `whatsapp_conversion` com um `source` anônimo, sem enviar nome, telefone, texto digitado ou outros dados pessoais.

Os pontos instrumentados incluem formulário, botão flutuante, menu mobile, CTAs de especialidades, convênios, rodapé e dúvidas institucionais. Ao criar um novo CTA, registrar uma origem curta e estável, por exemplo `specialty_cta` ou `footer_whatsapp`.

## Consentimento, privacidade e analytics

O Umami é opcional e só pode ser carregado depois que o visitante aceitar analytics no banner. O estado é persistido em `localStorage` pela chave `hclin-analytics-consent`, com os valores `accepted` ou `rejected`.

Regras obrigatórias:

- Não carregar o script do Umami automaticamente no `client/index.html`.
- Não registrar eventos antes do consentimento.
- Não enviar dados pessoais ao Umami.
- Manter os botões **Aceitar analytics**, **Recusar** e **Preferências de cookies**.
- Manter o link para `/privacidade` no banner e no rodapé.
- O controle do rodapé deve remover a escolha salva e reabrir o banner.
- O banner deve ter foco acessível, contraste suficiente e animação desativada para `prefers-reduced-motion`.

Esta implementação é técnica e não substitui revisão jurídica. Qualquer alteração no texto da política, finalidades, retenção, controlador ou canal de privacidade deve ser validada pela clínica e, quando necessário, por profissional especializado em LGPD.

## Acessibilidade e interação

Usar HTML semântico, `alt` em imagens, `aria-label` em controles somente com ícone, foco visível e navegação por teclado. Modais devem fechar por botão, clique fora e tecla Escape; devem impedir a rolagem do `body` enquanto abertos e devolver o foco ao elemento de origem quando essa melhoria for implementada.

A rolagem por âncoras deve manter os títulos abaixo do header fixo. O projeto utiliza offset global de aproximadamente 104px. Se a altura do header mudar, revisar `scroll-padding-top` e `scroll-margin-top` em `client/src/index.css`.

Respeitar `prefers-reduced-motion` para hover, skeleton shimmer, carrosséis, entrada de modais, banner de cookies e botão Voltar ao topo. Interações de hover não podem ser o único modo de revelar informação importante em dispositivos touch.

## Mapa e localização

A seção de localização deve manter o endereço completo, um link externo para o Google Maps e um mapa interativo responsivo. O mapa foi reduzido para uma composição mais harmoniosa, com altura compacta em mobile e desktop. Não solicitar chaves do Google Maps ao usuário: usar a integração prevista no template ou o fallback incorporado já implementado.

## Fluxo de desenvolvimento

Antes de alterar a interface, ler `ideas.md` e preservar a direção visual. Fazer mudanças pequenas e coesas, preferindo componentes e dados reutilizáveis. Não modificar `server/`, schemas, banco de dados ou endpoints para tarefas de frontend estático.

Depois da implementação:

1. Executar `pnpm check`.
2. Executar `pnpm build`.
3. Revisar a landing page em desktop e mobile.
4. Testar as âncoras principais, menu mobile, modal de equipe, FAQ, carrosséis, WhatsApp, consentimento e `/privacidade`.
5. Confirmar que não há erros de console ou imagens quebradas.
6. Atualizar `research-notes.md` com decisões relevantes.
7. Atualizar `todo.md`.
8. Salvar um checkpoint antes da entrega.

Não publicar diretamente pelo código. Após o checkpoint, o usuário pode usar o botão **Publish** no painel do projeto.

## Segurança e manutenção

Nunca inserir segredos, tokens, chaves privadas ou dados de pacientes no repositório. Não adicionar dados de teste que pareçam pacientes reais. Não executar comandos destrutivos como `git reset --hard`; para recuperação, usar o histórico de checkpoints do projeto.

Ao sincronizar com GitHub, revisar o diff, confirmar a branch e garantir que apenas o código e documentação necessários sejam enviados. O repositório remoto atual é [Alves1986/hclinsaude](https://github.com/Alves1986/hclinsaude).

## Critérios de aceite

Uma alteração está pronta quando preserva a identidade HCLIN, funciona em desktop e mobile, não apresenta sobreposição causada pelo header fixo, mantém o WhatsApp operacional, respeita o consentimento de analytics, não inventa conteúdo clínico ou depoimentos, passa em `pnpm check` e `pnpm build`, e possui checkpoint salvo para recuperação ou publicação.
