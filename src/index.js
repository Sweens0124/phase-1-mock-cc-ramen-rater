/*
as user:
 see all ramen images in the div with the ID: #ramen-menu. When the page loads, request data from the server to get all ramen objects. DISPLAY IMAGE for each of the ramen using an IMG tag inside the #ramen-menu div.
 Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
*/

/* Questions ???
1)How do i get each 'image' element from fetch to go into the div needed?
2) when you click a ramen-image, you see all the info about that ramen displayed inside the detail div!!! add click event? how do you display details through the function
3) each image has ID, how do you select each ID through the foreach?
*/

// addEventListener('click', () => {
//   const detailImg = document.getElementById('ramen-detail').getElementsByClassName
//     ('detail-image');
//   let ramenImg = document.getElementsByClassName('images')
//   console.log((ramenImg[ ramen.id ]))
// })


fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(json => {
    const ramenMenu = document.querySelector('#ramen-menu')

    json.forEach(oneRamen => {
      console.log(oneRamen)
      const image = document.createElement('img')
      image.src = oneRamen.image
      ramenMenu.append(image)

      // add event click
      image.addEventListener('click', () => {
        console.log(oneRamen)
        const imageToUpdate = document.querySelector(
          "#ramen-detail img.detail-image"
        );
        imageToUpdate.src = oneRamen.image
        imageToUpdate.alt = oneRamen.name

        const name = document.querySelector('#ramen-detail h2')
        name.textContent = oneRamen.name

        const restaurant = document.querySelector('#ramen-detail h3')
        restaurant.textContent = oneRamen.restaurant

        const rating = document.getElementById('rating-display')
        rating.textContent = oneRamen.rating

        const comment = document.getElementById('comment-display')
        comment.textContent = oneRamen.comment
      })
    })
  });
