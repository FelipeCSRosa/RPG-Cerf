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
        }
    ]
}