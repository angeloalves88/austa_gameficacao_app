# Score Saúde - Gamificação

App mobile de gamificação para operadora de saúde. Desenvolvido para oficina de inovação.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5173. Para simular mobile, use DevTools (F12) e ative o modo responsivo (375px).

## Deploy no Vercel

1. Faça push do código para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. **New Project** → importe o repositório
4. Framework Preset: **Vite** (detectado automaticamente)
5. Deploy → o link será `score-saude-xxx.vercel.app`

## Telas

- **Home** – Início, card de teleconsulta, feed de atividade
- **Pré-Anamnese** – Seleção de sintomas (Passo 1)
- **Confirmação** – Resumo e benefícios (Passo 2)
- **Fila de Espera** – Simulação de fila (Passo 3)
- **Agendamentos** – Lista e agendamento de exames
- **Benefícios** – Saldo de pontos e descontos
- **Perfil** – Histórico e conquistas
