"use client"

import {useState, memo} from "react";
import Card from "@/components/Card";

export default function Home() {
  const MemoizedCard = memo(Card)

  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      value: 'As de Copas',
      rule: 'Todos bebem',
      description: 'Todos devem tomar um gole da bebida.',
      image: 'assets/cards/as-de-copas.png',
    },
    {
      value: 'Dois de Copas',
      rule: 'Falar qualquer coisa',
      description: 'Os jogadores devem falar qualquer coisa.',
      image: 'assets/cards/dois-de-copas.png',
    },
    {
      value: 'Três de Copas',
      rule: 'Escolha alguém para beber',
      description: 'O jogador que tirou esta carta escolhe outro jogador para tomar um gole.',
      image: 'assets/cards/tres-de-copas.png',
    },
    {
      value: 'Quatro de Copas',
      rule: 'Defina uma regra',
      description: 'O jogador que tirou esta carta pode criar uma regra que todos devem seguir até o jogador tirar outra carta.',
      image: 'assets/cards/quatro-de-copas.png',
    },
    {
      value: 'Cinco de Copas',
      rule: 'Sem "S", "C" ou composto',
      description: 'Os jogadores não podem usar palavras que comecem com \'S\', \'C\' ou palavras compostas. Quem quebrar a regra toma um gole.',
      image: 'assets/cards/cinco-de-copas.png',
    },
    {
      value: 'Seis de Copas',
      rule: 'Fui a freira',
      description: 'O jogador que tirou esta carta começa dizendo "Fui à feira e comprei..." e menciona um item. O próximo jogador repete e adiciona outro item. O jogo continua até alguém esquecer um item, e essa pessoa toma um gole.',
      image: 'assets/cards/seis-de-copas.png',
    },
    {
      value: 'Sete de Copas',
      rule: 'Trocar de nome',
      description: 'Todos os jogadores devem se referir uns aos outros por um novo nome. Quem esquecer e chamar alguém pelo nome antigo toma um gole.',
      image: 'assets/cards/sete-de-copas.png',
    },
    {
      value: 'Oito de Copas',
      rule: 'Responde uma pergunta com outra pergunta',
      description: 'O jogador que tirou esta carta deve responder todas as perguntas com outra pergunta. Quem esquecer toma um gole.',
      image: 'assets/cards/oito-de-copas.png',
    },
    {
      value: 'Nove de Copas',
      rule: 'Imite a dança',
      description: 'O jogador que tirou esta carta inventa uma dança, e todos os jogadores devem imitá-la e acrescentar um novo passo. Quem não seguir a dança toma um gole.',
      image: 'assets/cards/nove-de-copas.png',
    },
    {
      value: 'Dez de Copas',
      rule: 'Desafie alguém',
      description: 'O jogador que tirou esta carta desafia outro jogador para uma tarefa. Se o desafiado recusar ou falhar, ele toma um gole.',
      image: 'assets/cards/dez-de-copas.png',
    },
    {
      value: 'Valete de Copas',
      rule: 'Posição para todos',
      description: 'O jogador que tirou esta carta escolhe uma posição que será feita em um momento aleatório determinado pelo jogador, e todos os jogadores devem imitá-la. Quem for o último a imitar adequadamente toma um gole.',
      image: 'assets/cards/valete-de-copas.png',
    },
    {
      value: 'Dama de Copas',
      rule: 'Mulheres bebem',
      description: 'Todas as mulheres devem tomar um gole.',
      image: 'assets/cards/dama-de-copas.png',
    },
    {
      value: 'Rei de Copas',
      rule: 'Homens bebem',
      description: 'Todas os homens devem tomar um gole.',
      image: 'assets/cards/rei-de-copas.png',
    },
  ]

  const handleCardPress = async () => {
    const nextCard = Math.floor(Math.random() * cards.length);
    const imageToPreload = new Image();
    imageToPreload.src = `/${cards[nextCard].image}`
    await imageToPreload.decode()

    setCurrentCard(nextCard);
  };

  return (
    <div style={styles.container}>
      <MemoizedCard
        imageSource={cards[currentCard].image}
        rule={cards[currentCard].rule}
        description={cards[currentCard].description}
        onPress={handleCardPress}
      />
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}