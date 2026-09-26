javascript
/* =============================================================
   VANIKIO — PUBLISH PRODUCT CONTROLLER
   =============================================================

   Responsibilities:
   - Firestore product publishing
   - Form event handling
   - Color palette handling
   - Language initialization
   - Saved Business ID
   - Sticker auto-update
   - Existing HTML onclick compatibility

   IMPORTANT:
   UI / CSS / sticker design is NOT changed here.
============================================================= */


/* =============================================================
   FIREBASE
============================================================= */

import {
    db
} from "../firebase.js";


import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


/* =============================================================
   DEFAULT VALUES
============================================================= */

const DEFAULTS = {

    businessId: "",

    productName: "",

    productDescription: "",

    serial: "12",

    price: "499",

    itemId: "CHAIR-12",

    stickerWidth: "35",

    stickerHeight: "20",

    qrEnabled: true,

    qrSize: "15",

    labelSize: "1.7",

    valueSize: "4.2",

    borderSize: "0.3",

    language: "en"

};


/* =============================================================
   DEFAULT COLORS
============================================================= */

const DEFAULT_COLORS = {

    stickerBackground: "#ffffff",

    border: "#27243a",

    serialLabel: "#27243a",

    serialValue: "#27243a",

    priceLabel: "#27243a",

    priceValue: "#27243a",

    qr: "#000000"

};


/* =============================================================
   SELECTED COLORS
============================================================= */

let selectedColors = {

    ...DEFAULT_COLORS

};


/* =============================================================
   CURRENT LANGUAGE
============================================================= */

let currentLanguage = "en";


/* =============================================================
   FIRESTORE COLLECTION STRUCTURE

   businesses
      └── BUSINESS_ID
           └── products
                └── ITEM_ID

   Example:

   businesses/abc123/products/CHAIR-12
============================================================= */


/* =============================================================
   GET ELEMENT VALUE
============================================================= */

function getValue(id) {

    const element =
        document.getElementById(id);

    if (!element) {

        return "";

    }

    return element.value.trim();

}


/* =============================================================
   GET CHECKBOX VALUE
============================================================= */

function getChecked(id) {

    const element =
        document.getElementById(id);

    if (!element) {

        return false;

    }

    return element.checked;

}


/* =============================================================
   COLLECT PRODUCT DATA
============================================================= */

function collectProductData() {

    const businessId =
        getValue("businessId");


    const productName =
        getValue("productName");


    const productDescription =
        getValue("productDescription");


    const serial =
        getValue("serial");


    const price =
        getValue("price");


    const itemId =
        getValue("itemId");


    const stickerWidth =
        getValue("stickerWidth");


    const stickerHeight =
        getValue("stickerHeight");


    const qrEnabled =
        getChecked("qrEnabled");


    const qrSize =
        getValue("qrSize");


    const labelSize =
        getValue("labelSize");


    const valueSize =
        getValue("valueSize");


    const borderSize =
        getValue("borderSize");


    return {

        businessId,

        productName,

        productDescription,

        serial,

        price,

        itemId,

        sticker: {

            width:
                stickerWidth,

            height:
                stickerHeight,

            qrEnabled,

            qrSize,

            labelSize,

            valueSize,

            borderSize,

            colors: {

                ...selectedColors

            }

        },

        qrUrl:
            "https://vanikio.com/i/" +
            encodeURIComponent(
                businessId
            ) +
            "/" +
            encodeURIComponent(
                itemId
            ),

        language:
            currentLanguage

    };

}


/* =============================================================
   VALIDATE PRODUCT
============================================================= */

function validateProduct(product) {


    if (!product.businessId) {

        showMessage(
            currentLanguage === "ta"
                ? "வணிக ID தேவை."
                : "Business ID is required.",
            "error"
        );

        document
            .getElementById("businessId")
            ?.focus();

        return false;

    }


    if (!product.productName) {

        showMessage(
            currentLanguage === "ta"
                ? "பொருளின் பெயரை உள்ளிடவும்."
                : "Product name is required.",
            "error"
        );

        document
            .getElementById("productName")
            ?.focus();

        return false;

    }


    if (!product.productDescription) {

        showMessage(
            currentLanguage === "ta"
                ? "பொருளின் விளக்கத்தை உள்ளிடவும்."
                : "Product description is required.",
            "error"
        );

        document
            .getElementById("productDescription")
            ?.focus();

        return false;

    }


    if (!product.itemId) {

        showMessage(
            currentLanguage === "ta"
                ? "QR / பொருள் ID தேவை."
                : "QR / Item ID is required.",
            "error"
        );

        document
            .getElementById("itemId")
            ?.focus();

        return false;

    }


    return true;

}


/* =============================================================
   PUBLISH PRODUCT TO FIRESTORE
============================================================= */

async function publishProductToFirestore() {


    const product =
        collectProductData();


    if (!validateProduct(product)) {

        return false;

    }


    try {


        /* =====================================================
           FIRESTORE DOCUMENT REFERENCE

           businesses/{businessId}/products/{itemId}
        ====================================================== */

        const productRef =
            doc(
                db,
                "businesses",
                product.businessId,
                "products",
                product.itemId
            );


        /* =====================================================
           SAVE PRODUCT
        ====================================================== */

        await setDoc(
            productRef,
            {

                businessId:
                    product.businessId,

                productName:
                    product.productName,

                productDescription:
                    product.productDescription,

                serial:
                    product.serial,

                price:
                    product.price,

                itemId:
                    product.itemId,

                qrUrl:
                    product.qrUrl,

                sticker:
                    product.sticker,

                language:
                    product.language,

                updatedAt:
                    serverTimestamp(),

                createdAt:
                    serverTimestamp()

            },
            {
                merge: true
            }
        );


        /* =====================================================
           SAVE BUSINESS ID LOCALLY

           This preserves your existing behaviour.
        ====================================================== */

        localStorage.setItem(
            "vanikioBusinessId",
            product.businessId
        );


        showMessage(
            currentLanguage === "ta"
                ? "பொருள் வெற்றிகரமாக வெளியிடப்பட்டது."
                : "Product published successfully.",
            "success"
        );


        console.log(
            "VANIKIO Product Published:",
            product
        );


        return true;


    } catch (error) {


        console.error(
            "Firestore product publish error:",
            error
        );


        showMessage(
            currentLanguage === "ta"
                ? "பொருளை வெளியிட முடியவில்லை."
                : "Unable to publish product.",
            "error"
        );


        return false;

    }

}


/* =============================================================
   PUBLISH BUTTON

   Existing HTML:

   onclick="openPublishBusiness()"

   We keep the same function name so the HTML design
   and button markup do not need to change.
============================================================= */

async function openPublishBusiness() {


    const success =
        await publishProductToFirestore();


    if (!success) {

        return;

    }


    /*
       Existing destination is preserved.
    */

    window.location.href =
        "publish-business.html";

}


/* =============================================================
   COLOR PALETTE
============================================================= */

function initializeColorPalette() {


    document
        .querySelectorAll(".color-option")
        .forEach(option => {


            option.addEventListener(
                "click",
                function () {


                    const target =
                        this.dataset.target;


                    const color =
                        this.dataset.color;


                    selectedColors[target] =
                        color;


                    const parent =
                        this.parentElement;


                    parent
                        .querySelectorAll(
                            ".color-option"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    this.classList.add(
                        "active"
                    );


                    /*
                       Sticker rendering remains in sticker.js.
                    */

                    if (
                        typeof window.generateSticker ===
                        "function"
                    ) {

                        window.generateSticker();

                    }

                }
            );

        });

}


/* =============================================================
   RESET COLOR PALETTE
============================================================= */

function resetColors() {


    selectedColors = {

        ...DEFAULT_COLORS

    };


    document
        .querySelectorAll(".color-option")
        .forEach(option => {


            const target =
                option.dataset.target;


            const color =
                option.dataset.color;


            if (
                DEFAULT_COLORS[target] &&
                DEFAULT_COLORS[target].toLowerCase() ===
                color.toLowerCase()
            ) {

                option.classList.add(
                    "active"
                );

            } else {

                option.classList.remove(
                    "active"
                );

            }

        });

}


/* =============================================================
   ENABLE DRAGGING
============================================================= */

function initializeDragging() {


    if (
        typeof window.makeDraggable !==
        "function"
    ) {

        return;

    }


    window.makeDraggable(
        document.getElementById(
            "companyNameText"
        )
    );


    window.makeDraggable(
        document.getElementById(
            "serialRow"
        )
    );


    window.makeDraggable(
        document.getElementById(
            "priceRow"
        )
    );


    window.makeDraggable(
        document.getElementById(
            "qrSection"
        )
    );

}


/* =============================================================
   AUTO UPDATE STICKER INPUTS
============================================================= */

function initializeStickerInputs() {


    document
        .querySelectorAll(
            "#businessId, " +
            "#productName, " +
            "#productDescription, " +
            "#serial, " +
            "#price, " +
            "#itemId, " +
            "#stickerWidth, " +
            "#stickerHeight, " +
            "#qrEnabled, " +
            "#qrSize, " +
            "#labelSize, " +
            "#valueSize, " +
            "#borderSize"
        )
        .forEach(input => {


            input.addEventListener(
                "input",
                function () {


                    if (
                        typeof window.generateSticker ===
                        "function"
                    ) {

                        window.generateSticker();

                    }

                }
            );


            input.addEventListener(
                "change",
                function () {


                    if (
                        typeof window.generateSticker ===
                        "function"
                    ) {

                        window.generateSticker();

                    }

                }
            );

        });

}


/* =============================================================
   LOAD SAVED BUSINESS ID
============================================================= */

function loadSavedBusinessId() {


    const savedBusinessId =
        localStorage.getItem(
            "vanikioBusinessId"
        );


    if (!savedBusinessId) {

        return;

    }


    const businessIdInput =
        document.getElementById(
            "businessId"
        );


    if (businessIdInput) {

        businessIdInput.value =
            savedBusinessId;

    }

}


/* =============================================================
   LANGUAGE
============================================================= */

function initializeLanguage() {


    const savedLanguage =
        localStorage.getItem(
            "vanikioStickerLanguage"
        );


    currentLanguage =
        savedLanguage === "ta"
            ? "ta"
            : "en";


    if (
        typeof window.setLanguage ===
        "function"
    ) {

        window.setLanguage(
            currentLanguage
        );

    }

}


/* =============================================================
   KEEP TRACK OF LANGUAGE

   translations.js can call this when language changes.
============================================================= */

window.vanikioSetCurrentLanguage =
    function(language) {

        currentLanguage =
            language === "ta"
                ? "ta"
                : "en";

    };


/* =============================================================
   USER MESSAGE
============================================================= */

function showMessage(
    message,
    type = "success"
) {


    /*
       We intentionally use a simple alert here.

       This does NOT change your existing design.
       Later we can replace this with a styled
       VANIKIO notification without touching Firestore.
    */

    alert(message);


    console.log(
        "VANIKIO:",
        type,
        message
    );

}


/* =============================================================
   RESET STICKER
============================================================= */

function resetSticker() {


    document
        .getElementById("businessId")
        .value =
        DEFAULTS.businessId;


    document
        .getElementById("productName")
        .value =
        DEFAULTS.productName;


    document
        .getElementById("productDescription")
        .value =
        DEFAULTS.productDescription;


    document
        .getElementById("serial")
        .value =
        DEFAULTS.serial;


    document
        .getElementById("price")
        .value =
        DEFAULTS.price;


    document
        .getElementById("itemId")
        .value =
        DEFAULTS.itemId;


    document
        .getElementById("stickerWidth")
        .value =
        DEFAULTS.stickerWidth;


    document
        .getElementById("stickerHeight")
        .value =
        DEFAULTS.stickerHeight;


    document
        .getElementById("qrEnabled")
        .checked =
        DEFAULTS.qrEnabled;


    document
        .getElementById("qrSize")
        .value =
        DEFAULTS.qrSize;


    document
        .getElementById("labelSize")
        .value =
        DEFAULTS.labelSize;


    document
        .getElementById("valueSize")
        .value =
        DEFAULTS.valueSize;


    document
        .getElementById("borderSize")
        .value =
        DEFAULTS.borderSize;


    resetColors();


    if (
        typeof window.resetDraggedPositions ===
        "function"
    ) {

        window.resetDraggedPositions();

    }


    currentLanguage =
        DEFAULTS.language;


    localStorage.setItem(
        "vanikioStickerLanguage",
        DEFAULTS.language
    );


    if (
        typeof window.setLanguage ===
        "function"
    ) {

        window.setLanguage(
            DEFAULTS.language
        );

    }


    if (
        typeof window.generateSticker ===
        "function"
    ) {

        window.generateSticker();

    }

}


/* =============================================================
   EXPOSE FUNCTIONS TO EXISTING HTML

   Your HTML currently uses:

   onclick="generateSticker()"
   onclick="downloadSticker()"
   onclick="printSticker()"
   onclick="openPublishBusiness()"
   onclick="downloadQrOnly()"
   onclick="resetSticker()"

   Module functions are not automatically global,
   so expose them here.
============================================================= */

window.openPublishBusiness =
    openPublishBusiness;


window.resetSticker =
    resetSticker;


/* =============================================================
   INITIALIZATION
============================================================= */

function initializePublishProduct() {


    /*
       1. Load saved business ID
    */

    loadSavedBusinessId();


    /*
       2. Color buttons
    */

    initializeColorPalette();


    /*
       3. Input listeners
    */

    initializeStickerInputs();


    /*
       4. Language
    */

    initializeLanguage();


    /*
       5. Dragging

       sticker.js must be loaded before this controller.
    */

    initializeDragging();


    /*
       6. Generate initial sticker
    */

    if (
        typeof window.generateSticker ===
        "function"
    ) {

        window.generateSticker();

    }


    console.log(
        "VANIKIO Publish Product initialized."
    );

}


/* =============================================================
   START
============================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializePublishProduct
    );

} else {

    initializePublishProduct();

}

