const cube = document.querySelector(".cube");
let startX, startY;
const rotationValue = 600;

const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
    const rotateY = -(mouseX / window.innerWidth - 0.5) * rotationValue;
    cube.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
};

const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;
    const rotateX = -(touchY / window.innerHeight - 0.5) * rotationValue;
    const rotateY = -(touchX / window.innerWidth - 0.5) * rotationValue;
    cube.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("touchmove", handleTouchMove);
