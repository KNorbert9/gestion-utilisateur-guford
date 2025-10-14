
import { Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { ProduitsComponent } from './produits.component';
import { FormaliteComponent } from './formalite/formalite.component';
import {TransitaireFormComponent} from "./transitaire-form/transitaire-form.component";

export const routes: Routes = [
    {
        path: '',
        component: ProduitsComponent,
        data: {
            title: 'Espace Produits',
        },
        children: [
            {
                path: '',
                component: ListingComponent,
                children: [
                    {
                        path: 'transitaire',
                        component: TransitaireFormComponent
                    },

                ]
            },

            {
                path: ':id/:name',
                component: FormaliteComponent
            },
        ]
    }
]
