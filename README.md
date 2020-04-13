# Favorite Grid
![Favorite Grid Logo](https://i.ibb.co/Jvvw6qG/favorite-grid-logo.png)

A customizable grid system

The idea behind this grid is to be so customizable.
You can easily create your grid system with Favorite Grid. By default, this system is like Bootstrap plus you have an infinite number of `breakpoint` and `columns` and it's only `3 kB` .

## Usage

define how many columns you want in `$max-column` variable

Columns will be generated with grid() mixin, which accepts a $size parameter like (sm, md, lg and 'none' for Default ) 

```
@mixin grid ($size) { }
```

breakpoint() creates grids in specified sizes.
```
@mixin breakpoint($type, $breakpoint) { }
```

Like this one for small device :
```
@include breakpoint(min,sm) {
  @include grid(sm)
}
``` 

## Versions

Flex version : for modern browsers ( [See more details](https://caniuse.com/#feat=flexbox) )

Float base version : Compatible with legacy browsers

## Demo
```
https://favorite-grid.web.app/
```

## License
```
Licensed under MIT 
```
