
function piece() {
    // Récupération des valeurs pour vérification
    let marque = $('input[name="element_0"]').val().trim();
    let modele = $('input[name="element_1"]').val().trim();
    let chassis = $('input[name="element_2"]').val().trim();

    // Validation basique
   // if (marque === "" || modele === "" || chassis === "") {
      //   AIZ.plugins.notify('danger', "Merci de remplire tous les champs obligatoires");
      //  return;
   // }

    // --- Gestion des sections ---
    $('.autoinfo').hide();     // Masquer la section véhicule
    $('.piece').show();             // Afficher la section des pièces demandées
    $('.delevryInfo').hide();
    $('.confirmationsection').hide();
    $('.payementsection').hide();

    // --- Gestion du stepper ---
    $('.auto').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.auto').children().addClass('text-success').removeClass('text-light');
    $('.auto').children().children().removeClass('opacity-50');

    $('.pieceauto').addClass('active'); // Étape suivante (pièces demandées)
    $('.pieceauto').children().addClass('text-primary');
    $('.pieceauto').children().children().removeClass('opacity-50');

    // --- Remonter la page ---
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

function destinataire() {
    // Récupération des valeurs pour vérification
   

    // Validation basique
   // if (marque === "" || modele === "" || chassis === "") {
      //   AIZ.plugins.notify('danger', "Merci de remplire tous les champs obligatoires");
      //  return;
   // }

    // --- Gestion des sections ---
    $('.autoinfo').hide();     // Masquer la section véhicule
    $('.piece').hide();             // Afficher la section des pièces demandées
    $('.destinataire').show();
    $('.confirmationsection').hide();
    $('.payementsection').hide();

    // --- Gestion du stepper ---
    $('.auto').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.auto').children().addClass('text-success').removeClass('text-light');
    $('.auto').children().children().removeClass('opacity-50');

     $('.pieceauto').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.pieceauto').children().addClass('text-success').removeClass('text-light');
    $('.pieceauto').children().children().removeClass('opacity-50');


    $('.dest').addClass('active'); // Étape suivante (pièces demandées)
    $('.dest').children().addClass('text-primary');
    $('.dest').children().children().removeClass('opacity-50');

    // --- Remonter la page ---
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

function reception() {
    // Récupération des valeurs pour vérification
   

    // Validation basique
   // if (marque === "" || modele === "" || chassis === "") {
      //   AIZ.plugins.notify('danger', "Merci de remplire tous les champs obligatoires");
      //  return;
   // }

    // --- Gestion des sections ---
    $('.autoinfo').hide();     // Masquer la section véhicule
    $('.piece').hide();             // Afficher la section des pièces demandées
    $('.destinataire').hide();
    $('.reception').show();
    $('.payementsection').hide();

    // --- Gestion du stepper ---
    $('.auto').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.auto').children().addClass('text-success').removeClass('text-light');
    $('.auto').children().children().removeClass('opacity-50');

     $('.pieceauto').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.pieceauto').children().addClass('text-success').removeClass('text-light');
    $('.pieceauto').children().children().removeClass('opacity-50');

     $('.dest').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.dest').children().addClass('text-success').removeClass('text-light');
    $('.dest').children().children().removeClass('opacity-50');

     $('.recep').addClass('active'); // Étape suivante (pièces demandées)
    $('.recep').children().addClass('text-primary');
    $('.recep').children().children().removeClass('opacity-50');

    // --- Remonter la page ---
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

function envoyerdemande() {
    // Récupération des valeurs pour vérification
   

    // Validation basique
   // if (marque === "" || modele === "" || chassis === "") {
      //   AIZ.plugins.notify('danger', "Merci de remplire tous les champs obligatoires");
      //  return;
   // }

    // --- Gestion des sections ---
    $('.autoinfo').hide();     // Masquer la section véhicule
    $('.piece').hide();             // Afficher la section des pièces demandées
    $('.destinataire').hide();
    $('.reception').hide();
    $('.confirmation').show();

    // --- Gestion du stepper ---
    $('.auto').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.auto').children().addClass('text-success').removeClass('text-light');
    $('.auto').children().children().removeClass('opacity-50');

     $('.pieceauto').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.pieceauto').children().addClass('text-success').removeClass('text-light');
    $('.pieceauto').children().children().removeClass('opacity-50');

     $('.dest').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.dest').children().addClass('text-success').removeClass('text-light');
    $('.dest').children().children().removeClass('opacity-50');

     $('.recep').addClass('done').removeClass('active'); // Étape véhicule terminée
    $('.recep').children().addClass('text-success').removeClass('text-light');
    $('.recep').children().children().removeClass('opacity-50');

    $('.confirm').addClass('done').removeClass('active'); // Étape suivante (pièces demandées)
    $('.confirm').children().addClass('text-success').removeClass('text-light');
    $('.confirm').children().children().removeClass('opacity-50');

    // --- Remonter la page ---
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

 function sort_brands(el){
        $('#sort_brands').submit();
    }



document.getElementById('click_to_convert').addEventListener('click', function(e) {
    e.preventDefault();

    if (!('webkitSpeechRecognition' in window)) {
        alert("Votre navigateur ne supporte pas la reconnaissance vocale 😞");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;

    // 🔥 Choix de la langue selon le menu déroulant
    const selectedLang = document.getElementById('language_select').value;
    recognition.lang = selectedLang;

    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        document.getElementById('convert_text').value = transcript;
    });

    recognition.start();
});


function cloudDinaryCreationLogomarque() {
  cloudinary.openUploadWidget({
    cloudName: 'b-ja',
    uploadPreset: 'aladdineshop',
    folder: 'ml_default',
    theme: 'minimal',
    maxFileSize: 3000000, // 3 Mo
    sources: ['local', 'url'],
    clientAllowedFormats: ['png', 'jpeg'],
    resourceType: 'image',
    buttonCaption: 'Télécharger image'
  }, 
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Upload réussi : ', result.info.secure_url);
      document.getElementById("srcLogo").value = result.info.secure_url;
      document.getElementById("logoImg").src = result.info.secure_url;
      document.getElementById("NewPhotos").style.display = 'block';
    }
  });
}

var tablePieces = $('#tab').DataTable({
    responsive: true, // Rend le tableau adaptatif sur mobile
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/fr-FR.json"
    },
    
});

function ajouterpiece() {
    let designation = $('#convert_text').val();
    let reference = $('#reference').val();
    let photo = $('#srcLogo').val();
    let observation = $('#observation').val();

    if (designation.trim() === "") {
        AIZ.plugins.notify('danger', "Champ désignation vide !");
        return;
    }

    if (observation.trim() === "") {
        AIZ.plugins.notify('danger', "Champ observation vide !");
        return;
    }

    let data = {
        designation: designation,
        reference: reference,
        photo: photo,
        observation: observation
    };

    $.ajax({
        type: "POST",
        url: pathaddpiece,
        data: data,
        success: function (result) {
            $('#new-address-modal').hide();
$('.modal-backdrop').remove();
$('body').removeClass('modal-open');
$('body').css('overflow', 'auto');
            AIZ.plugins.notify('success', "Pièce ajoutée avec succès !");

            // 🔹 Ajouter la nouvelle ligne dans DataTable directement
            tablePieces.row.add([
                designation,
                reference || '-',
                photo
                    ? `<img src="${photo}" alt="photo" style="width:60px;height:60px;border-radius:6px;">`
                    : '—',
                observation,
                `<button class="btn btn-danger btn-sm delete-piece" style="padding: 0.416rem !important;width: calc(2.02rem + 2px);height: calc(2.02rem + 2px);" data-id="${result.id}">
                    <i class="la la-trash"></i>
                </button>`
            ]).draw(false);

            // 🔹 Réinitialiser le formulaire
            $('#convert_text').val('');
            $('#reference').val('');
            $('#srcLogo').val('');
            $('#observation').val('');
            $('#logoImg').hide();
        },
        error: function (xhr) {
            console.error(xhr.responseText);
            AIZ.plugins.notify('danger', "Erreur lors de l’ajout de la pièce !");
        },
        beforeSend: function () {
            $('#loaderAcc1').show();
        },
        complete: function () {
            $('#loaderAcc1').hide();
        }
    });
}


