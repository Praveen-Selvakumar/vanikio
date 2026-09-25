/* =========================================================
   VANIKIO THEME ENGINE
========================================================= */

(function () {

    const registry =
        window.VANIKIO_THEME_REGISTRY || {};


    const events =
        registry.events || {};


    /* =====================================================
       EVENT NAME → THEME KEY
    ====================================================== */

    const eventThemeMap = {

        "wedding":
            "wedding",

        "engagement":
            "engagement",

        "reception":
            "reception",

        "birthday party":
            "birthday",

        "birthday":
            "birthday",

        "anniversary":
            "anniversary",

        "baby shower":
            "baby-shower",

        "naming ceremony":
            "naming",

        "housewarming":
            "housewarming",

        "graduation":
            "graduation",

        "college reunion":
            "reunion",

        "family function":
            "family",

        "religious function":
            "religious",

        "corporate event":
            "corporate",

        "conference":
            "conference",

        "workshop":
            "workshop",

        "seminar":
            "seminar",

        "meetup":
            "meetup",

        "festival event":
            "festival",

        "exhibition":
            "exhibition",

        "trade show":
            "trade"
    };


    /* =====================================================
       DETECT EVENT THEME
    ====================================================== */

    function getEventTheme(data) {

        /*
           Current structure:

           category   = Events
           categoryId = events
           design     = Wedding / Engagement / etc.
        */

        if (
            String(data.categoryId || "")
                .toLowerCase()
            === "events"
        ) {

            const designName =
                String(
                    data.eventCategory ||
                    data.design ||
                    ""
                )
                .trim()
                .toLowerCase();


            return eventThemeMap[
                designName
            ] || null;
        }


        /*
           Future structure support:

           category = Wedding
        */

        const categoryName =
            String(
                data.category ||
                ""
            )
            .trim()
            .toLowerCase();


        return eventThemeMap[
            categoryName
        ] || null;
    }


    /* =====================================================
       FORMAT DATE
    ====================================================== */

    function formatDate(value) {

        if (!value) {

            return "";
        }


        const date =
            new Date(value);


        if (
            Number.isNaN(
                date.getTime()
            )
        ) {

            return value;
        }


        return date.toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );
    }


    /* =====================================================
       FORMAT TIME
    ====================================================== */

    function formatTime(value) {

        if (!value) {

            return "";
        }


        if (
            /AM|PM/i.test(value)
        ) {

            return value;
        }


        const parts =
            value.split(":");


        if (
            parts.length < 2
        ) {

            return value;
        }


        let hour =
            parseInt(
                parts[0],
                10
            );


        const minute =
            parts[1];


        if (
            Number.isNaN(hour)
        ) {

            return value;
        }


        const suffix =
            hour >= 12
                ? "PM"
                : "AM";


        hour =
            hour % 12 || 12;


        return `${hour}:${minute} ${suffix}`;
    }


    /* =====================================================
       REMOVE EVENT THEME CLASSES
    ====================================================== */

    function clearEventThemes(element) {

        Object.keys(events).forEach(
            key => {

                element.classList.remove(
                    "theme-" + key
                );

            }
        );
    }


    /* =====================================================
       SCALE EVENT PREVIEW
    ====================================================== */

    function fitEventPreview() {

        const stage =
            document.getElementById(
                "eventPreviewStage"
            );


        const frame =
            document.getElementById(
                "eventInvitationFrame"
            );


        if (
            !stage ||
            !frame
        ) {

            return;
        }


        const availableWidth =
            stage.clientWidth;


        if (
            availableWidth <= 0
        ) {

            return;
        }


        const baseWidth = 850;

        const baseHeight = 680;


        const scale =
            Math.min(
                1,
                availableWidth /
                    baseWidth
            );


        frame.style.transform =
            `scale(${scale})`;


        frame.style.marginLeft =
            `${(availableWidth - baseWidth * scale) / 2}px`;


        frame.style.height =
            `${baseHeight * scale}px`;


        stage.style.height =
            `${baseHeight * scale}px`;
    }


    /* =====================================================
       SHOW EVENT PREVIEW
    ====================================================== */

    function showEventPreview(
        data,
        themeName
    ) {

        const event =
            events[themeName];


        if (!event) {

            return false;
        }


        const profilePreview =
            document.getElementById(
                "profilePreview"
            );


        const eventPreview =
            document.getElementById(
                "eventPreview"
            );


        const eventInvitation =
            document.getElementById(
                "eventInvitation"
            );


        if (
            !profilePreview ||
            !eventPreview ||
            !eventInvitation
        ) {

            return false;
        }


        /* Hide profile */

        profilePreview.classList.add(
            "hidden"
        );


        /* Show event */

        eventPreview.classList.add(
            "visible"
        );


        /* Apply exact theme */

        clearEventThemes(
            eventInvitation
        );


        eventInvitation.classList.add(
            "theme-" + themeName
        );


        /*
           Content
        */

        document.getElementById(
            "eventLabel"
        ).textContent =
            event.label;


        document.getElementById(
            "eventTitle"
        ).textContent =
            data.title ||
            event.title;


        document.getElementById(
            "eventDescription"
        ).textContent =
            data.description ||
            data.motto ||
            event.description;


        document.getElementById(
            "eventNames"
        ).textContent =
            data.names ||
            data.business ||
            event.names;


        document.getElementById(
            "eventAction"
        ).textContent =
            event.button;


        /* =================================================
           LOCATION
        ================================================== */

        const location =
            data.location ||
            data.address ||
            "";


        const locationElement =
            document.getElementById(
                "eventLocation"
            );


        if (location) {

            locationElement.textContent =
                location;

            locationElement.style.display =
                "block";

        } else {

            locationElement.style.display =
                "none";
        }


        /* =================================================
           DATE
        ================================================== */

        const date =
            data.date ||
            "";


        const dateContainer =
            document.getElementById(
                "eventDateContainer"
            );


        if (date) {

            document.getElementById(
                "eventDate"
            ).textContent =
                formatDate(date);

            dateContainer.style.display =
                "block";

        } else {

            dateContainer.style.display =
                "none";
        }


        /* =================================================
           TIME
        ================================================== */

        const time =
            data.time ||
            "";


        const timeContainer =
            document.getElementById(
                "eventTimeContainer"
            );


        if (time) {

            document.getElementById(
                "eventTime"
            ).textContent =
                formatTime(time);

            timeContainer.style.display =
                "block";

        } else {

            timeContainer.style.display =
                "none";
        }


        /* =================================================
           VENUE
        ================================================== */

        const venue =
            data.venue ||
            "";


        const venueContainer =
            document.getElementById(
                "eventVenueContainer"
            );


        if (venue) {

            document.getElementById(
                "eventVenue"
            ).textContent =
                venue;

            venueContainer.style.display =
                "block";

        } else {

            venueContainer.style.display =
                "none";
        }


        /*
           Fit exact 850 × 680 design
        */

        requestAnimationFrame(
            fitEventPreview
        );


        return true;
    }


    /* =====================================================
       PUBLIC API
    ====================================================== */

    window.VANIKIO_THEME_ENGINE = {

        getEventTheme,

        showEventPreview,

        fitEventPreview

    };

})();