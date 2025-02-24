import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink, RouterLinkActive]
})
export class HeaderComponent {
  isSidebarOpen: boolean = false; // State to manage sidebar visibility

  // Method to open the sidebar
  openSidebar() {
    this.isSidebarOpen = true;
  }

  // Method to close the sidebar
  closeSidebar() {
    this.isSidebarOpen = false;
  }
}