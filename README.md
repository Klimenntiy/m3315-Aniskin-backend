### Лабораторная работа №4. RESTful API

### API эндпоинты

| Метод | Маршрут | Описание |
|-------|---------|----------|
| GET | `/api/habits` | Список привычек |
| GET | `/api/habits/:id` | Получить привычку |
| POST | `/api/habits` | Создать привычку |
| PATCH | `/api/habits/:id` | Обновить привычку |
| DELETE | `/api/habits/:id` | Удалить привычку |

### Пагинация

`GET /api/habits?page=1&limit=10`

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 0,
    "next": null,
    "prev": null
  }
}
```
### Валидация
title — строка, обязательное

userId — число, обязательное

### Фильтр ошибок
Все ошибки API возвращаются в едином формате:

```json
{
  "statusCode": 400,
  "timestamp": "2026-03-24T18:00:00.000Z",
  "path": "/api/habits",
  "message": ["Название обязательно"]
}
```


### Swagger
`/api-docs`

### Пример
```bash
curl -X POST http://localhost:3000/api/habits -H "Content-Type: application/json" -d '{"title":"Зарядка","userId":2}'```
