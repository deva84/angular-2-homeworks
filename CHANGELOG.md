## [Unreleased]

## [1.0.0] - 2021-12-12

### Added

- FirstComponent with basic properties;
- ProductComponent with basis properties and methods
- ProductListComponent
- [styles] folder for common styles

## [1.0.1] - 2021-12-13

### Added

- ProductService, CartListComponent, CartService

### Refactored

- ProductComponent

## [1.0.2] - 2021-12-15

### Refactored

- CartListComponent

## [1.0.3] - 2021-01-03

### Refactored

- ProductComponent, ProductListComponent, FirstComponent

## [1.0.4] - 2021-01-06

### Refactored

- Application structure

### Added

- Eslint, Prettier

## [1.0.4] - 2021-01-07

### Added

- CartModule, ProductsModule, OrdersModule, SharedModule
- Cart total amount calculation

### Refactored

- AppModule, favicon

## [1.0.5] - 2021-01-08

### Added

- CartItemComponent
- DisableDirective
- Cart total items quantity calculation

### Refactored

- CartListComponent

## [1.0.6] - 2021-01-09

### Added

- CartItemComponent
- DisableDirective
- HighlightDirective

### Refactored

- CartListComponent
- AppComponent
- ChangeDetectionStrategy for FirstComponent, ProductComponent, CartItemComponent

## [1.0.7] - 2021-01-13

### Refactored 

- Components and services as per comments
- CartService methods

## [1.0.8] - 2021-01-19

### Added

- New methods to CartService
- ConfigOptionsService
- ConstantsService

## [1.0.9] - 2021-01-23

### Added

- GeneratorService
- GeneratorFactory, generatedString
- genID
- extended GeneratorService with getNewID method
- LocalStorageService
- TransformDirective (/shared/directives/transform)
- appTransform Directive to <h1> in ProductListComponent and to <span> (.cart-list-title) in CartListComponent

### Refactored 

- injected GeneratorFactory, generatedString, ConstantsService, LocalStorageService to FirstComponent  
