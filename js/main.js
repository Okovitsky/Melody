$(document).ready(function () {
  let currentFloor = 2;
  let currentFlat = 0;
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let floorPath = $(".home-image path");
  let flatPath = $(".floor-plan-image path");
  let modalCounter = $(".modal-counter");
  let buttonPrimary = $(".button-primary");
  let flatItem = $(".flat-item");
  let flatList = $(".flat-list a");

  flatPath.on("mouseover", function () {
    currentFlat = $(this).attr("floor-number");
    flatList.removeClass("is-flat-link");
    $(`[floor-num=${currentFlat}]`).toggleClass("is-flat-link");
  });

  flatPath.on("mouseout", function(){
    $(`[floor-num=${currentFlat}]`).removeClass("is-flat-link");
  });

  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
    modalCounter.text(currentFloor);
  });

  flatItem.on("mouseover", function () {
    currentFlat = $(this).attr("floor-num");
    flatPath.removeClass("is-selected-flat");
    $(`[floor-number=${currentFlat}]`).toggleClass("is-selected-flat");
  });





  flatList.on("mouseout", function () {
    flatPath.removeClass("is-selected-flat");
  });

  buttonPrimary.on("click", toggleModal);
  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 17) {
      currentFloor++;
      var usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      modalCounter.text(currentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      var usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      modalCounter.text(currentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
