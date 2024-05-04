document.addEventListener("DOMContentLoaded", function () {
  const extractButtonRed = document.getElementById("extractButtonRed");
  const extractButtonBlue = document.getElementById("extractButtonBlue");
  var paragraphsContainer = document.getElementById("paragraphsContainer");
  const extractOperator = document.getElementById("operatorButton");
  const copyButton = document.getElementById("copy");
  // const container = document.getElementById("div-main");
  extractButtonRed.addEventListener("click", async function () {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          // Define an object to store cards grouped by color
          const cardsByColor = {
            red: [],
            blue: [],
            gray: [],
            black: [],
          };
          // container.style.background =
          //   "linear-gradient(to right, #561407, #a64124)";
          // Assuming you want to extract the text content from each card with a specific class name
          const cards = document.querySelectorAll(".jsx-2877565267.card");

          // Loop through each card
          cards.forEach((card) => {
            // Find the element containing the text you want to extract
            const textElement = card.querySelector(".transition-opacity");

            // Check if the textElement exists and extract its text content
            if (textElement) {
              const textContent = textElement.textContent.trim();

              // Determine the color of the card based on its classes
              if (card.classList.contains("red")) {
                cardsByColor.red.push(textContent);
              } else if (card.classList.contains("blue")) {
                cardsByColor.blue.push(textContent);
              } else if (card.classList.contains("gray")) {
                cardsByColor.gray.push(textContent);
              } else if (card.classList.contains("black")) {
                cardsByColor.black.push(textContent);
              }
            }
          });

          // Output the grouped cards by color
          console.log("Red:");
          console.log(cardsByColor.red);

          console.log("Blue:");
          console.log(cardsByColor.blue);

          console.log("Gray:");
          console.log(cardsByColor.gray);

          console.log("Black:");
          console.log(cardsByColor.black);

          console.log(cardsByColor);
          return cardsByColor;
        },
      });
      //chaning paragraphsContainer innerhtml to display results
      // { red: [], blue: [], gray: [], black: [] }

      // Set the content of the paragraphcontainer
      //{red: Array(9), blue: Array(8), gray: Array(7), black: Array(1)}
      console.log(results[0].result.black);
      var black = results[0].result.black;
      var blue = results[0].result.blue;
      var gray = results[0].result.gray;
      var red = results[0].result.red;
      var content = [black, blue, gray, red];
      paragraphsContainer.innerHTML =
        " i m playing codenames if i will give u all words will u help me to get hints with most words use general and indian context" +
        "<br>" +
        "red : " +
        red +
        "<br>" +
        "blue : " +
        blue +
        "<br>" +
        "gray : " +
        gray +
        "<br>" +
        "black : " +
        black +
        "<br>" +
        "I am red. the rule is it should relate with red only, but not blue and black and gray at any cost.";
    } catch (error) {
      console.error("Error executing script:", error);
    }
    console.log("running ");
    // setTimeout(extractButton.click(), 100);
  });
  extractButtonBlue.addEventListener("click", async function () {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          // Define an object to store cards grouped by color
          const cardsByColor = {
            red: [],
            blue: [],
            gray: [],
            black: [],
          };
          // container.style.background =
          //   "linear-gradient(to right, #0f4c75, #1b262c)";
          // Assuming you want to extract the text content from each card with a specific class name
          const cards = document.querySelectorAll(".jsx-2877565267.card");

          // Loop through each card
          cards.forEach((card) => {
            // Find the element containing the text you want to extract
            const textElement = card.querySelector(".transition-opacity");

            // Check if the textElement exists and extract its text content
            if (textElement) {
              const textContent = textElement.textContent.trim();

              // Determine the color of the card based on its classes
              if (card.classList.contains("red")) {
                cardsByColor.red.push(textContent);
              } else if (card.classList.contains("blue")) {
                cardsByColor.blue.push(textContent);
              } else if (card.classList.contains("gray")) {
                cardsByColor.gray.push(textContent);
              } else if (card.classList.contains("black")) {
                cardsByColor.black.push(textContent);
              }
            }
          });

          // Output the grouped cards by color
          console.log("Red:");
          console.log(cardsByColor.red);

          console.log("Blue:");
          console.log(cardsByColor.blue);

          console.log("Gray:");
          console.log(cardsByColor.gray);

          console.log("Black:");
          console.log(cardsByColor.black);

          console.log(cardsByColor);
          return cardsByColor;
        },
      });
      //chaning paragraphsContainer innerhtml to display results
      // { red: [], blue: [], gray: [], black: [] }

      // Set the content of the paragraphcontainer
      //{red: Array(9), blue: Array(8), gray: Array(7), black: Array(1)}
      console.log(results[0].result.black);
      var black = results[0].result.black;
      var blue = results[0].result.blue;
      var gray = results[0].result.gray;
      var red = results[0].result.red;
      var content = [black, blue, gray, red];
      paragraphsContainer.innerHTML =
        " i m playing codenames if i will give u all words will u help me to get hints with most words use general and indian context" +
        "<br>" +
        "red : " +
        red +
        "<br>" +
        "blue : " +
        blue +
        "<br>" +
        "gray : " +
        gray +
        "<br>" +
        "black : " +
        black +
        "<br>" +
        "I am blue. the rule is it should relate with blue only, but not red and black and gray at any cost.";
    } catch (error) {
      console.error("Error executing script:", error);
    }
    console.log("running ");
    // setTimeout(extractButton.click(), 100);
  });
  // extractOperator.addEventListener("click", async function () {
  //   try {
  //     const [tab] = await chrome.tabs.query({
  //       active: true,
  //       currentWindow: true,
  //     });

  //     const results = await chrome.scripting.executeScript({
  //       target: { tabId: tab.id },
  //       function: () => {
  //         // Define an object to store cards grouped by color
  //         const gray = [];

  //         // Assuming you want to extract the text content from each card with a specific class name
  //         const cards = document.getElementsByClassName(
  //           " .jsx-2877565267  .shadow-bellow-card .text-black"
  //         );
  //         console.log(cards);
  //         // Loop through each card
  //         cards.forEach((card) => {
  //           // Find the element containing the text you want to extract
  //           const textElement = card.querySelector(".transition-opacity");

  //           // Check if the textElement exists and extract its text content
  //           if (textElement) {
  //             const textContent = textElement.textContent.trim();

  //             // Determine the color of the card based on its classes

  //             gray.push(textContent);
  //           }
  //         });

  //         // Output the grouped cards by color

  //         return gray;
  //       },
  //     });
  //     //chaning paragraphsContainer innerhtml to display results
  //     // { red: [], blue: [], gray: [], black: [] }

  //     // Set the content of the paragraphcontainer
  //     //{red: Array(9), blue: Array(8), gray: Array(7), black: Array(1)}
  //     var gray = results[0].result;
  //     // var content = [black, blue, gray, red];
  //     paragraphsContainer.innerHTML =
  //       " i m playing codenames if i will give u all words will u help me to get hints with most words use general and indian context" +
  //       "<br>" +
  //       gray +
  //       "<br>" +
  //       "I am blue. the rule is it should relate with blue only, but not red and black and gray at any cost.";
  //   } catch (error) {
  //     console.error("Error executing script:", error);
  //   }
  //   console.log("running ");
  //   // setTimeout(extractButton.click(), 100);
  // });
  extractOperator.addEventListener("click", async function () {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          // Define an object to store cards grouped by color
          // Assuming you want to extract the text content from each card with a specific class name
          const gray = [];
          const hint = document.querySelectorAll(
            ".bg-white.rounded-lg.font-bold.uppercase"
          );
          const cards = document.querySelectorAll(".transition-opacity");
          console.log(hint);
          const hints = [];
          hint.forEach((h) => {
            const textContent = h.textContent.trim();
            hints.push(textContent);
          });
          cards.forEach((card) => {
            const textContent = card.textContent.trim();
            gray.push(textContent);
          });
          // Loop through each card
          // console.log(gray);
          // Output the grouped cards by color
          return { gray, hints };
        },
      });
      //chaning paragraphsContainer innerhtml to display results
      // { red: [], blue: [], gray: [], black: [] }

      // Set the content of the paragraphcontainer
      //{red: Array(9), blue: Array(8), gray: Array(7), black: Array(1)}
      console.log(results);
      const gray = JSON.stringify(results[0].result.gray);
      const hintText = results[0].result.hints[0];
      const noOfWords = results[0].result.hints[1];
      paragraphsContainer.innerHTML =
        " i m playing codenames if i will give u all words will and the hint and number of words that match with the hint ,  the words that are closest to the hint" +
        "<br>" +
        "words : " +
        gray +
        "<br>" +
        "Hint : " +
        hintText +
        "<br>" +
        "No of words : " +
        noOfWords;
    } catch (error) {
      console.error("Error executing script:", error);
    }
    console.log("running ");
    // setTimeout(extractButton.click(), 100);
  });

  copyButton.addEventListener("click", function () {
    var range = document.createRange();
    range.selectNode(paragraphsContainer);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  });
});
