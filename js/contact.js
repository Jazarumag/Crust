import { database } from './firebase.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

$(document).ready(function(){
    (function($) {
        "use strict";

    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Ingresa tu nombre",
                    minlength: "Tu nombre debe tener al menos 2 caracteres"
                },
                subject: {
                    required: "Ingresa un asunto",
                    minlength: "Asunto debe tener al menos 4 caracteres"
                },
                email: {
                    required: "Ingresa tu correo electrónico",
                    email: "Ingresa un correo electrónico válido"
                },
                message: {
                    required: "Tienes que escribir algo para enviar este formulario",
                }
            },
            submitHandler: async function(form) {
                try {
                    await push(ref(database, 'contacts'), {
                        name: form.name.value,
                        email: form.email.value,
                        subject: form.subject.value,
                        message: form.message.value,
                        date: new Date().toISOString()
                    });
                    // Mostrar notificación de éxito
                    if (!document.getElementById('form-success-alert')) {
                        $("#contactForm").before('<div id="form-success-alert" style="margin-bottom:15px;" class="alert alert-success" role="alert">¡Formulario enviado con éxito!</div>');
                    } else {
                        $('#form-success-alert').show();
                    }
                    // Limpiar el formulario y permitir nuevo envío
                    form.reset();
                    $('#contactForm :input').prop('disabled', false);
                    setTimeout(function() {
                        $('#form-success-alert').fadeOut();
                    }, 4000);
                } catch (error) {
                    if (!document.getElementById('form-error-alert')) {
                        $("#contactForm").before('<div id="form-error-alert" style="margin-bottom:15px;" class="alert alert-danger" role="alert">Ocurrió un error al enviar el formulario. Intenta de nuevo.</div>');
                    } else {
                        $('#form-error-alert').show();
                    }
                    setTimeout(function() {
                        $('#form-error-alert').fadeOut();
                    }, 4000);
                    console.error(error);
                }
            }
        })
    })
    })(jQuery)
})