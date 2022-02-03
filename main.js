
var canvas = new fabric.Canvas('myCanvas');
block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
	fabric.Image.FormURL(get_image, function (img) {
		block_image_object = img
		block_image_object.scaleTowitdth(block_image_width)
		block_image_object.scaleToheight(block_image_height)
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '82') window.addEventListener("keedown", my_keydown)
	new_image('r.png')
	console.log("r")
}

if (keyPressed == '71')  window.addEventListener("keedown", my_keydown)
{
	block_x = 200;
	new_image('g.png')
}

if (keyPressed == '89') window.addEventListener("keedown", my_keydown)
 {
	block_x = 350;
	new_image('y.png')
	console.log("y")
}
if (keyPressed == '80') window.addEventListener("keedown", my_keydown)
{
	block_x = 600;
	new_image('p.png')
	console.log("p")
}
if (keyPressed == '66') window.addEventListener("keedown", my_keydown)
 {
	block_x = 700;
	new_image('b.png')
	console.log("b")
}



