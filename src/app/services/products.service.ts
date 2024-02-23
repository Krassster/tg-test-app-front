import { Injectable } from '@angular/core';

const domain = 'https://stopgame.ru/game';
const domainIMG = 'https://images.stopgame.ru/games/logos';

export enum ProductType {
  Anticipated = 'anticipated',
  InTheSpotlight = 'in the spotlight',
  AmazingFromStopGame = 'amazing from StopGame',
}

export enum ProductGenre {
  Action = 'Экшн',
  Adventure = 'Приключение',
  RPG = 'Ролевая',
  Online = 'Онлайн',
}

export interface IProduct {
  id: string;
  genre: ProductGenre[];
  title: string;
  link: string;
  image: string;
  release: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domainIMG + product.image,
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '1',
    title: 'Alone in the Darkt',
    link: '/alone_in_the_dark_2024',
    image:
      '/22417/c224x224/-mxzmcdqobEUfPUR__mijg/alone_in_the_dark_2022-square.jpg',
    genre: [ProductGenre.Action, ProductGenre.Adventure],
    release: '20 марта 2024',
    type: ProductType.Anticipated,
  },
  {
    id: '2',
    title: 'Final Fantasy VII Rebirth',
    link: '/final_fantasy_vii_rebirth',
    image:
      '/22106/c224x224/lj-OQAxXqQzn1m1wpYMiAg/final_fantasy_vii_rebirth-square_1.jpg',
    genre: [ProductGenre.Action, ProductGenre.RPG],
    release: '29 февраля 2024',
    type: ProductType.Anticipated,
  },
  {
    id: '3',
    title: 'The Thaumaturge',
    link: '/the_thaumaturge',
    image:
      '/25224/c224x224/p6uHHQ4W02nMWaDXp4N1Gw/the_thaumaturge-square_1.jpg',
    genre: [ProductGenre.Adventure, ProductGenre.RPG],
    release: '4 марта 2024',
    type: ProductType.Anticipated,
  },
  {
    id: '4',
    title: 'Pacific Drive',
    link: '/pacific_drive',
    image: '/22551/c224x224/mups211lpEmkaxroYaECRw/pacific_drive-square.jpg',
    genre: [ProductGenre.Adventure],
    release: '22 февраля 2024',
    type: ProductType.Anticipated,
  },
  {
    id: '5',
    title: 'Helldivers 2',
    link: '/helldivers_2',
    image: '/27604/c224x224/StczMn5sdOosJ0npZVPeWw/helldivers_2-square_1.jpg',
    genre: [ProductGenre.Action, ProductGenre.Online],
    release: '8 февраля 2024',
    type: ProductType.InTheSpotlight,
  },
  {
    id: '6',
    title: 'Baldur’s Gate III',
    link: '/baldur_s_gate_iii',
    image:
      '/19092/c224x224/4EI2-rC8Jq5naa8egfcN3g/baldur_s_gate_iii-square.jpg',
    genre: [ProductGenre.Adventure, ProductGenre.RPG],
    release: '3 августа 2023',
    type: ProductType.InTheSpotlight,
  },
  {
    id: '7',
    title: 'Suicide Squad: Kill the Justice League',
    link: '/suicide_squad_kill_the_justice_league',
    image:
      '/19884/c224x224/zXoYHMTAasC_mKj4GdsopA/suicide_squad_kill_the_justice_league-square.jpg',
    genre: [ProductGenre.Adventure, ProductGenre.Online],
    release: '2 февраля 2024',
    type: ProductType.InTheSpotlight,
  },
  {
    id: '8',
    title: 'Banishers: Ghosts of New Eden',
    link: '/banishers_ghosts_of_new_eden',
    image:
      '/23539/c224x224/ikRWS3RR6JQERw_v6lqU_g/banishers_ghosts_of_new_eden-square_1.jpg',
    genre: [ProductGenre.Action, ProductGenre.RPG],
    release: '13 февраля 2024',
    type: ProductType.AmazingFromStopGame,
  },
  {
    id: '9',
    title: 'Persona 3 Reload',
    link: '/persona_3_reload',
    image:
      '/28433/c224x224/gp7p2QcmU9XSB5fAbM_4dg/persona_3_reload-square_1.jpg',
    genre: [ProductGenre.RPG],
    release: '2 февраля 2024',
    type: ProductType.AmazingFromStopGame,
  },
  {
    id: '10',
    title: 'Like a Dragon: Infinite Wealth',
    link: '/like_a_dragon_infinite_wealth',
    image:
      '/22568/c224x224/FnE6G7vnkMKkofCkNM3YLw/like_a_dragon_infinite_wealth-square.jpg',
    genre: [ProductGenre.Action, ProductGenre.RPG],
    release: '26 января 2024',
    type: ProductType.AmazingFromStopGame,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }

  constructor() {}
}
