# jQuery timeoutMenu
jQuery plugin emulate hover menu with touch events - timeoutMenu.js
==============
<a href="http://codepen.io/shure348/pen/KzYvZG" target="_blank">DEMO on CodePen</a>

## Features

* Delay on hovers



## Usage

### Initialization

Initialize a new carousel by running:
```js
$(function() {
	$('.timeoutMenu').timeoutMenu({
		//options
		delay: 1000
	});
});
```

### Options

* delay: 200 (default) - hover delay in ms



###The HTML code may look like this:
```html

	<ul class="timeoutMenu"> 
		<li><a href="#">Level 1</a>
			<ul>
				<li><a href="#">Level 2</a></li>
				<li><a href="#">Level 2</a></li>
				<li><a href="#">Level 2</a></li>
				<li><a href="#">Level 2</a></li>
				<li><a href="#">Level 2</a></li>
				<li><a href="#">Level 2</a></li>
			</ul>
		</li>
		<li><a href="#">Level 1</a>
			<ul>
				<li><a href="#">Level 2</a></li>
				<li><a href="#">Level 2</a></li>
				<li><a href="#">Level 2</a></li>
				...etc...
			</ul>
		</li>
	</ul>

```


## Notes
Feel free to report any bugs!


## License

Copyright (c) 2015 [shure348](https://github.com/shrue348/)

This content is released under the [MIT License](http://opensource.org/licenses/MIT).
