"use client"

import React, { useEffect, useState} from "react";
import MemoizedCard from "@/components/Card";

const rules = {
  "ACE": {
    'rule': 'Todos bebem',
    'description': "Todos devem tomar um gole da bebida."
  },
  "2": {
    'rule': 'Falar qualquer coisa',
    'description': 'Os jogadores devem falar qualquer coisa.',
  },
  "3": {
    'rule': 'Escolha alguém para beber',
    'description': 'O jogador que tirou esta carta escolhe outro jogador para tomar um gole.',
  },
  "4": {
    'rule': 'Defina uma regra',
    'description': 'O jogador que tirou esta carta pode criar uma regra que todos devem seguir até o jogador tirar outra carta.',
  },
  "5": {
    'rule': 'Sem "S", "C" ou composto',
    'description': 'Os jogadores não podem usar palavras que comecem com \'S\', \'C\' ou palavras compostas. Quem quebrar a regra toma um gole.',
  },
  "6": {
    'rule': 'Fui a feira',
    'description': 'O jogador que tirou esta carta começa dizendo "Fui à feira e comprei..." e menciona um item. O próximo jogador repete e adiciona outro item. O jogo continua até alguém esquecer um item, e essa pessoa toma um gole.',
  },
  "7": {
    'rule': 'Trocar de nome',
    'description': 'Todos os jogadores devem se referir uns aos outros por um novo nome. Quem esquecer e chamar alguém pelo nome antigo toma um gole.',
  },
  "8": {
    'rule': 'Responde uma pergunta com outra pergunta',
    'description': 'O jogador que tirou esta carta deve responder todas as perguntas com outra pergunta. Quem esquecer toma um gole.',
  },
  "9": {
    'rule': 'Imite a dança',
    'description': 'O jogador que tirou esta carta inventa uma dança, e todos os jogadores devem imitá-la e acrescentar um novo passo. Quem não seguir a dança toma um gole.',
  },
  "10": {
    'rule': 'Desafie alguém',
    'description': 'O jogador que tirou esta carta desafia outro jogador para uma tarefa. Se o desafiado recusar ou falhar, ele toma um gole.',
  },
  "JACK": {
    'rule': 'Posição para todos',
    'description': 'O jogador que tirou esta carta escolhe uma posição que será feita em um momento aleatório determinado pelo jogador, e todos os jogadores devem imitá-la. Quem for o último a imitar adequadamente toma um gole.',
  },
  "QUEEN": {
    'rule': 'Mulheres bebem',
    'description': 'Todas as mulheres devem tomar um gole.',
  },
  "KING": {
    'rule': 'Homens bebem',
    'description': 'Todas os homens devem tomar um gole.',
  }
}

export default function HomePage() {
  const [deckId, setDeckId] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDeck() {
      const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      const data = await res.json();
      setDeckId(data.deck_id);
    }
    fetchDeck()
  }, [])

  const handleCardPress = async () => {
    if(!deckId) return;
    setLoading(true);
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    const data = await res.json();
    if (data.cards && data.cards.length > 0) {
      setCurrentCard(data.cards[0])
    }
    setLoading(false)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      {currentCard ? (
        <MemoizedCard
          imageSource={currentCard.image}
          rule={rules[currentCard.value]?.rule}
          description={rules[currentCard.value]?.description}
          onPress={handleCardPress}
        />
      ) : (
        <button onClick={handleCardPress} disabled={loading || !deckId}>
          {loading ? "Carregando..." : "Começar jogo!"}
        </button>
      )}
    </div>
  )
}