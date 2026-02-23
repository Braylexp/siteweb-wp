import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { NewsItem } from '../../core/models/content.model';
import { CtaButton } from '../../shared/components/cta-button/cta-button';
import { FormatContentPipe } from '../../shared/pipes/format-content.pipe';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaButton, FormatContentPipe],
  templateUrl: './news-detail.html',
  styleUrl: './news-detail.css',
})
export class NewsDetail implements OnInit {
  news: NewsItem | undefined;
  allNews: NewsItem[] = [];
  relatedNews: NewsItem[] = [];
  newsId: string | null = null;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allNews = this.contentService.getNews();
    
    // Obtener el ID de la noticia desde la ruta
    this.route.paramMap.subscribe(params => {
      this.newsId = params.get('id');
      if (this.newsId) {
        this.news = this.contentService.getNewsById(this.newsId);
        
        if (!this.news) {
          // Si la noticia no existe, redirigir a home
          this.router.navigate(['/']);
        } else {
          // Obtener noticias relacionadas (todas menos la actual, limitadas a 3)
          this.relatedNews = this.allNews
            .filter(n => n.id !== this.newsId)
            .slice(0, 3);
        }
      }
    });
  }

  /**
   * Navega a la página de una noticia relacionada
   */
  goToNews(id: string): void {
    this.router.navigate(['/noticias', id]);
  }
}
