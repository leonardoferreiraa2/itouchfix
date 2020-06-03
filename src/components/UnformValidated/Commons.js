
function createCommons() {
  const letters_numbers = {
    'only-letter': 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    'only-number': '0123456789',
  };

  function filterValue(value, type, start, end) {
    const strFind = letters_numbers[type];
    const setValue = start + end >= 0 ? value.substr(start, end) : value;
  
    let newValue = '';
    for (let i = 0; i < setValue.length; i++) {
      if (strFind.indexOf(setValue[i].toUpperCase()) >= 0) {
        newValue += setValue[i];
      };
    };
  
    return newValue;
  };

  return {
    letters_numbers,
    filterValue
  }
}

export default createCommons;
