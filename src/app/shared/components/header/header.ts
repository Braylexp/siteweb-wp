import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NavItem } from '../../../core/models/content.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Estado del menú móvil
  mobileMenuOpen = false;
  
  // Estado de los menús desplegables
  openDropdown: string | null = null;
  
  // Estado de la búsqueda
  searchOpen = false;
  searchQuery = '';
  
  // Items de navegación con submenús
  navItems: NavItem[] = [
    { path: '/somos', label: 'SOMOS MARCHA' },
    {
      label: 'DERECHOS HUMANOS',
      path: '/derechos',
      submenu: [
        { path: '/denuncias', label: 'Denuncias' },
        { path: '/informes', label: 'Informes' },
        { path: '/acciones-urgentes', label: 'Acciones Urgentes' }
      ]
    },
    {
      label: 'COMUNICACIÓN',
      path: '/comunicacion',
      submenu: [
        { path: '/declaraciones', label: 'Declaraciones' },
        { path: '/opinion-comunicacion', label: 'Opinión y Análisis' }
      ]
    },
    { path: '/internacional', label: 'INTERNACIONAL' },
    { path: '/opinion', label: 'OPINIÓN Y ANÁLISIS' }
  ];
  
  constructor(private router: Router) {}
  
  /**
   * Alterna el estado del menú móvil
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  /**
   * Cierra el menú móvil al navegar
   */
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
  
  /**
   * Alterna el estado del dropdown
   */
  toggleDropdown(label: string): void {
    this.openDropdown = this.openDropdown === label ? null : label;
  }
  
  /**
   * Abre el dropdown
   */
  openDropdownMenu(label: string): void {
    this.openDropdown = label;
  }
  
  /**
   * Cierra el dropdown
   */
  closeDropdown(): void {
    this.openDropdown = null;
  }
  
  /**
   * Alterna la visibilidad de la barra de búsqueda
   */
  toggleSearch(): void {
    this.searchOpen = !this.searchOpen;
    if (!this.searchOpen) {
      this.searchQuery = '';
    }
  }
  
  /**
   * Realiza la búsqueda
   */
  performSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Buscando:', this.searchQuery);
      // Aquí puedes agregar lógica de búsqueda
      this.searchOpen = false;
      this.searchQuery = '';
    }
  }
  
  /**
   * Cierra la búsqueda
   */
  closeSearch(): void {
    this.searchOpen = false;
    this.searchQuery = '';
  }
  
  /**
   * Verifica si un item tiene submenú
   */
  hasSubmenu(item: NavItem): boolean {
    return !!item.submenu && item.submenu.length > 0;
  }
  
  /**
   * Navega al inicio
   */
  navigateHome(): void {
    this.router.navigate(['/home']);
    this.closeMobileMenu();
    this.closeDropdown();
  }
}
