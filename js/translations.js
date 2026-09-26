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
   TRANSLATIONS
============================================================= */

const translations = {

    en: {

        description:
            "Create a compact QR sticker linked to your business.",

        businessId:
            "BUSINESS ID *",

        productName:
            "PRODUCT NAME *",

        productDescription:
            "PRODUCT DESCRIPTION *",

        serialNumber:
            "SERIAL NUMBER",

        price:
            "PRICE",

        qrItemId:
            "QR / ITEM ID",

        width:
            "WIDTH (mm)",

        height:
            "HEIGHT (mm)",

        showQr:
            "Show QR Code",

        qrSize:
            "QR SIZE (mm)",

        labelSize:
            "LABEL SIZE",

        valueSize:
            "SERIAL / PRICE",

        borderSize:
            "BORDER SIZE (mm)",

        stickerBackground:
            "STICKER BACKGROUND",

        borderColor:
            "BORDER COLOR",

        serialLabelColor:
            "S.NO LABEL COLOR",

        serialValueColor:
            "S.NO VALUE COLOR",

        priceLabelColor:
            "PRICE LABEL COLOR",

        priceValueColor:
            "PRICE VALUE COLOR",

        qrColor:
            "QR COLOR",

        generateSticker:
            "Generate Sticker",

        downloadPng:
            "Download PNG",

        printSticker:
            "Print Sticker",

        previewTitle:
            "Sticker Preview",

        downloadQr:
            "QR",

        reset:
            "Reset",

        publishProduct:
            "Publish Product",

        note:
            "For very small stickers, keep the QR size large enough for reliable scanning. QR is optional."

    },


    ta: {

        description:
            "உங்கள் பொருட்களுக்கு சிறிய QR ஸ்டிக்கரை உருவாக்குங்கள்.",

        businessId:
            "வணிக ID *",

        productName:
            "பொருளின் பெயர் *",

        productDescription:
            "பொருளின் விளக்கம் *",

        serialNumber:
            "வரிசை எண்",

        price:
            "விலை",

        qrItemId:
            "QR / பொருள் ID",

        width:
            "அகலம் (mm)",

        height:
            "உயரம் (mm)",

        showQr:
            "QR குறியீட்டைக் காட்டு",

        qrSize:
            "QR அளவு (mm)",

        labelSize:
            "லேபிள் அளவு",

        valueSize:
            "வரிசை எண் / விலை",

        borderSize:
            "பார்டர் அளவு (mm)",

        stickerBackground:
            "ஸ்டிக்கர் பின்னணி",

        borderColor:
            "பார்டர் நிறம்",

        serialLabelColor:
            "வரிசை எண் லேபிள் நிறம்",

        serialValueColor:
            "வரிசை எண் மதிப்பு நிறம்",

        priceLabelColor:
            "விலை லேபிள் நிறம்",

        priceValueColor:
            "விலை மதிப்பு நிறம்",

        qrColor:
            "QR நிறம்",

        generateSticker:
            "ஸ்டிக்கரை உருவாக்கு",

        downloadPng:
            "PNG பதிவிறக்கு",

        printSticker:
            "ஸ்டிக்கரை அச்சிடு",

        previewTitle:
            "ஸ்டிக்கர் முன்னோட்டம்",

        downloadQr:
            "QR",

        reset:
            "மீட்டமை",

        publishProduct:
            "பொருளை வெளியிடு",

        note:
            "மிகச் சிறிய ஸ்டிக்கர்களுக்கு, QR குறியீட்டை எளிதாக ஸ்கேன் செய்ய போதுமான அளவில் வைத்திருக்கவும். QR விருப்பமானது."

    }

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


let selectedColors = {

    ...DEFAULT_COLORS

};


let currentLanguage = "en";


/* =============================================================
   SET LANGUAGE
============================================================= */

function setLanguage(language) {

    currentLanguage = language;


    localStorage.setItem(
        "vanikioStickerLanguage",
        language
    );


    document.documentElement.lang =
        language === "ta"
            ? "ta"
            : "en";


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                translations[language] &&
                translations[language][key]
            ) {

                element.textContent =
                    translations[language][key];

            }

        });


    const businessIdInput =
        document.getElementById(
            "businessId"
        );


    if (businessIdInput) {

        businessIdInput.placeholder =
            language === "ta"
                ? businessIdInput.dataset.placeholderTa
                : businessIdInput.dataset.placeholderEn;

    }


    const productNameInput =
        document.getElementById(
            "productName"
        );


    if (productNameInput) {

        productNameInput.placeholder =
            language === "ta"
                ? productNameInput.dataset.placeholderTa
                : productNameInput.dataset.placeholderEn;

    }


    const productDescriptionInput =
        document.getElementById(
            "productDescription"
        );


    if (productDescriptionInput) {

        productDescriptionInput.placeholder =
            language === "ta"
                ? productDescriptionInput.dataset.placeholderTa
                : productDescriptionInput.dataset.placeholderEn;

    }


    document
        .getElementById("englishButton")
        .classList.toggle(
            "active",
            language === "en"
        );


    document
        .getElementById("tamilButton")
        .classList.toggle(
            "active",
            language === "ta"
        );


    if (language === "ta") {

        document
            .getElementById("serialLabel")
            .textContent =
            "வரிசை:";


        document
            .getElementById("priceLabel")
            .textContent =
            "விலை:";

    } else {

        document
            .getElementById("serialLabel")
            .textContent =
            "SI.NO:";


        document
            .getElementById("priceLabel")
            .textContent =
            "PRICE:";

    }


    generateSticker();

}