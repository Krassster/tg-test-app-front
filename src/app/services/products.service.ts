import { Injectable } from '@angular/core';

const domain = 'https://result.school';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы компилятор, классы, generic, утилиты, декораторы, advenced...',
    time: 'С опытом. 2 недели.',
    type: ProductType.Skill,
  },
  {
    id: '30',
    title: 'Git и GitHub',
    link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'BLD, история версий, ветвление, удаленный репорзиторий, релизы, opensourse...',
    time: 'С опытом. 2 недели.',
    type: ProductType.Skill,
  },
  {
    id: '910',
    title: 'Redux, Redux Toolkit и MobX',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'Redux, React Redux, Redux DevTools',
    time: 'С опытом. 2 недели.',
    type: ProductType.Skill,
  },
  {
    id: '940',
    title: 'React Advanced',
    link: '/products/react',
    image: '/img/icons/products/icon-react.svg',
    text: 'React JS, Hooks, Forms, React Router v6',
    time: 'С опытом. 8 недель.',
    type: ProductType.Skill,
  },
  {
    id: '920',
    title: 'Первая ступень профессии frontend-разработчика',
    link: '/products/first-stage',
    image: '/img/icons/products/icon-first-stage.svg',
    text: 'JavaScript, Debug, DOM, Webpack',
    time: 'С нуля. 3 месяца.',
    type: ProductType.Skill,
  },
  {
    id: '930',
    title: 'Вторая ступень профессии frontend-разработчика',
    link: '/products/second-stage',
    image: '/img/icons/products/icon-second-stage.svg',
    text: 'React JS, Conext API, Redux, Webpack',
    time: 'С опытом. 6 месяцев.',
    type: ProductType.Skill,
  },
  {
    id: '24',
    title: 'Основы программирования',
    link: '/products/base-programming',
    image: '/img/icons/products/icon-base-programming.svg',
    text: 'Основы алгоритмов, браузера и интернета',
    time: 'С нуля. 2 недели.',
    type: ProductType.Intensive,
  },
  {
    id: '32',
    title: 'Первый пет проект на JS',
    link: '/products/demo-week',
    image: '/img/icons/products/icon-test-drive.svg',
    text: 'Основы работы с модальным окном, логика прогресс-бара',
    time: 'С опытом. 1 неделя.',
    type: ProductType.Skill,
  },
  {
    id: '33',
    title: 'Продвинутый JS. Создаем Excel',
    link: '/products/advanced-js',
    image: '/img/icons/products/icon-advanced-js.svg',
    text: 'Webpack, Jest, Node.js, State Managers, ООП',
    time: 'С опытом. 2 месяца.',
    type: ProductType.Intensive,
  },
  {
    id: '28',
    title: 'Курс "Основы JS" и 50 заданий',
    link: '/products/javascript',
    image: '/img/icons/products/icon-javascript.svg',
    text: 'JS, массивы, объекты, циклы, функции',
    time: 'С нуля. 2 недели.',
    type: ProductType.Course,
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
