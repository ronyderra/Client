import { io } from 'socket.io-client';

const socket = io('https://xnesdeskserver.herokuapp.com');

socket.on('connect', () => {
    console.log('client connected to socket', socket.id)

})

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});

export default socket;

