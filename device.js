// Tuya Razer Custom Integration for SignalRGB - Hardcoded
const DEVICE_IP = "77.193.113.35";
const DEVICE_ID = "bf344487a1baff1ecdlmbq";
const LOCAL_KEY = "0x>=w4CTjiE[T^k$";

export function Setup() {
    device.setName("Tuya Lightbar (Custom)");
    device.setUniqueId(DEVICE_ID);
    device.setAddonInterface(true);
    log("Initializing Tuya Lightbar with forced config...");
    initTuyaConnection(DEVICE_IP, DEVICE_ID, LOCAL_KEY);
}

function initTuyaConnection(ip, id, key) {
    log(`Connecting to ${ip}...`);
    device.write([0x00, 0x00, 0x55, 0xaa]); 
}

export function Render() {
    let color = device.getLightingColor();
    sendColorToTuya(color.r, color.g, color.b);
}

function sendColorToTuya(r, g, b) {
    // Envoi direct
}
