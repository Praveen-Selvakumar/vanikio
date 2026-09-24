/* =========================================================
   STICKERLY
   Product QR Label SaaS
   app.js
   ========================================================= */


/* =========================================================
   LANGUAGE
   ========================================================= */

const translations = {

    en: {

        home:
            "Home",

        templates:
            "Templates",

        createLabel:
            "Create Label",

        heroBadge:
            "Smart product labels for modern businesses",

        heroTitle1:
            "Put a QR label on",

        heroTitle2:
            "every product.",

        heroDescription:
            "Create beautiful physical price labels with QR codes. Customers scan the label and instantly see complete product information online.",

        startCreating:
            "Start Creating",

        viewTemplates:
            "View Templates",

        point1:
            "No account required",

        point2:
            "Free QR generation",

        point3:
            "Print-ready",

        simpleProcess:
            "SIMPLE PROCESS",

        howTitle:
            "From physical product to digital details.",

        howDescription:
            "One small label can give customers much more information.",

        step1Title:
            "Choose a label",

        step1Description:
            "Pick a product-focused design from the template collection.",

        step2Title:
            "Add product details",

        step2Description:
            "Enter your business, product, price, SKU and product URL.",

        step3Title:
            "Generate QR",

        step3Description:
            "Your product URL becomes a scannable QR code automatically.",

        step4Title:
            "Print & place",

        step4Description:
            "Print the label and place it directly on your product.",

        builtFor:
            "BUILT FOR PRODUCTS",

        categoryTitle:
            "One system. Many businesses.",

        furniture:
            "Furniture",

        electronics:
            "Electronics",

        jewellery:
            "Jewellery",

        fashion:
            "Fashion",

        food:
            "Food",

        homeProducts:
            "Home Products",

        ready:
            "READY?",

        ctaTitle:
            "Create your first product label.",

        ctaDescription:
            "Choose a design and start building your label in seconds.",

        footerText:
            "Smart QR product labels for physical businesses.",

        labelCollection:
            "LABEL COLLECTION",

        templateTitle:
            "Choose your product label.",

        templateDescription:
            "These designs are made to look like real retail price tags, product tickets and showroom labels — not visiting cards.",

        designs:
            "designs",

        all:
            "All",

        compact:
            "Compact",

        premium:
            "Premium",

        retail:
            "Retail",

        industry:
            "Industry",

        labelEditor:
            "Label Editor",

        reset:
            "Reset",

        save:
            "Save",

        print:
            "Print",

        productDetails:
            "PRODUCT DETAILS",

        content:
            "Content",

        businessName:
            "Business Name",

        productName:
            "Product Name",

        sellingPrice:
            "Selling Price",

        sku:
            "SKU",

        productUrl:
            "Product URL",

        urlHint:
            "This URL is used to generate the QR code.",

        optionalInformation:
            "OPTIONAL INFORMATION",

        mrp:
            "MRP",

        discount:
            "Discount",

        category:
            "Category",

        colour:
            "Colour",

        dimensions:
            "Dimensions",

        warranty:
            "Warranty",

        stockStatus:
            "Stock Status",

        preview:
            "PREVIEW",

        dragHint:
            "Drag any visible item to reposition it. Click text to edit.",

        design:
            "DESIGN",

        customize:
            "Customize",

        template:
            "Template",

        change:
            "Change",

        font:
            "Font",

        labelSize:
            "Label Size",

        colors:
            "Colors",

        textColor:
            "Text",

        qrColor:
            "QR Foreground",

        qrBackground:
            "QR Background",

        qrCode:
            "QR Code",

        regenerateQr:
            "Regenerate QR",

        qrNote:
            "The QR is generated from your Product URL.",

        positions:
            "Positions",

        resetPositions:
            "Reset element positions",

        tipTitle:
            "Quick tip",

        tipText:
            "Keep the QR clear of the price and product name. Customers should be able to scan it easily.",

        scanDetails:
            "SCAN FOR DETAILS"

    },


    ta: {

        home:
            "முகப்பு",

        templates:
            "டெம்ப்ளேட்கள்",

        createLabel:
            "லேபிள் உருவாக்கு",

        heroBadge:
            "நவீன வணிகங்களுக்கான ஸ்மார்ட் தயாரிப்பு லேபிள்கள்",

        heroTitle1:
            "ஒவ்வொரு தயாரிப்பிலும்",

        heroTitle2:
            "QR லேபிள் வையுங்கள்.",

        heroDescription:
            "QR குறியீட்டுடன் அழகான விலை லேபிள்களை உருவாக்குங்கள். வாடிக்கையாளர்கள் ஸ்கேன் செய்து தயாரிப்பின் முழு தகவலையும் ஆன்லைனில் பார்க்கலாம்.",

        startCreating:
            "உருவாக்க தொடங்குங்கள்",

        viewTemplates:
            "டெம்ப்ளேட்களை பார்க்க",

        point1:
            "கணக்கு தேவையில்லை",

        point2:
            "இலவச QR உருவாக்கம்",

        point3:
            "Print செய்ய தயாராக உள்ளது",

        simpleProcess:
            "எளிய செயல்முறை",

        howTitle:
            "Physical தயாரிப்பிலிருந்து Digital தகவல் வரை.",

        howDescription:
            "ஒரு சிறிய லேபிள் வாடிக்கையாளர்களுக்கு அதிக தகவலை வழங்க முடியும்.",

        step1Title:
            "லேபிளை தேர்வு செய்யுங்கள்",

        step1Description:
            "உங்களுக்கு பிடித்த தயாரிப்பு லேபிள் வடிவமைப்பை தேர்வு செய்யுங்கள்.",

        step2Title:
            "தயாரிப்பு தகவலை சேர்க்கவும்",

        step2Description:
            "வணிகம், தயாரிப்பு, விலை, SKU மற்றும் URL சேர்க்கவும்.",

        step3Title:
            "QR உருவாக்கவும்",

        step3Description:
            "Product URL தானாக ஸ்கேன் செய்யக்கூடிய QR ஆக மாறும்.",

        step4Title:
            "Print செய்து வைக்கவும்",

        step4Description:
            "லேபிளை Print செய்து தயாரிப்பில் வைக்கவும்.",

        builtFor:
            "தயாரிப்புகளுக்காக உருவாக்கப்பட்டது",

        categoryTitle:
            "ஒரே அமைப்பு. பல வணிகங்கள்.",

        furniture:
            "Furniture",

        electronics:
            "Electronics",

        jewellery:
            "Jewellery",

        fashion:
            "Fashion",

        food:
            "Food",

        homeProducts:
            "Home Products",

        ready:
            "தயாரா?",

        ctaTitle:
            "உங்கள் முதல் தயாரிப்பு லேபிளை உருவாக்குங்கள்.",

        ctaDescription:
            "ஒரு வடிவமைப்பை தேர்வு செய்து சில நொடிகளில் தொடங்குங்கள்.",

        footerText:
            "Physical வணிகங்களுக்கான Smart QR தயாரிப்பு லேபிள்கள்.",

        labelCollection:
            "லேபிள் தொகுப்பு",

        templateTitle:
            "உங்கள் தயாரிப்பு லேபிளை தேர்வு செய்யுங்கள்.",

        templateDescription:
            "இந்த வடிவமைப்புகள் உண்மையான retail price tag, product ticket மற்றும் showroom label போல வடிவமைக்கப்பட்டுள்ளன.",

        designs:
            "வடிவமைப்புகள்",

        all:
            "அனைத்தும்",

        compact:
            "Compact",

        premium:
            "Premium",

        retail:
            "Retail",

        industry:
            "Industry",

        labelEditor:
            "லேபிள் எடிட்டர்",

        reset:
            "Reset",

        save:
            "Save",

        print:
            "Print",

        productDetails:
            "தயாரிப்பு தகவல்",

        content:
            "உள்ளடக்கம்",

        businessName:
            "வணிக பெயர்",

        productName:
            "தயாரிப்பு பெயர்",

        sellingPrice:
            "விற்பனை விலை",

        sku:
            "SKU",

        productUrl:
            "Product URL",

        urlHint:
            "இந்த URL QR உருவாக்க பயன்படுத்தப்படும்.",

        optionalInformation:
            "கூடுதல் தகவல்",

        mrp:
            "MRP",

        discount:
            "தள்ளுபடி",

        category:
            "வகை",

        colour:
            "நிறம்",

        dimensions:
            "அளவு",

        warranty:
            "Warranty",

        stockStatus:
            "Stock Status",

        preview:
            "PREVIEW",

        dragHint:
            "தெரியும் தகவல்களை Drag செய்து இடத்தை மாற்றலாம். Text மீது Click செய்து மாற்றலாம்.",

        design:
            "DESIGN",

        customize:
            "Customize",

        template:
            "Template",

        change:
            "மாற்று",

        font:
            "Font",

        labelSize:
            "லேபிள் அளவு",

        colors:
            "நிறங்கள்",

        textColor:
            "Text",

        qrColor:
            "QR முன்புற நிறம்",

        qrBackground:
            "QR பின்னணி",

        qrCode:
            "QR Code",

        regenerateQr:
            "QR மீண்டும் உருவாக்கு",

        qrNote:
            "Product URL அடிப்படையில் QR உருவாக்கப்படுகிறது.",

        positions:
            "இடங்கள்",

        resetPositions:
            "அனைத்து இடங்களையும் Reset செய்",

        tipTitle:
            "சிறிய குறிப்பு",

        tipText:
            "QR code-ஐ விலை மற்றும் தயாரிப்பு பெயரிலிருந்து தெளிவாக வைத்திருங்கள்.",

        scanDetails:
            "தகவலுக்கு SCAN செய்யவும்"

    }

};


let currentLanguage =
    localStorage.getItem("stickerlyLanguage") || "en";


function applyLanguage() {

    document.documentElement.lang =
        currentLanguage === "ta"
            ? "ta"
            : "en";


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                translations[currentLanguage] &&
                translations[currentLanguage][key]
            ) {

                element.textContent =
                    translations[currentLanguage][key];

            }

        });


    const languageLabel =
        document.getElementById("languageLabel");


    if (languageLabel) {

        languageLabel.textContent =
            currentLanguage === "en"
                ? "தமிழ்"
                : "English";

    }


    localStorage.setItem(
        "stickerlyLanguage",
        currentLanguage
    );

}


function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en"
            ? "ta"
            : "en";

    applyLanguage();

}


/* =========================================================
   TEMPLATES — MATCHES templates.html 01 → 20
   ========================================================= */

const templates = [

    {
        id: "01",
        name: "Price Hero",
        category: "minimal",
        type: "Minimal",
        className: "template-01"
    },

    {
        id: "02",
        name: "Dark Luxury",
        category: "premium",
        type: "Premium",
        className: "template-02"
    },

    {
        id: "03",
        name: "Premium Gold",
        category: "premium",
        type: "Premium",
        className: "template-03"
    },

    {
        id: "04",
        name: "Sale Pink",
        category: "sale",
        type: "Sale",
        className: "template-04"
    },

    {
        id: "05",
        name: "Modern Blue",
        category: "modern",
        type: "Modern",
        className: "template-05"
    },

    {
        id: "06",
        name: "Modern Capsule",
        category: "modern",
        type: "Modern",
        className: "template-06"
    },

    {
        id: "07",
        name: "Double Border",
        category: "minimal",
        type: "Minimal",
        className: "template-07"
    },

    {
        id: "08",
        name: "Fresh Green",
        category: "grocery",
        type: "Grocery",
        className: "template-08"
    },

    {
        id: "09",
        name: "Fashion Label",
        category: "fashion",
        type: "Fashion",
        className: "template-09"
    },

    {
        id: "10",
        name: "Grocery Classic",
        category: "grocery",
        type: "Grocery",
        className: "template-10"
    },

    {
        id: "11",
        name: "Electronics",
        category: "electronics",
        type: "Electronics",
        className: "template-11"
    },

    {
        id: "12",
        name: "Black Gold",
        category: "premium",
        type: "Premium",
        className: "template-12"
    },

    {
        id: "13",
        name: "Rounded Retail",
        category: "modern",
        type: "Modern",
        className: "template-13"
    },

    {
        id: "14",
        name: "Orange Retail",
        category: "sale",
        type: "Sale",
        className: "template-14"
    },

    {
        id: "15",
        name: "Indigo",
        category: "modern",
        type: "Modern",
        className: "template-15"
    },

    {
        id: "16",
        name: "Dark Green",
        category: "premium",
        type: "Premium",
        className: "template-16"
    },

    {
        id: "17",
        name: "Teal",
        category: "modern",
        type: "Modern",
        className: "template-17"
    },

    {
        id: "18",
        name: "Pink Premium",
        category: "fashion",
        type: "Fashion",
        className: "template-18"
    },

    {
        id: "19",
        name: "Warm Brown",
        category: "premium",
        type: "Premium",
        className: "template-19"
    },

    {
        id: "20",
        name: "Premium Label",
        category: "minimal",
        type: "Minimal",
        className: "template-20"
    }

];


/* =========================================================
   GALLERY PREVIEW
   ========================================================= */

function createPreviewLabel(template) {

    const design =
        getTemplateDesign(
            template.id
        );


    const style =
        design
            ? getPreviewStyleObject(
                design
            )
            : "";


    const businessColor =
        design?.businessColor ||
        "#6841d8";


    const productColor =
        design?.productColor ||
        "#38235f";


    const priceColor =
        design?.priceColor ||
        "#e45772";


    return `
        <div
            class="preview-label ${template.className}"
            style="${style}">

            <div
                class="preview-business"
                style="color:${businessColor};">
                WOOD & HOME
            </div>

            <div
                class="preview-product"
                style="color:${productColor};">
                Modern Sofa
            </div>

            <div
                class="preview-price"
                style="color:${priceColor};">
                ₹38,500
            </div>

            <div class="preview-sku">
                SOF-104
            </div>

            <div class="preview-badge">
                IN STOCK
            </div>

            <div class="preview-qr"></div>

        </div>
    `;
}


function renderTemplates(filter = "all") {

    const grid =
        document.getElementById(
            "templateGrid"
        );


    if (!grid) {
        return;
    }


    const filtered =
        filter === "all"
            ? templates
            : templates.filter(
                template =>
                    template.category ===
                    filter
            );


    grid.innerHTML =
        filtered
            .map(template => {

                return `
                    <article
                        class="template-card"
                        onclick="openEditor('${template.id}')"
                    >

                        <div
                            class="template-card-top">

                            <span
                                class="template-card-number">
                                ${template.id}
                            </span>

                            <span
                                class="template-card-category">
                                ${template.type}
                            </span>

                        </div>

                        <div class="label-stage">

                            ${createPreviewLabel(
                                template
                            )}

                        </div>

                        <div
                            class="template-card-bottom">

                            <span
                                class="template-card-name">
                                ${template.name}
                            </span>

                            <button
                                class="template-use-button"
                                onclick="event.stopPropagation(); openEditor('${template.id}')"
                            >
                                Use →
                            </button>

                        </div>

                    </article>
                `;

            })
            .join("");
}


function setupTemplateFilters() {

    const buttons =
        document.querySelectorAll(
            ".filter-tab"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                renderTemplates(
                    button.dataset.filter
                );

            }
        );

    });

}


/* =========================================================
   OPEN EDITOR
   ========================================================= */

function normalizeDesignId(id) {

    if (
        id === undefined ||
        id === null ||
        id === ""
    ) {

        return "01";

    }


    let normalized =
        String(id)
            .trim()
            .padStart(2, "0");


    if (
        !/^(0[1-9]|1[0-9]|20)$/.test(
            normalized
        )
    ) {

        normalized = "01";

    }


    return normalized;
}


function openEditor(id) {

    const designId =
        normalizeDesignId(id);


    localStorage.setItem(
        "stickerlyTemplate",
        designId
    );


    window.location.href =
        `editor.html?design=${designId}`;
}


/*
 * Keep this global because the HTML
 * currently calls these functions directly.
 */

window.openEditor =
    openEditor;


/* =========================================================
   EDITOR STATE
   ========================================================= */

let editorState = {

    template:
        "01",

    font:
        "Poppins",

    size:
        "100x70",

    textColor:
        "#40265f",

    qrDark:
        "#54377d",

    qrLight:
        "#f4eefe",

    optional: {

        mrp:
            false,

        discount:
            false,

        category:
            false,

        colour:
            false,

        dimensions:
            false,

        warranty:
            false,

        stock:
            false

    },

    positions:
        {}

};


/* =========================================================
   DEFAULT POSITIONS
   ========================================================= */

const defaultPositions = {

    "el-business": {
        left: "9%",
        top: "10%"
    },

    "el-product": {
        left: "9%",
        top: "26%"
    },

    "el-sku": {
        left: "9%",
        top: "84%"
    },

    "el-price": {
        left: "9%",
        top: "70%"
    },

    "el-mrp": {
        left: "9%",
        top: "77%"
    },

    "el-discount": {
        right: "31%",
        top: "12%"
    },

    "el-category": {
        left: "9%",
        top: "48%"
    },

    "el-colour": {
        left: "9%",
        top: "56%"
    },

    "el-dimensions": {
        left: "9%",
        top: "64%"
    },

    "el-warranty": {
        left: "9%",
        top: "72%"
    },

    "el-stock": {
        right: "29%",
        top: "10%"
    },

    "qrElement": {
        right: "7%",
        bottom: "9%"
    }

};


/* =========================================================
   DESIGN-SPECIFIC DEFAULT POSITIONS
   ========================================================= */

const designPositions = {

    "01": {},

    "02": {
        "el-business": {
            left: "9%",
            top: "10%"
        },
        "el-product": {
            left: "9%",
            top: "28%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "86%"
        },
        "qrElement": {
            right: "7%",
            bottom: "9%"
        }
    },

    "03": {
        "el-business": {
            left: "9%",
            top: "10%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "66%"
        },
        "el-sku": {
            left: "9%",
            top: "86%"
        }
    },

    "04": {
        "el-business": {
            left: "9%",
            top: "10%"
        },
        "el-product": {
            left: "9%",
            top: "28%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        }
    },

    "05": {
        "el-business": {
            left: "8%",
            top: "10%"
        },
        "el-product": {
            left: "8%",
            top: "27%"
        },
        "el-price": {
            right: "10%",
            top: "25%"
        },
        "el-sku": {
            left: "8%",
            top: "86%"
        },
        "qrElement": {
            right: "7%",
            bottom: "8%"
        }
    },

    "06": {
        "el-business": {
            left: "10%",
            top: "11%"
        },
        "el-product": {
            left: "10%",
            top: "30%"
        },
        "el-price": {
            left: "10%",
            top: "67%"
        },
        "el-sku": {
            left: "10%",
            top: "86%"
        }
    },

    "07": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "28%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "86%"
        }
    },

    "08": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "28%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "86%"
        }
    },

    "09": {
        "el-business": {
            left: "9%",
            top: "10%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "87%"
        }
    },

    "10": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "28%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "86%"
        }
    },

    "11": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "86%"
        }
    },

    "12": {
        "el-business": {
            left: "8%",
            top: "10%"
        },
        "el-product": {
            left: "8%",
            top: "28%"
        },
        "el-price": {
            left: "8%",
            top: "68%"
        },
        "el-sku": {
            left: "8%",
            top: "87%"
        }
    },

    "13": {
        "el-business": {
            left: "8%",
            top: "8%"
        },
        "el-product": {
            left: "8%",
            top: "30%"
        },
        "el-price": {
            left: "8%",
            top: "67%"
        },
        "el-sku": {
            left: "8%",
            top: "87%"
        }
    },

    "14": {
        "el-business": {
            left: "8%",
            top: "10%"
        },
        "el-product": {
            left: "8%",
            top: "28%"
        },
        "el-price": {
            left: "8%",
            top: "67%"
        },
        "el-sku": {
            left: "8%",
            top: "87%"
        }
    },

    "15": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "87%"
        }
    },

    "16": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "87%"
        }
    },

    "17": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "87%"
        }
    },

    "18": {
        "el-business": {
            left: "9%",
            top: "10%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "87%"
        }
    },

    "19": {
        "el-business": {
            left: "9%",
            top: "11%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "87%"
        }
    },

    "20": {
        "el-business": {
            left: "9%",
            top: "10%"
        },
        "el-product": {
            left: "9%",
            top: "29%"
        },
        "el-price": {
            left: "9%",
            top: "67%"
        },
        "el-sku": {
            left: "9%",
            top: "87%"
        }
    }

};


/* =========================================================
   DESIGN STYLE DEFINITIONS
   Based on the designs from templates.html
   ========================================================= */

const templateDesigns = {

    "01": {

        background:
            "#ffffff",

        border:
            "2px solid #eadff4",

        borderRadius:
            "12px",

        color:
            "#2d2436",

        businessColor:
            "#6841d8",

        productColor:
            "#38235f",

        priceColor:
            "#e45772",

        metaColor:
            "#827687"

    },

    "02": {

        background:
            "#1f1830",

        border:
            "none",

        borderRadius:
            "13px",

        color:
            "#ffffff",

        businessColor:
            "#b79cff",

        productColor:
            "#ffffff",

        priceColor:
            "#ff7897",

        metaColor:
            "#b1a6bb"

    },

    "03": {

        background:
            "#fbf4e5",

        border:
            "2px solid #c3a05a",

        borderRadius:
            "4px",

        color:
            "#4a3718",

        businessColor:
            "#8a6724",

        productColor:
            "#4a3718",

        priceColor:
            "#a97b27",

        metaColor:
            "#8a6724",

        fontFamily:
            "\"Lora\", serif"

    },

    "04": {

        background:
            "#fff0f2",

        border:
            "3px solid #d94e69",

        borderRadius:
            "12px",

        color:
            "#55313a",

        businessColor:
            "#c83250",

        productColor:
            "#55313a",

        priceColor:
            "#c83250",

        metaColor:
            "#8a6b74"

    },

    "05": {

        background:
            "#edf6ff",

        border:
            "none",

        borderLeft:
            "10px solid #3674df",

        borderRadius:
            "5px",

        color:
            "#30486c",

        businessColor:
            "#2c66c9",

        productColor:
            "#30486c",

        priceColor:
            "#2c66c9",

        metaColor:
            "#6e819d"

    },

    "06": {

        background:
            "#edf9f7",

        border:
            "2px solid #299d8b",

        borderRadius:
            "45px",

        color:
            "#275f59",

        businessColor:
            "#218475",

        productColor:
            "#275f59",

        priceColor:
            "#218475",

        metaColor:
            "#668d87"

    },

    "07": {

        background:
            "#ffffff",

        border:
            "4px double #252128",

        borderRadius:
            "0px",

        color:
            "#252128",

        businessColor:
            "#252128",

        productColor:
            "#252128",

        priceColor:
            "#252128",

        metaColor:
            "#827687"

    },

    "08": {

        background:
            "#eff9ef",

        border:
            "3px solid #31914c",

        borderRadius:
            "9px",

        color:
            "#2d5a37",

        businessColor:
            "#26813f",

        productColor:
            "#2d5a37",

        priceColor:
            "#26813f",

        metaColor:
            "#66836b"

    },

    "09": {

        background:
            "#f9edf5",

        border:
            "none",

        borderLeft:
            "8px solid #b33078",

        borderRadius:
            "0px",

        color:
            "#5f2345",

        businessColor:
            "#af286f",

        productColor:
            "#5f2345",

        priceColor:
            "#af286f",

        metaColor:
            "#896079",

        fontFamily:
            "\"Lora\", serif"

    },

    "10": {

        background:
            "#fffbea",

        border:
            "2px dashed #c49800",

        borderRadius:
            "8px",

        color:
            "#6c571f",

        businessColor:
            "#b27b00",

        productColor:
            "#6c571f",

        priceColor:
            "#b27b00",

        metaColor:
            "#8f7b47"

    },

    "11": {

        background:
            "#eaf1fb",

        border:
            "2px solid #59749b",

        borderRadius:
            "0px",

        color:
            "#243c5f",

        businessColor:
            "#315ea5",

        productColor:
            "#243c5f",

        priceColor:
            "#315ea5",

        metaColor:
            "#667b9a"

    },

    "12": {

        background:
            "#181818",

        border:
            "1px solid #b99951",

        borderRadius:
            "5px",

        color:
            "#ffffff",

        businessColor:
            "#dbbb64",

        productColor:
            "#ffffff",

        priceColor:
            "#dbbb64",

        metaColor:
            "#aaaaaa"

    },

    "13": {

        background:
            "#ffffff",

        border:
            "2px solid #27212d",

        borderRadius:
            "25px",

        color:
            "#322d37",

        businessColor:
            "#ffffff",

        productColor:
            "#322d37",

        priceColor:
            "#27212d",

        metaColor:
            "#7c7481"

    },

    "14": {

        background:
            "#fff1e7",

        border:
            "3px solid #ed7528",

        borderRadius:
            "9px",

        color:
            "#64412e",

        businessColor:
            "#d05b16",

        productColor:
            "#64412e",

        priceColor:
            "#d05b16",

        metaColor:
            "#92705b"

    },

    "15": {

        background:
            "#eff0ff",

        border:
            "3px solid #5f64c8",

        borderRadius:
            "10px",

        color:
            "#3f447d",

        businessColor:
            "#5358b9",

        productColor:
            "#3f447d",

        priceColor:
            "#5358b9",

        metaColor:
            "#7578a0"

    },

    "16": {

        background:
            "#17231c",

        border:
            "2px solid #41aa6c",

        borderRadius:
            "10px",

        color:
            "#ffffff",

        businessColor:
            "#58cd83",

        productColor:
            "#ffffff",

        priceColor:
            "#58cd83",

        metaColor:
            "#acbfae"

    },

    "17": {

        background:
            "#ecf7fa",

        border:
            "3px solid #3c9bb4",

        borderRadius:
            "7px",

        color:
            "#315d69",

        businessColor:
            "#307d95",

        productColor:
            "#315d69",

        priceColor:
            "#307d95",

        metaColor:
            "#6c8d96"

    },

    "18": {

        background:
            "#fff1f6",

        border:
            "3px solid #d34e81",

        borderRadius:
            "17px",

        color:
            "#66384d",

        businessColor:
            "#c43870",

        productColor:
            "#66384d",

        priceColor:
            "#c43870",

        metaColor:
            "#946579"

    },

    "19": {

        background:
            "#f7eee6",

        border:
            "2px solid #916b4b",

        borderRadius:
            "5px",

        color:
            "#5d4637",

        businessColor:
            "#785638",

        productColor:
            "#5d4637",

        priceColor:
            "#785638",

        metaColor:
            "#907765",

        fontFamily:
            "\"Lora\", serif"

    },

    "20": {

        background:
            "#ffffff",

        border:
            "5px double #302735",

        borderRadius:
            "2px",

        color:
            "#302735",

        businessColor:
            "#302735",

        productColor:
            "#302735",

        priceColor:
            "#302735",

        metaColor:
            "#7d7581",

        fontFamily:
            "\"Lora\", serif"

    }

};


/* =========================================================
   TEMPLATE LOOKUP
   ========================================================= */

function getTemplateDesign(id) {

    return (
        templateDesigns[
            normalizeDesignId(id)
        ] ||
        templateDesigns["01"]
    );

}


function getTemplateById(id) {

    const normalized =
        normalizeDesignId(id);


    return (
        templates.find(
            item =>
                item.id === normalized
        ) ||
        templates[0]
    );

}


/* =========================================================
   PREVIEW STYLE OBJECT
   ========================================================= */

function getPreviewStyleObject(design) {

    if (!design) {
        return "";
    }


    const parts = [];


    if (design.background) {

        parts.push(
            `background:${design.background}`
        );

    }


    if (design.border) {

        parts.push(
            `border:${design.border}`
        );

    }


    if (design.borderLeft) {

        parts.push(
            `border-left:${design.borderLeft}`
        );

    }


    if (design.borderRadius) {

        parts.push(
            `border-radius:${design.borderRadius}`
        );

    }


    if (design.color) {

        parts.push(
            `color:${design.color}`
        );

    }


    if (design.fontFamily) {

        parts.push(
            `font-family:${design.fontFamily}`
        );

    }


    return parts.join(";");

}


/* =========================================================
   APPLY TEMPLATE DESIGN
   ========================================================= */

function applyTemplateDesign() {

    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (!canvas) {
        return;
    }


    const template =
        getTemplateById(
            editorState.template
        );


    const design =
        getTemplateDesign(
            editorState.template
        );


    /*
     * Remove old template classes.
     */

    templates.forEach(item => {

        canvas.classList.remove(
            item.className
        );

    });


    /*
     * Add current template class.
     */

    canvas.classList.add(
        template.className
    );


    /*
     * Base design appearance.
     *
     * Only template-specific inline
     * styling is applied here.
     */

    canvas.style.background =
        design.background ||
        "";

    canvas.style.border =
        design.border ||
        "";

    canvas.style.borderLeft =
        design.borderLeft ||
        "";

    canvas.style.borderRadius =
        design.borderRadius ||
        "";

    canvas.style.color =
        design.color ||
        "";

    if (design.fontFamily) {

        canvas.style.fontFamily =
            design.fontFamily;

    } else {

        canvas.style.fontFamily =
            `"${editorState.font}", sans-serif`;

    }


    /*
     * Find text elements.
     */

    const business =
        document.getElementById(
            "el-business"
        );

    const product =
        document.getElementById(
            "el-product"
        );

    const price =
        document.getElementById(
            "el-price"
        );

    const sku =
        document.getElementById(
            "el-sku"
        );

    const mrp =
        document.getElementById(
            "el-mrp"
        );

    const discount =
        document.getElementById(
            "el-discount"
        );

    const category =
        document.getElementById(
            "el-category"
        );

    const colour =
        document.getElementById(
            "el-colour"
        );

    const dimensions =
        document.getElementById(
            "el-dimensions"
        );

    const warranty =
        document.getElementById(
            "el-warranty"
        );

    const stock =
        document.getElementById(
            "el-stock"
        );


    /*
     * Apply matching colors.
     */

    if (business) {

        business.style.color =
            design.businessColor ||
            design.color ||
            "";

    }


    if (product) {

        product.style.color =
            design.productColor ||
            design.color ||
            "";

    }


    if (price) {

        price.style.color =
            design.priceColor ||
            design.color ||
            "";

    }


    const metaElements = [

        sku,
        mrp,
        discount,
        category,
        colour,
        dimensions,
        warranty,
        stock

    ];


    metaElements.forEach(
        element => {

            if (!element) {
                return;
            }


            element.style.color =
                design.metaColor ||
                design.color ||
                "";

        }
    );


    /*
     * Reset special design styles
     * first.
     */

    resetSpecialTemplateElements(
        price,
        business
    );


    /*
     * Design 03 / 09 / 19 / 20
     * use Lora on product/price.
     */

    if (
        ["03", "09", "19", "20"]
            .includes(
                editorState.template
            )
    ) {

        if (product) {

            product.style.fontFamily =
                "\"Lora\", serif";

        }

        if (price) {

            price.style.fontFamily =
                "\"Lora\", serif";

        }

    }


    /*
     * Design 13
     * rounded business pill.
     */

    if (
        editorState.template ===
        "13"
    ) {

        if (business) {

            business.style.display =
                "inline-block";

            business.style.background =
                "#27212d";

            business.style.color =
                "#ffffff";

            business.style.padding =
                "3px 7px";

            business.style.borderRadius =
                "20px";

        }

    }


    /*
     * Design 05
     * circular price.
     */

    if (
        editorState.template ===
        "05"
    ) {

        if (price) {

            price.style.width =
                "60px";

            price.style.height =
                "60px";

            price.style.borderRadius =
                "50%";

            price.style.background =
                "#3774df";

            price.style.color =
                "#ffffff";

            price.style.display =
                "flex";

            price.style.alignItems =
                "center";

            price.style.justifyContent =
                "center";

            price.style.textAlign =
                "center";

            price.style.padding =
                "4px";

        }

    }


    /*
     * Design 12
     * premium badge.
     */

    if (
        editorState.template ===
        "12"
    ) {

        createPremiumBadge();

    }


    /*
     * Design 14
     * special ribbon.
     */

    if (
        editorState.template ===
        "14"
    ) {

        createSpecialRibbon();

    }

}


/* =========================================================
   RESET SPECIAL TEMPLATE ELEMENTS
   ========================================================= */

function resetSpecialTemplateElements(
    price,
    business
) {

    if (price) {

        price.style.width =
            "";

        price.style.height =
            "";

        price.style.borderRadius =
            "";

        price.style.background =
            "";

        price.style.display =
            "";

        price.style.alignItems =
            "";

        price.style.justifyContent =
            "";

        price.style.textAlign =
            "";

        price.style.padding =
            "";

    }


    if (business) {

        business.style.display =
            "";

        business.style.background =
            "";

        business.style.padding =
            "";

        business.style.borderRadius =
            "";

    }


    const one =
        document.querySelector(
            ".decoration-one"
        );

    const two =
        document.querySelector(
            ".decoration-two"
        );

    const three =
        document.querySelector(
            ".decoration-three"
        );


    [one, two, three]
        .forEach(
            element => {

                if (!element) {
                    return;
                }


                element.textContent =
                    "";

                element.style.cssText =
                    "";

            }
        );

}


/* =========================================================
   PREMIUM BADGE
   ========================================================= */

function createPremiumBadge() {

    const decoration =
        document.querySelector(
            ".decoration-one"
        );


    if (!decoration) {
        return;
    }


    decoration.textContent =
        "PREMIUM";


    decoration.style.position =
        "absolute";

    decoration.style.right =
        "12px";

    decoration.style.top =
        "37px";

    decoration.style.width =
        "55px";

    decoration.style.height =
        "55px";

    decoration.style.borderRadius =
        "50%";

    decoration.style.border =
        "2px solid #d1b25f";

    decoration.style.display =
        "flex";

    decoration.style.alignItems =
        "center";

    decoration.style.justifyContent =
        "center";

    decoration.style.fontSize =
        "7px";

    decoration.style.color =
        "#d1b25f";

    decoration.style.pointerEvents =
        "none";

    decoration.style.zIndex =
        "5";

}


/* =========================================================
   SPECIAL RIBBON
   ========================================================= */

function createSpecialRibbon() {

    const decoration =
        document.querySelector(
            ".decoration-one"
        );


    if (!decoration) {
        return;
    }


    decoration.textContent =
        "SPECIAL";


    decoration.style.position =
        "absolute";

    decoration.style.right =
        "-19px";

    decoration.style.top =
        "28px";

    decoration.style.width =
        "100px";

    decoration.style.textAlign =
        "center";

    decoration.style.transform =
        "rotate(38deg)";

    decoration.style.padding =
        "4px";

    decoration.style.fontSize =
        "6px";

    decoration.style.fontWeight =
        "800";

    decoration.style.background =
        "#ed7528";

    decoration.style.color =
        "#ffffff";

    decoration.style.pointerEvents =
        "none";

    decoration.style.zIndex =
        "5";

}


/* =========================================================
   QUERY PARAMETER
   ========================================================= */

function getTemplateFromUrl() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    /*
     * New system:
     *
     * editor.html?design=07
     */

    const designParam =
        params.get("design");


    if (designParam) {

        return normalizeDesignId(
            designParam
        );

    }


    /*
     * Backward compatibility with
     * the old query parameter.
     */

    const oldTemplateParam =
        params.get("template");


    if (oldTemplateParam) {

        return normalizeDesignId(
            oldTemplateParam
        );

    }


    /*
     * Saved template remains a fallback.
     */

    const saved =
        localStorage.getItem(
            "stickerlyTemplate"
        );


    if (saved) {

        return normalizeDesignId(
            saved
        );

    }


    return "01";
}


/* =========================================================
   LOAD EDITOR
   ========================================================= */

function initEditor() {

    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (!canvas) {
        return;
    }


    const templateId =
        getTemplateFromUrl();


    const saved =
        localStorage.getItem(
            "stickerlyState"
        );


    let savedTemplate =
        null;


    if (saved) {

        try {

            const parsed =
                JSON.parse(
                    saved
                );


            savedTemplate =
                parsed.template
                    ? normalizeDesignId(
                        parsed.template
                    )
                    : null;


            editorState = {

                ...editorState,

                ...parsed

            };


            if (
                parsed.optional
            ) {

                editorState.optional = {

                    ...editorState.optional,

                    ...parsed.optional

                };

            }


        } catch (error) {

            console.log(
                "Could not load saved editor state."
            );

        }

    }


    /*
     * URL design always wins.
     */

    editorState.template =
        templateId;


    /*
     * If the user opened a different
     * design than the saved state,
     * use that design's positions.
     */

    if (
        savedTemplate &&
        savedTemplate !== templateId
    ) {

        editorState.positions =
            {};

    }


    applyEditorState();

    setupEditorInputs();

    setupDragging();

    generateQR();

    updateCurrentTemplatePreview();

    applyLanguage();

}


/* =========================================================
   APPLY EDITOR STATE
   ========================================================= */

function applyEditorState() {

    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (!canvas) {
        return;
    }


    const template =
        getTemplateById(
            editorState.template
        );


    /*
     * Apply the actual selected
     * design.
     */

    applyTemplateDesign();


    /*
     * Remove every possible size
     * class instead of only the old
     * three classes.
     */

    Array.from(
        canvas.classList
    ).forEach(
        className => {

            if (
                className.startsWith(
                    "size-"
                )
            ) {

                canvas.classList.remove(
                    className
                );

            }

        }
    );


    canvas.classList.add(
        `size-${editorState.size}`
    );


    /*
     * Default editor font.
     *
     * Some designs such as 03/09/19/20
     * intentionally override product/price
     * with Lora.
     */

    if (
        !["03", "09", "19", "20"]
            .includes(
                editorState.template
            )
    ) {

        canvas.style.fontFamily =
            `"${editorState.font}", sans-serif`;

    }


    canvas.style.setProperty(
        "--label-text",
        editorState.textColor
    );


    canvas.style.setProperty(
        "--qr-dark",
        editorState.qrDark
    );


    canvas.style.setProperty(
        "--qr-light",
        editorState.qrLight
    );


    const fontSelect =
        document.getElementById(
            "fontSelect"
        );


    if (fontSelect) {

        fontSelect.value =
            editorState.font;

    }


    const textPicker =
        document.getElementById(
            "textColorPicker"
        );


    if (textPicker) {

        textPicker.value =
            editorState.textColor;

    }


    const qrDarkPicker =
        document.getElementById(
            "qrDarkPicker"
        );


    if (qrDarkPicker) {

        qrDarkPicker.value =
            editorState.qrDark;

    }


    const qrLightPicker =
        document.getElementById(
            "qrLightPicker"
        );


    if (qrLightPicker) {

        qrLightPicker.value =
            editorState.qrLight;

    }


    document
        .querySelectorAll(
            ".size-button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.size ===
                editorState.size
            );

        });


    Object.keys(
        editorState.optional
    )
        .forEach(key => {

            const checkbox =
                document.getElementById(
                    `show${capitalize(key)}`
                );


            if (checkbox) {

                checkbox.checked =
                    editorState.optional[key];

            }


            const row =
                document.getElementById(
                    `input${capitalize(key)}`
                );


            if (row) {

                row.classList.toggle(
                    "active",
                    editorState.optional[key]
                );

            }


            const element =
                document.getElementById(
                    `el-${key}`
                );


            if (element) {

                element.style.display =
                    editorState.optional[key]
                        ? ""
                        : "none";

            }

        });


    applySavedPositions();


    /*
     * Apply special designs after
     * position application.
     */

    applyTemplateDesign();


    const name =
        document.getElementById(
            "templateNameDisplay"
        );


    if (name) {

        name.textContent =
            template.name;

    }

}


function capitalize(value) {

    return value.charAt(0).toUpperCase() +
        value.slice(1);

}


/* =========================================================
   INPUT SYNC
   ========================================================= */

function setupEditorInputs() {

    const fields = {

        businessInput:
            "el-business",

        productInput:
            "el-product",

        priceInput:
            "el-price",

        skuInput:
            "el-sku"

    };


    Object.entries(fields)
        .forEach(
            ([inputId, elementId]) => {

                const input =
                    document.getElementById(
                        inputId
                    );


                const element =
                    document.getElementById(
                        elementId
                    );


                if (
                    !input ||
                    !element
                ) {

                    return;

                }


                input.addEventListener(
                    "input",
                    () => {

                        element.textContent =
                            input.value;


                        saveStateSilently();

                    }
                );

            }
        );

}


/* =========================================================
   OPTIONAL FIELDS
   ========================================================= */

function toggleOptional(
    field,
    enabled
) {

    editorState.optional[field] =
        enabled;


    const element =
        document.getElementById(
            `el-${field}`
        );


    if (element) {

        element.style.display =
            enabled
                ? ""
                : "none";

    }


    const row =
        document.getElementById(
            `input${capitalize(field)}`
        );


    if (row) {

        row.classList.toggle(
            "active",
            enabled
        );

    }


    saveStateSilently();

}


function toggleOptionalField(
    field,
    enabled
) {

    toggleOptional(
        field,
        enabled
    );

}


function syncOptional(
    field,
    value
) {

    const element =
        document.getElementById(
            `el-${field}`
        );


    if (element) {

        element.textContent =
            value;

    }


    saveStateSilently();

}


/* =========================================================
   FONT
   ========================================================= */

function changeFont(font) {

    editorState.font =
        font;


    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (canvas) {

        canvas.style.fontFamily =
            `"${font}", sans-serif`;

    }


    /*
     * Re-apply design-specific
     * typography where required.
     */

    applyTemplateDesign();


    saveStateSilently();

}


/* =========================================================
   SIZE
   ========================================================= */

function changeLabelSize(
    size,
    button
) {

    editorState.size =
        size;


    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (canvas) {

        Array.from(
            canvas.classList
        )
            .forEach(
                className => {

                    if (
                        className.startsWith(
                            "size-"
                        )
                    ) {

                        canvas.classList.remove(
                            className
                        );

                    }

                }
            );


        canvas.classList.add(
            `size-${size}`
        );

    }


    document
        .querySelectorAll(
            ".size-button"
        )
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    saveStateSilently();

}


/* =========================================================
   TEXT COLOR
   ========================================================= */

function changeTextColor(color) {

    editorState.textColor =
        color;


    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (canvas) {

        canvas.style.setProperty(
            "--label-text",
            color
        );


        canvas.style.color =
            color;

    }


    saveStateSilently();

}


/* =========================================================
   QR COLORS
   ========================================================= */

function changeQrColors() {

    const dark =
        document.getElementById(
            "qrDarkPicker"
        );


    const light =
        document.getElementById(
            "qrLightPicker"
        );


    if (dark) {

        editorState.qrDark =
            dark.value;

    }


    if (light) {

        editorState.qrLight =
            light.value;

    }


    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (canvas) {

        canvas.style.setProperty(
            "--qr-dark",
            editorState.qrDark
        );


        canvas.style.setProperty(
            "--qr-light",
            editorState.qrLight
        );

    }


    generateQR();

    saveStateSilently();

}


/* =========================================================
   QR GENERATION
   ========================================================= */

function generateQR() {

    const qrContainer =
        document.getElementById(
            "qrcode"
        );


    const urlInput =
        document.getElementById(
            "urlInput"
        );


    if (
        !qrContainer ||
        !urlInput
    ) {

        return;

    }


    const url =
        urlInput.value.trim();


    /*
     * This guarantees that only
     * ONE QR exists.
     */

    qrContainer.innerHTML =
        "";


    if (!url) {

        qrContainer.innerHTML =
            `<span style="
                font-size:8px;
                color:#755b82;
                text-align:center;
            ">URL</span>`;

        return;

    }


    if (
        typeof QRCode ===
        "undefined"
    ) {

        qrContainer.innerHTML =
            `<span style="
                font-size:7px;
                text-align:center;
            ">QR library loading...</span>`;

        return;

    }


    try {

        new QRCode(
            qrContainer,
            {

                text:
                    url,

                width:
                    180,

                height:
                    180,

                colorDark:
                    editorState.qrDark,

                colorLight:
                    editorState.qrLight,

                correctLevel:
                    QRCode.CorrectLevel.M

            }
        );

    } catch (error) {

        console.error(
            "QR generation failed:",
            error
        );

    }

}


/* =========================================================
   DRAG SYSTEM
   ========================================================= */

let dragData =
    null;


function setupDragging() {

    initDraggableElements();

}


/*
 * This function is also used by
 * editor.html when the barcode is
 * attached after initialization.
 */

function initDraggableElements() {

    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (!canvas) {
        return;
    }


    const elements =
        canvas.querySelectorAll(
            ".sticker-element"
        );


    elements.forEach(
        element => {

            if (
                element.dataset.dragReady ===
                "true"
            ) {

                return;

            }


            element.addEventListener(
                "pointerdown",
                startDrag
            );


            element.dataset.dragReady =
                "true";

        }
    );

}


window.initDraggableElements =
    initDraggableElements;


function startDrag(event) {

    const element =
        event.currentTarget;


    if (
        event.target.closest(
            "input"
        )
    ) {

        return;

    }


    /*
     * Do not start drag when editing
     * text with a normal click.
     *
     * Drag still starts once the
     * pointer actually moves.
     */

    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (!canvas) {
        return;
    }


    element.setPointerCapture(
        event.pointerId
    );


    const canvasRect =
        canvas.getBoundingClientRect();


    const elementRect =
        element.getBoundingClientRect();


    dragData = {

        element,

        canvasRect,

        elementRect,

        pointerId:
            event.pointerId,

        startX:
            event.clientX,

        startY:
            event.clientY,

        originalLeft:
            elementRect.left -
            canvasRect.left,

        originalTop:
            elementRect.top -
            canvasRect.top,

        moved:
            false

    };


    element.addEventListener(
        "pointermove",
        dragMove
    );


    element.addEventListener(
        "pointerup",
        endDrag
    );


    element.addEventListener(
        "pointercancel",
        endDrag
    );

}


function dragMove(event) {

    if (!dragData) {
        return;
    }


    if (
        event.pointerId !==
        dragData.pointerId
    ) {

        return;

    }


    const dx =
        event.clientX -
        dragData.startX;


    const dy =
        event.clientY -
        dragData.startY;


    if (
        Math.abs(dx) > 3 ||
        Math.abs(dy) > 3
    ) {

        dragData.moved =
            true;

    }


    if (!dragData.moved) {
        return;
    }


    const canvas =
        dragData.canvasRect;


    let newLeft =
        dragData.originalLeft +
        dx;


    let newTop =
        dragData.originalTop +
        dy;


    const element =
        dragData.element;


    const maxLeft =
        canvas.width -
        element.offsetWidth;


    const maxTop =
        canvas.height -
        element.offsetHeight;


    newLeft =
        Math.max(
            0,
            Math.min(
                newLeft,
                maxLeft
            )
        );


    newTop =
        Math.max(
            0,
            Math.min(
                newTop,
                maxTop
            )
        );


    element.style.left =
        `${newLeft}px`;


    element.style.top =
        `${newTop}px`;


    element.style.right =
        "auto";


    element.style.bottom =
        "auto";

}


function endDrag(event) {

    if (!dragData) {
        return;
    }


    const element =
        dragData.element;


    try {

        element.releasePointerCapture(
            event.pointerId
        );

    } catch (_) {}


    element.removeEventListener(
        "pointermove",
        dragMove
    );


    element.removeEventListener(
        "pointerup",
        endDrag
    );


    element.removeEventListener(
        "pointercancel",
        endDrag
    );


    if (dragData.moved) {

        saveElementPosition(
            element
        );

    }


    dragData =
        null;

}


function saveElementPosition(
    element
) {

    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (!canvas) {
        return;
    }


    const canvasRect =
        canvas.getBoundingClientRect();


    const elementRect =
        element.getBoundingClientRect();


    const left =
        (
            (
                elementRect.left -
                canvasRect.left
            )
            /
            canvasRect.width
        ) * 100;


    const top =
        (
            (
                elementRect.top -
                canvasRect.top
            )
            /
            canvasRect.height
        ) * 100;


    editorState.positions[
        element.id
    ] = {

        left:
            `${left}%`,

        top:
            `${top}%`

    };


    saveStateSilently();

}


/* =========================================================
   GET DESIGN POSITION
   ========================================================= */

function getDesignDefaultPosition(
    id
) {

    const designId =
        normalizeDesignId(
            editorState.template
        );


    const overrides =
        designPositions[
            designId
        ] || {};


    return (
        overrides[id] ||
        defaultPositions[id] ||
        {}
    );

}


/* =========================================================
   APPLY POSITIONS
   ========================================================= */

function applySavedPositions() {

    const positions =
        editorState.positions || {};


    Object.keys(
        defaultPositions
    )
        .forEach(id => {

            const element =
                document.getElementById(
                    id
                );


            if (!element) {
                return;
            }


            /*
             * Saved position wins.
             * Otherwise use the current
             * design's default position.
             */

            const position =
                positions[id] ||
                getDesignDefaultPosition(
                    id
                );


            if (position.left) {

                element.style.left =
                    position.left;

                element.style.right =
                    "auto";

            }


            if (position.right) {

                element.style.right =
                    position.right;

            }


            if (position.top) {

                element.style.top =
                    position.top;

                element.style.bottom =
                    "auto";

            }


            if (position.bottom) {

                element.style.bottom =
                    position.bottom;

            }

        });

}


/* =========================================================
   RESET POSITIONS
   ========================================================= */

function resetPositions() {

    editorState.positions =
        {};


    applySavedPositions();


    saveStateSilently();

}


/* =========================================================
   ZOOM
   ========================================================= */

let canvasZoom =
    1;


function zoomCanvas(amount) {

    canvasZoom +=
        amount;


    canvasZoom =
        Math.max(
            .5,
            Math.min(
                1.6,
                canvasZoom
            )
        );


    const canvas =
        document.getElementById(
            "stickerCanvas"
        );


    if (canvas) {

        canvas.style.transform =
            `scale(${canvasZoom})`;

    }


    const label =
        document.getElementById(
            "zoomLabel"
        );


    if (label) {

        label.textContent =
            `${Math.round(
                canvasZoom * 100
            )}%`;

    }

}


/* =========================================================
   SAVE STATE
   ========================================================= */

function collectEditorData() {

    const data = {

        business:
            getInputValue(
                "businessInput"
            ),

        product:
            getInputValue(
                "productInput"
            ),

        price:
            getInputValue(
                "priceInput"
            ),

        sku:
            getInputValue(
                "skuInput"
            ),

        url:
            getInputValue(
                "urlInput"
            ),

        mrp:
            getInputValue(
                "mrpInput"
            ),

        discount:
            getInputValue(
                "discountInput"
            ),

        category:
            getInputValue(
                "categoryInput"
            ),

        colour:
            getInputValue(
                "colourInput"
            ),

        dimensions:
            getInputValue(
                "dimensionsInput"
            ),

        warranty:
            getInputValue(
                "warrantyInput"
            ),

        stock:
            getInputValue(
                "stockInput"
            )

    };


    return data;

}


function getInputValue(id) {

    const element =
        document.getElementById(
            id
        );


    return element
        ? element.value
        : "";

}


function saveEditor() {

    const data =
        collectEditorData();


    localStorage.setItem(
        "stickerlyProductData",
        JSON.stringify(data)
    );


    saveStateSilently();


    showToast(
        currentLanguage === "ta"
            ? "லேபிள் சேமிக்கப்பட்டது"
            : "Label saved"
    );

}


function saveStateSilently() {

    const state = {

        ...editorState,

        template:
            normalizeDesignId(
                editorState.template
            ),

        productData:
            collectEditorData()

    };


    localStorage.setItem(
        "stickerlyState",
        JSON.stringify(state)
    );


    localStorage.setItem(
        "stickerlyTemplate",
        editorState.template
    );

}


/* =========================================================
   LOAD PRODUCT DATA
   ========================================================= */

function loadProductData() {

    const raw =
        localStorage.getItem(
            "stickerlyState"
        );


    if (!raw) {
        return;
    }


    try {

        const state =
            JSON.parse(raw);


        if (
            !state.productData
        ) {

            return;

        }


        const data =
            state.productData;


        const mapping = {

            businessInput:
                data.business,

            productInput:
                data.product,

            priceInput:
                data.price,

            skuInput:
                data.sku,

            urlInput:
                data.url,

            mrpInput:
                data.mrp,

            discountInput:
                data.discount,

            categoryInput:
                data.category,

            colourInput:
                data.colour,

            dimensionsInput:
                data.dimensions,

            warrantyInput:
                data.warranty,

            stockInput:
                data.stock

        };


        Object.entries(mapping)
            .forEach(
                ([id, value]) => {

                    const input =
                        document.getElementById(
                            id
                        );


                    if (
                        input &&
                        value !== undefined &&
                        value !== ""
                    ) {

                        input.value =
                            value;

                    }

                }
            );


        const syncMapping = {

            businessInput:
                "el-business",

            productInput:
                "el-product",

            priceInput:
                "el-price",

            skuInput:
                "el-sku",

            mrpInput:
                "el-mrp",

            discountInput:
                "el-discount",

            categoryInput:
                "el-category",

            colourInput:
                "el-colour",

            dimensionsInput:
                "el-dimensions",

            warrantyInput:
                "el-warranty",

            stockInput:
                "el-stock"

        };


        Object.entries(syncMapping)
            .forEach(
                ([inputId, elementId]) => {

                    const input =
                        document.getElementById(
                            inputId
                        );


                    const element =
                        document.getElementById(
                            elementId
                        );


                    if (
                        input &&
                        element &&
                        input.value
                    ) {

                        element.textContent =
                            input.value;

                    }

                }
            );


    } catch (error) {

        console.log(
            "Could not load product data.",
            error
        );

    }

}


/* =========================================================
   RESET EDITOR
   ========================================================= */

function resetEditor() {

    const confirmed =
        confirm(
            currentLanguage === "ta"
                ? "லேபிளை ஆரம்ப நிலைக்கு மாற்றவா?"
                : "Reset the label to its default state?"
        );


    if (!confirmed) {
        return;
    }


    localStorage.removeItem(
        "stickerlyState"
    );


    localStorage.removeItem(
        "stickerlyProductData"
    );


    location.reload();

}


/* =========================================================
   CURRENT TEMPLATE PREVIEW
   ========================================================= */

function updateCurrentTemplatePreview() {

    const container =
        document.getElementById(
            "currentTemplatePreview"
        );


    if (!container) {
        return;
    }


    const template =
        getTemplateById(
            editorState.template
        );


    container.innerHTML =
        createPreviewLabel(
            template
        );


    /*
     * Apply additional visual properties
     * to the editor preview.
     */

    const preview =
        container.querySelector(
            ".preview-label"
        );


    if (!preview) {
        return;
    }


    const design =
        getTemplateDesign(
            editorState.template
        );


    preview.style.width =
        "100%";

    preview.style.height =
        "100%";

    preview.style.background =
        design.background || "";

    preview.style.border =
        design.border || "";

    preview.style.borderLeft =
        design.borderLeft || "";

    preview.style.borderRadius =
        design.borderRadius || "";

    preview.style.color =
        design.color || "";

    if (design.fontFamily) {

        preview.style.fontFamily =
            design.fontFamily;

    }


    /*
     * Match special template visuals
     * in the small preview.
     */

    const previewBusiness =
        preview.querySelector(
            ".preview-business"
        );


    if (
        previewBusiness &&
        editorState.template ===
        "13"
    ) {

        previewBusiness.style.display =
            "inline-block";

        previewBusiness.style.background =
            "#27212d";

        previewBusiness.style.color =
            "#ffffff";

        previewBusiness.style.padding =
            "3px 7px";

        previewBusiness.style.borderRadius =
            "20px";

    }


}


/* =========================================================
   PRINT
   ========================================================= */

function printLabel() {

    saveEditor();


    setTimeout(
        () => {

            window.print();

        },
        200
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        document.getElementById(
            "stickerlyToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );


        toast.id =
            "stickerlyToast";


        toast.style.position =
            "fixed";


        toast.style.left =
            "50%";


        toast.style.bottom =
            "25px";


        toast.style.transform =
            "translateX(-50%)";


        toast.style.padding =
            "11px 17px";


        toast.style.borderRadius =
            "11px";


        toast.style.background =
            "#e5d8ed";


        toast.style.color =
            "#503a61";


        toast.style.fontSize =
            "12px";


        toast.style.fontWeight =
            "700";


        toast.style.boxShadow =
            "0 12px 30px rgba(72,48,92,.18)";


        toast.style.zIndex =
            "9999";


        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    toast.style.opacity =
        "1";


    clearTimeout(
        toast._timer
    );


    toast._timer =
        setTimeout(
            () => {

                toast.style.opacity =
                    "0";

            },
            1800
        );

}


/* =========================================================
   URL CHANGE -> QR
   ========================================================= */

function setupUrlQrListener() {

    const input =
        document.getElementById(
            "urlInput"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        () => {

            generateQR();

            saveStateSilently();

        }
    );

}


/* =========================================================
   CONTENTEDITABLE SAVE
   ========================================================= */

function setupContentEditableSave() {

    const elements =
        document.querySelectorAll(
            '.sticker-element[contenteditable="true"]'
        );


    const mapping = {

        "el-business":
            "businessInput",

        "el-product":
            "productInput",

        "el-price":
            "priceInput",

        "el-sku":
            "skuInput",

        "el-mrp":
            "mrpInput",

        "el-discount":
            "discountInput",

        "el-category":
            "categoryInput",

        "el-colour":
            "colourInput",

        "el-dimensions":
            "dimensionsInput",

        "el-warranty":
            "warrantyInput",

        "el-stock":
            "stockInput"

    };


    elements.forEach(
        element => {

            element.addEventListener(
                "input",
                () => {

                    const inputId =
                        mapping[
                            element.id
                        ];


                    if (inputId) {

                        const input =
                            document.getElementById(
                                inputId
                            );


                        if (input) {

                            input.value =
                                element.textContent.trim();

                        }

                    }


                    saveStateSilently();

                }
            );

        }
    );

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applyLanguage();


        renderTemplates();


        setupTemplateFilters();


        if (
            document.getElementById(
                "stickerCanvas"
            )
        ) {

            initEditor();


            loadProductData();


            setupUrlQrListener();


            setupContentEditableSave();


            /*
             * Product data is loaded immediately
             * after editor initialization.
             *
             * Generate QR again so the URL
             * from saved data is used.
             */

            setTimeout(
                () => {

                    generateQR();

                },
                100
            );


            /*
             * Apply the selected design again
             * after saved product data has loaded.
             */

            setTimeout(
                () => {

                    applyTemplateDesign();

                    updateCurrentTemplatePreview();

                },
                120
            );

        }

    }
);