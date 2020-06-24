window.onload = function(){
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("form"),
        context: document.getElementById("cf-context"),
        showProgressBar: true,
        robotImage: "http://lupanasfinancas.vitorbraganca.com/img/robot-img.svg",
        userImage: "http://lupanasfinancas.vitorbraganca.com/img/user-img.svg",
        theme: "dark-theme",
        submitCallback: function(){
            alert("Submit: check dev tools console for more");
            // be aware that this prevents default form submit.
            var formData = conversationalForm.getFormData();
            var formDataSerialized = conversationalForm.getFormData(true);
            console.log("Formdata:", formData);
            console.log("Formdata, serialized:", formDataSerialized);
            conversationalForm.addRobotChatResponse("Ainda estou em fase de testes. Vários erros" +
                " e bugs serão corrigidos na versão final!");
        }
    });
};