(function () {
    const input = document.createElement("input");
    input.id = "mobileInput";
    input.style.position = "absolute";
    input.style.display = "none";
    document.body.appendChild(input);

    window.showMobileKeyboard = function (unityObjectName, methodName, fieldId) {
        input.style.display = "block";
        input.value = "";
        input.focus();

        input.oninput = function () {
            const combined = fieldId + "|" + input.value;
            (gameInstance || unityInstance).SendMessage(unityObjectName, methodName, combined);
        };

        input.onblur = function () {
            input.style.display = "none";
        };
    };
})();