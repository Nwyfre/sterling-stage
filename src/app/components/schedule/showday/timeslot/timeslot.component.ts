import { Component, input, InputSignal, signal } from '@angular/core';
import { Timeslot } from '../../../../models/timeslot.model';
import { faFacebook, faTwitter, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faMusic, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-timeslot',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './timeslot.component.html',
  styleUrl: './timeslot.component.scss'
})
export class TimeslotComponent {
  public timeslot: InputSignal<Timeslot> = input<Timeslot>({} as Timeslot);

  protected faFacebook = signal(faFacebook);
  protected faReverb = signal(faStar);
  protected faMyspace = signal(faPerson);
  protected faBand = signal(faMusic);
  protected faTwitter = signal(faTwitter);
  protected faSpotify = signal(faSpotify);
  protected faYoutube = signal(faYoutube);
}
