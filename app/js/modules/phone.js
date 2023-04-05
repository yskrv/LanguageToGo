function phoneValidator({
     inputSelector
}){
     const phoneInput = document.querySelector(inputSelector);
     let phoneString = '+7(___)___-__-__';
     const regExp = /_/g;
     const changePhoneString = (index, val) => {
          let tempPhoneArray = phoneString.split('');
          tempPhoneArray[index] = val;
          phoneString = tempPhoneArray.join('');
          phoneInput.value = phoneString;
     };
     const phoneIndexes = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
     const phoneValuesIndexes = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15];
     
     
     phoneInput.addEventListener('input', (e) => {
          console.log(phoneString.match(regExp).length);
          if (phoneString.match(regExp) === null) {
               changePhoneString(15, '_');
          } 
          else {
               if(e.data === null) {
                    for (let i = 0; i < phoneIndexes.length; i++) {
                         if (phoneString.match(regExp).length == phoneIndexes[i] - 1) {
                              changePhoneString(phoneValuesIndexes[i], '_');
                              break;
                         }
                    }
               } else {
                    for (let i = 0; i < phoneIndexes.length; i++) {
                         if (phoneString.match(regExp).length == phoneIndexes[i]) {
                              changePhoneString(phoneValuesIndexes[i], e.data);
                              break;
                         }
                    }
               }
          }
     });
}

export default phoneValidator;