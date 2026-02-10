export function logIn(lista,user){
const foundUser =lista.find((element)=> element.email === user.email && element.password === user.password);
console.log('lista ', lista);
console.log('user ', user);

  if (!foundUser) {
    throw new Error("Credenziali non valide. Riprova.");
  }
return foundUser
}

