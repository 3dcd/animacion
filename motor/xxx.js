(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"xxx_atlas_1", frames: [[0,0,1345,899]]}
];


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



(lib.Sintítulo1 = function() {
	this.initialize(ss["xxx_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Layer1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.instance = new lib.Sintítulo1();
	this.instance.setTransform(97,56,0.6889,0.6889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Layer1, new cjs.Rectangle(97,56,926.6,619.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egm6gm6MBN1AAAMAAABN1MhN1AAAg");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Egm6Am7MAAAhN1MBN1AAAMAAABN1g");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.1,-250,500.2,500.1);


(lib.Símbolo42 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgC3ArLQiSg4hOhOQghghgggxQgUgfgig6IgohHIhpgyQgsgWgXgNQgkgVgZgVQixgQihhEQhmgqhDg6QhRhGgXhXQgLgnAAg0QAAgVADhIQANkVg8kOQgchxgKg5QgShhAJhKQAKhbA2hGQA6hMBSgMQgWguhkg8Qheg5gRg2QgGgUAAgbIAEgwQAejzAniAQA8jJB4h0IAkgiQAUgUAMgSQAMgTAKgcIARgyQAqh7BhhrQBXhhB7hMQBng/CMg4QBWgjCqg5QBlghAzgOQBVgWBGgDQBLgEBbARQBAALBkAdQC0AzFkByQFBBiDeAnQBhASDFAcQCsAdBzApQBVAfBkA0QA6AeB3BFQBFApAiAcQA1AsAWAyQAXA3gJBGQgGAvgbBSQghBhgIAiQgRBJALA5QAIApAiBFQAlBKAJAjQAgB9hWCEQhJBuiGBZQhKAxgbAZQgzAvgLA1QgGAdAFAmQADAVAMAuQBAD7AeEFQAJBMABAzQAABGgNA4QgMAwgcA4QgQAigmBBQhhCog5BPQheCEhlBQQhNA+hvA2QhCAhiJA4QhkApg6APQhaAWhIgNIhQgVQgwgNghACQgZACgfAKQgPAFgnAQQjlBbj6ACIgLAAQj1AAjghVg");
	mask.setTransform(252.8688,284.8023);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo42, new cjs.Rectangle(98.1,159,407.70000000000005,410.6), null);


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

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAgDAT9QgwgZgjgyQgggtgRg6QgSg8ABg7QABg/AUg3QAmhlBlhKQBXhBB5gjQBIgVCZgaQCVgbBLgWIC3gUQBUgTBSALQBXALBEAsQBHAuAnBNQAnBQgNBQQgGAigTAwQgUA2gWAiQgcAtgmAXQgiAWhCAMQhUAQgWAIQgUAIgdAOIgvAZQgyAZhDAWQgoAMhRAWQiZAohOAPQiBAahqACIgMAAQhjAAg6gfg");
	mask.setTransform(336.1969,130.8307);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo41, new cjs.Rectangle(526.4,176.8,146,84.89999999999998), null);


(lib.Símbolo40 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EAy5AN/IgbgDIg5gIQgOgCgGgEQgGgDgGgGIgKgLQgQgJgIgHQgQgOABgXQABgLgFgPIgLgYQgFgOACgMQABgPALgHQAGgDAMgBQBYgLBOArQAYAMALAQQALAOAIAkQAEARABAKQABAPgFALQgLAXgfAFIgRACIgJgBg");
	mask.setTransform(332.8833,89.5667);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo40, new cjs.Rectangle(640.2,159.7,25.59999999999991,19.5), null);


(lib.Símbolo39 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EA7qAU9Qh5gbjZhLQjmhQhqgbQiCgdhAgRQhvgehIgsIhNgsQgtgWglAHIgZAHQgPADgKgBQgbgDgOgcQgNgbAHgdQAFgWARgeIAbgxQAWgwgGg4QgGg3gfgrIgQgWQgKgMgFgKQgLgYgBgoIgBhDQgCgUgOgtQgLgqgBgYQgBgjAVgdQAXgeAgAEIB4AXQBiAYEMA5IC7AnQBQARAmAHQBCALA1ABQAHAcAcAWQASAPAlATQAPAGAFABQAIAAAJgFIAQgJQAmgWAvAGQAvAGAfAfQANAMAGACQAFACAKAAQBwgDASABQBJACA0ASQBBAWApAzQAtA3gHA9QgFAlgyBZQgrBMAKAxQACALAIAVQAJAWACAKQAHAcgFAjQgEAZgNAlQgXBFggBDQgXAvgUASQghAfg5AEIgQABQgmAAgxgMg");
	mask.setTransform(419.1726,135.2523);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo39, new cjs.Rectangle(665.9,152.9,172.5,117.6), null);


(lib.Símbolo38 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EAn4AerQgzgSgsgzQgcghgohFQgTghgFgNQgIgUAOAEQg4gXgcgRQgsgagVgjQgPgZgIgiQgThZApheQAnhXBNg/QA8gyA1AAQA0AAA5AvIAtApQAcAaASANQAyAiA7ALIA1AGQAgAEATAGQAjAMAwAoQA5AwAVAMQATALArAQQAoAQAUAMQAWAMADAPQADAKgFAPIgJAYQgEALgBASIgCAeQgGAngaAIQgLAEgTgEQgXgEgIAAQgVACgSAUQgLALgRAcQg2BXhOAvQhNAuh0ALQgVACgTAAQgtAAgfgLg");
	mask.setTransform(317.2563,197.371);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo38, new cjs.Rectangle(536.6,316.1,97.89999999999998,78.69999999999999), null);


(lib.Símbolo37 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EArsAlUQgSgFgPgMQgPgNgIgSIgIgYQgEgPgGgIQgIgMgRgJQgHgEgXgJQhNggg2g/Qg4hCgMhOQgDgaACgSQAFgeAYgdQAPgTAhgdQAygsA+gPQAqgKA9ADQBWAEBiAwQAvAXAZAaQAPAPANAYIAWAtQAaA4AEAhQAGAngMAyQgVBUg2AeQgLAHgUAHIggAMQgcAMgWAWIgQASQgKAKgHAGQgPALgTAEQgJACgIAAQgKAAgLgDg");
	mask.setTransform(309.725,239.0889);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo37, new cjs.Rectangle(556.4,419.3,63.10000000000002,58.89999999999998), null);


(lib.Símbolo36 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EAlQAkJQhYggg1hCQgbghgHgeQgJgpAVgdQAHgIAOgLIAXgTQALgLAGgMQAGgPgEgNQgFgLgNgLQgXgRgqgSQg2gWgOgIQgugYgCgjQAAgUAQgSQANgPAWgKQALgFBagbQA+gSAbgfIAOgUIAOgUQAhgrA4gOQA4gPAxAWQAIAEAgASQAZAOAQAFQAVAFAdgCIAygHQBegPBEASQApALAgAYQAjAZASAiQALAUABAVQABAXgOAOQgNAOgbAEQgpAFhGgWQhOgZghAAQgQAAgJAEQgKAEgKAPIgRAXQgPAOgsAKQgqAJgOARQgJAJgLAWIgPASQgLALgEAGQgXAgAHAwQAEAcAWAzIAyBzIAKAdQAFARgDANQgCAQgMANQgNAOgOAAIgWABQhQAAhIgbg");
	mask.setTransform(302.9259,233.9735);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo36, new cjs.Rectangle(511.5,394,94.39999999999998,74), null);


(lib.Símbolo35 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EApDAorQh7gkhFgnQhlg4gvhUQgSgiAHgXQAHgXAagJQARgHAdAAQBsAAB/BFQAqAXA/ApIBoBEQAXANAKAJQAQAOAIAPQAIASgHAMQgDAGgLAFQgSAKgwAJQg3AKgnAPQgRgOgngMg");
	mask.setTransform(286.0508,262.925);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo35, new cjs.Rectangle(513.5,492.1,58.60000000000002,33.799999999999955), null);


(lib.Símbolo34 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EAreAoGQgbgPgTgNQgegVgmgkQgOgNgXgKIgqgQQhigkg0guQgZgWgKgVQgOgdAKgZQAHgRAbgYQAZgVAOgEQAJgCATAAQATAAAIgCQAKgCAMgHIAVgMQAbgNAiADQAeABAfANQAYAKAhASIA2AfQAbAOBIAdQA/AZAiAVQA1AggDAnQAAAPgLAQQgHAKgQAQIhYBZQgRARgIAHQgOAMgOAFQgNAEgOAAQgeAAgkgUg");
	mask.setTransform(305.0306,258.6144);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo34, new cjs.Rectangle(544.7,474.8,65.39999999999998,42.49999999999994), null);


(lib.Símbolo33 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EAwVApIQgfgKg6ghIgFgCQgwgRgtgVQgogSgYgRQghgXgQgdQgHgLAAgJQgBgKAMgTIAUgeQANgQANgJQAcgUAsACQAgABAvAOQCHAqCeBEQArARASARQAgAdgFAiQgEAggjATQgXANgqAEQgoAFg0AAQgnAAgvgDg");
	mask.setTransform(337.6031,263.5158);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo33, new cjs.Rectangle(616.2,497.5,59,29.600000000000023), null);


(lib.Símbolo32 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EAqwAtKQhhgcg+hEQgTgVgng4QgjgzgZgYIgdgbQgQgQgIgOQgPgbgBgrQgBgqAMgcQAQgmAjgLQAIgCARgCQARgCAJgDQANgEARgNIAdgWQAbgSAtgJIBOgLIA1gLQAggGAWAAQA9gCBBAjQAyAbA6A1QAuApAOAiQAIAUAFAwQAEAsAKAWQAFAKASAbQAPAWAEAPQAHAVgCAVQgCAXgLAQQgYAkg8AEIgcABQgRACgKAGQgMAHgNASQgRAWgGAGQgTASgtAIQgmAIgmAAQg4AAg3gQg");
	mask.setTransform(318.7641,290.564);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo32, new cjs.Rectangle(557.8,519.9,79.80000000000007,61.30000000000007), null);


(lib.Símbolo31 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EAw5ArYQgYgJgNgPQgQgUAGgVIAEgPIgDgPQgIgcAPgZQAZgoAzAPQAuAMAeAmQAaAigFAiQgDAUgPAQQgOAQgVAHQgPAFgSAAQgWAAgagJg");
	mask.setTransform(326.3897,278.5194);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo31, new cjs.Rectangle(634.4,538.4,18.399999999999977,18.700000000000045), null);


(lib.Símbolo30 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EA5tAsZIgPgGQhBgbhEgOQg9gMgfgHQglgJg1gUIhZgiIhygkQhFgVgrgTQgqgSgMgaQgIgRADgeQAGg2AXglQAdgtAtgMQAWgGAeADQATACAiAIQBDAPBQAiQA0AWBbAsIB1A4QBCAiAoAkQAUASAFAPQADALgBAXIgEBRQgCAqgWAGIgGABIgKgBg");
	mask.setTransform(373.7611,284.2194);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo30, new cjs.Rectangle(672.6,523.5,74.89999999999998,45), null);


(lib.Símbolo29 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EA9sAubQgUgFgZgMIgrgWIhig9Qg9gmg1gIQg1gIgxgYQgwgZgmglQgighgEgfQgDgTALgSQALgSASgCQAKgCAVAGQBNAXBJAbQgJgmAAgXQgBgiAPgXQAQgYAtgVQAigQAWADQARADASANQAJAHAVAUQA4A3A8AeIAgAQQAUAKAMAHQAnAZAYAtQAXApAHAyQAHAygMAlQgPAvgmAUQgYAOgcAAQgUAAgWgHg");
	mask.setTransform(410.229,297.7541);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo29, new cjs.Rectangle(752.4,546.6,68.10000000000002,48.89999999999998), null);


(lib.Símbolo28 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EA66ArVQgOgEgZgLQglgPgMgRQgLgRACgXQACgWAMgTQAJgPASgSIAfgeQATgUAkgtQAjgtAUgUQAtgtA2gZIAUgJQAMgGAHgGQALgIANgTQAQgYAGgGQAPgSApgZQAqgZAYgGQAigIAgAJQAaAHANAQQALAOABAUQABATgIASQgLAXgjAjQgnAogXASQglAdgjAMIgSAFQgLAEgGAFQgTANgLAqQgIAegCAPQgEAaAGAUIAKAeQAGASgDANQgHAcg1AOQg7ARhlAOIgNABQgNAAgPgEg");
	mask.setTransform(427.8056,277.725);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo28, new cjs.Rectangle(795.1,500.4,60.5,55.10000000000002), null);


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

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EA+YAqMQgbgMgLgOQgJgKgHgVQgJgcgGggQgDgLADgIQACgDAGgHQAVgUAPgHQAQgGAlAAQA7ABAggKIAagKQAPgFAKgCQAagEAuAMIBFAUQAuANAXATQAWASAMAaQALAbgEAbQgDAcgTAYQgSAWgbAIQgYAIgggEIg5gMQgggGgMANIg1AJQhLgLhFggg");
	mask.setTransform(441.4172,274.3);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo27, new cjs.Rectangle(833.6,523.7,49.299999999999955,24.899999999999977), null);


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
	mask.graphics.p("EBCxApHQgRgDgbgJQg8gUgggSQgUgKgOgOQgVgUgHgdQgHgeAJgbQAFgNAAgHQAAgHgGgPIgYgyQgMgagEgRQgFgZAIgSQAFgNAQgOIAagWIAYgYQAPgPALgHQAJgGAPgGIAYgLQAfgQgDgXQADgDAPgKQAygfAPg5IAHgaQAEgOAJgHQAVgRAtARQA5AUA+AbQAYALAHAKQAJANgDAUQgBAKgHAaQgLAmgDBBQgFBNgEAaQgJA2gfBJQgOAigPAPIgNAMQgJAHgEAFQgFAHgMAWQgSAigZAaQgSAUgRAHQgNAFgPAAIgPgBg");
	mask.setTransform(453.7772,263.1807);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo26, new cjs.Rectangle(857.2,459.1,50.39999999999998,67.29999999999995), null);


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
	mask.graphics.p("EBBwAlPQhwgBg8gnQgVgNgggfQgRgRgIgMQgMgRgBgQQgCgUARgjIAkhIIAXgsQAPgXAQgPQBCg+BAAXIA6AUQAiAMAXALQBAAgAeAsQARAbAEAeQAFAhgMAbQgJAVgdAgIg3A9QgVAagRAIQgTAKgmAAIgHAAg");
	mask.setTransform(441.1633,238.329);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo25, new cjs.Rectangle(835.7,436.6,46.69999999999993,40.099999999999966), null);


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
	mask.graphics.p("EBAgAhwQgOgQgEgTQgGgXAKgrQACgLAEgHQAFgIALgFQAUgLAZAAQAYABAVALQAoAVAWAwQAIARgBAMQgBATgSAOQgSAPgeAEQgSACgyABQgTgHgNgPg");
	mask.setTransform(429.5056,218.175);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo24, new cjs.Rectangle(840.3,419.9,18.700000000000045,16.5), null);


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
	mask.graphics.p("EBFtAkPQg3gFhQgcIiEguQgigJgNgNQgLgLgJgiIgZhlQgMgwAEgZQAIgoApgQQAigNApAJQAeAGA4AdQBlAzBpAgIBTAaQAvAQAgAVQAqAbgEAfQgDAUgWAPQgMAIgaANQgOAIguAlQgkAegcAHQgQAEgWAAIgYgBg");
	mask.setTransform(470.9965,232.0363);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo23, new cjs.Rectangle(880.3,425.6,61.700000000000045,38.5), null);


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
	mask.graphics.p("EA89AgxQgJgBgQgEIiTgpQgeAAgigOQgVgJgmgVQgugagQgVQgNgRgDgTQgEgWAKgQIhchMQgUgQgFgKQgKgSAFghQAGgogCgNIgLgiQgGgUADgNQADgMARgUQApgzAMhAIAGgpQAEgZAEgPQANgxAjgPIAXgIQAOgEAHgHQAHgGAEgLIAHgTQARgwAogmQAmgkAygSQBbgiBzAXIAiAHQAUAEAOgBQATAAAWgIIAngQIHJjJQAUgJAKACQAIACAOALQAuAoAWAVQAlAkAWAhQAbAoALArQAMAwgLAqQgQBFhJA4QgZAUgoAXIhEAnQgMAHgEAGQgFAHAAATQgBBLghBCQgQAggtBAQhTBxgrAzQhLBXhLA1QgxAjgvAMQg4APgrgWQgHAXgGAMQgKASgQAGQgHADgJAAIgIgBg");
	mask.setTransform(477.795,209.8058);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo22, new cjs.Rectangle(817.9,299.1,137.70000000000005,120.5), null);


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
	mask.graphics.p("EBHIAiBIgegGQghgGgjABQglAEgTABQgmABgtgMQgegIgzgSQgagJgOgHQgWgLgMgPQgZgdAAg1QAAgnAOgiQAPgkAcgWQANgLAfgQQAfgPANgMQAMgJAUgZQAUgXAMgKQASgOAbgJQAQgFAhgHIBmgTQA4gMAeADQAjADA/AbQALATAdAPIAwAbQAVAPAMAXQANAYABAaQABAagKAYQgLAZgUAQQgMAKgVALIgiATQgtAdgjA4IgRAbQgKAQgJAKQgYAdgdAGIgMAAIgTgBg");
	mask.setTransform(485.9294,217.8444);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo21, new cjs.Rectangle(899.4,387.3,72.5,48.39999999999998), null);


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
	mask.graphics.p("EBKsAe4Ig1gOQgbgHgLgIQgHgGgHgJIgMgRQgbggg1gYQg7gZghg3QgMgWgBgPQAAgUARgaQASgbAUgLIAZgNQAOgHAFgKQAIgPgHgUQgCgHgPgcQgPgdACgaQACgQAQgfIAagyQAMgXAJgMQAOgSARgGQAZgJApAOQBbAgA6A/QAfAhATAoQATAqAEAsQABARgBAiQgBAiABASQACAYAOA6QANA0AAAfQAAAVgHANQgIANgSANQgbATgaANQgdAQgXABIgCAAQgNAAgcgHg");
	mask.setTransform(496.0759,198.3016);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo20, new cjs.Rectangle(943.9,332.7,48.30000000000007,63.900000000000034), null);


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
	mask.graphics.p("EBN7AavQhJgDhHgTQgmgKgTgOQgJgHgNgPIgWgYQgdgbgngGQgQgCgeAAQghABgOgBQgZgDgTgMQgVgPgFgVQgCgKACgPIADgaQABgTgJgeQgNgogBgJQgHglANgiQAOgkAfgPQANgGAWgFQAcgGAIgDQAQgGATgMIAhgUQAwgdA2gOQA2gOA4ACQAoABAUAOQAQALASAdQAZAqACAaQADAbgMAnQgUBCgiAnQgCANAQAQQAKAKAXAUQAeAeAQApQAQApgDAqQgCAdgNAMQgOAOghAAIgJAAg");
	mask.setTransform(505.7993,171.1361);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo19, new cjs.Rectangle(954.7,286,56.89999999999998,56.30000000000001), null);


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
	mask.graphics.p("EBDSAW8QlqhikkhoQhIgZgpgTQg9gcgrghQhVhDgrhqQgphpAMhtQAMhrA+hgQA7hdBdg9QAwghAxgQQBIgXBdAJQA8AFBqAYIJsCMQCoAlBaAXQCPAkBwAmQAaAJAKALQALANAAAWQAAAOgHAZIhvGZQgHAagFANQgJAVgMAOQgLANgSALIgiARIkdCFQhEAggkALQg8ASgoAFQgUACgTAAQgiAAgegIg");
	mask.setTransform(511.1761,147.6256);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo18, new cjs.Rectangle(838.7,182.8,183.69999999999993,112.5), null);


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
	mask.graphics.p("EBBqAY+QgsgDgZgTQgLgHgPgRQgQgSgIgHQgRgNgdgNQgggNgQgIQgmgRgPgbQgHgMgFgZQgPhHAUgyQAOgmAdgJQAPgEAdgPQAYgMAOgCQAcgDAyAHQDtAfCWBYQAqAZANAaQAJASgEAUQgEAUgQAKQgHAEgLACIgUACQgcADgeALQgbALgxAgIhpBGQgdASgPAEQgJACgLAAIgQgBg");
	mask.setTransform(458.051,159.9231);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo17, new cjs.Rectangle(849.8,279.7,66.30000000000007,40.19999999999999), null);


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
	mask.graphics.p("EA3XAcXQgugGhTgVIiSglQgtgKgYgNQgKgGgSgNIgcgSQg1gghjADIgZABQgOgBgKgEQgUgHgdghQgdghgUgHQgZgJgxAPIh1AhQgsANgcABQgoABgYgWQgTgRgKglQgJgrgHgUQgRgxgtgfQgugfg0ADIglADQgVACgPgEQgigJgSgnQgPgggBgsQgChjAkhbQAHgQACgKQADgOgGgLQgDgHgKgHIgQgNQgWgWAIgkQAIgjAcgVQAVgQAlgMIA/gTQAqgPBKgrQBLgtAogOQAlgOAwgHQAggFA4gFQAtgEAXAAQAmgBAdAFQAlAHAuAUIBPAlQDRBkEwBGQCwAoFmBBQA4AMAhAOQAuAVAUAkQAUAlgIA0QgFAlgXA1IglBcQgYA1gcAfQgZAcgXAKQgLAFgSAEIgfAGQgeAFgjAOQgWAIgqASQgeANgRAMQgYAQgKAVQgIASAAAkQAAAngFAPQgKAjgkAYQgfAUgqAHQgcAFggAAQghAAglgGg");
	mask.setTransform(424.2373,182.0564);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(640.8,250.2,207.70000000000005,113.90000000000003), null);


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
	mask.graphics.p("EA7mAd9QgvgRgtgaQgMgHgGgIIgHgTQgFgLgIgCIgKABQgxAKg7ACQgWAAgKgDQgOgDgUgMQgugfgSg1QgHgUgJgCQgFgCgKADIgwANQgcAIgQACQgZADgTgFQgUgGgWgTQgNgLgRgTIgdggQgIgFgPACQgRAEgIABQgIABgNgCIgUgCQgiACgRgDQgggGgHgWIAAgUQgBgPgMgMQgNgLgGgQQgGgUAIgMQAKgPAeAEQANABAEgCIAGgFQAFgFAFgCQAQgLAVAAQAVABAPANIAMAPIAKAQQAbAlArAMQAqANArgOIAQgEQAHgBAQADQARADALgBIBDAxQAhAYAVAKQAfAPAcgBIAYgDQAOgDAJABQAQABAaANIAuAZQAcAPATAIQA5AYAtgIIAjgJQAWgGAOABQAYAAAWAPQAVAOAMAWQAXAqgKA3QgCALgDAFQgEAFgMAJQgbAQgPAEQgNAFgRAAQgeAAgngPg");
	mask.setTransform(397.9515,193.1618);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo15, new cjs.Rectangle(693.4,341.2,102.5,45.10000000000002), null);


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
	mask.graphics.p("EAw1AbqQgagDgNgFQgKgDgOgJIgYgPQgbgRg7gSQg8gSgagPQgYgOABgPQAAgIAIgLQAbglAegKQATgOAYgGQADgMAUgNQBOgzA8gFQAwgFAzAVQAkAOAfAYQA1ArACAwQACAuguAvQgzA2g5AIQgKABgNAAQgPAAgSgCg");
	mask.setTransform(333.3524,177.2192);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(617.7,324.2,49,30.30000000000001), null);


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
	mask.graphics.p("EAvaAaLQg5gagegKIhWgdQgzgSgegWQgQgMgHgLQgJgRAIgOQAKgSAeABQAiAAAzAUQAtASBWAsQAnASAUASQgBAMAKAZQAFAHgFAJQgEAJgJADIgHAAQgLAAgPgHg");
	mask.setTransform(308.2566,168.2454);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(583.5,318.1,33,18.399999999999977), null);


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
	mask.graphics.p("EAwGAZIQgNgCgUgGQgagJgLgDQgjgIg7gcQhCgegcgJQgZgIgrgIIhEgOQhegYhVg5QgpgbgOgbQgKgRgBgUQAAgVAMgPQAMgPAcgKQAYgJAugKQA2gMAZgEQAsgHAkADQBPAEBfA1QAeAQAxAgIBPAxIAtAZQAZAQARAOQAvAmAKAuQAGAbgJAZQgJAagVAOQgVAOgkAAQgNAAgPgCg");
	mask.setTransform(319.82,160.9692);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(563.8,282,75.90000000000009,40), null);


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
	mask.graphics.p("EAvvAW9QgegGgPgXQgHgMgBgPQAAgOAHgMQAHgMASgKQAbgQAugHQAxgIAcAPQATAJAIATQAJAUgIARQgFAKgSAPQgPALgGAEQgHADgOAEQgkALgeAAQgOAAgMgDg");
	mask.setTransform(321.6064,147.1723);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(621.9,281.1,21.300000000000068,13.299999999999955), null);


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
	mask.graphics.p("EAnBAVtIgjgHQgUgFgNgJQgQgKgIgRQgJgSAFgRQAEgLALgNQAegiA1gWQAggNBDgSQCdgnCkg4QCDgsB6gyQArgSAYACQAWADAdATQAtAfgHAhQgDALgQAVQgOAUAAANIACAPQABAJgCAFQgDAFgHAFQgnAchIAZQhgAhgWAKIg3AcQghARgXAHIgpAHQgaAFgQAJQhKArhnAHQgUABgWAAQhAAAhTgLg");
	mask.setTransform(332.9031,140.022);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(572.9,239,92.89999999999998,41.10000000000002), null);


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
	mask.graphics.p("EAzDAS0QgdgTABgXQABgUAXgPIANgIQALgEAWgEQAigGASAAQAeAAAVAJQAYALAIAVQAEALgCAMQgCAMgIAHQgHAHgOAEQgvAQgcADIgRABQghAAgXgPg");
	mask.setTransform(344.7058,121.919);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(668.7,232.5,20.699999999999932,11.400000000000006), null);


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
	mask.graphics.p("EA0+AqVIgPgKQgIgEgHgDQgGgCgTgBQhAgDg+gZQg9gZgygpQg2glhWgeQhkgfgxgQQhGgZiIg9IkhiCQhqgvg5ghQhig3gDhBQgBgOAGghQAFgegEgRQgGgdAAg4QAAg6gFgaQgFgZgEgIQgJgRgYgXQgQgNgFgIQgEgFgIgTQgPgogEgaQgFgnAQgcQAFgKAHgBIACgQQhDhKgZggQgMgOgFgLQgDgJgCgSIgIg9QgGgoAEgWQAHgdAegmQAvg5AqgXQAcgQAdgDQAggEAbAKIAOAEQAIADAFgCQAJgCAFgJQAFgJAAgKQgBgIgEgKIgHgSQgLgdAAgfQABggALgcQAIgVAMgMQAXgWAmACQAQAAAtAKQAeAJAngSQANgHASgLIAegTQAigVA+gaQAugUAegIQAqgKAkADQAnAEALAXQADAHACAUQADAWAFARQAFAOAGAIQAHAIAPAIQAcANBPAOQBEALAhAYIAeAUQARALANgCQApABAUAEQAiAFAXANQASAJAgAaQAXAPAhAOQASAIAqANQAYAJANgBQAHAAAVgHQARgFALACQAKACAKAIIASAPQATAPAcAMQASAIAhAKQAqANAYAGQAlAHAfgBQAYgBAygMQAwgKAZAAQAkgBAmAMQAiAKAhAOQAhAOASAQQANANATAbQAPAVAHAOQAJAVgCATQgBALgHARQgJAVgBAIQgCAEACAEQABADAHADIAgAMQATAHAMAHQAkASAKAeQAGAPgCAgQgFBLgMApQgEAMgIgBIAfAZQAQAQABAYQACAUgHAXQgGAVgNAJQgHAGgOAFIhAAWQgIADgDAEQgEAFACAJQAEAOATAXQAVAWADAPIADAXQACAOAFAIQAEAEAMAIIAgAVQAPAKAGAGQAJAJgBALQAMAYAEANQAIAVgBATQAAAUgQApQgPAlgJASQgPAfgSAUQgNAOgdAZQgeAYgMAOIgZAfQgOARgOAHQgNAGgXAGIg2AMQgXAFgMAEQgSAHgMAKQgLALgFAOIgEAGQgDADgKACQgJAAgDAHQgPAMgLAZIgUArQgXAuguAYIgeAPQgTAIgKAGQgNAIgVARQgXATgLAGQgoAZgxABQgxAAgngZg");
	mask.setTransform(421.9516,273.4);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(607,346.4,236.89999999999998,200.39999999999998), null);


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
	mask.graphics.p("EA9FAd5QgSgHgIgiQgMgyAAgXQAAgsAZgZIAXgTQAOgLAbggQAJgMgBgIQAHABAFgEIAIgHQAIgHASgHQAagKAKgCQAWgDAQAIQAPAHAHASQAHARgCASQgDAcgaAlQgIAMgFAFQgLAMgcASQgSAPgPAcQgJAQgPAjQgKAVgMAHQgHADgPABIgIAAQgLAAgFgCg");
	mask.setTransform(411.5472,191.5125);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(798.7,352.7,24.399999999999977,30.30000000000001), null);


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
	mask.graphics.p("EBCtAsyQg5gPhJgkQg0gZgWgZQgOgSgLgaQgHgQgJggIguieQgSg/AAgiQABggAUg6ICVm9QgDgRAKgTQAKgSASgNQAPgKAWgJIAngQQCGg0BdhuQAQgSAFgFQANgNAMgFQAQgHAXACQA1AEA3AmQAjAZA3A4QB7B/A1A8QAcAhAPAWQAVAgAJAeQAJAfgBAoQgBAZgHAwQgVCagZBRQgnB/hIBMQgXAYggAaIg8AtIiLBjQg4AoggASQgyAcguAJQgZAGgcAAQgnAAgsgLg");
	mask.setTransform(500.8053,287.6562);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(896.9,445,104.70000000000005,130.29999999999995), null);


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
	mask.graphics.p("EBFLAvRQgdgNg8glQkyi+lGg4QgtgHgQgFQgigIgWgPQgbgSgNgdQgOgfALgbQAGgPAQgRQAiglAvgUQANgGAHAAQAKgBASAIQBSAlBbALQAsAFAWgNQAHgEAIgIIAQgNQAngdBOASQA5AMBEAaQAqARBNAjQB9A5CPBGQAdANAGARQANAlACAmQACAZgEAnQgFBHgpAoQgeAfgsAHQgKABgLAAQgjAAgpgQg");
	mask.setTransform(464.65,304.1491);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(818.8,553.5,110.5,54.799999999999955), null);


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
	mask.graphics.p("EBAnAy8QhGgHhMghQhCghgjgNQgwgThRgQQhrgVgYgGQhJgTglgfQgtgngOhAQgMg/AWg7QAWg3AvgsQAsgpA7gaIAcgNQAQgIAJgKQAHgIAJgUQAJgUAHgJQAXgZAsACQAPABAVAFIAjAKQAVAGAoAIQArAIATAFQAxAOA5AYQAoASA9AgQDJBoDCBzQAoAZgEBCQgEBAgpAoQgfAehBAUQheAbgNAGQgRAIgfASQggASgQAIQgyAWg9AAQgRAAgSgCg");
	mask.setTransform(462.4975,326.2127);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(808,582.2,117,70.29999999999995), null);


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
	mask.graphics.p("EA5LAyoQgngDgvgRQgcgKg3gYQiahFhMgkQh+g+hgg6IhGgrQgpgYgfgPQg6gciBgmQh+glg9gfQhMgmgWgyQgPgkAFg6QAIhNAihIQAhhIA3g4QA8g8A6gEQAkgDAyAVQAfAMCqBcQB4BCBXAKIA2AEQAgACAVAEQAYAEAvARICkA9QAqAPARARIAQAXQAKAOAJAGQAMAIAeAEQAeAEAMAJQAHAFAMANQAKAKATAGIAhAIQBAAPA3AnQA4AnAiA3QAjA4AJBDQAIBEgVA9QAFALgFAZQgGAegRAXQgSAZgjARQgXALgrANQg9ASgkAHQgnAIghAAIgbgCg");
	mask.setTransform(401.2225,324.1571);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(642.5,546.3,160,102), null);


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
	mask.graphics.p("EAwPAmOQgMgCgSgIQgRgIgJACQgYgVgQgGQgHgCgSgDQgegEgQgIQgagMgFgXQgGgbAegfQAngoAlAIQANADAVAOIAtAdQAYAQAKAKQAPAQAHAWQAGAWgEAWQgCAOgHAHQgJAKgPAAIgGAAg");
	mask.setTransform(312.755,244.6148);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(601.6,470.6,23.899999999999977,18.69999999999999), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EA0KANyQgZgPgMgFQgkgPgqAGQgmAHgkAVQgIAFgDgBIgFgCQgcgNgfgSQgSgLgEgKIgFgOQgFgPgQgIQgPgIgQAFQifgmiqglImuhgQhDgPgkgFIg1gGIg1gGIhZgMQg5gJghgDQg+gFgSgDQgsgIgdgUQgpgbgZg/QgchIAJhEQAEgzAigzQAagoAvgvQBihdBAgiQC7hkBmgpQCmhCCOgHQBegDB3AVQA+AMCTAlQD3A9E4A/QC5AnF5BHIBvAYQA/AQAvAQQB5ArBJBJQAiAkAQAnQASAugOAnQgEANgLAZQgHAVAHAPQAEALANAIQAIAFAQAHQAsATAXAXQAgAggCAmQgBAkgiAjQgxAxhfAVQgcAHg0AHQg4AIgYAFQhJARgkAIQhAANgtgFQg1gEg+gfQgbgNgNgEQgXgHgRAGIgWAJIgVAJQgLAFgPAMIgZARQgdATgwAOQg3AOgaAKQgvARgKACQgeAIg7gDQg+gDgcAEQgOgEgXgOg");
	mask.setTransform(461.5534,90.05);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(540,360,1,1,0,0,0,540,360);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(622.4,66.8,300.70000000000005,113.3), null);


// stage content:
(lib.xxx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,15];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.boton.on('click', function(){
		/*
		Reproducción de un clip de película/vídeo o una línea de tiempo actual.
		Reproduce el clip de película especificado o el vídeo.
		*/
		_this.play();
		});
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(29));

	// Capa_44
	this.boton = new lib.Símbolo43();
	this.boton.name = "boton";
	this.boton.setTransform(557.7,1017.65,2.0866,2.1452,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.boton, 0, 1, 2, false, new lib.Símbolo43(), 3);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(44));

	// Capa_2
	this.instance = new lib.Símbolo42();
	this.instance.setTransform(513.45,997.75,1.5887,1.5887,0,0,0,274.1,351.9);
	this.instance.cache(96,157,412,415);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(29).to({_off:false},0).to({scaleX:1.5133,scaleY:1.5133,x:513.65,y:991.65},2).to({regX:274.4,scaleX:1.5065,scaleY:1.5065,x:513.85,y:997.75},2).to({regX:274.1,regY:351.7,scaleX:1.669,scaleY:1.669,x:519.65,y:1003.65},3).to({regY:351.9,scaleX:1.5449,scaleY:1.5449,x:513.5,y:991.65},3).to({scaleX:1.5887,scaleY:1.5887,x:513.45,y:997.75},3).wait(1));

	// Símbolo_1
	this.instance_1 = new lib.Símbolo1();
	this.instance_1.setTransform(96.2,1210.05,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_1._off = true;
	this.instance_1.cache(620,65,305,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:1009.75},14,cjs.Ease.get(1)).to({y:1210.05},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_39
	this.instance_2 = new lib.Símbolo39();
	this.instance_2.setTransform(96.2,1160.7,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_2._off = true;
	this.instance_2.cache(664,151,177,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:1009.75},14,cjs.Ease.get(1)).to({y:1160.7},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_16
	this.instance_3 = new lib.Símbolo16();
	this.instance_3.setTransform(96.2,1069.95,2.0396,2.0396,0,0,0,540,360);
	this.instance_3._off = true;
	this.instance_3.cache(639,248,212,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regY:360.1,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,y:1069.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_2
	this.instance_4 = new lib.Símbolo2();
	this.instance_4.setTransform(186.75,979.55,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_4._off = true;
	this.instance_4.cache(600,469,28,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:186.75,y:979.55},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_3
	this.instance_5 = new lib.Símbolo3();
	this.instance_5.setTransform(96.2,798.3,2.0396,2.0396,0,0,0,540,360);
	this.instance_5._off = true;
	this.instance_5.cache(641,544,164,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({regY:360.1,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,y:798.3},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_4
	this.instance_6 = new lib.Símbolo4();
	this.instance_6.setTransform(-54.75,798.3,2.0396,2.0396,0,0,0,540,360);
	this.instance_6._off = true;
	this.instance_6.cache(806,580,121,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-54.75,y:798.3},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_5
	this.instance_7 = new lib.Símbolo5();
	this.instance_7.setTransform(-54.75,888.85,2.0396,2.0396,0,0,0,540,360);
	this.instance_7._off = true;
	this.instance_7.cache(817,552,115,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-54.75,y:888.85},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_6
	this.instance_8 = new lib.Símbolo6();
	this.instance_8.setTransform(-100.4,871.1,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_8._off = true;
	this.instance_8.cache(895,443,109,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:-100.4,y:871.1},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_7
	this.instance_9 = new lib.Símbolo7();
	this.instance_9.setTransform(35.8,1039.95,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_9._off = true;
	this.instance_9.cache(797,351,28,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:35.8,y:1039.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_8
	this.instance_10 = new lib.Símbolo8();
	this.instance_10.setTransform(126.4,901.5,2.0396,2.0396,0,0,0,540,360);
	this.instance_10._off = true;
	this.instance_10.cache(605,344,241,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:126.4,y:901.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_9
	this.instance_11 = new lib.Símbolo9();
	this.instance_11.setTransform(141.5,1130.5,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_11._off = true;
	this.instance_11.cache(667,231,25,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:141.5,y:1130.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_10
	this.instance_12 = new lib.Símbolo10();
	this.instance_12.setTransform(232.05,1054.85,2.0396,2.0396,0,0,0,540,360);
	this.instance_12._off = true;
	this.instance_12.cache(571,237,97,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:232.05,y:1054.85},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_11
	this.instance_13 = new lib.Símbolo11();
	this.instance_13.setTransform(232.05,1085.05,2.0396,2.0396,0,0,0,540,360);
	this.instance_13._off = true;
	this.instance_13.cache(620,279,25,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:232.05,y:1085.05},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_12
	this.instance_14 = new lib.Símbolo12();
	this.instance_14.setTransform(216.95,1039.95,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_14._off = true;
	this.instance_14.cache(562,280,80,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:216.95,y:1039.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_13
	this.instance_15 = new lib.Símbolo13();
	this.instance_15.setTransform(201.85,1009.75,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_15._off = true;
	this.instance_15.cache(582,316,37,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({x:96.2},14,cjs.Ease.get(1)).to({x:201.85},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_14
	this.instance_16 = new lib.Símbolo14();
	this.instance_16.setTransform(186.75,979.55,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_16._off = true;
	this.instance_16.cache(616,322,53,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:186.75,y:979.55},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_15
	this.instance_17 = new lib.Símbolo15();
	this.instance_17.setTransform(126.4,979.55,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_17._off = true;
	this.instance_17.cache(691,339,107,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:126.4,y:979.55},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_17
	this.instance_18 = new lib.Símbolo17();
	this.instance_18.setTransform(-39.65,1069.95,2.0396,2.0396,0,0,0,540,360);
	this.instance_18._off = true;
	this.instance_18.cache(848,278,70,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-39.65,y:1069.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_18
	this.instance_19 = new lib.Símbolo18();
	this.instance_19.setTransform(-160.4,1160.7,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_19._off = true;
	this.instance_19.cache(837,181,188,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:-160.4,y:1160.7},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_19
	this.instance_20 = new lib.Símbolo19();
	this.instance_20.setTransform(-115.15,1069.95,2.0396,2.0396,0,0,0,540,360);
	this.instance_20._off = true;
	this.instance_20.cache(953,284,61,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-115.15,y:1069.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_20
	this.instance_21 = new lib.Símbolo20();
	this.instance_21.setTransform(-160.4,1085.05,2.0396,2.0396,0,0,0,540,360);
	this.instance_21._off = true;
	this.instance_21.cache(942,331,52,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-160.4,y:1085.05},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_21
	this.instance_22 = new lib.Símbolo21();
	this.instance_22.setTransform(-84.95,1009.75,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_22._off = true;
	this.instance_22.cache(897,385,77,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).to({x:96.2},14,cjs.Ease.get(1)).to({x:-84.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_22
	this.instance_23 = new lib.Símbolo22();
	this.instance_23.setTransform(-9.45,1024.85,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_23._off = true;
	this.instance_23.cache(816,297,142,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:-9.45,y:1024.85},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_23
	this.instance_24 = new lib.Símbolo23();
	this.instance_24.setTransform(-69.85,934.1,2.0396,2.0396,0,0,0,540,360);
	this.instance_24._off = true;
	this.instance_24.cache(878,424,66,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-69.85,y:934.1},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_24
	this.instance_25 = new lib.Símbolo24();
	this.instance_25.setTransform(20.7,964.3,2.0396,2.0396,0,0,0,540,360);
	this.instance_25._off = true;
	this.instance_25.cache(838,418,23,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:20.7,y:964.3},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_25
	this.instance_26 = new lib.Símbolo25();
	this.instance_26.setTransform(-9.45,979.55,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_26._off = true;
	this.instance_26.cache(834,435,51,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:-9.45,y:979.55},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_26
	this.instance_27 = new lib.Símbolo26();
	this.instance_27.setTransform(-24.55,873.75,2.0396,2.0396,0,0,0,540,360);
	this.instance_27._off = true;
	this.instance_27.cache(855,457,54,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-24.55,y:873.75},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_27
	this.instance_28 = new lib.Símbolo27();
	this.instance_28.setTransform(-9.45,858.7,2.0396,2.0396,0,0,0,540,360);
	this.instance_28._off = true;
	this.instance_28.cache(832,522,53,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:-9.45,y:858.7},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_28
	this.instance_29 = new lib.Símbolo28();
	this.instance_29.setTransform(35.8,903.95,2.0396,2.0396,0,0,0,540,360);
	this.instance_29._off = true;
	this.instance_29.cache(793,498,65,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:35.8,y:903.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_29
	this.instance_30 = new lib.Símbolo29();
	this.instance_30.setTransform(35.8,843.6,2.0396,2.0396,0,0,0,540,360);
	this.instance_30._off = true;
	this.instance_30.cache(750,545,72,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:35.8,y:843.6},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_30
	this.instance_31 = new lib.Símbolo30();
	this.instance_31.setTransform(156.6,873.75,2.0396,2.0396,0,0,0,540,360);
	this.instance_31._off = true;
	this.instance_31.cache(671,522,79,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:156.6,y:873.75},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_31
	this.instance_32 = new lib.Símbolo31();
	this.instance_32.setTransform(186.75,858.7,2.0396,2.0396,0,0,0,540,360);
	this.instance_32._off = true;
	this.instance_32.cache(632,536,22,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:186.75,y:858.7},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_32
	this.instance_33 = new lib.Símbolo32();
	this.instance_33.setTransform(233.6,846.65,2.0396,2.0396,0,0,0,540,360);
	this.instance_33._off = true;
	this.instance_33.cache(556,518,84,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:233.6,y:846.65},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_33
	this.instance_34 = new lib.Símbolo33();
	this.instance_34.setTransform(171.65,903.95,2.0396,2.0396,0,0,0,540,360);
	this.instance_34._off = true;
	this.instance_34.cache(614,496,63,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:171.65,y:903.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_34
	this.instance_35 = new lib.Símbolo34();
	this.instance_35.setTransform(262.2,949.2,2.0396,2.0396,0,0,0,540,360);
	this.instance_35._off = true;
	this.instance_35.cache(543,473,69,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:262.2,y:949.2},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_35
	this.instance_36 = new lib.Símbolo35();
	this.instance_36.setTransform(322.55,934.1,2.0396,2.0396,0,0,0,540,360);
	this.instance_36._off = true;
	this.instance_36.cache(512,490,63,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).to({regY:360.1,x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({regY:360,x:322.55,y:934.1},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_36
	this.instance_37 = new lib.Símbolo36();
	this.instance_37.setTransform(352.75,1009.75,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_37._off = true;
	this.instance_37.cache(510,392,98,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({_off:false},0).to({x:96.2},14,cjs.Ease.get(1)).to({x:352.75},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_37
	this.instance_38 = new lib.Símbolo37();
	this.instance_38.setTransform(247.1,1039.95,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_38._off = true;
	this.instance_38.cache(554,417,67,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:247.1,y:1039.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_38
	this.instance_39 = new lib.Símbolo38();
	this.instance_39.setTransform(262.2,1039.95,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_39._off = true;
	this.instance_39.cache(535,314,102,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:262.2,y:1039.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_40
	this.instance_40 = new lib.Símbolo40();
	this.instance_40.setTransform(156.6,1175.8,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_40._off = true;
	this.instance_40.cache(638,158,30,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:156.6,y:1175.8},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Símbolo_41
	this.instance_41 = new lib.Símbolo41();
	this.instance_41.setTransform(216.95,1130.5,2.0396,2.0396,0,0,0,540,360.1);
	this.instance_41._off = true;
	this.instance_41.cache(524,175,150,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({_off:false},0).to({x:96.2,y:1009.75},14,cjs.Ease.get(1)).to({x:216.95,y:1130.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-523.9,1138.3,2294.5,714.7);
// library properties:
lib.properties = {
	id: 'C6655253AB6D443D8E6AC0BC555735F8',
	width: 1080,
	height: 1920,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"xxx_atlas_1.png?1776438712695", id:"xxx_atlas_1"}
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
an.compositions['C6655253AB6D443D8E6AC0BC555735F8'] = {
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