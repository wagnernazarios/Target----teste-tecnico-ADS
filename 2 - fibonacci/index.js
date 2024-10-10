console.log(
  "Bem vindo a Sequencia de Fibonacci! \nInsira um numero e descubra se faz ou não parte da sequencia"
);

let getNum = parseInt(Math.random() * 100);

let Fibonacci1 = 0;
let Fibonacci2 = 1;
let pertence = false;

while (Fibonacci1 <= getNum) {
  if (Fibonacci1 === getNum) {
    pertence = true;
    break;
  }

  let soma = Fibonacci1 + Fibonacci2;
  Fibonacci1 = Fibonacci2;
  Fibonacci2 = soma;
}

if (pertence) {
  console.log("Ótimo, esse numero não faz parte da sequência");
} else {
  console.log("Esse numero não faz parte da sequência");
}
