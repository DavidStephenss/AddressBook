let arrayOfUsers
window.onload = function () {
  getOurUsers()
}
//uses fetch to get random people from the random user API.
//get 10 peoples gender, name, picture,email, phone,location, and dob
const getOurUsers = () => {
fetch("https://randomuser.me/api/?results=10&inc=name,picture,email,phone,location,dob")
.then((res) => res.json())
.then((users) => (arrayOfUsers = users.results))
}
//should hide all info until clicked.
const hideInfo = (id) => {
const allInfo = document.getElementById(id)
if (allInfo.style.display === "block") {
    allInfo.style.display = "none"
  } else {
    allInfo.style.display = "block"
}


//displays all the users and info
const displayUsers = () => {
  const allUsers = document.getElementById("all-users")
  arrayOfUsers.map((users) => {
    const li = document.createElement("li")
    const { name, phone, email, dob, location, picture } = users
    const img = document.createElement("img")
    img.src = picture.large
    const buttonStuff = document.createElement("button")
    const words = document.createTextNode("extra info")
    const p = document.createElement("p")
    p.style.display = "none"
    p.setAttribute("id", 'more-info-${i}')
    buttonStuff.addEventListener("click", () => {
      moreInfo(p.id)
  })
      const fullName = document.createTextNode('${user.name.first} ${user.name.last}')
      const allInfo = document.createTextNode('Phone: ${phone}, Email: ${email}, Address: ${location.street.number}, Birthday: ${dob.date}')

    li.appendChild(img)
    allUsers.append(li)
    li.appendChild(fullName)
    p.appendChild(allInfo)
    allUsers.append(buttonStuff)
    buttonStuff.append(words)
  })
}
 
const consoleUser = () => {
  console.log(arrayOfUsers)
}