# Guia de Deploy - Site Právia

## 📋 Checklist Pré-Deploy

Antes de fazer o deploy, certifique-se de:

- [ ] Substituir `GA_MEASUREMENT_ID` pelo ID real do Google Analytics
- [ ] Atualizar número do WhatsApp no App.jsx
- [ ] Configurar integração do formulário de contato
- [ ] Testar o site localmente com `pnpm run build && pnpm run preview`
- [ ] Verificar todas as imagens estão carregando
- [ ] Testar responsividade em diferentes dispositivos

## 🚀 Opções de Deploy

### 1. GitHub Pages (Recomendado)

#### Configuração Automática
1. Faça push do código para o repositório GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 2. Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure as seguintes opções:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`
3. Deploy automático a cada push

### 3. Vercel

1. Conecte seu repositório GitHub ao Vercel
2. Vercel detectará automaticamente as configurações
3. Deploy automático a cada push

### 4. Deploy Manual

Para deploy em servidor próprio:

```bash
# 1. Construir o projeto
pnpm run build

# 2. Os arquivos estarão na pasta 'dist'
# 3. Faça upload dos arquivos da pasta 'dist' para seu servidor web
```

## ⚙️ Configurações Específicas

### Vite Config para GitHub Pages

Se estiver usando GitHub Pages com subpath, atualize `vite.config.js`:

```javascript
export default defineConfig({
  base: '/nome-do-repositorio/',
  // ... resto da configuração
})
```

### Variáveis de Ambiente

Para diferentes ambientes, crie arquivos:
- `.env.local` (desenvolvimento)
- `.env.production` (produção)

Exemplo:
```
VITE_GA_ID=G-XXXXXXXXXX
VITE_WHATSAPP_NUMBER=5511999999999
```

## 🔧 Troubleshooting

### Problema: Imagens não carregam
**Solução**: Verifique se todas as imagens estão na pasta `src/assets/`

### Problema: Roteamento não funciona
**Solução**: Configure redirects no seu provedor de hosting

### Problema: Build falha
**Solução**: 
1. Limpe node_modules: `rm -rf node_modules pnpm-lock.yaml`
2. Reinstale: `pnpm install`
3. Tente novamente: `pnpm run build`

## 📊 Monitoramento Pós-Deploy

Após o deploy, monitore:
- [ ] Google Analytics funcionando
- [ ] Formulário de contato enviando emails
- [ ] WhatsApp redirecionando corretamente
- [ ] Site carregando em diferentes dispositivos
- [ ] Performance no Google PageSpeed Insights

## 🔄 Atualizações Futuras

Para atualizações do site:
1. Faça as alterações localmente
2. Teste com `pnpm run dev`
3. Construa com `pnpm run build`
4. Faça commit e push para o repositório
5. Deploy automático será executado

---

**Qualquer dúvida, consulte a documentação do provedor de hosting escolhido.**
