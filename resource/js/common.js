$(document).ready(function () {
    // select box
    // select box 여닫기
    $(".selected").click(function () {
        $(this).siblings(".option_group").toggleClass("active");
    });
    $(".selectbox").on("mouseleave", function () {
        $(this).children(".option_group").removeClass("active");
    });
    // 항목 선택
    $(".inner ul li").click(function () {
        if (!$(this).hasClass("disabled")) {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            var selectedValue = $(this).text();
            $(this).closest(".selectbox").find(".selected").text(selectedValue);
            $(this).closest(".option_group").removeClass("active");
        }
    });
    // date range picker
    const datepickerOption = {
        format: "YYYY-MM-DD",
        separator: " → ",
        applyLabel: "확인",
        cancelLabel: "취소",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "Custom",
        weekLabel: "주",
        daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        firstDay: 1,
    };
    $('input[name="daterange"]').daterangepicker({
        opens: "left",
        autoApply: true,
        locale: datepickerOption,
    });

    //pagination
    $(".pagination ul li").on("click", function () {
        $(".pagination ul li").removeClass("on");
        $(this).addClass("on");
    });
});
