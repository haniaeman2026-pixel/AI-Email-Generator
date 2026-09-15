/* =========================================================
   AI EMAIL GENERATOR
   Application JavaScript
   ========================================================= */


// ================= ELEMENTS =================

const emailForm =
    document.getElementById("emailForm");

const recipientName =
    document.getElementById("recipientName");

const purpose =
    document.getElementById("purpose");

const tone =
    document.getElementById("tone");

const generateBtn =
    document.getElementById("generateBtn");

const clearBtn =
    document.getElementById("clearBtn");

const loading =
    document.getElementById("loading");

const emptyState =
    document.getElementById("emptyState");

const emailResult =
    document.getElementById("emailResult");

const emailContent =
    document.getElementById("emailContent");

const copyBtn =
    document.getElementById("copyBtn");

const charCount =
    document.getElementById("charCount");

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const themeText =
    document.getElementById("themeText");


// ================= CHARACTER COUNTER =================

purpose.addEventListener("input", function () {

    const length =
        purpose.value.length;

    charCount.textContent =
        `${length} / 500`;

});


// ================= DARK MODE =================

function updateThemeButton() {

    const darkMode =
        document.body.classList.contains("dark");


    if (darkMode) {

        themeIcon.textContent = "☾";

        themeText.textContent = "Dark";

    } else {

        themeIcon.textContent = "☀";

        themeText.textContent = "Light";
    }
}


themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "emailGeneratorTheme",
            isDark
                ? "dark"
                : "light"
        );

        updateThemeButton();
    }
);


// Load saved theme

const savedTheme =
    localStorage.getItem(
        "emailGeneratorTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add("dark");
}


updateThemeButton();


// ================= GENERATE EMAIL =================

emailForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const recipient =
            recipientName.value.trim();

        const emailPurpose =
            purpose.value.trim();

        const selectedTone =
            tone.value;


        // Validation

        if (!recipient || !emailPurpose) {

            alert(
                "Please enter the recipient name and email purpose."
            );

            return;
        }


        // Show loading

        emptyState.classList.add(
            "hidden"
        );

        emailResult.classList.add(
            "hidden"
        );

        loading.classList.remove(
            "hidden"
        );


        // Disable buttons

        generateBtn.disabled = true;

        clearBtn.disabled = true;

        copyBtn.disabled = true;


        generateBtn.innerHTML =
            "⏳ Generating...";


        try {

            const response =
                await fetch(
                    "/api/generate-email",
                    {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            recipient_name:
                                recipient,

                            purpose:
                                emailPurpose,

                            tone:
                                selectedTone

                        })
                    }
                );


            if (!response.ok) {

                throw new Error(
                    `Server error: ${response.status}`
                );
            }


            const data =
                await response.json();


            if (
                data.success &&
                data.email
            ) {

                emailContent.textContent =
                    data.email;


                loading.classList.add(
                    "hidden"
                );


                emailResult.classList.remove(
                    "hidden"
                );


                copyBtn.disabled = false;

            } else {

                throw new Error(
                    "No email was generated."
                );
            }


        } catch (error) {

            console.error(
                "Generation error:",
                error
            );


            loading.classList.add(
                "hidden"
            );


            emptyState.classList.remove(
                "hidden"
            );


            alert(
                "Something went wrong while generating the email. Please try again."
            );


        } finally {

            generateBtn.disabled = false;

            clearBtn.disabled = false;

            generateBtn.innerHTML =
                "<span>✦</span> Generate Email <span>→</span>";
        }

    }
);


// ================= COPY EMAIL =================

copyBtn.addEventListener(
    "click",
    async function () {

        const text =
            emailContent.textContent;


        if (!text) {

            return;
        }


        try {

            await navigator.clipboard.writeText(
                text
            );


            const originalText =
                copyBtn.innerHTML;


            copyBtn.innerHTML =
                "✓ Copied!";


            setTimeout(
                function () {

                    copyBtn.innerHTML =
                        originalText;

                },
                1800
            );


        } catch (error) {

            console.error(
                "Copy failed:",
                error
            );


            alert(
                "Unable to copy the email."
            );
        }

    }
);


// ================= CLEAR FORM =================

clearBtn.addEventListener(
    "click",
    function () {

        recipientName.value = "";

        purpose.value = "";

        tone.value = "Professional";


        charCount.textContent =
            "0 / 500";


        emailResult.classList.add(
            "hidden"
        );


        loading.classList.add(
            "hidden"
        );


        emptyState.classList.remove(
            "hidden"
        );


        copyBtn.disabled = true;

    }
);