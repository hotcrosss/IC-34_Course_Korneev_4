function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
  }
  
  // Додаємо обробник події для форми
  document.getElementById("shipping-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки
  
    // Отримуємо дані з форми
    const country = document.getElementById("country").value;
    const price = parseFloat(document.getElementById("price").value);
    const deliveryFee = parseFloat(document.getElementById("deliveryFee").value);
  
    // Викликаємо функцію і отримуємо повідомлення
    const message = getShippingMessage(country, price, deliveryFee);
  
    // Виводимо результат на сторінку
    document.getElementById("result").textContent = message;
  });

  function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    
    if (totalPrice > customerCredits) {
      return "Insufficient funds!";
    }
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
  
  // Додаємо обробник події для форми
  document.getElementById("transaction-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки
  
    // Отримуємо дані з форми
    const quantity = parseInt(document.getElementById("quantity").value);
    const pricePerDroid = parseFloat(document.getElementById("pricePerDroid").value);
    const customerCredits = parseFloat(document.getElementById("customerCredits").value);
  
    // Викликаємо функцію і отримуємо повідомлення
    const message = makeTransaction(quantity, pricePerDroid, customerCredits);
  
    // Виводимо результат на сторінку
    document.getElementById("transaction-result").textContent = message;
  });
  function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = firstArray.concat(secondArray);
    return combinedArray.length > maxLength ? combinedArray.slice(0, maxLength) : combinedArray;
  }

  document.getElementById("make-array-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const firstArray = document.getElementById("firstArray").value.split(",").map(item => item.trim());
    const secondArray = document.getElementById("secondArray").value.split(",").map(item => item.trim());
    const maxLength = parseInt(document.getElementById("maxLength").value);
    const result = makeArray(firstArray, secondArray, maxLength);
    document.getElementById("make-array-result").textContent = `Result: [${result.join(", ")}]`;
  });
  // Завдання 1: Знаходимо мінімальний елемент і переносимо його на початок
function findMinAndShift(array) {
    const minValue = Math.min(...array);
    const minIndex = array.indexOf(minValue);
    array.splice(minIndex, 1); // Видаляємо мінімум
    array.unshift(minValue); // Додаємо мінімум на початок
    return array;
  }
  
  // Обробник для форми
  document.getElementById("min-element-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const size = parseInt(document.getElementById("arraySize").value);
  
    // Генеруємо випадковий масив
    const randomArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    const shiftedArray = findMinAndShift([...randomArray]); // Виконуємо операцію
  
    // Виводимо результат
    document.getElementById("min-element-result").innerHTML = `
      Original Array: [${randomArray.join(", ")}]<br>
      Modified Array: [${shiftedArray.join(", ")}]
    `;
  });
  
  // Завдання 2: Сортування масиву методом вибору
  function selectionSortDescending(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let maxIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[maxIndex]) {
          maxIndex = j;
        }
      }
      if (maxIndex !== i) {
        [array[i], array[maxIndex]] = [array[maxIndex], array[i]];
      }
    }
    return array;
  }
  
  // Обробник для форми
  document.getElementById("selection-sort-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputArray = document.getElementById("unsortedArray").value.split(",").map(Number);
    const sortedArray = selectionSortDescending([...inputArray]); // Виконуємо сортування
  
    // Виводимо результат
    document.getElementById("selection-sort-result").innerHTML = `
      Original Array: [${inputArray.join(", ")}]<br>
      Sorted Array: [${sortedArray.join(", ")}]
    `;
  });
 
  
  