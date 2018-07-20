$( function () {
  // elemek össszegyűjtése
  let $button = $('button#createPost');
  let $postList = $('div.postList');
  let $postTitle = $('input#postTitle');
  let $postBody = $('textarea#postBody');
  let $modal = $('#exampleModal');

  // $postList.prepend('teszt');
  $button.click(function(){
    // console.log('click történt');
    // értékek össszegyűjtése
    let title = $postTitle.val();
    let body = $postBody.val();

    // bejegyzés létrehozása
    CreatePost(title, body);

    // előző értékek kitörlése
    $postTitle.val('');
    $postBody.val('');

    // modal bezárása
    $modal.modal('hide')
  });


  ////////////////////////////////////////////////////////////////

  function CreatePost(title, body) {
    let postHTML = '<div class="mb-4"><header><strong>'+
                    title+ '</strong></header><main>'+
                    body + '</main></div>';

    $postList.prepend(postHTML);
  }
});
