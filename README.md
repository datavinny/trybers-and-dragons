# Boas vindas ao repositório do projeto Trybers and Dragons!

👨‍💻 O que deverá ser desenvolvido

  Para este projeto, você deverá aplicar os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_).

  ---

  ⚠️ **Dicas Importantes** ⚠️:

  - Durante a execução dos testes, serão criados arquivos `.js` no repositório do projeto:

    - Ao final da execução de cada teste é rodado um script que apaga todos os arquivos `.js` do repositório (com exceção dos que já vão com o projeto);

    - O script utiliza o binário `find` do linux;

    - ~Em ambiente Windows, o `find` utilizado é o que vem na instalação do git (`C:/Program Files/Git/usr/bin/find.exe`).~

🗓 Data de Entrega
  
  * Este projeto é individual
  * São `2` dias de projeto
  * Data para entrega final do projeto: `17/08/2022 14:00`



🐉 Contextualizando 🐲

  No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma **raça** definida.

  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

  Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

  Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.

  Agora, cabe a você, nobre ~~dev~~, explorar essas terras e cumprir as quests que surgirão ao longo da sua incrível ~~jornada~~ leitura do README.

  **_Now, follow ~~the blind~~ the dungeon master!_**

## Requisitos Bônus

### 11 - Criar a classe `PVE`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Nem todas as batalhas são entre personagens lutadoras (`Character`), afinal, há perigos à solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos.

Monstros representam alguns destes perigos, assim, temos as batalhas do tipo `PVE`(*player versus environment*), em que personagens (sempre do tipo `Fighter`) podem lutar contra um ou mais monstros assustadores (`SimpleFighter`). Parece interessante, não é? Tornar isso possível é a sua próxima *quest*! 🧙‍♀️ ⚔️ 👾👹👻

Antes de prosseguir para essa nova batalha, leia atentamente as dicas abaixo !!! Só assim obteremos sucesso e prosperidade:

- O arquivo deve ser criado no diretório `src/Battle/` e se chamar `PVE.ts`;
- Lembre-se a classe `Battle` já esta criada;
- Na criação de uma instância de `PVE.ts` é esperado que em seu construtor seja recebido uma pessoa personagem lutadora (`Character Fighter`) e um *array* com pelo menos um monstro (`Monster`), ambos inicializados no **construtor**;
  - Como estamos falando de uma batalha *player versus environment*, este *array* de monstros também aceita instâncias de pessoas personagens lutadoras sendo elas simples ou não; (`Fighter`, `SimpleFighter`)
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s);
  - Como na "Dica de mestre" do requisito anterior (`PVP`), não esqueça de implementar uma lógica de luta para este requisito também;
  - Lembre-se, aqui a luta é de uma personagem contra apenas um oponete ou uma legião deles. Logo, para a batalha ser finalizada, a personagem principal, ou seus oponentes, deverão ter perdido os seus respectivos pontos de vida (`lifePoints`).

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `PVE` deve ser exportada de forma padrão (com `export default`);
> - Novamente dentro de `src/Battle/index.ts` a classe (`PVE`) deve ser importada, porém desta vez de forma normal (`export { PVP }`), como feito em requisitos anteriores.

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe PVE:
  - A classe `PVE` existe e se pode ser criada uma nova instância, passando um `Character` e um array com um `Monster`;
  - A classe `PVE` pode ser utilizada onde a classe `Battle` é esperada. Além disso, uma personagem (`Character`) que chamou várias vezes o método `levelUp` e possui melhores atributos tem maiores chances de vencer uma luta contra somente um `Monster`, enquanto uma personagem com atributos menores perde uma luta contra diversos `Monsters`;
  - A classe `PVE` pode receber tanto `Character` e um array com um `Monster` quanto implementações diferentes de `Fighter` e `SimpleFighter` que não são `Character` nem `Monster`;
</details>

---

### 12 - Crie a classe `Dragon`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Seria muito estranho se esse mundo se chamasse Trybers and Dragons e não existissem `Dragons`, não é mesmo?
Estes seres magníficos são representados como monstros aqui, mas com a característica especial de possuírem elevados valores de pontos de vida.

Nesta *quest*, você deve **criar a classe `Dragon`**, cuidando para garantir que:

- O arquivo deve ser criado na raiz de `src/` e se chamar `Dragon.ts`;
- A classe `Dragon` deve herdar de `Monster`;
- Como citado acima, um Dragão tem elevados valores de pontos de vida, então em seu construtor defina o valor de `_lifePoints` para algo como 999; :dragon_face::dragon_face:

:dragon_face: Dica de mestre: :dragon_face:
- Aqui é interessante voltar no conteúdo do course sobre **Herança e Interfaces** e relembrar um pouco de **Atributos protegidos**;

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Dragon` deve ser exportada de forma padrão ( com `export default`).

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe Dragon:
  - A classe `Dragon` existe;
  - A classe `Dragon` herda de `Monster`;
  - `Dragon` deve ter 999 no valor do atributo `lifePoints`;
</details>

---

### 13 - Crie objetos no arquivo `index`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Você já modelou todo o mundo de T&D, maravilha!

Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto em ação. Então a sua última *quest* para completar essa aventura é dar vida às suas personagens e criar algumas instâncias das classes criadas anteriormente. 🪄

Algumas dicas se fazem necessárias para completar sua última missão no mundo de T&D. Elas são:

- O arquivo deve ser criado na raiz de `src/` e se chamar `index.ts`;
- ⚠️ Preste bastante atenção nos nomes das variáveis/métodos e nas exportações pedidas deste último requisito; :wink:.
- Crie `3` objetos do tipo `Character`:
  - As variáveis devem-se chamar `player1`, `player2` e `player3`;
  - Execute algumas vezes o método `levelUp` do `player1`;
  - Ao final do arquivo `index.ts` exporte `player1`, `player2` e `player3`.
- Crie `2` objetos do tipo `Monster`:
  - As variáveis devem se chamar `monster1` e `monster2`;
  - `monster1` deve ser um `Monster` e `monster2` deve ser um `Dragon`;
  - Ao final do arquivo `index.ts` exporte `monster1` e `monster2`.
- Crie um objeto do tipo `PVP`:
  - A variável deve se chamar `pvp`;
  - Como parâmetro do construtor passe `player2` e `player3`;
  - Ao final do arquivo `index.ts` exporte `pvp`.
  - **NÃO execute o método `pvp.fight`**;
- Crie um objeto do tipo `PVE`:
  - A variável deve se chamar `pve`;
  - Como parâmetro do construtor passe `player1` e um array contendo `monster1` e `monster2`;
  - Ao final do arquivo `index.ts` exporte `pve`.
  - **NÃO execute o método `pve.fight`**;
- Crie uma função chamada `runBattles`:
  - A função recebe por parâmetro um *array* de batalhas (`battles`) e este *array* é do tipo `Battle`; ✨✨
  - Dentro da função, crie uma repetição percorrendo este array e chame o método `fight`;
  - Ao final do arquivo `index.ts` exporte `runBattles`.

✨ Última dica de mestre: ✨
- Lembre-se `Battle` não pode ser instanciada, pois é uma classe abstrata;

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, os objetos/métodos criados em `src/index.ts` devem ser exportados como explicado no requisito;

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a criação de objetos no arquivo index:
  - Existem 3 objetos do tipo `Character` no arquivo `index`, exportados como `player1`, `player2` e `player3` e o método `levelUp` foi chamado algumas vezes em `player1`
  - Existem 2 objetos do tipo `Monster` no arquivo `index`, exportados como `monster1`, `monster2`, sendo que o objeto `monster2` é um `Dragon`;
  - Existe um objeto do tipo `PVP` (com os `Characters` `player2` e `player3`), exportados no arquivo index como `pvp` e nele *NÃO* foi executado o método `pvp.fight`;
  - Existe um objeto do tipo `PVE` (com o `Character` `player1` e com os `Monsters` `monster1` e `monster2`), exportado no arquivo `index` como `pve` e nele *NÃO* foi executado o método `pve.fight`;
  - Existe uma função chamada `runBattles`, que recebe um `array de Battles` e chama em seu interior o método `battle.fight`;
</details>

---
