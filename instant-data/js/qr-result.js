/* =========================================================
   VANIKIO QR RESULT
========================================================= */

(function () {


    /* =====================================================
       READ DATA
    ====================================================== */

    const raw =
        sessionStorage.getItem(
            "vanikioInstantData"
        );


    if (!raw) {

        window.location.href =
            "upcoming-files.html";

        return;
    }


    let data;


    try {

        data =
            JSON.parse(raw);

    } catch (error) {

        console.error(
            "Invalid VANIKIO session data:",
            error
        );

        window.location.href =
            "upcoming-files.html";

        return;
    }


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const profilePreview =
        document.getElementById(
            "profilePreview"
        );


    const eventPreview =
        document.getElementById(
            "eventPreview"
        );


    const saveQrButton =
        document.getElementById(
            "saveQrButton"
        );


    const copyDataButton =
        document.getElementById(
            "copyDataButton"
        );


    /* =====================================================
       NORMAL PROFILE DATA
    ====================================================== */

    const profileName =
        data.name ||
        data.business ||
        "VANIKIO";


    document.getElementById(
        "name"
    ).textContent =
        profileName;


    document.getElementById(
        "avatar"
    ).textContent =
        profileName
            .charAt(0)
            .toUpperCase();


    document.getElementById(
        "location"
    ).textContent =
        data.location ||
        data.address ||
        data.category ||
        "VANIKIO";


    document.getElementById(
        "title"
    ).textContent =
        data.title ||
        data.design ||
        "Your digital information";


    document.getElementById(
        "description"
    ).textContent =
        data.description ||
        `${data.category || ""} · ${data.design || ""}`;


    document.getElementById(
        "phone"
    ).textContent =
        data.phone
            ? `☎ ${data.phone}`
            : "";


    document.getElementById(
        "email"
    ).textContent =
        data.email
            ? `✉ ${data.email}`
            : "";


    document.getElementById(
        "business"
    ).textContent =
        data.business
            ? `◆ ${data.business}`
            : "";


    /* =====================================================
       EVENT DETECTION
    ====================================================== */

    const themeEngine =
        window.VANIKIO_THEME_ENGINE;


    if (themeEngine) {

        const detectedEvent =
            themeEngine.getEventTheme(
                data
            );


        if (detectedEvent) {

            themeEngine.showEventPreview(
                data,
                detectedEvent
            );
        }
    }


    /* =====================================================
       RESIZE EVENT PREVIEW
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                eventPreview &&
                eventPreview.classList.contains(
                    "visible"
                )
            ) {

                if (
                    themeEngine
                ) {

                    themeEngine.fitEventPreview();
                }
            }

        }
    );


    /* =====================================================
       CREATE QR
    ====================================================== */

    const qrPayload =
        JSON.stringify(data);


    const qrContainer =
        document.getElementById(
            "qrcode"
        );


    new QRCode(
        qrContainer,
        {

            text: qrPayload,

            width: 210,

            height: 210,

            colorDark:
                "#27243a",

            colorLight:
                "#ffffff",

            correctLevel:
                QRCode.CorrectLevel.M

        }
    );


    /* =====================================================
       DOWNLOAD QR
    ====================================================== */

    function downloadQR() {


        const img =
            document.querySelector(
                "#qrcode img"
            );


        const sourceCanvas =
            document.querySelector(
                "#qrcode canvas"
            );


        if (
            !img &&
            !sourceCanvas
        ) {

            alert(
                "QR is still generating. Please try again."
            );

            return;
        }


        /* =================================================
           FINAL DOWNLOAD SIZE
        ================================================== */

        const canvasWidth =
            600;


        const canvasHeight =
            600;


        /* =================================================
           QR SIZE
        ================================================== */

        const qrSize =
            260;


        /* =================================================
           EQUAL PADDING
        ================================================== */

        const padding =
            170;


        /* =================================================
           CURVED CORNER
        ================================================== */

        const cornerRadius =
            55;


        /* =================================================
           CREATE CANVAS
        ================================================== */

        const canvas =
            document.createElement(
                "canvas"
            );


        canvas.width =
            canvasWidth;


        canvas.height =
            canvasHeight;


        const ctx =
            canvas.getContext(
                "2d"
            );


        /* =================================================
           WHITE CARD
        ================================================== */

        ctx.fillStyle =
            "#ffffff";


        ctx.beginPath();


        ctx.moveTo(
            cornerRadius,
            0
        );


        ctx.lineTo(
            canvasWidth -
                cornerRadius,
            0
        );


        ctx.quadraticCurveTo(
            canvasWidth,
            0,
            canvasWidth,
            cornerRadius
        );


        ctx.lineTo(
            canvasWidth,
            canvasHeight -
                cornerRadius
        );


        ctx.quadraticCurveTo(
            canvasWidth,
            canvasHeight,
            canvasWidth -
                cornerRadius,
            canvasHeight
        );


        ctx.lineTo(
            cornerRadius,
            canvasHeight
        );


        ctx.quadraticCurveTo(
            0,
            canvasHeight,
            0,
            canvasHeight -
                cornerRadius
        );


        ctx.lineTo(
            0,
            cornerRadius
        );


        ctx.quadraticCurveTo(
            0,
            0,
            cornerRadius,
            0
        );


        ctx.closePath();


        ctx.fill();


        /* =================================================
           CENTER QR
        ================================================== */

        const qrX =
            (canvasWidth -
                qrSize) / 2;


        const qrY =
            (canvasHeight -
                qrSize) / 2;


        ctx.imageSmoothingEnabled =
            false;


        if (img) {

            ctx.drawImage(
                img,
                qrX,
                qrY,
                qrSize,
                qrSize
            );

        } else {

            ctx.drawImage(
                sourceCanvas,
                qrX,
                qrY,
                qrSize,
                qrSize
            );
        }


        /* =================================================
           DOWNLOAD
        ================================================== */

        canvas.toBlob(
            function (blob) {

                if (!blob) {

                    alert(
                        "Unable to create QR image."
                    );

                    return;
                }


                const url =
                    URL.createObjectURL(
                        blob
                    );


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    url;


                link.download =
                    "vanikio-qr-card.png";


                document.body.appendChild(
                    link
                );


                link.click();


                document.body.removeChild(
                    link
                );


                setTimeout(
                    function () {

                        URL.revokeObjectURL(
                            url
                        );

                    },
                    1000
                );

            },
            "image/png"
        );

    }


    /* =====================================================
       COPY DATA
    ====================================================== */

    async function copyData() {

        try {

            await navigator.clipboard.writeText(
                JSON.stringify(
                    data,
                    null,
                    2
                )
            );


            alert(
                "Data copied."
            );

        } catch (error) {

            console.error(
                "Copy failed:",
                error
            );


            alert(
                "Unable to copy data."
            );
        }
    }


    /* =====================================================
       BUTTON EVENTS
    ====================================================== */

    if (saveQrButton) {

        saveQrButton.addEventListener(
            "click",
            downloadQR
        );
    }


    if (copyDataButton) {

        copyDataButton.addEventListener(
            "click",
            copyData
        );
    }


})();