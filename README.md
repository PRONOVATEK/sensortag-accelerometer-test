# Sensortag accelerometer demo

This is a quick test that uses Node.js and Socket.io to display the orientation
of a [Texas Instruments Sensortag](http://www.ti.com/ww/en/wireless_connectivity/sensortag/index.shtml?INTC=SensorTag&HQS=sensortag-bt).

Should work in desktops/laptops/boxes that support Bluetooth LE.

Note that there's no calibration functionality, so the orientation is probably slightly off.

## Usage

Install

    npm install

Turn on the sensortag an run the server

    node index.js

Open the client in web browser

    open http://localhost:8080/
