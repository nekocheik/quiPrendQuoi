(()=> {  
  window.addEventListener('load', () => {
    const socket = io(window.location.pathname);
    const sendNotification = new Notification("Un nouvelle objet a été ajouté");

    socket.on("updatItems", (data) => {
      location.reload();
      sendNotification()
    })

    if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
  
        // Quelque soit la réponse de l'utilisateur, nous nous assurons de stocker cette information
        if(!('permission' in Notification)) {
          Notification.permission = permission;
        }
  
        // Si l'utilisateur est OK, on crée une notification
        if (permission === "granted") {
          var notification = new Notification("Salut toi !");
        }
      });
    }

  });
})()