/* Expressoes Regulares - Regular Expression - RegExp */
 /* Introdução */
 /* 
 Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string.
 Há duas maneiras de construir uma expressão regular, sendo, de forma literal ou usando contrutor.

 As expressões criadas na forma literal são compiladas quando o script é carregado, gerando melhor performance
 quando a expressão regular é uma constante.

 Já as expressões criadas utilizando o construtor, são compiladas em tempo de execução. Indicado quando sabemos que
 o padrão da expressão mudará ou quando o padrão for desconhecido.

  Ferramenta para criar e validar expressões regulares:
  - https://regex101.com/

  Existem algumas flags que podem ser utilizadas para auxiliar no processo de captura dos caracteres, como:
  - Global: Don't return after first match;
  - Insensitive: Case insensitive match e
  - entre outras.

  Também pode-se utilizar meta caracteres para auxiliar no processo e captura, como por exemolo:
  - Meta ".": Para dar o match em qualquer caractere encontrado à esquerda.
    Exemplo: Em uma string com diversos endereços, ao incluir na expressão regular "av.", 
             selecionará apenas os caracteres "av" de todos os endereços que contenham "av";
  - Meta "+" (Quantificadora): Soma a expressão informada anteriormente. 
    Exemplo: na mesma string dos endereços, ao incluir na expressão regular "av.+", 
             selecionará todos os endereços que contenham "av";
  - Meta "^": Define a posição inicial na frase que será capturada na linha.
    Exemplo: Ao inserir a expressão regular "^av.+Brasil", selecionará todos os endereços que comecem com "av" e contenham
    "Brasil".
  - Meta "$": Simboliza a posição final da frase que será capturada na linha.
    Exemplo: Ao inserir a expressão regular "^av.+l$", selecionará os endereços que comecem com "av" e que terminam a linha com "l".

  Agrupamentos e quantificadores
  Dado a strig: "Angular, AngularJs, AngularJsJs, AngularTs"
  Podemos inserir a Meta "()" para agrupar, por exemplo:
  (Angular): Agrupará os matches que contenham 'Angular'.
  Ao acrescentar a meta "|" (operador ou):
  (Angular|AngularJs), - Agrupará: Angular,AngularJs
  Ao alterar a expressão incluíndo a meta quantificadora "?" (de 0 a 1 ocorrência)
  Angular(js)?, - Fará o match com 'Angular,AngularJs'
  Ao alterar a expressão incluíndo a meta quantificadora "{0,2}" (de 0 a 2 ocorrências)
  Angular(js){0,2}, - fará o match com 'Angular, AngularJs, AngularJsJs,'
  Para utilizar a meta quantificadora para 0 a n ocorrências, utilize {0,}
  Para exigir que a meta quantificadora dê metch com 1 ocorrência, utilize {1}
  Se quiser reduzir a sintaxe do quantificador de 0 a n ocorrÊncias, inclua o atalho "*"
  
 Exemplos de utilização: 
 Dada a string 'Av Paulista, 195/196, São Paulo, SP, Brasil 05502-454'
 Vamos:
 - Capturar o número do endereço;
   Iniciamos inserindo a meta '[]', a qual é responsável por capturar os caracteres presentes dentro. Por exemplo:
   '[1]': captura todos os caracteres numéricos 1 independente das posições na string.
   '[15]': captura todos os caracteres numéricos 1 ou 5 independente das posições na string.
   '[0-9]': captura todos os caracteres numéricos de 0 a 9 independente das posições na string.
   Existe a possibilidade de utilizar um atalho para capturar somente números:
   '\d': captura todos os caracteres numéricos de 0 a 9 independente das posições na string.
   Resolvendo o problema:
   Como o número no endereço possui uma barra, podemos utilizar a sintaxe abaixo:
   \d+\/\d+ - O operador '\' é um escape e foi utilizado porque a barra '/' é um meta.

 - Capturar o número do CEP;
   Para capturar o cep, podemos utilizar a sintaxe abaixo:
   \d+-\d+

  Validando email
  Dada a string 'email.teste@hostname.com'
  ^[a-zA-Z0-9_] - Encontre caracteres que comecem com letras de 'a' a 'z' ou de 'A' a 'Z' ou de 0 a 9 ou '_'.
  Podemos trocar a sintaxe acima utilizando um atalho: ^\w
  ^(\w|\.)+@ - Encontre caracteres que comecem com letras de 'a' a 'z' ou de 'A' a 'Z' ou de 0 a 9 ou '_'
  ou que tenham '.' até encontrar o caractere @. Resultado: email.teste@
  ^(\w|\.|-)+@ - Encontre caracteres que comecem com letras de 'a' a 'z' ou de 'A' a 'Z' ou de 0 a 9 ou '_'
  ou que tenham '.' ou '-' até encontrar o caractere @
  ^(\w|\.|-)+@\w+\. - Encontre caracteres que comecem com letras de 'a' a 'z' ou de 'A' a 'Z' ou de 0 a 9 ou '_'
  ou que tenham '.' ou '-' até encontrar o caractere @ e contenham caracteres válidos (\w) até o '.'.
  Resultado: email.teste@hostname.
  ^(\w|\.|-)+@\w+\.(com|net)(\.br)? - Encontre caracteres que comecem com letras de 'a' a 'z' ou de 'A' a 'Z' ou de 0 a 9 ou '_'
  ou que tenham '.' ou '-' até encontrar o caractere @, que contenham caracteres válidos (\w) até o '.' e que tenham
  com ou net e opcionalmente possa ter .br
  Resultado: email.teste@hostname.com
 */

  const texto = 'O meu nome é João, e 457.724.198-66 é o CPF do segurado.';
  const expressaoRegular = /\d{3}\.\d{3}\.\d{3}-\d{2}/mg;
  //expressaoRegular.test(texto); //saída do console: true
  const cpf = expressaoRegular.exec(texto)[0]; //saída para a variável: '457.724.198-66'

 /* Fontes */
 /*
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions
    
 */