# Especificações do Projeto

O objetivo principal é criar uma plataforma de agendamento médico eficiente, com um sistema intuitivo para os pacientes marcarem exames e consultas. Isso inclui escolher profissionais de saúde, datas e locais de atendimento. Também se foca na simplicidade e rapidez no agendamento, eliminando obstáculos tradicionais. Além disso, o projeto busca fornecer informações completas sobre requisitos e protocolos para evitar atrasos, incluindo documentação necessária, preparação para exames e orientações de chegada. O objetivo é eliminar a falta de informação como uma barreira para o agendamento eficaz.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`     | QUERO/PRECISO ... `FUNCIONALIDADE`           | PARA ... `MOTIVO/VALOR`                    |
|-------------------------|----------------------------------------------|--------------------------------------------|
| Paciente do SUS         | Entender sobre os protocolos do SUS          | Informação sobre os protocolos             |
| Usuário do FacilitaSUS  | Enviar mensagens ao administrador do sistema | Falta de informação sobre a internet       |
| Usuário do FacilitaSUS  | Editar        | Informação sobre as consultas              |
| Atendente do SUS        | Acesso fácil ás informações dos pacientes    | Informação sobre as consultas e horários   |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID       |      Descrição do Requisito                          |  Prioridade  |
|----------|------------------------------------------------------|--------------|
|RF-001    | Permitir que os usuários preencham campos obrigatórios, como nome, e-mail e senha, para criar uma conta.             |    ALTA      |
|RF-002    | Permitir que um usuário já registrado, realize o login.           |    ALTA      |
|RF-003    | Permitir que os usuários interajam com os artigos, protocolos na tela principal.    |    ALTA     |
|RF-004    | Permitir que os usuários visualizem suas informações e complete os dados  |    MÉDIA     |
|RF-005    | Exibir lista de protocolos e permitir que os usuários cliquem em um protocolo para visualizar detalhes. |    MÉDIA     |
|RF-006    | Exibir lista de artigos e permitir que os usuários cliquem em um artigo para ser redirecionado para a notícia. |   MÉDIA     |
|RF-007    | Permitir que o usuário envie mensagem para o administrador do sistema. |   MÉDIA     |



### Requisitos não Funcionais

| ID       |              Descrição do Requisito                                 |  Prioridade  |
|----------|---------------------------------------------------------------------|--------------|
|RNF-001| Garantir que todas as telas sejam responsivas, ajustando-se automaticamente para proporcionar uma experiência de usuário otimizada em dispositivos desktop, tablet e mobile.        |    ALTA      |
|RNF-002| Garantir que todas as operações, como carregamento de páginas, pesquisa de protocolos e envio de mensagens, sejam executadas de forma rápida e eficiente, proporcionando uma experiência do usuário sem atrasos perceptíveis.  |  ALTA        | 
|RNF-003| Garantir que as senhas dos usuários sejam armazenadas de forma segura, utilizando técnicas para proteger contra ataques de segurança. | ALTA |
|RNF-004| Manter uma interface do usuário intuitiva e fácil de usar, com navegação clara e elementos de design consistentes em todas as telas. | MÈDIA |

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
