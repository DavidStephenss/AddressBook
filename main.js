window.onload = function () {
  getOurUsers()
}

Const getOurUsers = () =>{
fetch("https://randomuser.me/api/?results=10&inc=gender,name,picture,email,phone,location,dob")
.then((res) => res.json())
.then((users) => (arrayOfUsers = users.results))
}
//should hide allinfo until clicked.
const hideInfo = (id) => {
const allInfo = document.getElementById(id)
if (p.style.display === "block") {
    p.style.display = "none"
  } else {
    p.style.display = "block"
}



const displayUsers = () => {
  const allUsers = document.getElementById("all-users")
  arrayOfUsers.map((users, i) => {
    const li = document.createElement("li")
    const { name, phone, email, dob, location, picture } = users
    const img = document.createElement("img")
    img.src = picture.large
    const buttonStuff = document.createElement("button")
    const words = document.createTextNode("extra info")
    const p = document.createElement("p")
    p.setAttribute("id", 'more-info-${i}')
    buttonStuff.addEventListener("click", () => {
  })
      const fullName = document.createTextNode( '${name.first} ${name.last}')
      // const button = document.createElement("button")
      const allInfo = document.createTextNode( 'Phone: ${phone}, Email: ${email}, Address: ${location.street.number} ${location.street.name} ${location.city} ${location.state} ${location.postcode} ${location.country}, Birthday: ${dob.date}')
    li.appendChild(img)
    allUsers.append(li)
    li.appendChild(fullName)
    p.appendChild(allInfo)
  })
}
