# QLTest

## Quick start

`yarn install`

`ng serve -o`

## Scaffold
`ng new ql-test --create-application=false --package-manager=yarn --strict=true`

`ng g application app --lintFix=true --routing=true --style=scss`

Add to `angular.json`

```json
"schematics": {
    "@schematics/angular:component": {
        "changeDetection": "OnPush",
        "styleext": "scss"
    }
}
```

### Install deps

ng-bootstrap and bootstrap

`ng add @ng-bootstrap/ng-bootstrap`

NGRX

`ng add @ngrx/store`

`yarn add @ngrx/store-devtools`

Add to `app.module`
```typescript
StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
}),
```

`ng add @ngrx/effects`

`ng add @ngrx/entity`
