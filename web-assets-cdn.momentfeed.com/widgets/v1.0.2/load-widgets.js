//Version 1.0.2

function loadWidgets(token) {

  document.addEventListener("DOMContentLoaded", function (event) {
    var APIHost = "https://partner-api.momentfeed.com/locations/cards";
    var authToken = token;

    var widgetElements = document.getElementsByClassName('mfcard');

    for (i = 0; i < widgetElements.length; i++) {
      var currentElement = widgetElements.item(i);
      var card_id = currentElement.getAttribute('card_id');
      var location_id = currentElement.getAttribute('location_id');
      var callback = function (targetElement) {
        return function () {
          if (this.status == 200)
            targetElement.innerHTML = this.response.body.innerHTML;
          else
            console.error(this.status + 'received from API.', this);
        };
      };

      var request = new XMLHttpRequest();
      request.onload = callback(currentElement);
      request.open('GET', APIHost + '?location_id=' + location_id + '&card_id=' + card_id);
      request.setRequestHeader('token', authToken);
      request.responseType = 'document';
      request.send();

      if (card_id == '3') {
        waitForElementToDisplay('#myForm', 5000, location_id, authToken);
      }

    }
  });
}

function waitForElementToDisplay(selector, time, location_id, authToken) {
  if (document.querySelector(selector) != null) {
    watcher(location_id, authToken);
    return;
  } else {
    setTimeout(function () {
      waitForElementToDisplay(selector, time, location_id, authToken);
    }, time);
  }
}


function watcher(locationID, authToken) {

  document.querySelector('#myForm').addEventListener('submit', function (e) {

    var form = document.getElementById('myForm');
    var success = document.getElementById('header-message');


    var myObj = {
      'location_id': locationID,
      'rating': 0,
      'text': document.getElementById('review').value,
      'title': document.getElementById('title').value,
      'last_name': document.getElementById('last-name').value,
      'first_name': document.getElementById('first-name').value,
      'email': document.getElementById('email').value
    };

    var reviewPost = new XMLHttpRequest();

    reviewPost.addEventListener('readystatechange', function() {
      if(reviewPost.readyState === 4 && reviewPost.status !== 200) {
        success.innerHTML = 'Something went wrong. Please try again in a few minutes.';
      } else if(reviewPost.readyState === 4 && reviewPost.status === 200) {
        console.log( reviewPost.status);
        form.style.display = 'none';
        success.innerHTML = 'Thank you for your Review!';
      }
    });



    reviewPost.open('POST', 'https://app.momentfeed.com/analytics/api/momentfeed' + '?' + 'auth_token=' + authToken);
    reviewPost.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    reviewPost.responseType = 'document';
    reviewPost.send(JSON.stringify(myObj));

    console.log('Fired!', JSON.stringify(myObj));
  });

}