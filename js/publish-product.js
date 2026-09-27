/* ============================================================
VANIKIO — Publish Product
js/publish-product.js

FLOW:

Business ID
+
Item ID
↓
QR automatically generated
↓
Download QR
↓
QR PNG only
============================================================ */

/* ============================================================
FIREBASE
============================================================ */

import {
db,
doc,
setDoc,
serverTimestamp
} from "../firebase.js";

/* ============================================================
DEFAULTS
============================================================ */

const DEFAULTS = {

businessId: "",

productName: "",

productDescription: "",

serial: "12",

price: "499",

itemId: "CHAIR-12",

stickerWidth: "35",

stickerHeight: "20",

qrSize: "15",

labelSize: "1.7",

valueSize: "4.2",

borderSize: "0.3",

language: "en"

};

/* ============================================================
DEFAULT COLORS
============================================================ */

const DEFAULT_COLORS = {

stickerBackground: "#ffffff",

border: "#27243a",

serialLabel: "#27243a",

serialValue: "#27243a",

priceLabel: "#27243a",

priceValue: "#27243a",

qr: "#000000"

};

/* ============================================================
CURRENT COLORS
============================================================ */

let selectedColors = {

...DEFAULT_COLORS

};

/* ============================================================
GET ELEMENT
============================================================ */

function getElement(id) {

return document.getElementById(id);

}

/* ============================================================
GET QR URL
============================================================ */

function getQrUrl() {

const businessId =
    getElement("businessId")?.value.trim() || "";

const itemId =
    getElement("itemId")?.value.trim() || "";


if (!businessId || !itemId) {

    return "";

}


return (
    "https://vanikio.com/i/" +
    encodeURIComponent(businessId) +
    "/" +
    encodeURIComponent(itemId)
);

}

/* ============================================================
GENERATE QR
============================================================ */

function generateQr() {

const qr =
    getElement("qrcode");


if (!qr) {

    return;

}


/* --------------------------------------------------------
   CLEAR OLD QR
-------------------------------------------------------- */

qr.innerHTML = "";


/* --------------------------------------------------------
   GET DATA
-------------------------------------------------------- */

const qrUrl =
    getQrUrl();


if (!qrUrl) {

    return;

}


/* --------------------------------------------------------
   CHECK LIBRARY
-------------------------------------------------------- */

if (
    typeof QRCode ===
    "undefined"
) {

    console.error(
        "QRCode library is not loaded."
    );

    return;

}


/* --------------------------------------------------------
   GET SIZE
-------------------------------------------------------- */

const qrSize =
    parseFloat(
        getElement("qrSize")?.value
    ) || 15;


/* --------------------------------------------------------
   GENERATE HIGH RESOLUTION QR
-------------------------------------------------------- */

new QRCode(
    qr,
    {

        text: qrUrl,

        width: 1000,

        height: 1000,

        colorDark:
            selectedColors.qr,

        colorLight:
            selectedColors.stickerBackground,

        correctLevel:
            QRCode.CorrectLevel.M

    }
);


/* --------------------------------------------------------
   DISPLAY SIZE
-------------------------------------------------------- */

qr.style.width =
    qrSize + "mm";

qr.style.height =
    qrSize + "mm";


const canvas =
    qr.querySelector("canvas");


if (canvas) {

    canvas.style.width =
        qrSize + "mm";

    canvas.style.height =
        qrSize + "mm";

    canvas.style.display =
        "block";

}


const image =
    qr.querySelector("img");


if (image) {

    image.style.width =
        qrSize + "mm";

    image.style.height =
        qrSize + "mm";

    image.style.display =
        "block";

}


/* --------------------------------------------------------
   SHOW QR SECTION
-------------------------------------------------------- */

const qrSection =
    getElement("qrSection");


if (qrSection) {

    qrSection.style.display =
        "flex";

}


/* --------------------------------------------------------
   UPDATE STICKER PREVIEW
-------------------------------------------------------- */

updateStickerPreview();

}

/* ============================================================
UPDATE STICKER PREVIEW
============================================================ */

function updateStickerPreview() {

const sticker =
    getElement("sticker");


if (!sticker) {

    return;

}


/* --------------------------------------------------------
   SIZE
-------------------------------------------------------- */

const width =
    parseFloat(
        getElement("stickerWidth")?.value
    ) || 35;


const height =
    parseFloat(
        getElement("stickerHeight")?.value
    ) || 20;


sticker.style.width =
    width + "mm";


sticker.style.height =
    height + "mm";


/* --------------------------------------------------------
   BACKGROUND
-------------------------------------------------------- */

sticker.style.backgroundColor =
    selectedColors.stickerBackground;


/* --------------------------------------------------------
   BORDER
-------------------------------------------------------- */

const borderSize =
    parseFloat(
        getElement("borderSize")?.value
    ) || 0.3;


sticker.style.border =
    borderSize +
    "mm solid " +
    selectedColors.border;


/* --------------------------------------------------------
   SERIAL
-------------------------------------------------------- */

const serial =
    getElement("serial")?.value.trim() || "";


const serialText =
    getElement("serialText");


if (serialText) {

    serialText.textContent =
        serial;

    serialText.style.color =
        selectedColors.serialValue;

}


/* --------------------------------------------------------
   PRICE
-------------------------------------------------------- */

const price =
    getElement("price")?.value.trim() || "";


const priceText =
    getElement("priceText");


if (priceText) {

    priceText.textContent =
        price;

    priceText.style.color =
        selectedColors.priceValue;

}


/* --------------------------------------------------------
   SERIAL LABEL
-------------------------------------------------------- */

const serialLabel =
    getElement("serialLabel");


const priceLabel =
    getElement("priceLabel");


const language =
    localStorage.getItem(
        "vanikioStickerLanguage"
    ) || "en";


if (serialLabel) {

    serialLabel.textContent =
        language === "ta"
            ? "வரிசை:"
            : "SI.NO:";

    serialLabel.style.color =
        selectedColors.serialLabel;

}


if (priceLabel) {

    priceLabel.textContent =
        language === "ta"
            ? "விலை:"
            : "PRICE:";

    priceLabel.style.color =
        selectedColors.priceLabel;

}


/* --------------------------------------------------------
   FONT SIZES
-------------------------------------------------------- */

const labelSize =
    parseFloat(
        getElement("labelSize")?.value
    ) || 1.7;


const valueSize =
    parseFloat(
        getElement("valueSize")?.value
    ) || 4.2;


document
    .querySelectorAll(".info-label")
    .forEach(element => {

        element.style.fontSize =
            labelSize + "mm";

    });


document
    .querySelectorAll(".info-value")
    .forEach(element => {

        element.style.fontSize =
            valueSize + "mm";

    });


/* --------------------------------------------------------
   INFO LINES
-------------------------------------------------------- */

document
    .querySelectorAll(".info-line")
    .forEach(element => {

        element.style.borderBottomColor =
            selectedColors.border;

    });


/* --------------------------------------------------------
   DIVIDER
-------------------------------------------------------- */

const divider =
    getElement("divider");


const qrSize =
    parseFloat(
        getElement("qrSize")?.value
    ) || 15;


if (divider) {

    divider.style.backgroundColor =
        selectedColors.border;

    divider.style.height =
        qrSize + "mm";

}

}

/* ============================================================
GENERATE EVERYTHING
============================================================ */

function generateSticker() {

updateStickerPreview();

generateQr();

}

/* ============================================================
COLOR PALETTE
============================================================ */

function initializeColorPalette() {

document
    .querySelectorAll(".color-option")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const target =
                    this.dataset.target;

                const color =
                    this.dataset.color;


                if (
                    !target ||
                    !color
                ) {

                    return;

                }


                selectedColors[target] =
                    color;


                /* -----------------------------------------
                   REMOVE ACTIVE FROM SAME GROUP
                ----------------------------------------- */

                document
                    .querySelectorAll(
                        '.color-option[data-target="' +
                        target +
                        '"]'
                    )
                    .forEach(option => {

                        option.classList.remove(
                            "active"
                        );

                    });


                /* -----------------------------------------
                   ACTIVE
                ----------------------------------------- */

                this.classList.add(
                    "active"
                );


                /* -----------------------------------------
                   REGENERATE
                ----------------------------------------- */

                generateSticker();

            }
        );

    });

}

/* ============================================================
INPUT LISTENERS
============================================================ */

function initializeInputListeners() {

const inputIds = [

    "businessId",

    "productName",

    "productDescription",

    "serial",

    "price",

    "itemId",

    "stickerWidth",

    "stickerHeight",

    "qrSize",

    "labelSize",

    "valueSize",

    "borderSize"

];


inputIds.forEach(id => {

    const element =
        getElement(id);


    if (!element) {

        return;

    }


    /* ----------------------------------------------------
       SAVE BUSINESS ID
    ---------------------------------------------------- */

    if (id === "businessId") {

        element.addEventListener(
            "input",
            function () {

                const value =
                    element.value.trim();


                if (value) {

                    localStorage.setItem(
                        "vanikioBusinessId",
                        value
                    );

                }


                generateSticker();

            }
        );

    } else {

        element.addEventListener(
            "input",
            generateSticker
        );

    }


    element.addEventListener(
        "change",
        generateSticker
    );

});

}

/* ============================================================
LOAD SAVED BUSINESS ID
============================================================ */

function loadSavedBusinessId() {

const savedBusinessId =
    localStorage.getItem(
        "vanikioBusinessId"
    );


const businessId =
    getElement("businessId");


if (
    businessId &&
    savedBusinessId
) {

    businessId.value =
        savedBusinessId;

}

}

/* ============================================================
RESET STICKER
============================================================ */

function resetSticker() {

/* --------------------------------------------------------
   RESET INPUTS
-------------------------------------------------------- */

Object.entries(DEFAULTS)
    .forEach(([key, value]) => {

        const element =
            getElement(key);


        if (!element) {

            return;

        }


        element.value =
            value;

    });


/* --------------------------------------------------------
   RESET COLORS
-------------------------------------------------------- */

selectedColors = {

    ...DEFAULT_COLORS

};


document
    .querySelectorAll(".color-option")
    .forEach(option => {

        option.classList.remove(
            "active"
        );

    });


document
    .querySelectorAll(".color-option")
    .forEach(option => {

        const target =
            option.dataset.target;

        const color =
            option.dataset.color;


        if (
            DEFAULT_COLORS[target] ===
            color
        ) {

            option.classList.add(
                "active"
            );

        }

    });


/* --------------------------------------------------------
   RESET LANGUAGE
-------------------------------------------------------- */

setLanguage(
    DEFAULTS.language
);


/* --------------------------------------------------------
   REGENERATE
-------------------------------------------------------- */

generateSticker();

}

/* ============================================================
DOWNLOAD QR ONLY
============================================================ */

function downloadQrOnly() {

/* --------------------------------------------------------
   ALWAYS REGENERATE FIRST
-------------------------------------------------------- */

generateSticker();


const businessId =
    getElement("businessId")?.value.trim() || "";


const itemId =
    getElement("itemId")?.value.trim() || "";


/* --------------------------------------------------------
   VALIDATION
-------------------------------------------------------- */

if (!businessId) {

    alert(
        "Please enter Business ID."
    );

    return;

}


if (!itemId) {

    alert(
        "Please enter QR / Item ID."
    );

    return;

}


/* --------------------------------------------------------
   GET QR
-------------------------------------------------------- */

const qr =
    getElement("qrcode");


if (!qr) {

    alert(
        "QR Code element not found."
    );

    return;

}


const canvas =
    qr.querySelector("canvas");


if (!canvas) {

    alert(
        "QR Code is not ready."
    );

    return;

}


/* --------------------------------------------------------
   DOWNLOAD ONLY QR
-------------------------------------------------------- */

const dataUrl =
    canvas.toDataURL(
        "image/png"
    );


const link =
    document.createElement("a");


link.download =
    "VANIKIO-QR-" +
    itemId +
    ".png";


link.href =
    dataUrl;


document.body.appendChild(
    link
);


link.click();


document.body.removeChild(
    link
);

}

/* ============================================================
SET LANGUAGE
============================================================ */

function setLanguage(language) {

if (
    language !== "en" &&
    language !== "ta"
) {

    language = "en";

}


localStorage.setItem(
    "vanikioStickerLanguage",
    language
);


document.documentElement.lang =
    language;


/* --------------------------------------------------------
   TRANSLATIONS
-------------------------------------------------------- */

if (
    typeof translations !==
    "undefined" &&
    translations[language]
) {

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                translations[language][key]
            ) {

                element.textContent =
                    translations[language][key];

            }

        });

}


/* --------------------------------------------------------
   PLACEHOLDERS
-------------------------------------------------------- */

document
    .querySelectorAll(
        "[data-placeholder-en]"
    )
    .forEach(element => {

        const placeholder =
            language === "ta"
                ? element.dataset.placeholderTa
                : element.dataset.placeholderEn;


        if (placeholder) {

            element.placeholder =
                placeholder;

        }

    });


/* --------------------------------------------------------
   LANGUAGE BUTTONS
-------------------------------------------------------- */

const englishButton =
    getElement("englishButton");


const tamilButton =
    getElement("tamilButton");


if (englishButton) {

    englishButton.classList.toggle(
        "active",
        language === "en"
    );

}


if (tamilButton) {

    tamilButton.classList.toggle(
        "active",
        language === "ta"
    );

}


/* --------------------------------------------------------
   LABELS
-------------------------------------------------------- */

const serialLabel =
    getElement("serialLabel");


const priceLabel =
    getElement("priceLabel");


if (serialLabel) {

    serialLabel.textContent =
        language === "ta"
            ? "வரிசை:"
            : "SI.NO:";

}


if (priceLabel) {

    priceLabel.textContent =
        language === "ta"
            ? "விலை:"
            : "PRICE:";

}


generateSticker();

}

/* ============================================================
PUBLISH PRODUCT
============================================================ */

async function publishProduct() {

const businessId =
    getElement("businessId")?.value.trim() || "";


const itemId =
    getElement("itemId")?.value.trim() || "";


const productName =
    getElement("productName")?.value.trim() || "";


const productDescription =
    getElement("productDescription")?.value.trim() || "";


const serial =
    getElement("serial")?.value.trim() || "";


const price =
    getElement("price")?.value.trim() || "";


/* --------------------------------------------------------
   VALIDATION
-------------------------------------------------------- */

if (!businessId) {

    alert(
        "Please enter Business ID."
    );

    return false;

}


if (!productName) {

    alert(
        "Please enter Product Name."
    );

    return false;

}


if (!productDescription) {

    alert(
        "Please enter Product Description."
    );

    return false;

}


if (!itemId) {

    alert(
        "Please enter QR / Item ID."
    );

    return false;

}


/* --------------------------------------------------------
   FIRESTORE REFERENCE
-------------------------------------------------------- */

const productRef =
    doc(
        db,
        "businesses",
        businessId,
        "products",
        itemId
    );


/* --------------------------------------------------------
   SAVE PRODUCT
-------------------------------------------------------- */

try {

    await setDoc(
        productRef,
        {

            businessId:
                businessId,

            itemId:
                itemId,

            productName:
                productName,

            productDescription:
                productDescription,

            serial:
                serial,

            price:
                price,

            qrUrl:
                getQrUrl(),

            updatedAt:
                serverTimestamp()

        },
        {
            merge: true
        }
    );


    alert(
        "Product published successfully."
    );


    return true;

} catch (error) {

    console.error(
        "Product publish failed:",
        error
    );


    alert(
        "Unable to publish product."
    );


    return false;

}

}

/* ============================================================
OPEN PUBLISH BUSINESS
============================================================ */

async function openPublishBusiness() {

const published =
    await publishProduct();


if (!published) {

    return;

}


window.location.href =
    "publish-business.html";

}

/* ============================================================
DOWNLOAD / PRINT COMPATIBILITY
============================================================ */

async function downloadSticker() {

/*
   Kept only for compatibility with any old HTML.

   New UI should use downloadQrOnly().
*/

downloadQrOnly();

}

function printSticker() {

window.print();

}

/* ============================================================
GLOBAL FUNCTIONS
============================================================ */

window.generateSticker =
generateSticker;

window.generateQr =
generateQr;

window.downloadQrOnly =
downloadQrOnly;

window.downloadSticker =
downloadSticker;

window.printSticker =
printSticker;

window.resetSticker =
resetSticker;

window.setLanguage =
setLanguage;

window.publishProduct =
publishProduct;

window.openPublishBusiness =
openPublishBusiness;

/* ============================================================
INITIALIZE PAGE
============================================================ */

function initializePage() {

loadSavedBusinessId();

initializeColorPalette();

initializeInputListeners();


const savedLanguage =
    localStorage.getItem(
        "vanikioStickerLanguage"
    ) || "en";


setLanguage(
    savedLanguage
);


generateSticker();

}

/* ============================================================
START
============================================================ */

if (
document.readyState ===
"loading"
) {

document.addEventListener(
    "DOMContentLoaded",
    initializePage
);

} else {

initializePage();

}
