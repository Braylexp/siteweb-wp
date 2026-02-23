import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { NewsItem } from '../../core/models/content.model';

@Component({
  selector: 'app-denuncias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './denuncias.html',
  styleUrl: './denuncias.css'
})
export class Denuncias implements OnInit {
  denunciasNews: (NewsItem & { paragraphs?: string[] })[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    const allNews = this.contentService.getNews();
    // Filtrar noticias que contengan 'DENUNCIAS' en la categoría
    this.denunciasNews = allNews
      .filter(news => 
        news.category.toUpperCase().includes('DENUNCIAS')
      )
      .map(news => ({
        ...news,
        paragraphs: news.content.split('\n\n').filter(p => p.trim().length > 0)
      }));
  }
}
