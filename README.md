# Favorite Grid
![Favorite Grid Logo](https://i.ibb.co/Jvvw6qG/favorite-grid-logo.png)

A customizable grid system

The idea behind this grid is to be so customizable.
You can easily create your grid system with Favorite Grid. By default, this system is like Bootstrap plus you have an infinite number of `breakpoint` and `columns` and it's only `3 kB` which is very light.

## Usage

define how many columns you want in `$max-column` variable

Columns will be generated with grid() mixin, which accepts a $size parameter like (sm, md, lg, ... and 'none' for No device size ) 

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
There are two versions of this grid system: 

Flex version : Supported by new browsers ( [See more details](https://caniuse.com/#feat=flexbox) )

Float base version : Supported by most browsers

## Demo
```
https://favorite-grid.firebaseapp.com/
```

## License
```
Licensed under MIT 
```
