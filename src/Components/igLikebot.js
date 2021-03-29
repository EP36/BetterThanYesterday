(function async() {

  let allowed = 0; 
  const Random = (min, max) => {
      return ~~(Math.random() * (max - min + 1)) + min
   }

  const beginClick = () => {
      
      let done = false;
      let dialog = document.body.children[document.body.children.length - 1];
      // console.log('check all dialog', dialog.children[dialog.children.length]);

      let followButton = dialog.getElementsByTagName('button')[0];
      let likeButton = dialog.getElementsByTagName('button')[2];

    //   setTimeout(() => {
    //     if (followButton.textContent === 'Follow') {
    //         console.log('clicked Follow');
    //         // we can add filters in here to test if this is a good user or not 
    //         followButton.click();
    //         allowed++;
    //     }
    // }, Random(52, 123))

      setTimeout(() => {
          // if (likeButton.children.children.children.ariaLabel === 'Like') {
              console.log('clicked Like');
              // we can add filters in here to test if this is a good user or not 
              // we can also randomize liking and following
              likeButton.click();
              allowed++;
          // }
      }, Random(52, 123))

      setTimeout(() => {
         let nextButton =  dialog.getElementsByTagName('a')[1];
          if (nextButton.text === 'Next') {
              nextButton.click();
              if (allowed === 1000) {
                  console.log('Done')
                  done = true;
              }
          }
      }, Random(800, 2334))

      
      setTimeout(() => {
          console.log(allowed);
          if (!done) {
              beginClick();
          }
      }, 4203)
      
  }

  let originalDivCount = document.getElementsByTagName("div").length;
  let clickedCount;

  const find = () => {
      var div = document.getElementById("react-root");

      let article = div.getElementsByTagName("div")[Random(60, 120)]
  
      /**
       * after finding the span we can find the last Div as that is the dialog box
      //  */
      setTimeout(() => {
          article.click();
          clickedCount = document.getElementsByTagName("div").length;

          if (originalDivCount === clickedCount) {
              find();
              return;
          } else {
              beginClick(); 
          }
       }, Random(520,2345));

       return;
  }

  find();

})();