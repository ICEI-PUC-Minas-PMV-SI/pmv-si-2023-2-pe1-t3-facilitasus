# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1 - Maria Silva, 35 anos, é mãe de duas crianças e trabalha em período integral. Ela tem uma vida agitada e precisa de um sistema de agendamento de consultas que seja rápido e eficiente para gerenciar sua saúde e a de sua família. <br>
2 - Carlos Santos, 42 anos, é um trabalhador autônomo e pai de três filhos. Ele deseja agendar uma consulta médica pelo SUS e precisa entender claramente os protocolos e documentos necessários para evitar contratempos. <br>
3 - Dra. Ana Oliveira, 38 anos, é uma médica com uma clínica privada. Ela precisa de uma solução que lhe permita gerenciar eficazmente seu calendário de consultas para manter sua agenda organizada e assegurar que tenha tempo suficiente para preparação entre as consultas. <br>
4 - Dona Joana Souza, 75 anos, é uma idosa que prefere métodos tradicionais de agendamento. Ela deseja a opção de ligar para um número de telefone e falar com um assistente virtual para agendar uma consulta médica, evitando a necessidade de usar a internet. <br>
5 - Carolina Ferreira, 29 anos, trabalha como atendente em uma clínica médica. Ela precisa de acesso fácil às informações de agendamento dos pacientes para fornecer assistência rápida, confirmar horários ou reagendar consultas conforme necessário. <br>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`     | QUERO/PRECISO ... `FUNCIONALIDADE`           | PARA ... `MOTIVO/VALOR`                    |
|-------------------------|----------------------------------------------|--------------------------------------------|
| Paciente do SUS         | Agendar uma consulta com médico              | Acesso rápido e remoto                     |
| Paciente do SUS         | Entender sobre os protocolos do SUS          | Informação sobre os protocolos             |
| Paciente do SUS         | Agendar de forma tradicional ou por telefone | Falta de informação sobre a internet       |
| Médica de Rede Privada  | Manter agenda de pacientes organizada        | Informação sobre as consultas              |
| Atendente do SUS        | Acesso fácil ás informações dos pacientes    | Informação sobre as consultas e horários   |
|-------------------------|----------------------------------------------|--------------------------------------------|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID       |      Descrição do Requisito                          |  Prioridade  |
|----------|------------------------------------------------------|--------------|
|RF-001    | Permitir que o usuário agende consulta               |    ALTA      |
|RF-002    | Permitir que o usuário saiba os horários disponíveis |    ALTA      |
|RF-003    | Gerar uma confirmação de agendamento para o paciente |    ALTA      |
|RF-004    | Acessar e gerenciar seus calendários de consultas    |    ALTA      |
|RF-005    | Agendamento por telefone, com assistente virtual     |    MÉDIA     |
|RF-005    | Visualização das informações de protocolos           |    MÉDIA     |
|----------|------------------------------------------------------|--------------|


### Requisitos não Funcionais

| ID       |              Descrição do Requisito                                 |  Prioridade  |
|----------|---------------------------------------------------------------------|--------------|
|RNF-001| interface deve ser intuitiva e fácil de usar para todas pessoas        |    ALTA      |
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
