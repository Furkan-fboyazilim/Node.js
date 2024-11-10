module.exports =  ()=> {

    return  (request, response, next)=> {
  
      request.zaman = Date.now();
  
      console.log('Giriş algılandı - ' + new Date(request.zaman).toLocaleString());
  
      next();
  
    }
  }