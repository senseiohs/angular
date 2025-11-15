# Test Project Services in Angular 19

## What difference between PROMISE and OBSERVABLE?
- Promise       => Promete que algo va a suceder aunque termine bien o mal
- Observable    => Es un canal de comunicación al que nuestros componentes estan inscritos y observan el contenido que pasa por dicho canal.


## Why RxJs is important for Angular
RxJs esta metido en las entrañas de Angular porque me permite modificar y crear nuevas instancias de objetos con otros como por ejemplo observables, arrays, colecciones, etc. En dichos objetos puedo iterar con métodos como: 
- pipe()
- map()

## ADAPTERS
Es una estructura basada en la clean architecture, la cual nos dice tenemos que tener adaptadores para poder comunicar la lógica interna de la aplicación con entidades externas (endpoints).
Los adaptadores son nada más que funciones.

```TypeScript
import CurrencyRates from "../models/currency";

export const CurrenciesAdapter = (currencyRates: CurrencyRates) => {
  return currencyRates;
};
```

# TakeUntilDestroyed
Cuando se utiliza el **SUBSCRIBE** a la data de un servicio por lo general en el **constructor()** o en el **OnInit()**, resulta que este proceso lo que hace es estar ligado siempre a la respuesta de este servicio, por lo que si el objecto al que tenemos ligado el resultado se destruye esto se va a desatar en un problema de rendimiento, por lo que debemos de asegurarnos que si el objeto ligado se destruye, la subscripción también debe morir.

```TypeScript
export class AppComponent {  
  private readonly ratesCurrenciesService = inject(CurrenciesService);
  rates: CurrencyRates[] = [] as CurrencyRates[];
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.ratesCurrenciesService
      .listAllCurrencies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((rates) => {
        this.rates = rates as CurrencyRates[];
        console.log("Rates with Adapter:", this.rates);
      });
  }
}
```
## Alternativa - Pipe Async


# ERROS
## Cannot find name 'map'. Did you mean 'Map'?
You only needed import map from rxj:
```TypeScript
import { map } from "rxjs/operators";
```

# Installation pre-requisites

IMPORTANT: Please use Node 18 (Long Term Support version). Note that Node 18 is not yet officially supported by the Angular CLI.

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install
Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

In order to be able to provide realistic examples, we will need in our playground a small REST API backend server. We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

# Important

# Other Courses

# RxJs In Practice Course

If you are looking for the [RxJs In Practice Course](https://angular-university.io/course/rxjs-course), the repo with the full code can be found here:

![RxJs In Practice Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png)


# NgRx In Depth Course

If you are looking for the [NgRx In Depth Course](https://angular-university.io/course/angular-ngrx-course), the repo with the full code can be found here:

![NgRx In Depth Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png)

# Angular PWA Course

If you are looking for the [Angular PWA Course](https://angular-university.io/course/angular-pwa-course), the repo with the full code can be found here:

![Angular PWA Course - Build the future of the Web Today](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png)

# Angular Security Masterclass

If you are looking for the [Angular Security Masterclass](https://angular-university.io/course/angular-security-course), the repo with the full code can be found here:

[Angular Security Masterclass](https://github.com/angular-university/angular-security-course).

![Angular Security Masterclass](https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png)

# Angular Advanced Library Laboratory Course

If you are looking for the Angular Advanced Course, the repo with the full code can be found here:

[Angular Advanced Library Laboratory Course: Build Your Own Library](https://angular-university.io/course/angular-advanced-course).

![Angular Advanced Library Laboratory Course: Build Your Own Library](https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png)


## RxJs and Reactive Patterns Angular Architecture Course

If you are looking for the RxJs and Reactive Patterns Angular Architecture Course code, the repo with the full code can be found here:

[RxJs and Reactive Patterns Angular Architecture Course](https://angular-university.io/course/reactive-angular-architecture-course)

![RxJs and Reactive Patterns Angular Architecture Course](https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png)



## Angular Ngrx Reactive Extensions Architecture Course

If you are looking for the Angular Ngrx Reactive Extensions Architecture Course code, the repo with the full code can be found here:

[Angular Ngrx Reactive Extensions Architecture Course](https://angular-university.io/course/angular2-ngrx)

[Github repo for this course](https://github.com/angular-university/ngrx-course)

![Angular Ngrx Course](https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png)



## Angular 2 and Firebase - Build a Web Application Course

If you are looking for the Angular 2 and Firebase - Build a Web Application Course code, the repo with the full code can be found here:

[Angular 2 and Firebase - Build a Web Application](https://angular-university.io/course/build-an-application-with-angular2)

[Github repo for this course](https://github.com/angular-university/angular-firebase-app)

![Angular firebase course](https://angular-academy.s3.amazonaws.com/thumbnails/angular_app-firebase-small.jpg)


## Complete Typescript 2 Course - Build A REST API

If you are looking for the Complete Typescript 2 Course - Build a REST API, the repo with the full code can be found here:

[https://angular-university.io/course/typescript-2-tutorial](https://github.com/angular-university/complete-typescript-course)

[Github repo for this course](https://github.com/angular-university/complete-typescript-course)

![Complete Typescript Course](https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png)

