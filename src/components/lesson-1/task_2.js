export const tasks_2 = () => {
  // Сотка

  let num = () => {
    let pow;
    do {
      pow = +prompt("Введите число больше 100", "");
    } while (pow <= 100 && pow);
  };
  num();
};
