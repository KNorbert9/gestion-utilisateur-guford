import {DOCUMENT, NgClass, ViewportScroller} from "@angular/common";
import {AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet, Scroll} from '@angular/router';
import {ContainerComponent} from '@coreui/angular';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {inView} from "framer-motion";
import {animate} from "framer-motion/dom";
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";
import SmoothScroll from 'smooth-scroll';
import {TippyTooltipDirective} from "../../../directives/tippy-tooltip/tippy-tooltip.directive";
import {RolesEnum} from "../../enums/roles.enum";
// import {KeycloakService} from "../../utils/services/keycloak/keycloak.service";
import {CustomHeaderComponent} from "../custom-header/custom-header.component";
import {customNavItems, INavDataModel, navPhytosanitaireItems, navVeterinaireItems} from './_nav';
import {DefaultLayoutService} from "./default-layout.service";
import {UserProfileService} from "../../services/auth/user-profile.service";
import {UserProfileModel} from "../../models/user-profile.model";

function isOverflown(element: HTMLElement) {
    return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
}

@UntilDestroy()
@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        RouterLink,
        ContainerComponent,
        RouterOutlet,
        CustomHeaderComponent,
        TippyTooltipDirective
    ]
})
export class DefaultLayoutComponent implements OnInit, AfterViewInit {
    public navItems = customNavItems;
    currentUserProfile!: UserProfileModel;
    @ViewChild('sidebar') sidebar!: ElementRef<HTMLElement>;
    @ViewChildren('liElement') liElement!: QueryList<ElementRef<HTMLElement>>;
    currentRoute: string = localStorage.getItem('currentRoute') ?? '';
    currentNavItem: INavDataModel = JSON.parse(localStorage.getItem('activeNavItemAGRI') as string) ?? this.getFirstNavWithUrl();
    userProfile: KeycloakProfile = JSON.parse(localStorage.getItem('userProfile') as string) ?? {};
    protected readonly RolesEnum = RolesEnum;
    private scroll: any;

    constructor(public defaultLayoutService: DefaultLayoutService, private router: Router, @Inject(DOCUMENT)
                private document: Document, private viewportScroller: ViewportScroller, public keycloakService: KeycloakService,
                private userProfileService: UserProfileService) {


        // this.navItems = keycloakService.getUserRoles()?.includes(RolesEnum.INSPECTEUR_PHYTOSANITAIRE) ?
        //     navPhytosanitaireItems : keycloakService.getUserRoles()?.includes(RolesEnum.INSPECTEUR_VETERINAIRE) ?
        //         navVeterinaireItems : keycloakService.getUserRoles()?.includes(RolesEnum.MANAGER) ? customNavItems : [];
        // this.defaultLayoutService.scrollToElement();

        // this.navItems = this.currentUserProfile?.role === RolesEnum.G_PHYTOSANITAIRE
        //     ? navPhytosanitaireItems
        //     : this.currentUserProfile?.role === RolesEnum.INSPECTEUR_VETERINAIRE
        //         ? navVeterinaireItems
        //         : this.currentUserProfile?.role === RolesEnum.MANAGER
        //             ? customNavItems
        //             : [];

    }


    selectDahboardNavItem() {
        return this.navItems[1];
    }

    async getUserProfile() {
        this.userProfile = await this.keycloakService.loadUserProfile();
        console.log("getUserProfile", this.keycloakService.loadUserProfile());
    }

    getCurrentUser() {
        this.userProfileService.getCurrentUser().subscribe((res) => {
            if (res) {
                this.getUserLoggedInProfile(res); // Fetch user profile after getting email
            }
        });
    }

    getUserLoggedInProfile(email: string) {
        this.userProfileService.getUserProfile(email).subscribe((res) => {
            if (res) {
                console.log("Utilisateur", res);
                this.currentUserProfile = res;
                console.log("Utilisateur Groupe", this.currentUserProfile.groupe);
                this.setNavItems();
            }
        });
    }

    setNavItems() {
        if (this.currentUserProfile.groupe === RolesEnum.G_PHYTOSANITAIRE) {
            this.navItems = navPhytosanitaireItems;
        } else if (this.currentUserProfile.groupe === RolesEnum.INSPECTEUR_VETERINAIRE) {
            this.navItems = navVeterinaireItems;
        } else if (this.currentUserProfile.groupe === RolesEnum.MANAGER || this.currentUserProfile.groupe === RolesEnum.VETERINAIRE) {
            this.navItems = customNavItems;
        } else {
            this.navItems = []; // Default empty array if groupe doesn't match
        }
    }


    ngOnInit(): void {
        this.defaultLayoutService.activatedNavItem(this.currentNavItem);
        // this.router.navigate([this.currentNavItem.url]);
        this.getUserProfile();
        this.openAnimate()
        // this.getCurrentUser()
        console.log("this.Current Active Nav Item", this.currentNavItem);

        this.router.events.pipe(untilDestroyed(this)).subscribe((event) => {
            if(event){
                if(event instanceof Scroll){
                    if(event.routerEvent instanceof NavigationEnd){
                        this.defaultLayoutService.activateNavItemByUrlFull(this.router.url, this.navItems);
                    }
                }
            }
        })
    }

    openAnimate() {

        this.defaultLayoutService.sidebarVisibleSubject
            .pipe(untilDestroyed(this)).subscribe((value) => {
            inView(this.sidebar.nativeElement, (element) => {
                const animatioSide = animate(
                    this.defaultLayoutService.sidebarVisibleSubject.value ?
                        [
                            [
                                this.sidebar.nativeElement,
                                {transform: "translateX(0%)", width: "19rem", opacity: 1, filter: "blur(0px)"},
                                {ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6}
                            ],
                        ] :
                        [

                            [
                                this.sidebar.nativeElement,
                                {transform: "translateX(-100%)", width: "0", opacity: 0, filter: "blur(10px)"},
                                {at: "-0.1"}
                            ]
                        ]
                )

                return (leaveInfo) => {
                    animatioSide.stop();
                    console.log('leaveInfo', leaveInfo);
                }
            })
        })
    }

    getFirstNavWithUrl(): any {
        // Loop through the items
        for (const item of customNavItems) {
            if (item.url) {
                return item; // Return the first item that has a 'url'
            }
            // If the item has children, loop through them as well
            if (item.children && item.children.length > 0) {
                for (const child of item.children) {
                    if (child.url) {
                        return child; // Return the first child that has a 'url'
                    }
                }
            }
        }
        return null; // Return null if no item with 'url' is found
    }

    ngAfterViewInit(): void {
        // this.scrollToElement()

    }

    onScrollbarUpdate($event: any) {
        // if ($event.verticalUsed) {
        // console.log('verticalUsed', $event.verticalUsed);
        // }
    }

    scrollToElement() {
        const targetElement = document.querySelector("#" + this.currentNavItem.code as string)
        console.log("targetElement", targetElement);
        if (targetElement) {
            this.scroll = new SmoothScroll();
            this.scroll = this.scroll.animateScroll(targetElement, {
                speed: 800,
                easing: 'easeInOutCubic',
                offset: 50
            });
        }

    }

    getInitials(name: string | undefined): string {
        if (name === undefined || name === null || name === "") {
            return "";
        }
        const initials = (name as string)
            .split(' ')  // Sépare le nom en mots
            .map(word => word.charAt(0).toUpperCase())  // Prend la première lettre de chaque mot
            .join('');  // Joint les lettres ensemble
        return initials;
    }
}
