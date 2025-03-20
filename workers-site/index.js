export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Tarkista päättyykö polku tiedostopäätteeseen
    // Jos ei pääty, palvele index.html (SPA-reititys)
    if (!url.pathname.includes('.') || url.pathname.endsWith('/')) {
      // Muuta pyyntö osoittamaan index.html -tiedostoon
      url.pathname = '/index.html';
      return fetch(new Request(url, request));
    }
    
    // Muussa tapauksessa palvele pyydetty staattinen tiedosto
    return fetch(request);
  }
};
