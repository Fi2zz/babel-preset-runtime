# babel-preset-runtime

Extending `@babel/preset-env`

# Usage

First, [install Babel](https://babeljs.io/docs/setup/).

Then install babel-preset-runtime.

```bash

    # npm
    npm install babel-preset-runtime

    # yarn
    yarn add babel-preset-runtime


```

Then create a file named `.babelrc` or `babel.config` with following contents in the root folder of your project:

```json
{
	"presets": ["babel-preset-runtime"]
}
```

Default configs of `babel-preset-runtime`

```javascript
//  @babel/preset-env
{
	"useBuiltIns": "entry",
	"corejs": 3,
	"exclude": ["transform-typeof-symbol"]
}
// @babel/plugin-transform-runtime
{
    corejs: false,
    helpers: true,
    version: require("@babel/runtime/package.json").version,
    regenerator: true,
    absoluteRuntime: path.dirname(
			require.resolve("@babel/runtime/package.json")
		),
}

```

You can fully override default config

```javascript
{
	"presets": [
		[
			"babel-preset-rutime",
			{
				//options of  @babel/preset-env
				"env": {},
				//options of @babel/plugin-transform-runtime
				"runtime": {}
			}
		]
	]
}
```

Add react support

```javascript
{
	"presets": [
		[
			"babel-preset-runtime",
			{
				//options of @babel/preset-react
				"react": {}
			}
		]
	]
}
```
