//literal
var name = "Nicholas";
//variable
var name2 = name;
//object property
var name3 = object.name;
//arry item
var name4 = items[0];


obj["proper1"]
//修改为
obj.proper1


//length属性
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//修改为
var len = arr.length;
for (var i = 0; i < len; i++) {
    console.log(arr[i]);
}

var values = (function () {
    var items = [];
    var i = 0;
    while (i < 1000000) {
        items.push(i++);
    }
    return items;
})();
function process(i) {
    return i + i;
}

for (var i = 0; i < values.length; i++) {
    process(values[i]);
}
//修改为
var len = values.length;
for (var i = len; i--;) {
    process(values[i]);
}


$scope.params = $("#rebuildNetworkWindow").widget().option("params");
$scope.bindedNetworks = $("#rebuildNetworkWindow").widget().option("bindedNetworks");
$scope.modifyNetwork = $("#rebuildNetworkWindow").widget().option("modifyNetwork");
$scope.mode = $("#rebuildNetworkWindow").widget().option("mode");

//修改后

var widget = $("#rebuildNetworkWindow").widget();
$scope.params = widget.option("params");
$scope.bindedNetworks = widget.option("bindedNetworks");
$scope.modifyNetwork = widget.option("modifyNetwork");
$scope.mode = widget.option("mode");


function setup() {
    var name = "saved";
    var button = $("#button");
    button.bind("click", function (evt) {
        alert(name);
    })
}

//修改后

var callback = function (evt) {
    alert(name);
};
function setup() {
    var name = "saved";
    var button = $("#button");
    button.bind("click", callback);
}
setup.prototype.callback = function (evt) {
    alert(name);
};

// Closure implementation
function Pixel(x, y) {
    this.x = x;
    this.y = y;
    this.getX = function () {
        return this.x;
    };
    this.getY = function () {
        return this.y;
    };
}

// Prototype implementation
function PixelP(x, y) {
    this.x = x;
    this.y = y;
}
PixelP.prototype.getX = function () {
    return this.x;
};
PixelP.prototype.getY = function () {
    return this.y;
};