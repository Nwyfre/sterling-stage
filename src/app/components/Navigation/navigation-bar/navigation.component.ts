import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import {MenuItem } from 'primeng/api';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [MenubarModule, RouterModule, RouterLink, NgIf, NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  protected items: MenuItem[] = []
  private router: Router = inject(Router)


  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        command: () => this.router.navigate(['/home'])
      },
      { 
        label: 'Ticket Information',
        items: [
          { 
            label: 'Tickets',
            command: () => this.router.navigate(['/tickets'])
          },
          {
            label: 'Ticket Outlets',
            command: () => this.router.navigate(['/outlets'])
          }
        ]
      },
      
        {
          label: 'Schedules',
          items: [
            {
              label: 'Folkfest',
              command: () => this.router.navigate(['/schedule/1'])
            }
          ]
        },
      
     {
      label: 'Info',
      items: [
        {
          label: 'Camping',
          command: () => this.router.navigate(['/info/camping']),
        },
        {
          label: 'Parking',
          command: () => this.router.navigate(['/info/parking'])
        },
        {
          label: 'Directions',
          command:  () => this.router.navigate(['/info/directions'])
        },
        {
          label: 'Site Map',
          command: () => this.router.navigate(['/info/sitemap'])
        },
        {
          label: 'Contact Us',
          command: () => this.router.navigate(['/info/contact'])
        }, 
        {
          label: 'Rules',
          command: () => this.router.navigate(['/info/rules'])
        },
        {
          label: 'About',
          command: () => this.router.navigate(['/info/about'])
        }
      ]
     },
     {
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100050414382814',
      image: 'images/icon-facebook.png'
     },
     {
      label: 'Youtube',
      url: 'https://www.youtube.com/results?search_query=Sterling+Stage',
      image: '/images/icon-youtube.png'
     },  
     {
      label: 'Music',
      url: 'https://archive.org/search?query=Sterling+Stage',
      image: 'images/music-icon.png'
     },
     {
      label: 'Mailing List',
      url: '/subscribe',
      image: 'images/mail.png'

     }
    ]
  }

}
