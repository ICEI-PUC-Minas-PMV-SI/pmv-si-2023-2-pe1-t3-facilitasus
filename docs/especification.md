# Especificações do Projeto

O objetivo principal é criar uma plataforma de agendamento médico eficiente, com um sistema intuitivo para os pacientes marcarem exames e consultas. Isso inclui escolher profissionais de saúde, datas e locais de atendimento. Também se foca na simplicidade e rapidez no agendamento, eliminando obstáculos tradicionais. Além disso, o projeto busca fornecer informações completas sobre requisitos e protocolos para evitar atrasos, incluindo documentação necessária, preparação para exames e orientações de chegada. O objetivo é eliminar a falta de informação como uma barreira para o agendamento eficaz.

## Personas

1 - Maria Silva, 35 anos, é mãe de duas crianças e trabalha em período integral. Ela tem uma vida agitada e precisa de um sistema de agendamento de consultas que seja rápido e eficiente para gerenciar sua saúde e a de sua família.

2 - Carlos Santos, 42 anos, é um trabalhador autônomo e pai de três filhos. Ele deseja agendar uma consulta médica pelo SUS e precisa entender claramente os protocolos e documentos necessários para evitar contratempos

3 - Dra. Ana Oliveira, 38 anos, é uma médica com uma clínica privada. Ela precisa de uma solução que lhe permita gerenciar eficazmente seu calendário de consultas para manter sua agenda organizada e assegurar que tenha tempo suficiente para preparação entre as consultas

4 - Dona Joana Souza, 75 anos, é uma idosa que prefere métodos tradicionais de agendamento. Ela deseja a opção de ligar para um número de telefone e falar com um assistente virtual para agendar uma consulta médica, evitando a necessidade de usar a internet.

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

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID       |      Descrição do Requisito                          |  Prioridade  |
|----------|------------------------------------------------------|--------------|
|RF-001    | Permitir que os usuários preencham campos obrigatórios, como nome, e-mail e senha, para criar uma conta.             |    ALTA      |
|RF-002    | Validar os dados inseridos pelos usuários para evitar registros inválidos.            |    ALTA      |
|RF-003    | Mostrar mensagem de confirmação após um novo usuário ter sido registrado com sucesso.         |    ALTA      |
|RF-004    |  Permitir que os usuários entrem em suas contas usando seu e-mail e senha.    |    ALTA      |
|RF-005    | Autenticar as credenciais dos usuários e redirecioná-los para a tela principal após o login bem-sucedido. | ALTA  |
|RF-006    | Permitir que os usuários interajam com os artigos, protocolos e outros elementos na tela principal.    |    MÉDIA     |
|RF-007    | Implementar um sistema de notificação que atualiza quando o usuário recebe novas mensagens ou atualizações relevantes.| MÉDIA |
|RF-008    | Exibir lista de protocolos e permitir que os usuários cliquem em um protocolo para visualizar detalhes. |    ALTA     |
|RF-009    | Permitir que os usuários insiram mensagens com título, tipo e conteúdo relacionados ao atendimento. |    ALTA     |


### Requisitos não Funcionais

| ID       |              Descrição do Requisito                                 |  Prioridade  |
|----------|---------------------------------------------------------------------|--------------|
|RNF-001| Garantir que todas as telas sejam responsivas, ajustando-se automaticamente para proporcionar uma experiência de usuário otimizada em dispositivos desktop, tablet e mobile.        |    ALTA      |
|RNF-002| Garantir que todas as operações, como carregamento de páginas, pesquisa de protocolos e envio de mensagens, sejam executadas de forma rápida e eficiente, proporcionando uma experiência do usuário sem atrasos perceptíveis.  |  ALTA        | 
|RNF-003| Garantir que as senhas dos usuários sejam armazenadas de forma segura, utilizando técnicas para proteger contra ataques de segurança. | ALTA |
|RNF-004| O sistema deve suportar simultaneamente um grande número de usuários agendando consultas. | MÉDIA |
|RNF-005| Manter uma interface do usuário intuitiva e fácil de usar, com navegação clara e elementos de design consistentes em todas as telas. | MÈDIA |
|RNF-006| A plataforma de agendamento deve estar disponível 24/7 para os pacientes agendarem consultas a qualquer momento. | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| A equipe para o projeto é limitada em termos de tamanho e experiência técnica |
|04| Dada a combinação de restrições, pode ser necessário reduzir o escopo original do projeto |
|05| Restrito a usar um conjunto específico de tecnologias e ferramentas para o desenvolvimento da solução, visto a falta de conhecimento |
|06| Devido ao tempo e recursos limitados, o suporte a vários idiomas pode não ser viável inicialmente, limitando-se a um idioma específico. |
