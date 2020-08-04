window.onload = function () {
  getOurUsers()
}

Const getOurUsers = () =>{
fetch("https://randomuser.me/api/?results=10&inc=gender,name,nat,picture")
.then((res) => res.json())
.then((users) => (arrayOfUsers = users.results))
}

const displayUsers = () => {
  const allUsers = document.getElementById("all-users")
  arrayOfUsers.map((users) => {
    const li = document.createElement("li")
    const img = document.createElement("img")
    img.src = picture.large
    const text = document.createTextNode(
      `#${index}, Title: ${post.name.first}:  ${post.name.last}`
    )

    li.appendChild(text)
    li.appendChild(img)
    allUsers.append(li)
  })
}


