/* =============================================================
   QR GENERATION
============================================================= */

function generateQrCode(
    businessId,
    itemId,
    qrSize,
    qrElement
) {

    if (!qrElement) {

        return;

    }


    qrElement.innerHTML = "";


    new QRCode(
        qrElement,
        {

            text:
                "https://vanikio.com/i/" +
                encodeURIComponent(
                    businessId || "MISSING-BUSINESS-ID"
                ) +
                "/" +
                encodeURIComponent(
                    itemId || "DEMO"
                ),

            width: 500,

            height: 500,

            colorDark:
                selectedColors.qr,

            colorLight:
                selectedColors.stickerBackground,

            correctLevel:
                QRCode.CorrectLevel.M

        }
    );


    qrElement.style.width =
        qrSize + "mm";


    qrElement.style.height =
        qrSize + "mm";


    qrElement.style.marginLeft =
        "0";


    qrElement.style.marginRight =
        "0";


    qrElement.style.backgroundColor =
        selectedColors.stickerBackground;


    const generatedImage =
        qrElement.querySelector("img");


    const generatedCanvas =
        qrElement.querySelector("canvas");


    if (generatedImage) {

        generatedImage.style.width =
            "100%";

        generatedImage.style.height =
            "100%";

        generatedImage.style.display =
            "block";

        generatedImage.style.backgroundColor =
            selectedColors.stickerBackground;

    }


    if (generatedCanvas) {

        generatedCanvas.style.width =
            "100%";

        generatedCanvas.style.height =
            "100%";

        generatedCanvas.style.display =
            "block";

        generatedCanvas.style.backgroundColor =
            selectedColors.stickerBackground;

    }

}


/* =============================================================
   DOWNLOAD QR ONLY
============================================================= */

function downloadQrOnly() {

    const qrEnabled =
        document
            .getElementById(
                "qrEnabled"
            )
            .checked;


    if (!qrEnabled) {

        alert(
            currentLanguage === "ta"
                ? "QR குறியீடு இயக்கப்படவில்லை."
                : "QR Code is disabled."
        );

        return;

    }


    generateSticker();


    const qr =
        document.getElementById(
            "qrcode"
        );


    const canvas =
        qr.querySelector(
            "canvas"
        );


    const image =
        qr.querySelector(
            "img"
        );


    let downloadUrl =
        null;


    if (canvas) {

        downloadUrl =
            canvas.toDataURL(
                "image/png"
            );

    } else if (image) {

        const tempCanvas =
            document.createElement(
                "canvas"
            );


        tempCanvas.width =
            image.naturalWidth || 500;


        tempCanvas.height =
            image.naturalHeight || 500;


        const ctx =
            tempCanvas.getContext(
                "2d"
            );


        ctx.fillStyle =
            selectedColors.stickerBackground;


        ctx.fillRect(
            0,
            0,
            tempCanvas.width,
            tempCanvas.height
        );


        ctx.drawImage(
            image,
            0,
            0,
            tempCanvas.width,
            tempCanvas.height
        );


        downloadUrl =
            tempCanvas.toDataURL(
                "image/png"
            );

    }


    if (!downloadUrl) {

        alert(
            currentLanguage === "ta"
                ? "QR ஐ பதிவிறக்க முடியவில்லை."
                : "Unable to download QR."
        );

        return;

    }


    const itemId =
        document
            .getElementById(
                "itemId"
            )
            .value
            .trim()
            .replace(
                /[^a-zA-Z0-9_-]/g,
                ""
            );


    const link =
        document.createElement(
            "a"
        );


    link.download =
        "VANIKIO-QR-" +
        (itemId || "code") +
        ".png";


    link.href =
        downloadUrl;


    link.click();

}