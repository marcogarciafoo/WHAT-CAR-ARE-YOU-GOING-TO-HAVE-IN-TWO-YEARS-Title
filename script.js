var cars = ["https://amp.businessinsider.com/images/5af363dbfe3eea28008b4595-960-480.jpg",
    "https://cdn1.autoexpress.co.uk/sites/autoexpressuk/files/2018/08/01_18.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/1200px-McLaren_P1.jpg",
    "https://pbs.twimg.com/media/DXj4py1V4AArDoy.jpg",
    "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/350x197/quality/95/https://s.blogcdn.com/slideshows/images/slides/747/051/9/S7470519/slug/l/2019-ford-f-150-raptor-1.jpg"
];

var randomValue;

$("button").click(function() {
    var username = $("input").val();
    console.log(username);
    $(".questions").hide();
    $(".answer").show();
    var randomNum = Math.floor(Math.random() * cars.length);
    randomValue = cars[randomNum];
    //names[randomNum];
    console.log(randomValue);
    console.log(cars.length);
    $("#answer-image").attr("src", randomValue);

    //$(".answer").text("YOUR CAR WILL BE...");
});
$(".answer").hide();