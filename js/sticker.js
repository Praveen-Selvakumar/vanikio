/* =============================================================
   GENERATE STICKER
============================================================= */

function generateSticker() {


    const businessId =
        document
            .getElementById("businessId")
            .value
            .trim();


    const serial =
        document
            .getElementById("serial")
            .value
            .trim();


    const price =
        document
            .getElementById("price")
            .value
            .trim();


    const itemId =
        document
            .getElementById("itemId")
            .value
            .trim();


    const width =
        parseFloat(
            document
                .getElementById("stickerWidth")
                .value
        ) || 35;


    const height =
        parseFloat(
            document
                .getElementById("stickerHeight")
                .value
        ) || 20;


    const qrSize =
        parseFloat(
            document
                .getElementById("qrSize")
                .value
        ) || 15;


    const labelSize =
        parseFloat(
            document
                .getElementById("labelSize")
                .value
        ) || 1.7;


    const valueSize =
        parseFloat(
            document
                .getElementById("valueSize")
                .value
        ) || 4.2;


    const borderSize =
        parseFloat(
            document
                .getElementById("borderSize")
                .value
        );


    const qrEnabled =
        document
            .getElementById("qrEnabled")
            .checked;


    const sticker =
        document.getElementById(
            "sticker"
        );


    const qrSection =
        document.getElementById(
            "qrSection"
        );


    const divider =
        document.getElementById(
            "divider"
        );


    const qr =
        document.getElementById(
            "qrcode"
        );


    const stickerInfo =
        document.querySelector(
            ".sticker-info"
        );


    const companyNameText =
        document.getElementById(
            "companyNameText"
        );


    if (!businessId) {

        document.getElementById("qrcode").innerHTML = "";

        return;

    }


    /* =========================================================
       STICKER SIZE
    ========================================================== */

    sticker.style.width =
        width + "mm";


    sticker.style.height =
        height + "mm";


    /* =========================================================
       BACKGROUND
    ========================================================== */

    sticker.style.backgroundColor =
        selectedColors.stickerBackground;


    /* =========================================================
       BORDER
    ========================================================== */

    sticker.style.borderColor =
        selectedColors.border;


    sticker.style.borderWidth =
        Math.max(
            0,
            borderSize || 0
        ) + "mm";


    /* =========================================================
       BUSINESS ID
    ========================================================== */

    companyNameText.style.display =
        "none";


    /* =========================================================
       TEXT
    ========================================================== */

    document
        .getElementById("serialText")
        .textContent =
        serial || "";


    document
        .getElementById("priceText")
        .textContent =
        price || "";


    /* =========================================================
       TEXT SIZE
    ========================================================== */

    document
        .getElementById("serialLabel")
        .style.fontSize =
        labelSize + "mm";


    document
        .getElementById("priceLabel")
        .style.fontSize =
        labelSize + "mm";


    document
        .getElementById("serialText")
        .style.fontSize =
        valueSize + "mm";


    document
        .getElementById("priceText")
        .style.fontSize =
        valueSize + "mm";


    /* =========================================================
       TEXT COLORS
    ========================================================== */

    document
        .getElementById("serialLabel")
        .style.color =
        selectedColors.serialLabel;


    document
        .getElementById("priceLabel")
        .style.color =
        selectedColors.priceLabel;


    document
        .getElementById("serialText")
        .style.color =
        selectedColors.serialValue;


    document
        .getElementById("priceText")
        .style.color =
        selectedColors.priceValue;


    /* =========================================================
       INFO LINES
    ========================================================== */

    document
        .querySelectorAll(".info-line")
        .forEach(line => {

            line.style.borderBottomColor =
                selectedColors.border;

        });


    /* =========================================================
       QR / LAYOUT
    ========================================================== */

    if (qrEnabled) {

        stickerInfo.style.flex =
            "1";


        stickerInfo.style.width =
            "auto";


        stickerInfo.style.minWidth =
            "0";


        stickerInfo.style.paddingLeft =
            "1.5mm";


        divider.style.display =
            "block";


        divider.style.backgroundColor =
            selectedColors.border;


        divider.style.height =
            qrSize + "mm";


        divider.style.alignSelf =
            "center";


        qrSection.style.display =
            "flex";


        qrSection.style.width =
            "auto";


        qrSection.style.height =
            "100%";


        qrSection.style.flex =
            "0 0 auto";


        qrSection.style.marginLeft =
            "0";


        qrSection.style.justifyContent =
            "flex-end";


        qrSection.style.alignItems =
            "center";


        qrSection.style.alignSelf =
            "center";

    } else {

        stickerInfo.style.flex =
            "1";


        stickerInfo.style.width =
            "100%";


        stickerInfo.style.minWidth =
            "0";


        stickerInfo.style.paddingLeft =
            "1mm";


        divider.style.display =
            "none";


        qrSection.style.display =
            "none";

    }


    /* =========================================================
       CLEAR QR
    ========================================================== */

    qr.innerHTML = "";


    /* =========================================================
       CREATE QR
    ========================================================== */

    if (qrEnabled) {

        generateQrCode(
            businessId,
            itemId,
            qrSize,
            qr
        );

    }

}


/* =============================================================
   DRAGGABLE ELEMENT
============================================================= */

function makeDraggable(element) {

    if (!element) {

        return;

    }


    let isDragging = false;

    let startX = 0;

    let startY = 0;

    let startTranslateX = 0;

    let startTranslateY = 0;


    element.dataset.translateX =
        "0";


    element.dataset.translateY =
        "0";


    element.style.transform =
        "translate(0mm, 0mm)";


    element.addEventListener(
        "pointerdown",
        function(event) {

            if (
                event.pointerType === "mouse" &&
                event.button !== 0
            ) {

                return;

            }


            isDragging = true;


            element.setPointerCapture(
                event.pointerId
            );


            startX =
                event.clientX;


            startY =
                event.clientY;


            startTranslateX =
                parseFloat(
                    element.dataset.translateX ||
                    "0"
                );


            startTranslateY =
                parseFloat(
                    element.dataset.translateY ||
                    "0"
                );


            element.style.cursor =
                "grabbing";


            event.preventDefault();

        }
    );


    element.addEventListener(
        "pointermove",
        function(event) {

            if (!isDragging) {

                return;

            }


            const deltaX =
                event.clientX -
                startX;


            const deltaY =
                event.clientY -
                startY;


            const pixelsPerMm =
                3.78;


            const moveX =
                deltaX /
                pixelsPerMm;


            const moveY =
                deltaY /
                pixelsPerMm;


            const newX =
                startTranslateX +
                moveX;


            const newY =
                startTranslateY +
                moveY;


            element.dataset.translateX =
                newX;


            element.dataset.translateY =
                newY;


            element.style.transform =
                "translate(" +
                newX +
                "mm, " +
                newY +
                "mm)";

        }
    );


    function stopDragging(event) {

        if (!isDragging) {

            return;

        }


        isDragging = false;


        element.style.cursor =
            "grab";


        if (
            event &&
            element.hasPointerCapture &&
            element.hasPointerCapture(
                event.pointerId
            )
        ) {

            element.releasePointerCapture(
                event.pointerId
            );

        }

    }


    element.addEventListener(
        "pointerup",
        stopDragging
    );


    element.addEventListener(
        "pointercancel",
        stopDragging
    );

}


/* =============================================================
   RESET DRAGGED POSITIONS
============================================================= */

function resetDraggedPositions() {

    const draggableElements = [

        document.getElementById(
            "companyNameText"
        ),

        document.getElementById(
            "serialRow"
        ),

        document.getElementById(
            "priceRow"
        ),

        document.getElementById(
            "qrSection"
        )

    ];


    draggableElements.forEach(
        element => {

            if (!element) {

                return;

            }


            element.dataset.translateX =
                "0";


            element.dataset.translateY =
                "0";


            element.style.transform =
                "translate(0mm, 0mm)";


            element.style.cursor =
                "grab";

        }
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


    resetDraggedPositions();


    setLanguage(
        DEFAULTS.language
    );


    generateSticker();

}