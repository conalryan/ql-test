# QLTest

## Quick start

`yarn install`

`ng build`

`ng build --prod`

`ng serve -o`

`ng test app`

`ng test lib`

## Project setup

*projects/app*

- Shell that handles user flow between pages.

*project/lib*

- /contacts
    - /container
        - /contact-detail: component that interact with NGRX store and is self contained.
        - /contact-list: component that interact with NGRX store and is self contained.
    - /form: To create new contact
    - /model: Interface to match api response
    - /service: Calls external api 
    - /state: NGRX store actions, effects, reducer, selectors for Contacts Feature
- /shared
    - /container
        - /alerts: container that interacts with NGRX store and is self contained
    - /components
        - /nav-bar: Simple component with router links
    - /directives: To add error messages and styles on form errors
    - /model: Alert model
    - /state: NGRX store actions, effects, reducer, selectors for Alerts Feature

## Dependencies

- Angular 9
- ng-bootstrap 6
- bootstrap 4
- NGRX 9


### Note: Tested with Mac Mojave 10.14.6 on Chrome 83.0.4103.116