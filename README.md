# AutoForce Desafio Front End  

## 📋 Inicialização  
Para executar o projeto, siga os passos abaixo:  
1. Instale as dependências:  
   ```bash
    npm install
    npm run start:fake-api
    npm run build:css
    npm start´´´

Nota: É essencial que a fake API esteja rodando para que o projeto funcione corretamente.

## 🎯 Decisões de Desenvolvimento
### Estrutura da Página Inicial:
Criei uma página inicial onde o usuário pode selecionar o carro que mais chama sua atenção. Ao clicar em um veículo, uma nova tela baseada no protótipo do Figma é exibida com detalhes sobre o carro. Para isso, adicionei 10 modelos de carros fictícios.

### Fake API:
Optei por usar o json-server devido à sua praticidade na criação de uma fake API simples e funcional.

### Estilo e Responsividade:
Inicialmente, considerei usar o TailwindCSS, mas ao reler a proposta, optei por trabalhar exclusivamente com Sass e CSS para implementar a estilização e a responsividade.

### Aprimoramento da Navegação:
Decidi adicionar uma tela inicial para facilitar a navegação até os detalhes dos carros, mesmo que isso significasse ir além do escopo do protótipo. Essa escolha visou melhorar a experiência do usuário.

## 🚀 Pontos de Melhoria
#### Embora o projeto atenda ao escopo inicial, algumas melhorias podem ser implementadas:

#### Navbar Dinâmica: 
Alterar a logo da navbar de acordo com a marca do carro selecionado. Atualmente, a logo da BMW é fixa.

#### Textos Dinâmicos: 
Substituir o texto fixo por informações específicas do carro exibido.

#### Botões de Contato: 
Implementar um dialog de confirmação para as interações.

#### Navbar Mobile: 
Melhorar o design da navbar para dispositivos móveis. Embora funcional, o visual pode ser refinado.

#### Animações de Tela: 
Ajustar as animações para que sejam ativadas com o scroll, em vez de apenas no carregamento da página.
#### Backend: 
Inicialmente, planejei usar Rails, mas devido a conflitos de bibliotecas e ao prazo curto, optei por JavaScript puro.

## 💡 Tecnologias Alternativas
#### Eu faria as seguintes alterações tecnológicas:

#### TailwindCSS: 
Usaria Tailwind para substituir o Sass, já que ele facilita a responsividade e permite configurações rápidas diretamente nas classes.

#### Bibliotecas de Animação: 
Integraria bibliotecas de animação para tornar o site mais interativo e visualmente atraente.

## 🛠️ Tecnologias Utilizadas
#### HTML
#### CSS / Sass
#### JavaScript
#### json-server
