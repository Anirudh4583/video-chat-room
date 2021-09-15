const socket = io('/')

socket.emit('join-room', ROOM_ID, 4583)

socket.on('user-connected', (userId) => {
  console.log('new user connected', userId)
})
