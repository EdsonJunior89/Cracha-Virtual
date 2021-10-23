const LinksSocialMedia = {
  /* função */ github: 'edsonjunior89',
  youtube: 'edsonjunior',
  facebook: 'facebook.com',
  instagran: 'instagran.edsmjunior',
  twitter: 'twitter.com'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch (url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio = textContent = data.bio 
    userLink.href = data.html_url 
    UserImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
  }
  getGitHubProfileInfos()
     // o DATA recebido do outro THEN já é JSON
  
  /* fetch busca informações, vai na url pegar o que ela vai responder e mantém guardado aqui na variável, e pra pegar essas respostas precisamos das "promisses" após o "them" criamos uma ARROW   FUNCTION  com uma variável de nome  response, que vai armazenar a resposta do FETCH e após isso o declaramos a função contraída {response.json} para transformar em JSON a resposta recebida de FETCH, após, criamos outro (.then), um then pega a resposta do outro*/ 
 





// função para buscar dados no GitHub
// vou buscar meus dados no git hub(api.github.com/Users/EdsonJunior89)
// pegar os dados dinâmicamente do objeto já criado, usando template string

// para ir ao GitHub e pegar um JSon usa-se a técnica fetch( ele vai na url pega a API que o JSon responde e traz pro código)

//Promises (promessas), um recurso do JavaScript pra poder pegar respostas de algo o '.then()' declarado na variável é uma promessa de pegar alguma coisa. 

// Arrow Functions 'function nomedafuncao (){// code} a função recebe args, a ARROW FUNCTION é uma forma contraída da função, uma função anônima pois não tem nome e quando se usa MAIS DE UM ARGUMENTO declara-se "(argumento1, argumento2){ } =>"' 
