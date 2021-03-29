function MathsDefaultData(param){
    console.log(param)

    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 1 ===================

    const mathForm1_level1 = {
        matter: param,
        description: "qual o resultado da expressão matématica: 1 + 1",
        correctAlternative: "A",
        alternatives: [ 
            { option: "A", text: "2"},
            { option: "B", text: "batata"},
            { option: "C", text: "manteiga"},
            { option: "D", text: "-1" },
            { option: "E", text: "2" }
        ],
        level: 1,
        points: 100
    }

    const mathForm2_level1 = {
        matter: param,
        description: "qual o resultado da expressão matématica: 1 + 2",
        correctAlternative: "A",
        alternatives: [ 
            { option: "A", text: "3"},
            { option: "B", text: "1"},
            { option: "C", text: "4"},
            { option: "D", text: "33"},
            { option: "E", text: "12"}
        ],
        level: 1,
        points: 100
    }

    const mathForm3_level1 = {
        matter: param,
        description: "qual o resultado da expressão matemática: 5 + 5",
        correctAlternative: "A",
        alternatives: [ 
            { option: "A", text: "10"},
            { option: "B", text: "3"},
            { option: "C", text: "4"},
            { option: "D", text: "11"},
            { option: "E", text: "12"}
        ],
        level: 1,
        points: 100
    }

    const mathForm4_level1 = {
        matter: param,
        description: "qual o resultado da expressão matématica: 10 + 10",
        correctAlternative: "A",
        alternatives: [ 
            { option: "A", text: "20"},
            { option: "B", text: "10"},
            { option: "C", text: "40"},
            { option: "D", text: "22"},
            { option: "E", text: "21"}
        ],
        level: 1,
        points: 100
    }

    const mathForm5_level1 = {
        matter: param,
        description: "qual o resultado da expressão matématica: 10²",
        correctAlternative: "A",
        alternatives: [
            { option: "A", text: "100"},
            { option: "B", text: "20"},
            { option: "C", text: "40"},
            { option: "D", text: "123"},
            { option: "E", text: "21"}
        ],
        level: 1,
        points: 100
    }

    const mathForm6_level1 = {
        matter: param,
        description: "qual o resultado da expressão matématica: 5!",
        correctAlternative: "A",
        alternatives: [
            { option: "A", text: "120"},
            { option: "B", text: "100"},
            { option: "C", text: "5!"},
            { option: "D", text: "123"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 1,
        points: 100
    }

    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 1 ===================


    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 2 ===================

    const mathForm1_level2 = {
        matter: param,
        description: "qual o resultado da expressão matemática: 10 - 5",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "10"},
            { option: "B", text: "5"},
            { option: "C", text: "5²"},
            { option: "D", text: "5!"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 2,
        points: 200
    }

    const mathForm2_level2 = {
        matter: param,
        description: "qual o resultado da expressão matemática: 5 - 5",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "10"},
            { option: "B", text: "0"},
            { option: "C", text: "0²"},
            { option: "D", text: "0!"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 2,
        points: 200
    }

    const mathForm3_level2 = {
        matter: param,
        description: "qual o resultado da expressão matemática: √4",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "22"},
            { option: "B", text: "2"},
            { option: "C", text: " (√4)³ "},
            { option: "D", text: "F(x) = 29x+x²-√4"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 2,
        points: 200
    }

    const mathForm4_level2 = {
        matter: param,
        description: "qual o resultado da expressão matemática: √1.225",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "20"},
            { option: "B", text: "35"},
            { option: "C", text: "(√4)³"},
            { option: "D", text: "F(x) = 29x+x²-√4"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 2,
        points: 200
    }

    const mathForm5_level2 = {
        matter: param,
        description: "qual o resultado da expressão matemática: (√1.225 + 35) * (√1.600 + 40)",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "10"},
            { option: "B", text: "√1.225"},
            { option: "C", text: "150"},
            { option: "D", text: "√4"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 2,
        points: 200
    }

    const mathForm6_level2 = {
        matter: param,
        description: "Descubra o valor de X: x = (5! / 2!) + √1.225 - 4²",
        correctAlternative: "B",
        alternatives: [
            { option: "A", text: "Batata"},
            { option: "B", text: "79"},
            { option: "C", text: "80"},
            { option: "D", text: "2"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 2,
        points: 200
    }

    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 2 ===================

    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 3 ===================

    const mathForm1_level3 = {
        matter: param,
        description: "Quantos são os anagramas da palavra MATEMÁTICA",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "429102 anagramas"},
            { option: "B", text: "429103 anagramas"},
            { option: "C", text: "100 anagramas"},
            { option: "D", text: "10 anagramas"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 3,
        points: 300
    }

    const mathForm2_level3 = {
        matter: param,
        description: "Dada a função f(x) = x² - 4, determine as raízes da função.",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "x' = 2 e x'' = -3"},
            { option: "B", text: "x' = 18 e x'' = 2"},
            { option: "C", text: "x' = 2 e x'' = -2"},
            { option: "D", text: "f(x) = x² - 4"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 3,
        points: 300
    }

    const mathForm3_level3 = {
        matter: param,
        description: "Dada a expressão (-2)³+(-3)²-(-1)²(-2)⁵; Calcule o valor numérico dessa expressão:",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "22"},
            { option: "B", text: "12"},
            { option: "C", text: "33"},
            { option: "D", text: "80"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 3,
        points: 300
    }

    const mathForm4_level3 = {
        matter: param,
        description: "Quantos anagramas tem a palavra PARALELEPIPEDO ?",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "42910224 anagramas"},
            { option: "B", text: "93910941 anagramas"},
            { option: "C", text: "605404800 anagramas"},
            { option: "D", text: "605404801 anagramas"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 3,
        points: 300
    }

    const mathForm5_level3 = {
        matter: param,
        description: "Dada a função quadrática definida por f(x) = x^2 - 4x + 4; Quais são os coeficientes a, b e c da lei de formação dessa função?",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "a = 5; b = -4; c = 4"},
            { option: "B", text: "a = 7; b = -2; c = 1"},
            { option: "C", text: "a = 1; b = -4; c = 4"},
            { option: "D", text: "a = 0; b = -1; c = 3"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 3,
        points: 300
    }

    const mathForm6_level3 = {
        matter: param,
        description: "Jogando - se um dado,qual a probabilidade de cair o numero 6",
        correctAlternative: "C",
        alternatives: [
            { option: "A", text: "Cebola"},
            { option: "B", text: "50%"},
            { option: "C", text: "16,66%"},
            { option: "D", text: "33,33%"},
            { option: "E", text: "Nenhuma das alternativas anteriores"}
        ],
        level: 3,
        points: 300
    }
    // =================== QUESTÕES DE 1 A NOVE DE NIVEL 3 ===================

    return [
        mathForm1_level1, mathForm2_level1, mathForm3_level1,
        mathForm4_level1, mathForm5_level1, mathForm6_level1,

        mathForm1_level2, mathForm2_level2, mathForm3_level2,
        mathForm4_level2, mathForm5_level2, mathForm6_level2,

        mathForm1_level3, mathForm2_level3, mathForm3_level3,
        mathForm4_level3, mathForm5_level3, mathForm6_level3,
    ]
}

module.exports = MathsDefaultData;