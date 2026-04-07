## Лабораторная работа №6. BFF (Backend For Frontend)

### Что сделано

| Фича | Описание |
|------|----------|
| **Interceptor** | Измеряет время ответа, логирует в консоль и добавляет заголовок `X-Response-Time` |
| **Кэширование** | GET `/api/habits` кэшируется на 10 секунд |
| **Загрузка файлов** | Файлы загружаются в Yandex Object Storage, возвращается публичная ссылка |

---

### Проверка работы

```
# 1. Заголовок с временем ответа
curl -i "http://localhost:3000/api/habits?page=1&limit=5" | grep X-Response-Time

# 2. Кэш (первый запрос в БД, второй из кэша)
curl "http://localhost:3000/api/habits?page=1&limit=5"
curl "http://localhost:3000/api/habits?page=1&limit=5"

# 3. Загрузка файла
curl -X POST http://localhost:3000/upload/habit-image \
  -F "file=@test.txt" \
  -F "habitId=24"
```

### Запуск
`npm run start:dev`
