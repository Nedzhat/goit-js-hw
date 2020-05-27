const formatString = function(string) {
    const limitSimvol = 40;
    let stringCheck = string;

    if (stringCheck.length <= limitSimvol) {
      return stringCheck;
    } else if (stringCheck.length > limitSimvol) {
      stringCheck = stringCheck.slice(0, limitSimvol);
      
      return stringCheck + '...'; 
    }
  
  
  
  
  };
  
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка