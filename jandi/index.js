document.addEventListener("DOMContentLoaded", function() {
    // travel-spot-circle 요소
    let travelSpotCircle = document.querySelector(".travel-spot-circle");

    // check-in-square 요소
    let checkInSquare = document.querySelector(".check-in-square");

    // check-out-square 요소
    let checkOutSquare = document.querySelector(".check-out-square");

    // guest-select-circle 요소
    let guestSelectCircle = document.querySelector(".guest-select-circle");

    // full-searchbar-space 요소
    let fullSearchbarSpace = document.querySelector(".full-searchbar-space");

    // 초기 상태를 저장
    let originalBackgroundColor = fullSearchbarSpace.style.backgroundColor;

    let originalCircleBackgroundColor = travelSpotCircle.style.backgroundColor;
    let originalCircleBoxShadow = travelSpotCircle.style.boxShadow;
    let originalCircleBorder = travelSpotCircle.style.border;

    let originalCheckInBackgroundColor = checkInSquare.style.backgroundColor;
    let originalCheckInBoxShadow = checkInSquare.style.boxShadow;
    let originalCheckInBorder = checkInSquare.style.border;

    let originalCheckOutBackgroundColor = checkOutSquare.style.backgroundColor;
    let originalCheckOutBoxShadow = checkOutSquare.style.boxShadow;
    let originalCheckOutBorder = checkOutSquare.style.border;

    let originalGuestSelectBackgroundColor = guestSelectCircle.style.backgroundColor;
    let originalGuestSelectBoxShadow = guestSelectCircle.style.boxShadow;
    let originalGuestSelectBorder = guestSelectCircle.style.border;

    // travel-spot-circle을 클릭했을 때 이벤트 처리
    travelSpotCircle.addEventListener("click", function() {
        // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        // travel-spot-circle의 배경색을 흰색으로 지정
        travelSpotCircle.style.backgroundColor = "#ffffff";
        // travel-spot-circle에 box-shadow와 border를 추가
        travelSpotCircle.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        travelSpotCircle.style.border = "1px solid #e0e0e0";

        // 나머지 요소들의 초기 상태 복원
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // check-in-square을 클릭했을 때 이벤트 처리
    checkInSquare.addEventListener("click", function() {
        // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        checkInSquare.style.backgroundColor = "#ffffff";
        checkInSquare.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        checkInSquare.style.border = "1px solid #e0e0e0";

        // travel-spot-circle의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // check-out-square을 클릭했을 때 이벤트 처리
    checkOutSquare.addEventListener("click", function() {
    // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        checkOutSquare.style.backgroundColor = "#ffffff";
        checkOutSquare.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        checkOutSquare.style.border = "1px solid #e0e0e0";

        // check-out-square의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        checkInSquare.style.border = originalCheckInBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // guestSelectCircle을 클릭했을 때 이벤트 처리
    guestSelectCircle.addEventListener("click", function() {
    // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        guestSelectCircle.style.backgroundColor = "#ffffff";
        guestSelectCircle.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        guestSelectCircle.style.border = "1px solid #e0e0e0";

        // check-out-square의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        checkInSquare.style.border = originalCheckInBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
    });

    // document에 클릭 이벤트 리스너를 추가합니다.
    document.addEventListener("click", function(event) {
        // 클릭된 요소가 travel-spot-circle이나 check-in-square이 아니라면 원래의 상태로 복원합니다.
        if (!event.target.closest(".travel-spot-circle") && !event.target.closest(".check-in-square")
        && !event.target.closest(".check-out-square") && !event.target.closest(".guest-select-circle")) {
            fullSearchbarSpace.style.backgroundColor = originalBackgroundColor;
            travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
            travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
            travelSpotCircle.style.border = originalCircleBorder;
            checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
            checkInSquare.style.boxShadow = originalCheckInBoxShadow;
            checkInSquare.style.border = originalCheckInBorder;
            checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
            checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
            checkOutSquare.style.border = originalCheckOutBorder;
            guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
            guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
            guestSelectCircle.style.border = originalGuestSelectBorder;
        }
    });
});

function showLocalSearchArea() {
  var fullSearchbarSpace = document.querySelector('.full-searchbar-space');
  fullSearchbarSpace.classList.add('active');
}