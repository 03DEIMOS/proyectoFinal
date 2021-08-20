export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // Sólo para el backend Node.js Express
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }