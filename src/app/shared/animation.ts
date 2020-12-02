import { animate, query, keyframes, style, transition, trigger, stagger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('400ms ease-in', style({ opacity: 1 }))]),
    transition(':leave', [style({ position: 'absolute', display: 'block', width: '*' }), animate('0ms ease-out', style({ opacity: 0 }))])
]);

export const slideUpChilds = trigger('slideUpChilds', [
    transition(':enter', [
        query('div', style({ opacity: 0 }), { optional: true }),
        query('div', stagger('175ms', [
            animate('225ms ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(15%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(-10px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
            ]))]), { optional: true })
    ])
]);
