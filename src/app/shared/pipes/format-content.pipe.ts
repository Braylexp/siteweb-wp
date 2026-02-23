import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'formatContent',
  standalone: true
})
export class FormatContentPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';

    // Dividir el contenido en párrafos por doble salto de línea
    const paragraphs = value
      .split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => `<p class="text-lg mb-6 leading-relaxed">${p}</p>`)
      .join('');

    return this.sanitizer.bypassSecurityTrustHtml(paragraphs);
  }
}
