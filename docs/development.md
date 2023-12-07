# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais & Não Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir que os usuários preencham campos obrigatórios, como nome, e-mail e senha, para criar uma conta. | ALTA | SignIn.html |
|RF-002| Permitir que um usuário já registrado, realize o login. | ALTA | LoginPage.html |
|RF-003| Permitir que os usuários interajam com os artigos, protocolos na tela principal. | ALTA | Home.html |
|RF-004| Permitir que os usuários visualizem suas informações e complete os dados | ALTA | Perfil.html |
|RF-005| Exibir lista de protocolos e permitir que os usuários cliquem em um protocolo para visualizar detalhes. | MÉDIA | ProtocolosPage.html |
|RF-006| Permitir que o usuário envie mensagem para o administrador do sistema. | MÉDIA | Atendimento.html |
| | | | |
|RNF-001| Garantir que todas as telas sejam responsivas, ajustando-se automaticamente para proporcionar uma experiência de usuário otimizada em dispositivos desktop, tablet e mobile.        |    ALTA      |
|RNF-002| Garantir que todas as operações, como carregamento de páginas, pesquisa de protocolos e envio de mensagens, sejam executadas de forma rápida e eficiente, proporcionando uma experiência do usuário sem atrasos perceptíveis.  |  ALTA        | 
|RNF-003| Garantir que as senhas dos usuários sejam armazenadas de forma segura, utilizando técnicas para proteger contra ataques de segurança. | ALTA |
|RNF-004| Manter uma interface do usuário intuitiva e fácil de usar, com navegação clara e elementos de design consistentes em todas as telas. | MÈDIA |

## Descrição das estruturas:

## Usuários
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome        | Texto             | Nome do usuário                      | Davih Duque                                |
| Email     | Texto             | Email do usuário                       | duque@gmail.com                          |
| Senha | Senha  | Senha com censura e tratamento e segurança | ********* |

## Mensagem
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| ID do usuário         | Texto             | ID criado para o usuário                         | UUID (862b6406-36ab-4b53-8d19-a6ec2abd190b)                                |
| Título         | Texto             | Título do protocolo                         | Como faço tal coisa?                                  |
| Tipo | Opções  | Ajuda ou Consulta ou Exame ou Contato| Ajuda (selecionado)
| Conteúdo         | Texto             | Conteúdo da mensagem                     | Conteúdo da mensagem... Conteúdo da mensagem...                           |

