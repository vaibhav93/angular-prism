import { Directive, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
	selector: 'arbitrary'	// Can be named anything you want
})

export declare class PrismComponent implements AfterViewInit {
    private _renderer;
    private _el;
    code: string;
    language: string;
    private preNode;
    private codeNode;
    private nativeElement;
    ngAfterViewInit(): void;
    constructor(_renderer: Renderer2, _el: ElementRef);
}
