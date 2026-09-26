/* =============================================================
   DOWNLOAD STICKER PNG
============================================================= */

async function downloadSticker() {

    generateSticker();


    const sticker =
        document.getElementById(
            "sticker"
        );


    const oldShadow =
        sticker.style.boxShadow;


    const oldOverflow =
        sticker.style.overflow;


    sticker.style.boxShadow =
        "none";


    sticker.style.overflow =
        "hidden";


    try {

        const rect =
            sticker.getBoundingClientRect();


        const scale = 4;


        const canvas =
            await html2canvas(
                sticker,
                {

                    scale: scale,

                    width: rect.width,

                    height: rect.height,

                    x: 0,

                    y: 0,

                    backgroundColor: null,

                    useCORS: true,

                    logging: false,

                    allowTaint: false

                }
            );


        const finalCanvas =
            document.createElement(
                "canvas"
            );


        finalCanvas.width =
            canvas.width;


        finalCanvas.height =
            canvas.height;


        const ctx =
            finalCanvas.getContext(
                "2d"
            );


        ctx.clearRect(
            0,
            0,
            finalCanvas.width,
            finalCanvas.height
        );


        const computedStyle =
            getComputedStyle(
                sticker
            );


        const radiusCss =
            parseFloat(
                computedStyle.borderRadius
            ) || 0;


        const radius =
            radiusCss * scale;


        const w =
            finalCanvas.width;


        const h =
            finalCanvas.height;


        const r =
            Math.min(
                radius,
                w / 2,
                h / 2
            );


        ctx.beginPath();


        ctx.moveTo(
            r,
            0
        );


        ctx.lineTo(
            w - r,
            0
        );


        ctx.quadraticCurveTo(
            w,
            0,
            w,
            r
        );


        ctx.lineTo(
            w,
            h - r
        );


        ctx.quadraticCurveTo(
            w,
            h,
            w - r,
            h
        );


        ctx.lineTo(
            r,
            h
        );


        ctx.quadraticCurveTo(
            0,
            h,
            0,
            h - r
        );


        ctx.lineTo(
            0,
            r
        );


        ctx.quadraticCurveTo(
            0,
            0,
            r,
            0
        );


        ctx.closePath();


        ctx.clip();


        ctx.drawImage(
            canvas,
            0,
            0
        );


        const serial =
            document
                .getElementById(
                    "serial"
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
            "VANIKIO-" +
            (serial || "sticker") +
            ".png";


        link.href =
            finalCanvas.toDataURL(
                "image/png"
            );


        link.click();


    } catch (error) {

        console.error(
            error
        );


        alert(
            currentLanguage === "ta"
                ? "ஸ்டிக்கரை பதிவிறக்க முடியவில்லை."
                : "Unable to download sticker."
        );

    }


    sticker.style.boxShadow =
        oldShadow;


    sticker.style.overflow =
        oldOverflow;

}


/* =============================================================
   PRINT
============================================================= */

function printSticker() {

    generateSticker();

    window.print();

}