let input = document.querySelector("input");
let btn = document.querySelector(".get-button");
let show = document.querySelector(".show-data");

btn.onclick = () =>
{
    if(input.value == "")
    {
        show.innerHTML =`please Enter the Api`;
    }
    else
    {  fetch(`https://jsonplaceholder.typicode.com/${input.value}`)

    .then((response) => response.json())

    .then((repositories) => {

      // Empty The Container
      show.innerHTML = '';
      repositories.forEach(element => {
          let div2 = document.createElement("div");
          let id = document.createTextNode(`Id:${element.id}`);
      div2.appendChild(id);
      div2.className="id";
      show.appendChild(div2);
          let div = document.createElement("div");
       let tex = document.createTextNode(`Name:${element.name}`);
       div.appendChild(tex);
       div.className="name";
       show.appendChild(div);
     
    });
      // Loop On Repositories
    })
    }
}
