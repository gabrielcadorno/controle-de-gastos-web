function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "../../login.html"
    }).cath(() =>{
        alert('Erro ao fazer logout')
    })
}