function HumaneDefaultData(param){
    console.log(param)
    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 1 ===================
 
    const humanForm1_level1 = {
        matter: param,
        description: "Quem descobriu o Brasil?",
        correctAlternative: "A",
        alternatives: [ 
            { option: "A", text: "Batata"},
            { option: "B", text: "Arquimedes"},
            { option: "C", text: "Einstein"},
            { option: "D", text: "D Pedro II" },
            { option: "E", text: "Nenhuma das alternativas anteriores" }
        ],
        level: 1,
        points: 100
    }
 
    const humanForm2_level1 = {
        matter: param,
        description: "De quem é a famosa frase: Penso, logo existo?",
        correctAlternative: "C",
        alternatives: [ 
            { option: "A", text: "Platão"},
            { option: "B", text: "Galileu Galilei"},
            { option: "C", text: "Descartes"},
            { option: "D", text: "Sócrates"},
            { option: "E", text: "Francis Bacon"}
        ],
        level: 1,
        points: 100
    }
 
    const humanForm3_level1 = {
        matter: param,
        description: "Quais o menor e o maior país do mundo?",
        correctAlternative: "A",
        alternatives: [ 
            { option: "A", text: "Vaticano e Rússia"},
            { option: "B", text: "Nauru e China"},
            { option: "C", text: "Mônaco e Canadá"},
            { option: "D", text: "Malta e Estados Unidos"},
            { option: "E", text: "São Marino e Índia"}
        ],
        level: 1,
        points: 100
    }
 
    const humanForm4_level1 = {
        matter: param,
        description: "Quais os principais autores do Barroco no Brasil?",
        correctAlternative: "A",
        alternatives: [ 
            { option: "A", text: "Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira"},
            { option: "B", text: "Miguel de Cervantes, Gregório de Matos e Danthe Alighieri"},
            { option: "C", text: "Padre Antônio Vieira, Padre Manuel de Melo e Gregório de Matos"},
            { option: "D", text: "Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira"},
            { option: "E", text: "Álvares de Azevedo, Gregório de Matos e Bento Teixeira"}
        ],
        level: 1,
        points: 100
    }
 
    const humanForm5_level1 = {
        matter: param,
        description: "Qual a nacionalidade de Che Guevara?",
        correctAlternative: "E",
        alternatives: [
            { option: "A", text: "Cubana"},
            { option: "B", text: "Peruana"},
            { option: "C", text: "Panamenha"},
            { option: "D", text: "Boliviana"},
            { option: "E", text: "Argentina"}
        ],
        level: 1,
        points: 100
    }
 
    const humanForm6_level1 = {
        matter: param,
        description: "Em que período da pré-história o fogo foi descoberto?",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "Neolítico"},
            { option: "B", text: "Paleolítico"},
            { option: "C", text: " Idade dos Metais"},
            { option: "D", text: "Período da Pedra Polida"},
            { option: "E", text: "Idade Média"}
        ],
        level: 1,
        points: 100
    }
 
    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 1 ===================
 
 
    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 2 ===================
 
    const humanForm1_level2 = {
        matter: param,
        description: "Qual a montanha mais alta do Brasil?",
        correctAlternative: "A",
        alternatives: [
            { option: "A", text: "Pico da Neblina"},
            { option: "B", text: "Pico Paraná"},
            { option: "C", text: "Monte Roraima"},
            { option: "D", text: "Pico Maior de Friburgo"},
            { option: "E", text: "Pico da Bandeira"}
        ],
        level: 2,
        points: 200
    }
 
    const humanForm2_level2 = {
        matter: param,
        description: "Em qual local da Ásia o português brasileiro é língua oficial?",
        correctAlternative: "D",
        alternatives: [
            { option: "A", text: "Índia"},
            { option: "B", text: "Filipinas"},
            { option: "C", text: "Moçambique"},
            { option: "D", text: "Macau"},
            { option: "E", text: "Portugal"}
        ],
        level: 2,
        points: 200
    }
 
    const humanForm3_level2 = {
        matter: param,
        description: "Qual destes países é transcontinental?",
        correctAlternative: "A",
        alternatives: [
            { option: "A", text: "Rússia"},
            { option: "B", text: "Filipinas"},
            { option: "C", text: "Istambul"},
            { option: "D", text: "Groenlândia"},
            { option: "E", text: "Tanzânia"}
        ],
        level: 2,
        points: 200
    }
 
    const humanForm4_level2 = {
        matter: param,
        description: "Quais os planetas do sistema solar?",
        correctAlternative: "A",
        alternatives: [
            { option: "A", text: "Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio"},
            { option: "B", text: "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus"},
            { option: "C", text: "Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio"},
            { option: "D", text: "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Sol, Terra, Urano, Vênus"},
            { option: "E", text: "Terra, Vênus, Saturno, Júpiter, Marte, Netuno, Mercúrio"}
        ],
        level: 2,
        points: 200
    }
 
    const humanForm5_level2 = {
        matter: param,
        description: "Júpiter e Plutão são os correlatos romanos de quais deuses gregos?",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "Ares e Hermes"},
            { option: "B", text: "Cronos e Apolo"},
            { option: "C", text: "Zeus e Hades"},
            { option: "D", text: "Dionísio e Deméter"},
            { option: "E", text: "Zeus e Ares"}
        ],
        level: 2,
        points: 200
    }
 
    const humanForm6_level2 = {
        matter: param,
        description: "Qual o maior animal terrestre?",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "Baleia Azul"},
            { option: "B", text: "Dinossauro"},
            { option: "C", text: "Elefante africano"},
            { option: "D", text: "Tubarão Branco"},
            { option: "E", text: "Girafa"}
        ],
        level: 2,
        points: 200
    }
 
    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 2 ===================
 
    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 3 ===================
 
    const humanForm1_level3 = {
        matter: param,
        description: "Que líder mundial ficou conhecida como “Dama de Ferro”?",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "Dilma Rousseff"},
            { option: "B", text: "Angela Merkel"},
            { option: "C", text: "Margaret Thatcher"},
            { option: "D", text: "Hillary Clinton"},
            { option: "E", text: "Christine Lagarde"}
        ],
        level: 3,
        points: 300
    }
 
    const humanForm2_level3 = {
        matter: param,
        description: "Qual a religião monoteísta que conta com o maior número de adeptos no mundo?",
        correctAlternative: "D",
        alternatives: [
            { option: "A", text: "Judaísmo"},
            { option: "B", text: "Zoroastrismo"},
            { option: "C", text: "Islamismo"},
            { option: "D", text: "Cristianismo"},
            { option: "E", text: "Hinduísmo"}
        ],
        level: 3,
        points: 300
    }
 
    const humanForm3_level3 = {
        matter: param,
        description: "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?",
        correctAlternative: "E",
        alternatives: [
            { option: "A", text: "Yuri Gagarin, em 1961"},
            { option: "B", text: "Buzz Aldrin, em 1969"},
            { option: "C", text: "Charles Conrad, em 1969"},
            { option: "D", text: "Charles Duke, em 1971"},
            { option: "E", text: "Neil Armstrong, em 1969."}
        ],
        level: 3,
        points: 300
    }
 
    const humanForm4_level3 = {
        matter: param,
        description: "Em que estado australiano fica situada a cidade de Sydney?",
        correctAlternative: "A",
        alternatives: [
            { option: "A", text: "Nova Gales do Sul"},
            { option: "B", text: "Victoria"},
            { option: "C", text: "Tasmânia"},
            { option: "D", text: "Queensland"},
            { option: "E", text: "Norfolk"}
        ],
        level: 3,
        points: 300
    }
 
    const humanForm5_level3 = {
        matter: param,
        description: "Qual é o maior arquipélago da Terra?",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "a Filipinas"},
            { option: "B", text: "a Indonésia"},
            { option: "C", text: "as Bahamas"},
            { option: "D", text: "a Finlândia"},
            { option: "E", text: "as Maldivas"}
        ],
        level: 3,
        points: 300
    }
 
    const humanForm6_level3 = {
        matter: param,
        description: "Em que oceano fica Madagascar?",
        correctAlternative: "A",
        alternatives: [
            { option: "A", text: "Oceano Índico"},
            { option: "B", text: "Oceano Antártico"},
            { option: "C", text: "Oceano Atlântico"},
            { option: "D", text: "Oceano Pacífico"},
            { option: "E", text: "Oceano Ártico"}
        ],
        level: 3,
        points: 300
    }
    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 3 ===================

    return [
        humanForm1_level1, humanForm2_level1, humanForm3_level1,
        humanForm4_level1, humanForm5_level1, humanForm6_level1,

        humanForm1_level2, humanForm2_level2, humanForm3_level2,
        humanForm4_level2, humanForm5_level2, humanForm6_level2,

        humanForm1_level3, humanForm2_level3, humanForm3_level3,
        humanForm4_level3, humanForm5_level3, humanForm6_level3,
    ]
}

module.exports = HumaneDefaultData;