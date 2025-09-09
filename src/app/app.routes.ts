import { Routes } from '@angular/router';
import {Eins} from '../class/eins/eins';
import {Drei} from '../class/drei/drei';
import {Vier} from '../class/vier/vier';
import {Zwei} from '../class/zwei/zwei';
import {Funf} from '../class/funf/funf';
import {ClassComponent} from '../class/class.component';
import {UNCO} from '../class/eins/unco/unco';
import {NAWI} from '../class/eins/nawi/nawi';
import {BW} from '../class/eins/bw/bw';
import {Englisch} from '../class/eins/englisch/englisch';
import {Deutsch} from '../class/eins/deutsch/deutsch';
import {Mathematik} from '../class/eins/mathematik/mathematik';
import {OMAI} from '../class/eins/omai/omai';
import {GEO} from '../class/eins/geo/geo';

export const routes: Routes = [
  { path: '', redirectTo: 'klasse', pathMatch: 'full' },
  { path: 'klasse', children: [
      { path: '', component: ClassComponent },
      { path: '1',   children: [
          {path: '', component: Eins},
          { path: 'MAM', component: Mathematik },
          { path: 'DE', component: Deutsch },
          { path: 'EWS', component: Englisch },
          { path: 'BW', component: BW },
          { path: 'UNCO', component: UNCO },
          { path: 'NAWI', component: NAWI },
          { path: 'OMAI', component: OMAI },
          { path: 'GEO', component: GEO }
        ]},
      { path: '2', component: Zwei },
      { path: '3', component: Drei },
      { path: '4', component: Vier },
      { path: '5', component: Funf }
    ]},

];
