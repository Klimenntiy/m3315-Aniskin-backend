# HabitTracker

**Автор:** Аниськин Климентий  
**Группа:** M3315

## Лабораторная работа №2. Создание доменной модели

### О проекте
Веб-приложение для отслеживания привычек. В рамках второй лабораторной работы была спроектирована и развернута реляционная база данных PostgreSQL на облачном хостинге Render.

### Стек технологий
- **База данных:** PostgreSQL 16 на Render
- **Локальное подключение:** psql
- **ORM (для описания):** Prisma

### Доменная модель

Проект описывает трекер привычек со следующими сущностями:

#### 1. User (Пользователь)
- `id` (int, PK) — уникальный идентификатор
- `email` (string, UK) — email пользователя
- `name` (string) — имя
- `createdAt` (datetime) — дата регистрации
- `updatedAt` (datetime) — дата обновления

#### 2. Category (Категория)
- `id` (int, PK) — уникальный идентификатор
- `name` (string, UK) — название категории (спорт, учеба, здоровье)
- `description` (string) — описание
- `createdAt` (datetime) — дата создания

#### 3. Habit (Привычка)
- `id` (int, PK) — уникальный идентификатор
- `title` (string) — название привычки
- `description` (string) — описание
- `userId` (int, FK → User.id) — владелец
- `categoryId` (int, FK → Category.id) — категория
- `createdAt` (datetime) — дата создания
- `updatedAt` (datetime) — дата обновления

#### 4. HabitLog (Журнал выполнения)
- `id` (int, PK) — уникальный идентификатор
- `habitId` (int, FK → Habit.id) — привычка
- `date` (datetime) — дата выполнения
- `completed` (boolean) — выполнено (true/false)
- `notes` (string) — заметки
- `createdAt` (datetime) — дата записи

#### 5. Achievement (Достижение)
- `id` (int, PK) — уникальный идентификатор
- `name` (string, UK) — название достижения
- `description` (string) — описание
- `icon` (string) — иконка
- `createdAt` (datetime) — дата создания

#### 6. UserAchievement (Достижения пользователей)
- `userId` (int, PK, FK → User.id) — пользователь
- `achievementId` (int, PK, FK → Achievement.id) — достижение
- `earnedAt` (datetime) — дата получения

### Связи между сущностями
- **User** (1) ←→ (M) **Habit** — один пользователь → много привычек
- **Category** (1) ←→ (M) **Habit** — одна категория → много привычек
- **Habit** (1) ←→ (M) **HabitLog** — одна привычка → много записей
- **User** (M) ←→ (M) **Achievement** через **UserAchievement** (многие ко многим)

### ER-диаграмма

<img width="496" height="522" alt="Снимок экрана 2026-03-03 в 11 52 21 AM" src="https://github.com/user-attachments/assets/20705d51-a497-47fd-9600-b40d0812293d" />

### Подтверждение существования базы данных

**Подключение к базе на Render:**
```bash
psql "postgresql://habit_tracker_db_uxfk_user:Vh1VXlHkXNSjw3GtIE6GQqWVv3Rf5xSs@dpg-d6j8tqvgi27c73f55e4g-a.frankfurt-postgres.render.com/habit_tracker_db_uxfk"
