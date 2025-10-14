import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { badNavItems, badConsignataireNavItems, INavDataModel } from './_nav';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class DefaultLayoutService {
  public navItems = badNavItems;

  public activeNavItemSubject: BehaviorSubject<INavDataModel> =
    new BehaviorSubject<INavDataModel>(
      JSON.parse(localStorage.getItem('activeNavItemDECLAFRET') || '{}')
    );
  public activeNavItemData!: INavDataModel;

  public sidebarVisibleSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  constructor(private viewportScroller: ViewportScroller) {
    // this.activeNavItemSubject = new BehaviorSubject<INavDataModel>(navItems[0]);
    this.activeNavItem.pipe(untilDestroyed(this)).subscribe((navItem) => {
      this.activeNavItemData = navItem;
    });
  }

  set navItemsData(value: INavDataModel[]) {
    this.navItems = value;
  }

  checkIfNavLinkHaveChildren(navItem: INavDataModel) {
    return _.has(navItem, 'children');
  }

  checkIfNavLinkIsTitle(navItem: INavDataModel) {
    return _.has(navItem, 'title');
  }

  activatedNavItem(navItem: INavDataModel) {
    this.activeNavItemSubject.next(navItem);
    localStorage.setItem('activeNavItemAGRI', JSON.stringify(navItem));
  }

  getNavItemByUrl(url: string): any | undefined {
    console.log(this.navItems);
    console.log(
      this.navItems.find((navItem) => navItem.url === url.split('#')[0])
    );
    return (
      this.navItems.find((navItem) => navItem.url === url.split('#')[0]) ??
      this.getActiveForChildren(url.split('#')[0])
    );
  }

  getActiveForChildren(url: string) {
    console.log(url);
    return this.navItems
      .filter((item) =>
        item.children?.find((navItem) => navItem.url === url)
      )[0]
      ?.children?.find((item) => item.url === url);
  }

  activateNavItemByUrl(url: string) {
    console.log('coucou' + url);
    if (url.includes('declarant')) {
      this.navItems = badNavItems;

      const navItem = this.getNavItemByUrl(url);
      console.log(navItem);
      if (navItem) {
        this.activatedNavItem(navItem);
      }
    } else {
      this.navItems = badConsignataireNavItems;

      const navItem = this.getNavItemByUrl(url);
      console.log(navItem);
      if (navItem) {
        this.activatedNavItem(navItem);
      }
    }
  }

  get activeNavItem() {
    return this.activeNavItemSubject.asObservable();
  }

  checkIfNavItemIsPresentByCode(code: string) {}

  findNavItemByCode = (code: string): INavDataModel => {
    // Fonction récursive pour parcourir les sous-éléments
    const searchInChildren = (
      children: INavDataModel[]
    ): INavDataModel | undefined => {
      for (const item of children) {
        if (item.code === code) {
          return item;
        }
        // Si l'élément a des sous-éléments, on continue de chercher
        if (item.children) {
          const found = searchInChildren(item.children);
          if (found) {
            return found;
          }
        }
      }
      return this.navItems[0];
    };

    // Parcourir le tableau principal `badNavItems`
    for (const navItem of badNavItems) {
      if (navItem.code === code) {
        return navItem;
      }
      // Si l'élément a des enfants, rechercher aussi dans les sous-éléments
      if (navItem.children) {
        const found = searchInChildren(navItem.children);
        if (found) {
          return found;
        }
      }
    }

    return this.navItems[0]; // Si aucun élément avec le code donné n'est trouvé
  };

  checkIfNavItemIsActive(navItem: INavDataModel) {
    return _.isEqual(navItem, this.activeNavItemData);
  }

  scrollToElement() {
    console.log(this.activeNavItemData.name);
    this.viewportScroller.scrollToAnchor(this.activeNavItemData.name as string);
  }

  hideSidebar() {
    this.sidebarVisibleSubject.next(false);
  }

  openSidebar() {
    this.sidebarVisibleSubject.next(true);
  }

  toggleSidebar() {
    this.sidebarVisibleSubject.next(!this.sidebarVisibleSubject.value);
  }
}
