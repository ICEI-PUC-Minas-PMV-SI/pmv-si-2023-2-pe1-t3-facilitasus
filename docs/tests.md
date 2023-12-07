## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, email, senha e clica no botão "Cadastrar".<br>2) A aplicação verifica se o email foi cadastrado e informa ao usuário caso não foi.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a tela de Login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Entrar na aplicação**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa email, senha e clica no botão "Entrar".<br>2) A aplicação verifica se o usuário foi cadastrado e informa ao usuário caso não foi.
**Requisitos associados** | RF-002
**Resultado esperado** | Prosseguir para a tela principal da aplicação.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Interagir com artigos e protocolos**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica no respectivo artigo ou protocolo <br>2) A aplicação redireciona para o respectivo clicado.
**Requisitos associados** | RF-003
**Resultado esperado** | Prosseguir para a tela de respectivo clicado.
**Dados de entrada** | Clique.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Visualizar e completar informações**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica no botão do perfil <br>2) A aplicação redireciona para a tela de perfil. <br>3) O usuário clica e preenche as informações
**Requisitos associados** | RF-004
**Resultado esperado** | Inserção de dados e salvamento de dados.
**Dados de entrada** | Dados a serem atualizados e salvos.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Enviar mensagem ao desenvolvedor**
 :--------------: | ------------
**Procedimento**  | 1) Confere se o usuário tá logado <br>2) Usuário informa o título, tipo e o contéudo da mensagem.
**Requisitos associados** | RF-006
**Resultado esperado** | Envio de mensagem ao admin do sistema e adicionando ao usuário sua mensagem
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Garantir responsividade de todas as páginas**
 :--------------: | ------------
**Procedimento**  | 1) Confere a resolução da tela e adapta os elementos.
**Requisitos associados** | RNF-001
**Resultado esperado** | Adaptação dos elementos das páginas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Garantir segurança de senhas do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Pega a senha e usa um algoritmo para salvar de forma segura.
**Requisitos associados** | RNF-003
**Resultado esperado** | Salvamento de senhas com segurança
**Dados de entrada** | Inserção de senha.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Lembre-se de colocar na melhor resolução possível (1080p).

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001	Permitir que os usuários preencham campos obrigatórios, como nome, e-mail e senha, para criar uma conta. |
|Link do vídeo do teste realizado: |[Teste de criação de conta](https://drive.google.com/file/d/1goAiS7gt9uGn2h0yGS8bxzLpInS6iYg1/view?usp=sharing)| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-002	Permitir que um usuário já registrado, realize o login.|
|Link do vídeo do teste realizado: | [Teste de login na aplicação](https://drive.google.com/file/d/1mxWUKxoHVg5sB_dIyEIhEy0X1H1mcXTc/view?usp=sharing) | 

|*Caso de Teste*                                 |*TC-03 - Interagir com artigos e protocolos*                                         |
|---|---|
|Requisito Associado | RF-003	Permitir que os usuários interajam com os artigos, protocolos na tela principal.|
|Link do vídeo do teste realizado: | [Teste de interação](https://drive.google.com/file/d/10KvGJt3o9iK6foH4w8Ho-DAvFZP75e7-/view?usp=sharing) | 

|*Caso de Teste*                                 |*TC-04 - Visualizar e completar informações*                                         |
|---|---|
|Requisito Associado | RF-004	Permitir que os usuários visualizem suas informações e complete os dados.|
|Link do vídeo do teste realizado: | [Teste de edição de dados](https://drive.google.com/file/d/1w7o7l06Ulp1IGLw_Jj-gwp2O75poglds/view?usp=sharing) | 

|*Caso de Teste*                                 |*TC-05 - Enviar mensagem ao desenvolvedor*                                         |
|---|---|
|Requisito Associado | RF-006	Permitir que o usuário envie mensagem para o administrador do sistema.|
|Link do vídeo do teste realizado: | [Teste de envio de mensagem](https://drive.google.com/file/d/1PtgUwA52v1pW4KjIGOsKuM_QuywH9nzG/view?usp=sharing) | 

|*Caso de Teste*                                 |*TC-06 - Garantir responsividade de todas as páginas*                                         |
|---|---|
|Requisito Associado | RNF-001	Garantir que todas as telas sejam responsivas, ajustando-se automaticamente para proporcionar uma experiência de usuário otimizada em dispositivos desktop, tablet e mobile.|
|Link do vídeo do teste realizado: | [Teste de responsividade](https://drive.google.com/file/d/1naRB42cs7XOwDb1N_-Ans-0AJIlW8fcu/view?usp=sharing) | 

|*Caso de Teste*                                 |*TC-07 - Garantir segurança de senhas do usuários*                                         |
|---|---|
|Requisito Associado | RNF-003	Garantir que as senhas dos usuários sejam armazenadas de forma segura, utilizando técnicas para proteger contra ataques de segurança.|
|Link do vídeo do teste realizado: | [Teste de segurança](https://drive.google.com/file/d/16bAHv69r_TggxL98wI0zYE5fXTmYoFVc/view?usp=sharing) | 


## Avaliação dos Testes de Software

A aplicação apresentou algumas limitações devido à falta de consistência da equipe, impactando as implementações.
Sugestão de aprimoramento na funcionalidade de envio de mensagem ao desenvolvedor para incluir mais edições e melhorias para o usuário.
A edição de dados do usuário está sendo feita como um bloco, sugerindo uma possível melhoria para permitir edições mais singulares.
A interação com artigos e protocolos é limitada devido à falta de cooperação para pesquisa, sugerindo a necessidade de aumentar a quantidade para uma experiência mais rica.

# Testes de Usabilidade

1. Péssimo;
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja encontrar um protocolo referente a marcação de consulta. |
| 2             | Você é uma pessoa que deseja enviar mensagem para o desenvolvedor da aplicação. |
| 3             | Você é uma pessoa que deseja ler um artigo referente a saúde. |
| 4             | Você é uma pessoa que deseja completar/ visualizar os dados inseridos na hora da criação de conta. |




## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja encontrar um protocolo referente a marcação de consulta.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 3                    | 31.32 segundos                  |
| 2       | SIM             | 3                    | 20.17 segundos                  |
| 3       | SIM             | 4                    | 25.23 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 3.33                | 25.57 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15.91 segundos |

    Comentários dos usuários: Achei que o site poderia ter mais detalhes visuais, trazendo uma identidade mais forte e viva para aplicação.
    Acredito a aplicação ficou intuitiva mas vazia, poderia ser algo mais detalhado.

Cenário 2: Você é uma pessoa que deseja enviar mensagem para o desenvolvedor da aplicação.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 2                    | 39.87 segundos                          |
| 2       | SIM             | 3                   | 30.42 segundos                          |
| 3       | SIM             | 4                    | 35.51 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 3               | 35.26 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 26.58 segundos |

    Comentários dos usuários: Ao interagir com o sistema, enfrentei um problema, o campo de tipo não foi exibido. Isso me deixou confuso(a) sobre se deveria digitar as informações     ou selecionar uma opção a partir das disponíveis.
    Ao enviar a mensagem, senti a necessidade de visualizar ela por completo e ver se tudo que eu tinha a dizer ficou claro, mas só tem uma previsualização muito pequena
    
Cenário 3: Você é uma pessoa que deseja ler um artigo referente a saúde.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 20.54 segundos                          |
| 2       | SIM             | 5                    | 15.22 segundos                          |
| 3       | SIM             | 5                    | 25.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 18.62 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |

    Comentários dos usuários: Ao abrir o artigo, uma nova aba foi gerada, e o carregamento da tela demorou para ser concluído. Esse atraso pode ser considerado um obstáculo no caminho, prejudicando a fluidez.
    

Cenário 4: Você é uma pessoa que deseja completar/ visualizar os dados inseridos na hora da criação de conta.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 3                   | 35.20 segundos                          |
| 2       | SIM             | 4                    | 26.42 segundos                          |
| 3       | SIM             | 4                    | 28.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 3.66                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 22.15 segundos |

    Comentários dos usuários: O site é fácil de completar o cadastro, entretanto, observei que a escolha da engrenagem como ícone para determinada funcionalidade não foi            apropriada, o que gerou confusão.
    Durante a interação, senti que a edição estava restrita, uma vez que todos os dados foram apresentados como um bloco, impedindo minha liberdade para ajustes individuais.
    
## Avaliação dos Testes de Usabilidade

A avaliação dos testes de usabilidade revela alguns pontos positivos, como a alta taxa de sucesso na conclusão dos cenários propostos pelos usuários. A aplicação web demonstra eficácia em permitir que os usuários atinjam seus objetivos. No entanto, a satisfação média de 3,74 indica que há espaço para melhorias na experiência do usuário.

Os comentários dos usuários destacam preocupações válidas, como a falta de detalhes visuais para tornar a aplicação mais atraente e envolvente. A sugestão de trazer uma identidade mais forte e viva para a aplicação pode ser considerada para melhorar a satisfação dos usuários.

Além disso, foram observadas questões específicas em alguns cenários, como a confusão gerada pela escolha de ícones inadequados e a limitação na edição dos dados. Esses pontos indicam a necessidade de ajustes na usabilidade e na apresentação de elementos na interface.

A discrepância significativa entre o tempo médio dos usuários e o tempo do especialista sugere que a aplicação pode se beneficiar de otimizações para tornar o uso mais eficiente e intuitivo para usuários sem conhecimento prévio da interface.

