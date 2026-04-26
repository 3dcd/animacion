(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1055,1875);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,739,984);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo43, new cjs.Rectangle(0,11,739,984), null);


(lib.Símbolo41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(13,1,1).p("ASxAAQAAHylgFfQlfFgnyAAQnxAAlflgQlglfAAnyQAAnxFglfQFflgHxAAQHyAAFfFgQFgFfAAHxg");
	this.shape.setTransform(120.05,120.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo41, new cjs.Rectangle(-6.5,-6.5,253.1,253.1), null);


(lib.Símbolo27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo27, new cjs.Rectangle(0,0,1055,1875), null);


(lib.Símbolo26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay+PCIAAxBMBPsAAAIAARBg");
	mask.setTransform(388.6,96.15);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo26, new cjs.Rectangle(267.1,83.3,510.1,109.00000000000001), null);


(lib.Símbolo25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay+RJIAAkOMBPsAAAIAAEOg");
	mask.setTransform(388.6,109.6552);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo25, new cjs.Rectangle(267.1,192.3,510.1,27), null);


(lib.Símbolo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4UMIAAleMAz5AAAIAAFeg");
	mask.setTransform(344.1239,129.1519);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo24, new cjs.Rectangle(356.2,223.3,332.09999999999997,35), null);


(lib.Símbolo23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAxhAVcIAA6FIcxAAIAAaFg");
	mask.setTransform(501.0048,137.1711);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo23, new cjs.Rectangle(817.9,107.4,184.10000000000002,166.99999999999997), null);


(lib.Símbolo22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAptAwyMAAAg0qMAmxAAAMAAAA0qg");
	mask.setTransform(514.9836,312.2111);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo22, new cjs.Rectangle(781.9,287.4,248.10000000000002,337), null);


(lib.Símbolo21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApjWEIAA28IYsAAIAAW8g");
	mask.setTransform(96.9041,141.1502);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo21, new cjs.Rectangle(35.7,135.4,158.10000000000002,146.9), null);


(lib.Símbolo20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgGvAhtIAAyRIRMAAIAASRg");
	mask.setTransform(66.9233,215.6543);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo20, new cjs.Rectangle(23.8,314.5,110.10000000000001,116.80000000000001), null);


(lib.Símbolo19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFzAwyIAAx9IRMAAIAAR9g");
	mask.setTransform(72.9233,312.2172);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo19, new cjs.Rectangle(35.8,509.5,110.10000000000001,115), null);


(lib.Símbolo18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAqeBBmMAAAgg/MAl2AAAMAAAAg/g");
	mask.setTransform(514.0278,419.7997);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo18, new cjs.Rectangle(785.9,628.5,242.19999999999993,211.10000000000002), null);


(lib.Símbolo17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAqKBSnMAAAggyMAmeAAAMAAAAgyg");
	mask.setTransform(515.9794,528.738);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo17, new cjs.Rectangle(785.8,847.7,246.20000000000005,209.79999999999995), null);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAqjBj0MAAAggqMAlsAAAMAAAAgqg");
	mask.setTransform(513.5268,638.7837);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(785.8,1068.6,241.29999999999995,209), null);


(lib.Símbolo15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAb/B+dMAAAgy8MA0hAAAMAAAAy8g");
	mask.setTransform(515.2016,809.3422);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo15, new cjs.Rectangle(694.4,1292.7,336.0000000000001,326), null);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EADkB+2MAAAgztMAyBAAAMAAAAztg");
	mask.setTransform(342.9442,811.8381);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(365.8,1292.7,320.09999999999997,331), null);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EABQCQaMAAAgh8MA1BAAAMAAAAh8g");
	mask.setTransform(347.25,924.2449);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(355.2,1631.3,339.3,217.20000000000005), null);


(lib.Símbolo12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgG0BNPIAAvxIRMAAIAAPxg");
	mask.setTransform(66.3994,494.2926);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(22.7,887.7,110.10000000000001,100.89999999999998), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgGHA9rIAAwYIQxAAIAAQYg");
	mask.setTransform(68.2372,394.7233);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(29.1,684.6,107.4,104.89999999999998), null);


(lib.Símbolo10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAihAseIAAwYIYtAAIAAQYg");
	mask.setTransform(378.9791,284.636);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(599.9,464.4,158.10000000000002,104.89999999999998), null);


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAlaA9SIAAwXISxAAIAAQXg");
	mask.setTransform(359.47,392.1904);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(598.9,679.7,120.10000000000002,104.69999999999993), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuIEaIAAjpIf3AAIAADpg");
	mask.setTransform(113.5269,28.2079);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(23.1,33.1,204,23.299999999999997), null);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAjGAEaIAAjpMAtAAAAIAADpg");
	mask.setTransform(512.5981,28.2079);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(737.2,33.1,288,23.299999999999997), null);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKnAF5IAAi+MCbBAAAIAAC+g");
	mask.setTransform(514.6366,37.6954);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(37.1,56.4,992.1999999999999,19.000000000000007), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAgMCQOMAAAgh9MAwBAAAMAAAAh9g");
	mask.setTransform(513.3291,922.9949);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(719.4,1628.8,307.30000000000007,217.20000000000005), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgZvCQBMAAAgh8MA1AAAAMAAAAh8g");
	mask.setTransform(174.475,921.7449);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(9.7,1626.3,339.3,217.20000000000005), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgYuB+iMAAAgzeMA1AAAAMAAAAzeg");
	mask.setTransform(181,809.7978);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(22.7,1290.2,339.3,329.39999999999986), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6+Bj3IhuhaIDcrQIEsymIGumkIM0n+IQQqoIjIycIpiruIgo6ZIigi0IhajwIgymQIHgiqIC0qoIB4iWIBangQA1g5A+g6QB9hzAyAAQAyAAMgBBIMVBBII6HjQI6HqAAAlIAGE4QACEigSB2QgUB7AgDeQAOBhAsDaQAHAmAdB6QAbB+AJBqQAcFAh4DjQhAB5htBfQhHA/h6BKQh/BNggAaQhBA3AAA7QAACjAMCSQARDCApDFQAWBrB7CgQB4CcC1CiQC9CoDMB/QDfCLDGA9QFYBqF0BdQC6AuB2AZIFeDwIAUDSMAAKAyog");
	mask.setTransform(389.475,640.075);

	// Símbolo_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(527.5,937.5,1,1,0,0,0,527.5,937.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(1,303.2,778,977), null);


// stage content:
(lib.demo_mapa_de_bit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [48];
	// timeline functions:
	this.frame_48 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();

		// =========================
		// LUPA: PNG transparente + aparición por alfa + demo idle + drag
		// =========================
		if (_this.__lupaDragInstalado) { return; }
		_this.__lupaDragInstalado = true;

		var marco = _this.marco;
		var cuerpo = _this.cuerpo;
		var mascara = cuerpo && cuerpo.mask;
		var stageRef = _this.stage;
		if (!marco || !cuerpo || !mascara || !stageRef) { return; }

		stageRef.enableMouseOver(10);
		createjs.Touch.enable(stageRef, true, false);
		stageRef.mouseMoveOutside = true;
		marco.cursor = "pointer";

		// Posiciones originales de Animate.
		var marcoInicio = { x: marco.x, y: marco.y };
		var mascaraInicio = { x: mascara.x, y: mascara.y };

		// Aparición elegante sin mover de golpe ni deformar.
		marco.alpha = 0;
		cuerpo.alpha = 0;

		createjs.Tween.get(cuerpo)
			.wait(250)
			.to({ alpha: 1 }, 650, createjs.Ease.quadOut);

		createjs.Tween.get(marco)
			.wait(250)
			.to({ alpha: 1 }, 650, createjs.Ease.quadOut)
			.call(iniciarIdle);

		var posDeseada = { x: marco.x, y: marco.y };
		var posSuave = { x: marco.x, y: marco.y };
		var offset = { x: 0, y: 0 };
		var arrastrando = false;
		var idleActivo = true;
		var radioToque = 280;

		function puntoEnRoot(evt) {
			return _this.globalToLocal(evt.stageX, evt.stageY);
		}

		function cercaDeLaLupa(p) {
			var dx = p.x - marco.x;
			var dy = p.y - marco.y;
			return (dx * dx + dy * dy) <= (radioToque * radioToque);
		}

		function limitar(v, min, max) {
			return Math.max(min, Math.min(max, v));
		}

		function moverA(x, y) {
			posDeseada.x = limitar(x, 120, 960);
			posDeseada.y = limitar(y, 120, 1800);
		}

		function iniciarIdle() {
			if (!idleActivo) { return; }

			var baseX = marcoInicio.x;
			var baseY = marcoInicio.y;

			function ciclo() {
				if (!idleActivo || arrastrando) { return; }

				createjs.Tween.get(posDeseada, { override: true })
					.wait(700)
					.to({ x: baseX + 125, y: baseY + 35 }, 1100, createjs.Ease.sineInOut)
					.wait(250)
					.to({ x: baseX - 75, y: baseY - 30 }, 1200, createjs.Ease.sineInOut)
					.wait(250)
					.to({ x: baseX + 35, y: baseY + 85 }, 1000, createjs.Ease.sineInOut)
					.wait(250)
					.to({ x: baseX, y: baseY }, 1100, createjs.Ease.sineInOut)
					.wait(900)
					.call(ciclo);
			}
			ciclo();
		}

		function cortarIdle() {
			idleActivo = false;
			createjs.Tween.removeTweens(posDeseada);
		}

		stageRef.on("stagemousedown", function(evt) {
			var p = puntoEnRoot(evt);
			if (!cercaDeLaLupa(p)) { return; }

			cortarIdle();
			arrastrando = true;

			offset.x = marco.x - p.x;
			offset.y = marco.y - p.y;

			posDeseada.x = marco.x;
			posDeseada.y = marco.y;
			posSuave.x = marco.x;
			posSuave.y = marco.y;
		});

		stageRef.on("stagemousemove", function(evt) {
			if (!arrastrando) { return; }
			var p = puntoEnRoot(evt);
			moverA(p.x + offset.x, p.y + offset.y);
		});

		stageRef.on("stagemouseup", function() {
			arrastrando = false;
		});

		createjs.Ticker.on("tick", function() {
			posSuave.x += (posDeseada.x - posSuave.x) * 0.30;
			posSuave.y += (posDeseada.y - posSuave.y) * 0.30;

			marco.x = posSuave.x;
			marco.y = posSuave.y;

			var dx = posSuave.x - marcoInicio.x;
			var dy = posSuave.y - marcoInicio.y;

			mascara.x = mascaraInicio.x + dx;
			mascara.y = mascaraInicio.y + dy;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

	// Capa_6
	this.marco = new lib.Símbolo41();
	this.marco.name = "marco";
	this.marco.setTransform(304.05,544.15,1.7588,1.7588,0,0,0,120,120.1);
	this.marco._off = true;

	this.timeline.addTween(cjs.Tween.get(this.marco).wait(48).to({_off:false},0).wait(1));

	// Capa_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_48 = new cjs.Graphics().p("EgQDAxWQpqpqAAtrQAAtsJqpqQJqppNqAAQNrAAJqJpQJqJqAANsQAANrpqJqQpqJqtrAAQtqAApqpqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_graphics_48,x:257.6481,y:377.5981}).wait(1));

	// Capa_3
	this.cuerpo = new lib.Símbolo43();
	this.cuerpo.name = "cuerpo";
	this.cuerpo.setTransform(411.5,811.5,1,1,0,0,0,380.5,506.5);
	this.cuerpo._off = true;

	var maskedShapeInstanceList = [this.cuerpo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.cuerpo).wait(48).to({_off:false},0).wait(1));

	// Capa_9
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(531.5,959.95,0.6499,0.6499,0,0,0,527.5,937.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1},28,cjs.Ease.get(1)).wait(5));

	// Capa_29
	this.instance_1 = new lib.Símbolo22();
	this.instance_1.setTransform(531.6,959.95,0.806,0.806,0,0,0,527.6,937.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({regX:527.5,scaleX:1,scaleY:1,x:531.5},28,cjs.Ease.get(1)).wait(16));

	// Capa_23
	this.instance_2 = new lib.Símbolo16();
	this.instance_2.setTransform(531.5,959.95,0.8108,0.8108,0,0,0,527.5,937.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1},28,cjs.Ease.get(1)).wait(12));

	// Capa_24
	this.instance_3 = new lib.Símbolo17();
	this.instance_3.setTransform(531.55,960.05,0.8105,0.8105,0,0,0,527.5,937.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({regY:937.2,scaleX:1,scaleY:1,x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(9));

	// Símbolo_18
	this.instance_4 = new lib.Símbolo18();
	this.instance_4.setTransform(531.55,960.15,0.8167,0.8167,0,0,0,527.5,937.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regY:937.2,scaleX:1,scaleY:1,x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(12));

	// Capa_10
	this.instance_5 = new lib.Símbolo3();
	this.instance_5.setTransform(41.4,959.05,1,1,0,0,0,527.5,937.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(12));

	// Capa_11
	this.instance_6 = new lib.Símbolo4();
	this.instance_6.setTransform(537.75,1308.05,1,1,0,0,0,527.5,937.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(17));

	// Capa_12
	this.instance_7 = new lib.Símbolo5();
	this.instance_7.setTransform(530.05,1338.05,1,1,0,0,0,527.5,937.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(20));

	// Capa_13
	this.instance_8 = new lib.Símbolo6();
	this.instance_8.setTransform(531.5,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(46));

	// Capa_14
	this.instance_9 = new lib.Símbolo7();
	this.instance_9.setTransform(531.5,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).wait(43));

	// Capa_15
	this.instance_10 = new lib.Símbolo8();
	this.instance_10.setTransform(531.5,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(39));

	// Capa_16
	this.instance_11 = new lib.Símbolo9();
	this.instance_11.setTransform(1132.65,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({x:531.5},17,cjs.Ease.get(1)).wait(28));

	// Capa_17
	this.instance_12 = new lib.Símbolo10();
	this.instance_12.setTransform(1131.65,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({x:531.5,alpha:1},18,cjs.Ease.get(1)).wait(30));

	// Capa_18
	this.instance_13 = new lib.Símbolo11();
	this.instance_13.setTransform(349.45,955,1,1,0,0,0,527.5,937.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).to({x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(14));

	// Capa_19
	this.instance_14 = new lib.Símbolo12();
	this.instance_14.setTransform(353.1,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({x:531.5},28,cjs.Ease.get(1)).wait(17));

	// Capa_20
	this.instance_15 = new lib.Símbolo13();
	this.instance_15.setTransform(531.5,1316.05,1,1,0,0,0,527.5,937.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({y:959.95},28,cjs.Ease.get(1)).wait(20));

	// Capa_21
	this.instance_16 = new lib.Símbolo14();
	this.instance_16.setTransform(531.55,959.95,0.6661,0.6661,0,0,0,527.5,937.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:531.5},28,cjs.Ease.get(1)).wait(18));

	// Capa_22
	this.instance_17 = new lib.Símbolo15();
	this.instance_17.setTransform(967.6,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({x:531.5},28,cjs.Ease.get(1)).wait(15));

	// Capa_26
	this.instance_18 = new lib.Símbolo19();
	this.instance_18.setTransform(325.4,959.9,1,1,0,0,0,527.5,937.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({_off:false},0).to({x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(16));

	// Capa_27
	this.instance_19 = new lib.Símbolo20();
	this.instance_19.setTransform(309.45,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({x:531.5,alpha:1},28,cjs.Ease.get(1)).wait(20));

	// Capa_28
	this.instance_20 = new lib.Símbolo21();
	this.instance_20.setTransform(277.45,965,1,1,0,0,0,527.5,937.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({_off:false},0).to({x:531.5,y:959.95},28,cjs.Ease.get(1)).wait(19));

	// Capa_30
	this.instance_21 = new lib.Símbolo23();
	this.instance_21.setTransform(887.6,959.95,1,1,0,0,0,527.5,937.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(7).to({_off:false},0).to({x:531.5},28,cjs.Ease.get(1)).wait(14));

	// Capa_31
	this.instance_22 = new lib.Símbolo24();
	this.instance_22.setTransform(531.35,959.9,1.5893,1.5893,0,0,0,527.4,937.2);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(7).to({_off:false},0).to({regX:527.5,scaleX:1,scaleY:1,x:531.5,y:959.95,alpha:1},28,cjs.Ease.get(1)).wait(14));

	// Capa_32
	this.instance_23 = new lib.Símbolo25();
	this.instance_23.setTransform(531.5,960.05,0.2471,1,0,0,0,527.5,937.3);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({_off:false},0).to({regY:937.2,scaleX:1,y:959.95,alpha:1},28,cjs.Ease.get(1)).wait(17));

	// Capa_33
	this.instance_24 = new lib.Símbolo26();
	this.instance_24.setTransform(531.55,959.95,1.4076,1.4076,0,0,0,527.5,937.2);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:531.5,alpha:1},28,cjs.Ease.get(1)).wait(20));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFAF4").s().p("EhYICauMAAAk1bMCwRAAAMAAAE1bg");
	this.shape.setTransform(544.175,962.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(49));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(53.9,430.5,1606.3,2019.9);
// library properties:
lib.properties = {
	id: '1C8C71D27B8B42A4A7CE3C624A800C20',
	width: 1080,
	height: 1920,
	fps: 60,
	color: "#FCFAF3",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits4.png", id:"Mapadebits4"},
		{src:"images/Mapadebits5.png", id:"Mapadebits5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1C8C71D27B8B42A4A7CE3C624A800C20'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;