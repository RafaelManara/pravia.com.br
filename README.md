# Site Právia - Consultoria de Negócios

Site institucional moderno e responsivo para a Právia, consultoria de negócios especializada em gerar resultados concretos e mensuráveis.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Menu fixo com scroll suave entre seções
- **Cores da Marca**: Paleta oficial Pantone 7462 (#00548C) e Pantone 306 (#00B3E4)
- **Estilo Visual Híbrido**: Combinação de silhuetas corporativas com elementos gráficos modernos
- **Formulário de Contato**: Sistema funcional de envio de mensagens
- **Botão WhatsApp**: Acesso direto para contato via WhatsApp
- **Google Analytics**: Preparado para rastreamento de visitantes

## 📋 Seções do Site

1. **Início (Hero)** - Apresentação principal com call-to-action
2. **Quem Somos** - História e conceito da empresa
3. **Como Trabalhamos** - Os 3 pilares da metodologia
4. **Nossos Serviços** - 5 territórios de atuação detalhados
5. **Contato** - Formulário e informações de contato

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de interface
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações suaves

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd pravia-site

# Instale as dependências
pnpm install

# Execute em modo desenvolvimento
pnpm run dev

# Construa para produção
pnpm run build

# Visualize a build de produção
pnpm run preview
```

## 🌐 Deploy

### GitHub Pages
1. Faça push do código para o repositório GitHub
2. Vá em Settings > Pages
3. Configure source para "GitHub Actions"
4. O site será automaticamente deployado

### Netlify/Vercel
1. Conecte seu repositório GitHub
2. Configure build command: `pnpm run build`
3. Configure publish directory: `dist`
4. Deploy automático a cada push

## ⚙️ Configurações Importantes

### Google Analytics
1. Substitua `GA_MEASUREMENT_ID` no arquivo `index.html` pelo seu ID real
2. Exemplo: `G-XXXXXXXXXX`

### WhatsApp
1. Atualize o número no componente App.jsx
2. Linha: `href="https://wa.me/5511999999999"`
3. Substitua pelo número real da Právia

### Email do Formulário
O formulário atualmente exibe um alerta. Para funcionalidade completa:
1. Integre com um serviço como Formspree, Netlify Forms ou EmailJS
2. Atualize a função `handleSubmit` no App.jsx

## 📁 Estrutura de Arquivos

```
pravia-site/
├── public/
├── src/
│   ├── assets/          # Imagens e recursos
│   ├── components/ui/   # Componentes UI
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos customizados
│   └── main.jsx        # Ponto de entrada
├── dist/               # Build de produção
├── package.json
└── README.md
```

## 🎨 Paleta de Cores

- **Azul Principal**: #00548C (Pantone 7462)
- **Azul Secundário**: #00B3E4 (Pantone 306)
- **Branco**: #FFFFFF
- **Cinza Escuro**: #333333
- **Cinza Claro**: #F8F9FA

## 📱 Funcionalidades

- ✅ Menu fixo responsivo
- ✅ Navegação suave entre seções
- ✅ Alternância de fundos claro/escuro
- ✅ Formulário de contato com validação
- ✅ Botão WhatsApp flutuante
- ✅ Botão scroll to top
- ✅ Animações fade-in
- ✅ Hover effects
- ✅ SEO otimizado
- ✅ Meta tags sociais

## 📞 Contato

Para dúvidas sobre o desenvolvimento do site:
- Email: contato@pravia.com.br
- Site: pravia.com.br
- LinkedIn: linkedin.com/company/pravia-consultoria

---

**Desenvolvido com ❤️ para a Právia Consultoria**
