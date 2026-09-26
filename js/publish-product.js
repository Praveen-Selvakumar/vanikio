// ============================================================
// VANIKIO — Publish Product
// js/publish-product.js
// ============================================================

import {
    db,
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "../firebase.js";


// ============================================================
// DEFAULTS
// ============================================================

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


// ============================================================
// DEFAULT COLORS
// ============================================================

const DEFAULT_COLORS = {

    stickerBackground: "#ffffff",

    border: "#27243a",

    serialLabel: "#27243a",

    serialValue: "#27243a",

    priceLabel: "#27243a",

    priceValue: "#27243a",

    qr: "#000000"
};


// ============================================================
// CURRENT COLORS
// ============================================================

let selectedColors = {

    ...DEFAULT_COLORS

};


// ============================================================
// GET ELEMENT
// ============================================================

function getElement(id) {

    return document.getElementById(id);

}


// ============================================================
// GET PRODUCT DATA
// ============================================================

function getProductData() {

    const businessId =
        getElement("businessId")?.value.trim() || "";

    const productName =
        getElement("productName")?.value.trim() || "";

    const productDescription =
        getElement("productDescription")?.value.trim() || "";

    const serial =
        getElement("serial")?.value.trim() || "";

    const price =
        getElement("price")?.value.trim() || "";

    const itemId =
        getElement("itemId")?.value.trim() || "";

    const stickerWidth =
        parseFloat(
            getElement("stickerWidth")?.value
        ) || 35;

    const stickerHeight =
        parseFloat(
            getElement("stickerHeight")?.value
        ) || 20;

    const qrEnabled =
        getElement("qrEnabled")?.checked ?? true;

    const qrSize =
        parseFloat(
            getElement("qrSize")?.value
        ) || 15;

    const labelSize =
        parseFloat(
            getElement("labelSize")?.value
        ) || 1.7;

    const valueSize =
        parseFloat(
            getElement("valueSize")?.value
        ) || 4.2;

    const borderSize =
        parseFloat(
            getElement("borderSize")?.value
        ) || 0.3;

    const language =
        localStorage.getItem("vanikioStickerLanguage") || "en";


    return {

        businessId,

        productName,

        productDescription,

        serial,

        price,

        itemId,

        qrEnabled,

        qrSize,

        stickerWidth,

        stickerHeight,

        labelSize,

        valueSize,

        borderSize,

        language,

        qrUrl:
            "https://vanikio.com/i/" +
            encodeURIComponent(
                businessId || "MISSING-BUSINESS-ID"
            ) +
            "/" +
            encodeURIComponent(
                itemId || "DEMO"
            ),

        sticker: {

            width: stickerWidth,

            height: stickerHeight,

            qrEnabled,

            qrSize,

            labelSize,

            valueSize,

            borderSize,

            colors: {

                ...selectedColors

            }

        }

    };

}


// ============================================================
// GENERATE STICKER
// ============================================================

function generateSticker() {

    const businessId =
        getElement("businessId")?.value.trim() || "";

    const serial =
        getElement("serial")?.value.trim() || "";

    const price =
        getElement("price")?.value.trim() || "";

    const itemId =
        getElement("itemId")?.value.trim() || "";


    const width =
        parseFloat(
            getElement("stickerWidth")?.value
        ) || 35;

    const height =
        parseFloat(
            getElement("stickerHeight")?.value
        ) || 20;

    const qrEnabled =
        getElement("qrEnabled")?.checked ?? true;

    const qrSize =
        parseFloat(
            getElement("qrSize")?.value
        ) || 15;

    const labelSize =
        parseFloat(
            getElement("labelSize")?.value
        ) || 1.7;

    const valueSize =
        parseFloat(
            getElement("valueSize")?.value
        ) || 4.2;

    const borderSize =
        parseFloat(
            getElement("borderSize")?.value
        ) || 0.3;


    const sticker =
        getElement("sticker");

    const qrSection =
        getElement("qrSection");

    const divider =
        getElement("divider");

    const qr =
        getElement("qrcode");

    const stickerInfo =
        document.querySelector(".sticker-info");

    const companyNameText =
        getElement("companyNameText");

    const serialRow =
        getElement("serialRow");

    const priceRow =
        getElement("priceRow");

    const serialText =
        getElement("serialText");

    const priceText =
        getElement("priceText");

    const serialLabel =
        getElement("serialLabel");

    const priceLabel =
        getElement("priceLabel");


    if (!sticker) {
        return;
    }


    // ========================================================
    // REQUIRE BUSINESS ID FOR QR
    // ========================================================

    if (!businessId) {

        if (qr) {

            qr.innerHTML = "";

        }

        return;

    }


    // ========================================================
    // STICKER SIZE
    // ========================================================

    sticker.style.width =
        width + "mm";

    sticker.style.height =
        height + "mm";


    // ========================================================
    // BACKGROUND
    // ========================================================

    sticker.style.backgroundColor =
        selectedColors.stickerBackground;


    // ========================================================
    // BORDER
    // ========================================================

    sticker.style.border =
        borderSize + "mm solid " +
        selectedColors.border;


    // ========================================================
    // COMPANY NAME
    // ========================================================

    if (companyNameText) {

        companyNameText.style.display =
            "none";

    }


    // ========================================================
    // VALUES
    // ========================================================

    if (serialText) {

        serialText.textContent =
            serial || "";

    }


    if (priceText) {

        priceText.textContent =
            price || "";

    }


    // ========================================================
    // LABEL TEXT
    // ========================================================

    const language =
        localStorage.getItem(
            "vanikioStickerLanguage"
        ) || "en";


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


    // ========================================================
    // FONT SIZES
    // ========================================================

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


    // ========================================================
    // LABEL COLORS
    // ========================================================

    if (serialLabel) {

        serialLabel.style.color =
            selectedColors.serialLabel;

    }


    if (priceLabel) {

        priceLabel.style.color =
            selectedColors.priceLabel;

    }


    // ========================================================
    // VALUE COLORS
    // ========================================================

    if (serialText) {

        serialText.style.color =
            selectedColors.serialValue;

    }


    if (priceText) {

        priceText.style.color =
            selectedColors.priceValue;

    }


    // ========================================================
    // INFO LINE COLORS
    // ========================================================

    document
        .querySelectorAll(".info-line")
        .forEach(element => {

            element.style.borderBottomColor =
                selectedColors.border;

        });


    // ========================================================
    // QR LAYOUT
    // ========================================================

    if (qrEnabled) {

        if (stickerInfo) {

            stickerInfo.style.flex = "1";

            stickerInfo.style.width = "auto";

            stickerInfo.style.paddingLeft =
                "1.5mm";

        }


        if (divider) {

            divider.style.display =
                "block";

            divider.style.backgroundColor =
                selectedColors.border;

            divider.style.height =
                qrSize + "mm";

        }


        if (qrSection) {

            qrSection.style.display =
                "flex";

            qrSection.style.flex =
                "0 0 auto";

        }

    } else {

        if (divider) {

            divider.style.display =
                "none";

        }


        if (qrSection) {

            qrSection.style.display =
                "none";

        }


        if (stickerInfo) {

            stickerInfo.style.width =
                "100%";

            stickerInfo.style.flex =
                "1";

            stickerInfo.style.padding =
                "1mm";

        }

    }


    // ========================================================
    // CLEAR OLD QR
    // ========================================================

    if (qr) {

        qr.innerHTML = "";

    }


    // ========================================================
    // GENERATE QR
    // ========================================================

    if (
        qrEnabled &&
        qr &&
        typeof QRCode !== "undefined"
    ) {

        const qrUrl =
            "https://vanikio.com/i/" +
            encodeURIComponent(
                businessId || "MISSING-BUSINESS-ID"
            ) +
            "/" +
            encodeURIComponent(
                itemId || "DEMO"
            );


        new QRCode(qr, {

            text: qrUrl,

            width: 500,

            height: 500,

            colorDark:
                selectedColors.qr,

            colorLight:
                selectedColors.stickerBackground,

            correctLevel:
                QRCode.CorrectLevel.M

        });


        qr.style.width =
            qrSize + "mm";

        qr.style.height =
            qrSize + "mm";


        const qrCanvas =
            qr.querySelector("canvas");

        const qrImage =
            qr.querySelector("img");


        if (qrCanvas) {

            qrCanvas.style.width =
                qrSize + "mm";

            qrCanvas.style.height =
                qrSize + "mm";

        }


        if (qrImage) {

            qrImage.style.width =
                qrSize + "mm";

            qrImage.style.height =
                qrSize + "mm";

        }

    }

}


// ============================================================
// COLOR PALETTE
// ============================================================

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


                    if (!target || !color) {
                        return;
                    }


                    selectedColors[target] =
                        color;


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


                    this.classList.add(
                        "active"
                    );


                    generateSticker();

                }
            );

        });

}


// ============================================================
// DRAGGABLE ELEMENTS
// ============================================================

function makeDraggable(element) {

    if (!element) {
        return;
    }


    let startX = 0;

    let startY = 0;

    let startTranslateX = 0;

    let startTranslateY = 0;


    element.dataset.translateX =
        element.dataset.translateX || "0";

    element.dataset.translateY =
        element.dataset.translateY || "0";


    element.addEventListener(
        "pointerdown",
        function (event) {

            startX =
                event.clientX;

            startY =
                event.clientY;


            startTranslateX =
                parseFloat(
                    element.dataset.translateX
                ) || 0;

            startTranslateY =
                parseFloat(
                    element.dataset.translateY
                ) || 0;


            element.setPointerCapture(
                event.pointerId
            );


            element.style.cursor =
                "grabbing";

        }
    );


    element.addEventListener(
        "pointermove",
        function (event) {

            if (
                !element.hasPointerCapture(
                    event.pointerId
                )
            ) {
                return;
            }


            const pixelsPerMm =
                3.78;


            const deltaX =
                (
                    event.clientX -
                    startX
                ) / pixelsPerMm;


            const deltaY =
                (
                    event.clientY -
                    startY
                ) / pixelsPerMm;


            const translateX =
                startTranslateX +
                deltaX;

            const translateY =
                startTranslateY +
                deltaY;


            element.dataset.translateX =
                translateX;

            element.dataset.translateY =
                translateY;


            element.style.transform =
                "translate(" +
                translateX +
                "mm, " +
                translateY +
                "mm)";

        }
    );


    element.addEventListener(
        "pointerup",
        function (event) {

            try {

                element.releasePointerCapture(
                    event.pointerId
                );

            } catch (error) {
                // Ignore
            }


            element.style.cursor =
                "grab";

        }
    );


    element.addEventListener(
        "pointercancel",
        function (event) {

            try {

                element.releasePointerCapture(
                    event.pointerId
                );

            } catch (error) {
                // Ignore
            }


            element.style.cursor =
                "grab";

        }
    );

}


// ============================================================
// RESET DRAG POSITIONS
// ============================================================

function resetDraggedPositions() {

    const elements = [

        getElement("companyNameText"),

        getElement("serialRow"),

        getElement("priceRow"),

        getElement("qrSection")

    ];


    elements.forEach(element => {

        if (!element) {
            return;
        }


        element.dataset.translateX =
            "0";

        element.dataset.translateY =
            "0";

        element.style.transform =
            "translate(0mm, 0mm)";

    });

}


// ============================================================
// RESET STICKER
// ============================================================

function resetSticker() {

    // ========================================================
    // RESET INPUTS
    // ========================================================

    Object.entries(DEFAULTS)
        .forEach(([key, value]) => {

            const element =
                getElement(key);

            if (!element) {
                return;
            }


            if (
                element.type ===
                "checkbox"
            ) {

                element.checked =
                    value;

            } else {

                element.value =
                    value;

            }

        });


    // ========================================================
    // RESET COLORS
    // ========================================================

    selectedColors =
        {
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


    // ========================================================
    // RESET DRAGGING
    // ========================================================

    resetDraggedPositions();


    // ========================================================
    // LANGUAGE
    // ========================================================

    setLanguage(
        DEFAULTS.language
    );


    generateSticker();

}


// ============================================================
// DOWNLOAD STICKER PNG
// ============================================================

async function downloadSticker() {

    generateSticker();


    const sticker =
        getElement("sticker");


    if (
        !sticker ||
        typeof html2canvas === "undefined"
    ) {

        return;

    }


    const originalBoxShadow =
        sticker.style.boxShadow;

    const originalOverflow =
        sticker.style.overflow;


    sticker.style.boxShadow =
        "none";

    sticker.style.overflow =
        "visible";


    try {

        const rect =
            sticker.getBoundingClientRect();


        const canvas =
            await html2canvas(
                sticker,
                {

                    scale: 4,

                    width:
                        Math.ceil(
                            rect.width
                        ),

                    height:
                        Math.ceil(
                            rect.height
                        ),

                    backgroundColor:
                        null,

                    useCORS:
                        true,

                    logging:
                        false,

                    allowTaint:
                        false

                }
            );


        const finalCanvas =
            document.createElement(
                "canvas"
            );


        const context =
            finalCanvas.getContext(
                "2d"
            );


        finalCanvas.width =
            canvas.width;

        finalCanvas.height =
            canvas.height;


        const computedStyle =
            window.getComputedStyle(
                sticker
            );


        const radius =
            parseFloat(
                computedStyle.borderRadius
            ) || 0;


        if (radius > 0) {

            context.beginPath();

            context.roundRect(
                0,
                0,
                finalCanvas.width,
                finalCanvas.height,
                radius * 4
            );

            context.clip();

        }


        context.drawImage(
            canvas,
            0,
            0
        );


        const link =
            document.createElement(
                "a"
            );


        const serial =
            getElement("serial")?.value.trim()
            || "sticker";


        link.download =
            "VANIKIO-" +
            serial +
            ".png";


        link.href =
            finalCanvas.toDataURL(
                "image/png"
            );


        link.click();


    } catch (error) {

        console.error(
            "Sticker download failed:",
            error
        );


        const language =
            localStorage.getItem(
                "vanikioStickerLanguage"
            ) || "en";


        alert(
            language === "ta"
                ? "ஸ்டிக்கரை பதிவிறக்க முடியவில்லை."
                : "Unable to download sticker."
        );


    } finally {

        sticker.style.boxShadow =
            originalBoxShadow;

        sticker.style.overflow =
            originalOverflow;

    }

}


// ============================================================
// DOWNLOAD QR ONLY
// ============================================================

function downloadQrOnly() {

    const qrEnabled =
        getElement("qrEnabled")?.checked ??
        true;


    const language =
        localStorage.getItem(
            "vanikioStickerLanguage"
        ) || "en";


    if (!qrEnabled) {

        alert(
            language === "ta"
                ? "QR குறியீடு இயக்கப்படவில்லை."
                : "QR Code is disabled."
        );

        return;

    }


    generateSticker();


    const qr =
        getElement("qrcode");


    if (!qr) {
        return;
    }


    const canvas =
        qr.querySelector("canvas");


    const image =
        qr.querySelector("img");


    let dataUrl = "";


    if (canvas) {

        dataUrl =
            canvas.toDataURL(
                "image/png"
            );

    } else if (image) {

        dataUrl =
            image.src;

    }


    if (!dataUrl) {

        alert(
            language === "ta"
                ? "QR குறியீட்டை உருவாக்க முடியவில்லை."
                : "Unable to generate QR Code."
        );

        return;

    }


    const itemId =
        getElement("itemId")?.value.trim()
        || "QR";


    const link =
        document.createElement(
            "a"
        );


    link.download =
        "VANIKIO-QR-" +
        itemId +
        ".png";


    link.href =
        dataUrl;


    link.click();

}


// ============================================================
// PRINT STICKER
// ============================================================

function printSticker() {

    generateSticker();

    window.print();

}


// ============================================================
// SET LANGUAGE
// ============================================================

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


    // ========================================================
    // TRANSLATIONS
    // ========================================================

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


    // ========================================================
    // PLACEHOLDERS
    // ========================================================

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


    // ========================================================
    // LANGUAGE BUTTONS
    // ========================================================

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


    // ========================================================
    // LABELS
    // ========================================================

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


// ============================================================
// PUBLISH PRODUCT TO FIRESTORE
// ============================================================

async function publishProduct() {

    const businessId =
        document.getElementById("businessId").value.trim();

    const itemId =
        document.getElementById("itemId").value.trim();

    const productName =
        document.getElementById("productName").value.trim();

    const productDescription =
        document.getElementById("productDescription").value.trim();

    if (!businessId) {
        alert("Please enter Business ID.");
        return;
    }

    if (!productName) {
        alert("Please enter Product Name.");
        return;
    }

    if (!productDescription) {
        alert("Please enter Product Description.");
        return;
    }

    if (!itemId) {
        alert("Please enter QR / Item ID.");
        return;
    }

    const productRef = doc(
        db,
        "businesses",
        businessId,
        "products",
        itemId
    );

    await setDoc(productRef, {
        businessId: businessId,
        itemId: itemId,
        productName: productName,
        productDescription: productDescription,
        serial: document.getElementById("serial").value.trim(),
        price: document.getElementById("price").value.trim(),
        qrEnabled: document.getElementById("qrEnabled").checked,
        qrUrl:
            "https://vanikio.com/i/" +
            encodeURIComponent(businessId) +
            "/" +
            encodeURIComponent(itemId),
        updatedAt: serverTimestamp()
    }, {
        merge: true
    });

    alert("Product published successfully.");
}


// ============================================================
// OPEN PUBLISH BUSINESS
// ============================================================

async function openPublishBusiness() {

    const published =
        await publishProduct();


    if (!published) {
        return;
    }


    // ========================================================
    // NAVIGATE AFTER SUCCESS
    // ========================================================

    window.location.href =
        "publish-business.html";

}


// ============================================================
// INPUT AUTO UPDATE
// ============================================================

function initializeInputListeners() {

    const inputIds = [

        "businessId",

        "serial",

        "price",

        "itemId",

        "stickerWidth",

        "stickerHeight",

        "qrEnabled",

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


        element.addEventListener(
            "input",
            generateSticker
        );


        element.addEventListener(
            "change",
            generateSticker
        );

    });

}


// ============================================================
// LOAD SAVED BUSINESS ID
// ============================================================

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


// ============================================================
// INITIALIZE DRAGGING
// ============================================================

function initializeDragging() {

    makeDraggable(
        getElement(
            "companyNameText"
        )
    );


    makeDraggable(
        getElement(
            "serialRow"
        )
    );


    makeDraggable(
        getElement(
            "priceRow"
        )
    );


    makeDraggable(
        getElement(
            "qrSection"
        )
    );

}


// ============================================================
// INITIALIZE PAGE
// ============================================================

function initializePage() {

    loadSavedBusinessId();

    initializeColorPalette();

    initializeInputListeners();

    initializeDragging();


    const savedLanguage =
        localStorage.getItem(
            "vanikioStickerLanguage"
        ) || "en";


    setLanguage(
        savedLanguage
    );


    generateSticker();

}


// ============================================================
// GLOBAL FUNCTIONS
// ============================================================
//
// HTML currently uses inline onclick handlers.
// Therefore these functions must be available on window.
// ============================================================

window.generateSticker =
    generateSticker;


window.downloadSticker =
    downloadSticker;


window.downloadQrOnly =
    downloadQrOnly;


window.printSticker =
    printSticker;


window.resetSticker =
    resetSticker;


window.setLanguage =
    setLanguage;


window.openPublishBusiness =
    openPublishBusiness;


window.publishProduct =
    publishProduct;


// ============================================================
// START
// ============================================================

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
