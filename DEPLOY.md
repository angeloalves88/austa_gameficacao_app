# Deploy do Score Saúde na Vercel

Este documento explica como publicar o app Score Saúde na Vercel para que os participantes da oficina de inovação possam acessar e testar via link.

---

## Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta na [Vercel](https://vercel.com) (gratuita)
- Git instalado no computador

---

## Passo 1: Preparar o repositório no GitHub

### 1.1 Inicializar o Git (se ainda não fez)

```bash
cd score-saude
git init
```

### 1.2 Criar o primeiro commit

```bash
git add .
git commit -m "Score Saúde - app de gamificação para operadora"
```

### 1.3 Criar o repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Dê um nome ao repositório (ex: `score-saude`)
3. Escolha **Public**
4. **Não** marque "Add a README file" (o projeto já existe)
5. Clique em **Create repository**

### 1.4 Enviar o código para o GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/score-saude.git
git branch -M main
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

---

## Passo 2: Deploy na Vercel

### 2.1 Conectar à Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Sign Up** ou **Log In**
3. Escolha **Continue with GitHub** para vincular suas contas

### 2.2 Importar o projeto

1. Clique em **Add New...** → **Project**
2. Na lista de repositórios, encontre **score-saude** (ou o nome que você usou)
3. Clique em **Import**

### 2.3 Verificar as configurações

A Vercel detecta automaticamente o Vite. Confira se está assim:

| Configuração      | Valor            |
|-------------------|------------------|
| Framework Preset  | Vite             |
| Build Command     | `npm run build`  |
| Output Directory  | `dist`           |
| Root Directory    | `./`             |

Não é necessário alterar nada na maioria dos casos.

### 2.4 Fazer o deploy

1. Clique em **Deploy**
2. Aguarde 1–2 minutos
3. Quando terminar, clique em **Visit** para abrir o app

---

## Resultado

O app estará disponível em uma URL como:

```
https://score-saude-xxxxxxxx.vercel.app
```

Ou, se configurar um domínio personalizado:

```
https://score-saude.vercel.app
```

**Compartilhe esse link** com os participantes da oficina para que possam acessar e testar o app pelo celular ou computador.

---

## Atualizações futuras

Toda vez que você fizer alterações no código:

```bash
git add .
git commit -m "Descrição da alteração"
git push
```

A Vercel fará o deploy automaticamente. Em 1–2 minutos o link já terá a nova versão.

---

## Dica: usar como app no celular

Para uma experiência mais próxima de app nativo:

- **Android (Chrome):** Abra o link → Menu (⋮) → **Adicionar à tela inicial**
- **iOS (Safari):** Abra o link → Compartilhar → **Adicionar à Tela de Início**

O app poderá ser aberto pelo ícone na tela inicial, sem passar pela loja.

---

## Problemas comuns

### O build falhou

- Confirme que `npm run build` funciona localmente
- Veja os logs de build na Vercel para identificar o erro

### A página não carrega ao acessar /agendamentos diretamente

O projeto já inclui `vercel.json` com as regras de rewrite para SPA. Se o problema continuar, verifique se o arquivo existe na raiz do projeto.

### O link mudou após novo deploy

- A URL padrão da Vercel permanece a mesma (ex: `score-saude.vercel.app`)
- Cada deploy gera uma URL de preview, mas a de produção segue igual

---

## Deploy em VPS com Docker + Traefik (Portainer)

Se você tem uma VPS com Portainer e Traefik, use o `docker-compose.yml` incluído no projeto.

### Pré-requisitos

- Docker e Portainer na VPS
- Traefik rodando em container (geralmente na rede `traefik`)
- Domínio ou subdomínio configurado (ou IP da VPS)

### Passo 1: Configurar o domínio

Crie um arquivo `.env` na raiz do projeto:

```
APP_DOMAIN=score-saude.seudominio.com
```

Para teste local, use `localhost`.

### Passo 2: Subir pelo Portainer

**Opção A – Build a partir do Git (recomendado):**

1. No Portainer, vá em **Stacks** → **Add stack**
2. Nome: `score-saude`
3. Selecione **Build from repository**
4. Repositório: `https://github.com/angeloalves88/austa_gameficacao_app` (ou seu fork)
5. Compose path: `docker-compose.yml`
6. **Environment variables**: adicione `APP_DOMAIN` = `score-saude.seudominio.com`
7. Clique em **Deploy the stack**

**Opção B – Via linha de comando na VPS:**

```bash
# Clone o projeto na VPS
git clone https://github.com/angeloalves88/austa_gameficacao_app.git
cd austa_gameficacao_app

# Configure o domínio
cp .env.example .env
nano .env   # defina APP_DOMAIN=seu-dominio.com

# Suba (a rede traefik já existe se o Traefik está rodando)
docker compose up -d --build
```

### Rede do Traefik

Se a rede do seu Traefik tiver outro nome (ex: `traefik_default`), altere no `docker-compose.yml`:

```yaml
networks:
  traefik:
    external: true
# Troque "traefik" pelo nome da rede do seu Traefik
```

### Verificar

- Acesse `http://APP_DOMAIN` (ou `https://` se tiver TLS no Traefik)
- Se usar apenas IP: defina `APP_DOMAIN=ipdavps` e confira as entradas do Traefik (entrypoints)
