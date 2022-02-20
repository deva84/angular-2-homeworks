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

## [1.0.3] - 2022-01-03

### Refactored

- ProductComponent, ProductListComponent, FirstComponent

## [1.0.4] - 2022-01-06

### Refactored

- Application structure

### Added

- Eslint, Prettier

## [1.0.4] - 2022-01-07

### Added

- CartModule, ProductsModule, OrdersModule, SharedModule
- Cart total amount calculation

### Refactored

- AppModule, favicon

## [1.0.5] - 2022-01-08

### Added

- CartItemComponent
- DisableDirective
- Cart total items quantity calculation

### Refactored

- CartListComponent

## [1.0.6] - 2022-01-09

### Added

- CartItemComponent
- DisableDirective
- HighlightDirective

### Refactored

- CartListComponent
- AppComponent
- ChangeDetectionStrategy for FirstComponent, ProductComponent, CartItemComponent

## [1.0.7] - 2022-01-13

### Refactored 

- Components and services as per comments
- CartService methods

## [1.0.8] - 2022-01-19

### Added

- New methods to CartService
- ConfigOptionsService
- ConstantsService

## [1.0.9] - 2022-01-23

### Added

- GeneratorService
- GeneratorFactory, generatedString
- genID
- extended GeneratorService with getNewID method
- LocalStorageService
- TransformDirective (/shared/directives/transform)
- appTransform Directive to h1 in ProductListComponent and to span (.cart-list-title) in CartListComponent

### Refactored 

- injected GeneratorFactory, generatedString, ConstantsService, LocalStorageService to FirstComponent  

## [1.0.10] - 2022-01-25

### Refactored

- converted category names to a lower case and added titlecase pipe
- replaced dollar sign with a currency pipe in templates of CartItemComponent, CartListComponent, FirstComponent, ProductComponent;
- CartService, CartListComponent

## [1.0.11] - 2022-01-28

### Refactored

- getProducts method to return Observable

### Added

- orderBy pipe implementation

## [1.0.12] - 2022-02-01

### Refactored

- SharedModule

### Added

- new properties and methods to CartListComponent for sorting and deletion all goods in the cart 

## [1.0.13] - 2022-02-12

### Refactored

- completed app layout refactoring
- updated data in products.json file
- added information-block components: ContactsComponent, DeliveryComponent, MainPageComponent, PageNotFoundComponent


## [1.0.14] - 2022-02-15

### Added

- routing to the app
- ProductViewComponent + routing

## [1.0.15] - 2022-02-17

### Added

- ProcessOrderComponent, IsCartEmptyGuard + routing, lazy-loading

## [1.0.16] - 2022-02-20

### Added

- Roles Interface: User and Admin 
- UserComponent, AdminComponent, AdminOrdersComponent, AdminProductsComponent, UsersGeneralComponent + routing, lazy-loading
- AuthGuard (implements CanActive, CanActivateChildren, CanLoad)
- ProductCanDeactivateGuard & ProductResolveGuard (real implementation will be provided later)



