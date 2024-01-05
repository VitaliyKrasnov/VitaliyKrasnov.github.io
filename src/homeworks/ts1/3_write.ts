/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 **/
type Category = {
    id: string;
    name: string;
    photo?: string; 
}
const categories: string[] = ["Бытовая техника", "Бытовая химия", "Галантерея", "Еда и напитки",
    "Игрушки", "Издания", "Косметика", "Настольные игры", "Обувь", "Одежда", "Предметы быта",
    "Табачные изделия", "Утварь"];
function getRandomCategory(): Category {
    const category: Category = {
        id: Math.floor(Math.random()*10000).toString(),
        name: categories[Math.floor(Math.random() * categories.length)]
    };
    return category;
}

 /** Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 **/

type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}
function getRandomProduct(createdAt: string): Product {
    const id: string = Math.floor(Math.random()*10000000).toString();
    const product: Product = {
        id: id,
        name: `Товар_${id}`,
        photo: "фото товара",
        desc: "описание товара",
        createdAt: createdAt,
        oldPrice: Math.floor(Math.random()*100000),
        price: Math.floor(Math.random()*100000),
        category: getRandomCategory()
    };
    return product;
}
 /** Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 **/
type Operation = Cost | Profit;

 /** Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 **/
type Cost = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: string; // "Cost"
}
function getRandomCostOperation(createdAt: string): Cost {
    const id: string = Math.floor(Math.random()*100000).toString();
    const cost: Cost = {
        id: id,
        name: `операция 'Cost' номер ${id}`,
        desc: "описание операции",
        createdAt: createdAt,
        amount: Math.floor(Math.random()*1000),
        category: getRandomCategory(),
        type: "Cost"
    };
    return cost;
}

 /** Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: string; // "Profit"
}
function getRandomProfitOperation(createdAt: string): Profit {
    const id: string = Math.floor(Math.random()*100000).toString();
    const profit: Profit = {
        id: id,
        name: `операция 'Profit' номер ${id}`,
        desc: "описание операции",
        createdAt: createdAt,
        amount: Math.floor(Math.random()*1000),
        category: getRandomCategory(),
        type: "Profit"
    };
    return profit;
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    return getRandomProduct(createdAt);
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    if (Math.random() <= 0.5) {
        return getRandomCostOperation(createdAt);
    } else {
        return getRandomProfitOperation(createdAt);
    }
};
