var socket = io(window.location.pathname);

socket.on("updatItems", (data) => {
  console.log('new Items')
  location.reload();
})