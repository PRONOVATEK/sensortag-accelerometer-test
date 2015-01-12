/*global Transr, io*/
var socket = io();

// listen
socket.on('config', function(data){
  console.log("Connected to sensortag, fps =", data.fps);
  socket.on('accelero', function(ev){
    Transr.rotate({
      id:"accelero",
      el:document.getElementById('mover'),
      x: Math.atan(ev.data.x/(Math.sqrt(Math.pow(ev.data.y,2) + Math.pow(ev.data.z,2)))) +'rad',
      y: Math.atan(ev.data.y/(Math.sqrt(Math.pow(ev.data.x,2) + Math.pow(ev.data.z,2)))) +'rad',
      z: Math.atan((Math.sqrt(Math.pow(ev.data.x,2) + Math.pow(ev.data.y,2)))/ev.data.z) +'rad',
      duration: (1/data.fps) + "s",
      timingFunction:"ease-in-out"
    });
  });
});
