const notifications = document.getElementById("notification-container");

function copyText(){
    navigator.clipboard.writeText("play.space-craft.cf")
    const notification = document.createElement("div")
    notification.classList.add("alert", "shadow-lg", "smooth");
    notification.innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Succesfully copied to clipboard!</span></div>`
    notifications.prepend(notification)
    setTimeout(() => {
        notification.classList.add("notification-slide")
        setTimeout(() => {
            notification.classList.remove("notification-slide")
            setTimeout(() => {
                notification.remove()
            }, 500)
        }, 2500)
    }, 0)
}

document.querySelectorAll("[data-include-html]").forEach(async e => {
    const r = await fetch(e.getAttribute("data-include-html"));
    e.innerHTML = await r.text();
});

const cosmeticList = document.getElementById("cosmetic-list");

function addCosmetic(args){
    let element = document.createElement("div");
    element.classList.add("bg-neutral", "p-10", "rounded-2xl", "hover:text-white", "duration-700", "hover:bg-base-200");
    element.innerHTML = `
        <img src="${args.imgsrc}">
        <h1 class="font-bold text-xl mt-10">${args.name}</h1>
        <p class="mb-5">${args.description}</p>
        <span class="bg-info p-2 rounded-xl text-info-content"><i class="fa-solid fa-coins"></i> ${args.cost} coins</span>
    `
    cosmeticList.append(element);
}

addCosmetic({
    imgsrc: "/assets/cosmetics/camera.png",
    name: "Camera Balloon",
    description: "Go around with the Camera Balloon, say cheese!",
    cost: 120
});

addCosmetic({
    imgsrc: "/assets/cosmetics/regular_balloon.png",
    name: "The regular old balloon, enjoy it while it's there",
    description: "Go around with the Camera Balloon, say cheese!",
    cost: 70
});