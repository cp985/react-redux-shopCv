export function authCheck() {
  const expires = localStorage.getItem("expires");
  const token = localStorage.getItem("token");
  const expirationTime = expires ? Number(expires) : 0;
const now = Number(Date.now());
  if(!token || !expirationTime) {
    throw new Response(JSON.stringify({ message: "Sessione scaduta. Effettua nuovamente il login." }), {
      status: 401,
    });
  }
  
  if (token && expirationTime < now) {
    
    localStorage.removeItem("token");
    localStorage.removeItem("expires");
   throw new Response(JSON.stringify({ message: "Sessione scaduta. Effettua nuovamente il login." }), {
      status: 401,
    });
  }
  return token;
}
