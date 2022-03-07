import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde, plano dentário e remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, shopping e etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de salário'},
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'},
      { id: 6, name: 'Estudos', description: 'Faculdade, cursos e livros'},
      { id: 7, name: 'Alimentação', description: 'Mercantil e lanches'}
    ];

    return { categories }
  }
}