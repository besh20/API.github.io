const op = {
    method: 'GET',
    headers : {
        'X-RapidAPI-Key': 'bf39dfa1e8msh4bb4d1f1de158c2p1c8f69jsn525ef38821d4',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
}
   const getData = () =>{
    fetch("https://hapi-books.p.rapidapi.com/month/2022/3", op)

.then((res) =>{
    let Data = res.json()
    return Data
})

.then((Data) =>{
Data.forEach((items, index,arr1) => {
    console.log(items)

    let wrapper = document.createElement("div");

            wrapper.className = "card col-md-4 mt-5 p-2";
            wrapper.style.border = "2px solid black"
            wrapper.style.marginRight = "20px "
            wrapper.style.width = "350px"

              let cardImage = document.createElement("img");
              cardImage.src = items.cover
              cardImage.classList.add('cardImage')
              cardImage.style.height = "auto";
              cardImage.style.width = "100%";

              let cardBody = document.createElement("div");
              cardBody.className = "card-body";
    
              let title = document.createElement("h5");
              cardBody.className = "card-title";
              title.textContent = "Name: " + items.name;
    
              let text = document.createElement("p");
              text.className = "card-text";
              text.textContent = "Ratings: " + items.rating;

              cardBody.appendChild(cardImage)
              cardBody.appendChild(title);
              cardBody.appendChild(text);
              wrapper.appendChild(cardBody);
    
              document.getElementById("appendData").appendChild(wrapper);

              cardBody.addEventListener('click', () => {
                openModal(items); // Pass the book details to the function
              }); 
});
})
.catch(err => {
    console.log(err)
})

}
getData()

function openModal(bookDetails) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
    <p><strong>BOOK DETAILS</strong></p>
    <p><strong>Position:</strong> ${bookDetails.position}</p>
    <p><strong>BookId:</strong> ${bookDetails.book_id}</p>
    <p><strong>Name:</strong> ${bookDetails.name}</p>
    <p><strong>Ratings:</strong> ${bookDetails.rating}</p>
    <p><strong>Link:</strong> ${bookDetails.url}</p>
    `;
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

