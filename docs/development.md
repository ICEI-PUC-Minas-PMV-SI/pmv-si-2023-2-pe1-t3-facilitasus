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
|RF-001| Permitir que pacientes agendem consultas com médicos de sua escolha | ALTA | Atendimento.html |
|RF-003| Visualização das informações de protocolos | ALTA | ProtocolosPage.html |
|RNF-001| Interface deve ser intuitiva e fácil de usar para todas pessoas | ALTA | *.html |
|RNF-002| Responder de forma rápida e eficiente, minimizando o tempo de espera | ALTA | *.html |
|RNF-005| O sistema deve ser acessível por meio de diferentes dispositivos, como computadores, smartphones e telefones. | ALTA | *.html |

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

