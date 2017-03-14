/**
 * app.component
 */

import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";

import '../sass/main.scss';

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    private defaultOptions: Object = {
        font: 'sans-serif',
        defaultOpen: true, // Open menu automatically on load.
        defaultPosition: 'topLeft', // The menu default position
        radius: 200, // The radius of the menu wings from the center of the button.
        angle: 30, // The angle at which each wing will open
        offset: 25, // The gap between the menu button and the menu item wings.
        showIcons: true, // A flag that determines whether to show icon.
        onlyIcons: false, // A flag that determines whether only show all icons and hide the wing title
        spinable: false, // A flag that determines whether the menu could be spin.
        wingFontSize: 16,
        wingFontWeight: 600,
        wingFontColor: '#ffffff',
        wingIconSize: 35,
        buttonWidth: 60,
        buttonBackgroundColor: '#ff7f7f',
        buttonFontColor: '#ffffff',
        buttonFontWeight: 700,
        buttonFontSize: 14,
        buttonCrossImgSize: '50%',
        buttonOpacity: 0.7,
    };

    private defaultGutter: {top?: number, left?: number, right?: number, bottom?: number} = {
        top: 130,
        left: 30,
        right: 30,
        bottom: 30,
    };

    // the first wing starting angle
    private defaultStartAngles = {
        topLeft: 0,
        topRight: 90,
        bottomRight: 180,
        bottomLeft: 270
    };

    public positions = [
        {value: 'topLeft', display: 'Top Left'},
        {value: 'topRight', display: 'Top Right'},
        {value: 'bottomLeft', display: 'Bottom Left'},
        {value: 'bottomRight', display: 'Bottom Right'},
    ];

    private wings = [
        {
            'title': 'iPad',
            'color': '#ea2a29',
            'icon': {'name': 'fa fa-tablet'}
        }, {
            'title': 'iMac',
            'color': '#f16729',
            'icon': {'name': 'fa fa-laptop'}
        }, {
            'title': 'iPhone',
            'color': '#f89322',
            'icon': {'name': 'fa fa-mobile'}
        }, {
            'title': 'iWatch',
            'color': '#ffcf14',
            'icon': {'name': 'fa fa-clock-o'}
        }
    ];

    private render: boolean = true;

    private options: Object = {
        font: 'Baloo Bhaina, cursive',
    };

    private gutter: {top?: number, left?: number, right?: number, bottom?: number} = {};

    private startAngles: any = {};

    constructor( private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit(): void {
        /*if (window.innerWidth < 450) {
         this.options = {
         font: 'Baloo Bhaina, cursive',
         spinable: true,
         radius: 150,
         offset: 15,
         wingFontSize: 12,
         wingIconSize: 25,
         buttonWidth: 40,
         buttonFontSize: '10px',
         };

         this.gutter = {
         top: 30
         }
         }*/
    }

    public applyChanges( field: string, value: any ): any {
        if (!this.options.hasOwnProperty(field) || this.options[field] != value) {
            this.render = false;
            this.options[field] = value;
            this.cdRef.detectChanges();
            this.render = true;
        }
    }

    public applyDefault( field: string ) {
        if (this.options.hasOwnProperty(field)) {
            this.render = false;
            this.options[field] = this.defaultOptions[field];
            this.cdRef.detectChanges();
            this.render = true;
            this.cdRef.detectChanges();
            delete this.options[field];
        }
    }

    public applyGutter( gutter: {top: number, left: number, right: number, bottom: number} ): void {
        this.render = false;
        if (+gutter['top'] === this.defaultGutter['top']) {
            delete gutter['top'];
        } else {
            this.gutter['top'] = +gutter['top'];
        }

        if (+gutter['left'] === this.defaultGutter['left']) {
            delete gutter['left'];
        } else {
            this.gutter['left'] = +gutter['left'];
        }

        if (+gutter['bottom'] === this.defaultGutter['bottom']) {
            delete gutter['bottom'];
        } else {
            this.gutter['bottom'] = +gutter['bottom'];
        }

        if (+gutter['right'] === this.defaultGutter['right']) {
            delete gutter['right'];
        } else {
            this.gutter['right'] = +gutter['right'];
        }

        this.cdRef.detectChanges();
        this.render = true;
    }

    public applyGutterDefault(): void {
        this.render = false;
        this.gutter = this.defaultGutter;
        this.cdRef.detectChanges();
        this.render = true;
    }

    public applyStartAngles( angles: {topLeft: number, topRight: number, bottomRight: number, bottomLeft: number} ): void {
        this.render = false;
        if (+angles['topLeft'] === this.defaultGutter['topLeft']) {
            delete angles['topLeft'];
        } else {
            this.startAngles['topLeft'] = +angles['topLeft'];
        }

        if (+angles['topRight'] === this.defaultGutter['topRight']) {
            delete angles['topRight'];
        } else {
            this.startAngles['topRight'] = +angles['topRight'];
        }

        if (+angles['bottomRight'] === this.defaultGutter['bottomRight']) {
            delete angles['bottomRight'];
        } else {
            this.startAngles['bottomRight'] = +angles['bottomRight'];
        }

        if (+angles['bottomLeft'] === this.defaultGutter['bottomLeft']) {
            delete angles['bottomLeft'];
        } else {
            this.startAngles['bottomLeft'] = +angles['bottomLeft'];
        }

        this.cdRef.detectChanges();
        this.render = true;
    }

    public applyStartAnglesDefault(): void {
        this.render = false;
        this.startAngles = this.defaultStartAngles;
        this.cdRef.detectChanges();
        this.render = true;
    }
}
