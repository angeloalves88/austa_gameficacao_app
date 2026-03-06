# Funcionalidades e Regras – Score Saúde

Aplicativo de gamificação em saúde que incentiva o uso de telemedicina antes do Pronto Atendimento (PA), promovendo cuidado adequado e evitando uso desnecessário de emergências.

---

## Visão Geral

O **Score Saúde** é um app para participantes de programas de saúde que:
- Atribui **pontos** conforme o comportamento de uso (telemedicina x PA direto)
- Oferece **níveis** e **badges** por metas atingidas
- Concede **benefícios** e **descontos** baseados no score
- Permite **números da sorte** para sorteios (conforme meses de bom uso)
- Incentiva **agendamento de exames preventivos** em dia

---

## Telas e Funcionalidades

### 🏠 Início (`/`)
- Resumo do perfil: nome, nível, score e progresso para o próximo nível
- Ações rápidas:
  - **Preciso de atendimento** → inicia fluxo de teleconsulta
  - **Vou direto ao PA** → uso do Pronto Atendimento (impacta score)
- Feed de atividades recentes (histórico de ações e pontos)

### 📞 Teleconsulta (fluxo em 3 passos)

| Passo | Rota | Funcionalidade |
|-------|------|----------------|
| 1 | `/teleconsulta` | Triagem: seleção de sintomas, intensidade (1–10), duração (hoje / 2–3 dias / +3 dias), descrição opcional |
| 2 | `/teleconsulta/confirmacao` | Resumo dos sintomas, reforço dos benefícios (manter pontos + 50% desconto no PA se encaminhado) |
| 3 | `/teleconsulta/fila` | Fila de espera simulada, tempo estimado (~8 min), posição na fila, barra de progresso |

**Regra:** sem dados da triagem na confirmação → redireciona para `/teleconsulta`.

### 📅 Agendamentos (`/agendamentos`)
- Lista de consultas e exames
- Consultas **confirmadas** exibidas com data e status
- Exames **atrasados** (ex.: preventivos) com aviso e botão para agendar
- Modal de agendamento: horários fixos (08:00, 09:30, 11:00, 14:00, 15:30, 17:00)
- Ao confirmar agendamento de exame pendente: **+100 pts** creditados (toast de confirmação)

### 💳 Benefícios (`/beneficios`)
- **Saldo de pontos** atual
- **Números da sorte** para concorrer a sorteios (ex.: 6 meses com 1 uso incorreto = 5 números)
- **Descontos ativos** (ex.: 50% na coparticipação, 20% em exames, prioridade no agendamento)

### 👤 Perfil (`/perfil`)
- Dados do usuário (nome, empresa)
- Gráfico de evolução do score por mês
- **Badges/conquistas** (Uso Consciente, Streak 3 meses, Preventivo Ouro, etc.)
- Histórico de eventos que impactaram o score

---

## Regras de Pontuação

| Ação | Impacto no score |
|------|------------------|
| Início do programa | Score inicial 100 pts |
| Usar telemedicina e ser orientado | Mantém score (sem alteração) |
| Usar telemedicina e ser encaminhado ao PA | Mantém score + 50% desconto na coparticipação |
| Não usar o PA no mês | Mantém ou recupera score em 100 |
| Ir ao PA **sem** telemedicina (caso não urgente) | **-10 pts** |
| Agendar exame preventivo atrasado | **+100 pts** |

**Score máximo:** 100 pts.

---

## Regras dos Números da Sorte

- Usados para **concorrer a sorteios**
- Quantidade baseada em meses de uso correto (ex.: 6 meses total, 1 incorreto → 5 números da sorte)
- Exibidos na tela de Benefícios ao lado do saldo de pontos

---

## Regras do Gráfico de Score (Perfil)

- **Score ≥ 100** → barras em verde
- **Score < 100** → barras em amarelo
- Histórico mensal de evolução do score

---

## Navegação

- **Menu inferior (BottomNav):** Início, Agendamentos, Benefícios, Perfil
- Escondido nas telas do fluxo de teleconsulta (`/teleconsulta`, `/teleconsulta/confirmacao`, `/teleconsulta/fila`)

---

## Sintomas (triagem)

Lista disponível para seleção na pré-anamnese:
- Febre, Falta de ar, Náusea, Dor de cabeça
- Tosse, Dor de garganta, Dor no corpo, Fraqueza

---

## Observações Técnicas

- Dados em **mock** (não há backend integrado)
- Pontuação e níveis exibidos estão fixos no mock
- O +100 pts ao agendar exame é apenas visual; não atualiza o score no mock
- Fluxo de teleconsulta é simulado (fila e tempo estimado)
