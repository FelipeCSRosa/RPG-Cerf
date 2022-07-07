const data = {
    "situations": [
        {
            "id": 0,
            "description": "Você está vagando num beco ao anoitecer, quando derrepente sente uma mão encostar em seu ombro",
            "options": [
                {
                    "description": "Você sai correndo",
                    "fail": {
                        "damage": 5,
                        "description": "Você tropeça e bate sua cabeça em uma pedra"
                    },
                    "success": {
                        "bonus": 12,
                        "description": "Você consegue chegar em segurança em uma pousada para descansar"
                    }
                },
                {
                    "description": "Você se vira",
                    "fail": {
                        "damage": 12,
                        "description": "Você toma um soco na sua face te fazendo desmaiar"
                    },
                    "success": {
                        "bonus": 10,
                        "description": "Você vê que era apenas um amigo distante. ele te oferece seu elmo como presente pelos velhos tempos"
                    }
                }
            ]
        },
        {
            "id": 1,
            "description": "Você está num mercado, quando vê uma senhora ser roubada por dois garotos",
            "options": [
                {
                    "description": "Você persegue os garotos",
                    "fail": {
                        "damage": 20,
                        "description": "Os garotos percebem que você está perseguindo eles e então chamam os soldados e te acusam de roubar a senhora"
                    },
                    "success": {
                        "bonus": 25,
                        "description": "Você taca pedras neles, fazendo com que soltem os pertences da senhora e devolve para ela"
                    }
                },
                {
                    "description": "Você grita pelos soldados",
                    "fail": {
                        "damage": 1,
                        "description": "Os soldados ignoram seu chamado"
                    },
                    "success": {
                        "bonus": 10,
                        "description": "Os guardas vão até você, você conta oque ocorreu e eles partem atrás dos ladrões"
                    }
                }
            ]
        },
        {
            "id": 2,
            "description": "Você está andando por uma floresta numa noite tranquila quando aparece na sua frente o senhor do caos e da morte, Anthrax",
            "options": [
                {
                    "description": "Correr",
                    "fail": {
                        "damage": 10000,
                        "description": "Você não pode correr de Anthrax, ele invade sua mente e você esta morto antes de qualquer chance de reação"
                    },
                    "success": {
                        "damage": 0,
                        "description": "Você acorda"
                    }
                },
                {
                    "description": "Correr",
                    "fail": {
                        "damage": 10000,
                        "description": "Você não pode correr de Anthrax, ele invade sua mente e você esta morto antes de qualquer chance de reação"
                    },
                    "success": {
                        "damage": 0,
                        "description": "Você acorda"
                    }
                }
            ]
        },
        {
            "id": 3,
            "description": "Você está numa taverna numa pacata cidade de camponeses quando um grupo de bandidos invade o lugar",
            "options": [
                {
                    "description": "Enfrentar os bandidos",
                    "fail": {
                        "damage": 80,
                        "description": "Você toma uma surra dos bandidos até desmais ficando extremamente ferido"
                    },
                    "success": {
                        "damage": 20,
                        "description": "Você derrota os bandidos sozinho e é ganha bebida de graça durante a noite toda"
                    }
                },
                {
                    "description": "Fugir",
                    "fail": {
                        "damage": 30,
                        "description": "Eles percebem sua tentativa de fuga, mas por sorte só te bate o suficiente pra roubar seus pertencer"
                    },
                    "success": {
                        "damage": 20,
                        "description": "Você consegue escapar, aqueles camponeses bêbados não era problema seu mesmo"
                    }
                }
            ]
        },
        {
            "id": 4,
            "description": "Você caminha pelo deserto quando um enxame de mosquitos gigantes começa vir em sua direção",
            "options": [
                {
                    "description": "Espantar os mosquitos",
                    "fail": {
                        "damage": 100,
                        "description": "Os mosquitos gigantes te atacam e sugam muito do seu sangue"
                    },
                    "success": {
                        "damage": 20,
                        "description": "Você coloca foco em no seu mapa e espanta os mosquitos"
                    }
                },
                {
                    "description": "Corres até um lugar com água",
                    "fail": {
                        "damage": 100,
                        "description": "Você está no deserto, não tem água, os mosquitos gigantes te atacam e sugam muito do seu sangue"
                    },
                    "success": {
                        "damage": 30,
                        "description": "Por sorte você encontra um Oásis com um lago e pula la dentro, se refrescando enquanto os mosquitos vão embora"
                    }
                }
            ]
        }
    ]
}