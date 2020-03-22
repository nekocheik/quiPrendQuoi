(()=> { 
  window.addEventListener('load', () => {
    const socket = io(window.location.pathname);

    socket.on("updatItems", (data) => {
      new Notification("Un nouvelle objet a été ajouté")
      location.reload();
    })

    if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
  
        // Quelque soit la réponse de l'utilisateur, nous nous assurons de stocker cette information
        if(!('permission' in Notification)) {
          Notification.permission = permission;
        }

        console.log(localStorage.getItem("firstNotification"))
        // Si l'utilisateur est OK, on crée une notification
        if (permission === "granted" && localStorage.getItem("firstNotification") !== "yes") {
          const notification = new Notification("Les notification sont maintenant activé 😃");
          localStorage.setItem("firstNotification", "yes")
        }
      });
    }

  });
})()