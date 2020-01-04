# Favorite Grid
![Favorite Grid Logo](https://i.ibb.co/Jvvw6qG/favorite-grid-logo.png)

A customizable grid system

The idea behind this grid is infinite customization.
You can easily create your own grid system with Favorite Grid. By default this system is similar to Bootstrap and if you have worked with Bootstrap you can work with it too. You can have an infinite number of `breakpoint` and `columns`. The system is also only `2 kB` by default which is very light.

## Usage

you define how many columns you want to have in : `$max-column`

The columns are created with this mixin, which accepts a parameter $size like ( sm - md - lg ) 
('none' for No device size)
```
@mixin grid ($size) { }
```

Here you define the columns in different breakpoints.
```
@mixin breakpoint($type, $breakpoint) { }
```

Like this for small device :
```
@include breakpoint(min,sm) {
  @include grid(sm)
}
``` 
## License
```
Licensed under MIT 
```
