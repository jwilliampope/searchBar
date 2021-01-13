document.getElementById("searchInput").addEventListener("keyup", e => {
  let searchQuery = e.target.value.toLowerCase()
  let allNamesDomCollection = document.getElementsByClassName("name")
  for (let counter = 0; counter < allNamesDomCollection.length; counter++) {
    const currentName = allNamesDomCollection[counter].textContent.toLowerCase()
    if (currentName.includes(searchQuery)) {
      allNamesDomCollection[counter].style.display = "block"
    } else {
      allNamesDomCollection[counter].style.display = "none"
    }
  }
})
