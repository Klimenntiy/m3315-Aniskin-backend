## Лабораторная работа №5. GraphQL API

### GraphQL эндпоинт
`/graphql`

### Типы

**HabitType**
- `id: Int!` — ID привычки
- `title: String!` — название
- `description: String` — описание
- `userId: Int!` — ID пользователя
- `categoryId: Int` — ID категории
- `user: UserType` — пользователь (field resolver)
- `createdAt: DateTime!` — дата создания
- `updatedAt: DateTime!` — дата обновления

**UserType**
- `id: Int!`
- `email: String!`
- `name: String`
- `createdAt: DateTime!`
- `updatedAt: DateTime!`

### Запросы (Queries)

| Запрос | Описание |
|--------|----------|
| `habits` | Список всех привычек |
| `habit(id: Int)` | Привычка по ID |
| `habitsPaginated(page: Int, limit: Int)` | Список с пагинацией |

**Пример:**
```graphql
query {
  habitsPaginated(page: 1, limit: 5) {
    data {
      id
      title
      user { name }
    }
    pagination {
      page
      limit
      total
      totalPages
    }
  }
}
```

### Мутации (Mutations)
`createHabit(input: CreateHabitInput!)`	Создать привычку

`updateHabit(input: UpdateHabitInput!)`	Обновить привычку

`deleteHabit(id: Int!)`	Удалить привычку

```graphql
mutation {
  createHabit(input: {
    title: "Зарядка",
    userId: 2
  }) {
    id
    title
  }
}
```
### Input типы

`CreateHabitInput`

`title: String!`

`description: String`

`userId: Int!`

`categoryId: Int`

`UpdateHabitInput`

`id: Int!`

`title: String`

`description: String`

`userId: Int`

`categoryId: Int`

`Field resolver`

Поле user в HabitType автоматически подгружает данные пользователя.

### Ограничение сложности

Максимальная сложность запроса — 500. Превышение возвращает ошибку.

### Запуск
`npm run start:dev`

### Песочница: http://localhost:3000/graphql
