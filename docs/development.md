# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais & Não Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir que os usuários preencham campos obrigatórios, como nome, e-mail e senha, para criar uma conta. | ALTA | SignIn.html |
|RF-002| Permitir que um usuário já registrado, realize o login. | ALTA | LoginPage.html |
|RF-003| Permitir que os usuários interajam com os artigos, protocolos na tela principal. | ALTA | Home.html |
|RF-004| Permitir que os usuários visualizem suas informações e complete os dados | ALTA | Perfil.html |
|RF-005| Exibir lista de protocolos e permitir que os usuários cliquem em um protocolo para visualizar detalhes. | MÉDIA | Atendimento.html |
|RF-007| Permitir que o usuário envie mensagem para o administrador do sistema. | MÉDIA | ProtocolosPage.html |
| | | | |
|RNF-001| Garantir que todas as telas sejam responsivas, ajustando-se automaticamente para proporcionar uma experiência de usuário otimizada em dispositivos desktop, tablet e mobile.        |    ALTA      |
|RNF-002| Garantir que todas as operações, como carregamento de páginas, pesquisa de protocolos e envio de mensagens, sejam executadas de forma rápida e eficiente, proporcionando uma experiência do usuário sem atrasos perceptíveis.  |  ALTA        | 
|RNF-003| Garantir que as senhas dos usuários sejam armazenadas de forma segura, utilizando técnicas para proteger contra ataques de segurança. | ALTA |
|RNF-004| O sistema deve suportar simultaneamente um grande número de usuários agendando consultas. | MÉDIA |
|RNF-005| Manter uma interface do usuário intuitiva e fácil de usar, com navegação clara e elementos de design consistentes em todas as telas. | MÈDIA |
|RNF-006| A plataforma de agendamento deve estar disponível 24/7 para os pacientes agendarem consultas a qualquer momento. | MÉDIA |

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
| Título         | Texto             | Título do protocolo                         | Como faço tal coisa?                                  |
| Tipo | Opções  | Ajuda ou Consulta ou Exame ou Contato| Ajuda (selecionado)
| Conteúdo         | Texto             | Conteúdo da mensagem                     | Conteúdo da mensagem... Conteúdo da mensagem...                           |

