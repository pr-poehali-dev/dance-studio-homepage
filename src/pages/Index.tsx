import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const danceStyles = [
  { icon: 'Music', name: 'Хип-хоп', description: 'Энергичные уличные танцы' },
  { icon: 'Heart', name: 'Современный', description: 'Пластика и выразительность' },
  { icon: 'Sparkles', name: 'Балет', description: 'Классическая грация' },
  { icon: 'Zap', name: 'Брейк-данс', description: 'Акробатика и стиль' }
];

const teachers = [
  { name: 'Анна Петрова', specialty: 'Современный танец', experience: '12 лет' },
  { name: 'Михаил Волков', specialty: 'Хип-хоп', experience: '8 лет' },
  { name: 'Елена Смирнова', specialty: 'Балет', experience: '15 лет' }
];

const schedule = [
  { day: 'Понедельник', time: '18:00 - 19:30', style: 'Хип-хоп', level: 'Начинающие' },
  { day: 'Среда', time: '19:00 - 20:30', style: 'Современный', level: 'Продолжающие' },
  { day: 'Пятница', time: '17:00 - 18:30', style: 'Балет', level: 'Все уровни' },
  { day: 'Суббота', time: '11:00 - 12:30', style: 'Брейк-данс', level: 'Начинающие' }
];

const memberships = [
  { name: 'Базовый', price: '3 500₽', lessons: '4 занятия', validity: '1 месяц' },
  { name: 'Стандарт', price: '6 000₽', lessons: '8 занятий', validity: '1 месяц' },
  { name: 'Премиум', price: '9 500₽', lessons: 'Безлимит', validity: '1 месяц' }
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Music" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">DANCE STUDIO</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#styles" className="hover:text-primary transition-colors">Направления</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#teachers" className="hover:text-primary transition-colors">Преподаватели</a>
            <a href="#memberships" className="hover:text-primary transition-colors">Абонементы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">Записаться</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/80 z-10" />
          <img 
            src="https://cdn.poehali.dev/projects/43c08e9a-7c68-479b-a54e-82b6ccca0936/files/185476d8-d699-4e19-be11-425160c84289.jpg"
            alt="Dance Studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Танцуй с нами</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Профессиональная студия танцев для всех уровней подготовки
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Записаться на пробное занятие
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                Посмотреть расписание
              </Button>
            </div>
          </div>
        </section>

        <section id="styles" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Направления танцев</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Выберите стиль, который вам по душе
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {danceStyles.map((style, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={style.icon} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{style.name}</h3>
                    <p className="text-muted-foreground">{style.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Расписание занятий</h2>
            <p className="text-center text-muted-foreground mb-12">
              Занятия проходят в просторных залах с профессиональным оборудованием
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {schedule.map((item, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" className="text-primary" size={20} />
                          <span className="font-semibold">{item.day}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" className="text-primary" size={20} />
                          <span>{item.time}</span>
                        </div>
                        <div className="font-medium">{item.style}</div>
                        <div className="flex items-center justify-between md:justify-end gap-2">
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{item.level}</span>
                          <Button size="sm">Записаться</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="teachers" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши преподаватели</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Профессионалы с опытом выступлений и преподавания
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teachers.map((teacher, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/43c08e9a-7c68-479b-a54e-82b6ccca0936/files/d4769199-7e52-4030-8d6c-e21463c31ea0.jpg"
                    alt={teacher.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                    <p className="text-primary font-medium mb-1">{teacher.specialty}</p>
                    <p className="text-sm text-muted-foreground">Опыт: {teacher.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея</h2>
            <p className="text-center text-muted-foreground mb-12">
              Наши выступления и мероприятия
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src="https://cdn.poehali.dev/projects/43c08e9a-7c68-479b-a54e-82b6ccca0936/files/d4279446-0454-4183-88dd-84fd127cd355.jpg"
                  alt="Gallery 1"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Play" className="text-white" size={48} />
                </div>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src="https://cdn.poehali.dev/projects/43c08e9a-7c68-479b-a54e-82b6ccca0936/files/185476d8-d699-4e19-be11-425160c84289.jpg"
                  alt="Gallery 2"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Image" className="text-white" size={48} />
                </div>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src="https://cdn.poehali.dev/projects/43c08e9a-7c68-479b-a54e-82b6ccca0936/files/d4769199-7e52-4030-8d6c-e21463c31ea0.jpg"
                  alt="Gallery 3"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Image" className="text-white" size={48} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="memberships" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Абонементы</h2>
            <p className="text-center text-muted-foreground mb-12">
              Выберите подходящий тариф и начните танцевать
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {memberships.map((membership, idx) => (
                <Card key={idx} className={`relative overflow-hidden hover:shadow-xl transition-all ${idx === 1 ? 'border-primary border-2 scale-105' : ''}`}>
                  {idx === 1 && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">{membership.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-4">{membership.price}</div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{membership.lessons}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>Срок: {membership.validity}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>Заморозка 7 дней</span>
                      </div>
                    </div>
                    <Button className="w-full" variant={idx === 1 ? 'default' : 'outline'}>
                      Оплатить онлайн
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
                <p className="text-white/80 mb-8">
                  Запишитесь на пробное занятие или задайте вопросы нашим администраторам
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-white/80">г. Москва, ул. Танцевальная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-white/80">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-white/80">info@dancestudio.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-white/80">Пн-Вс: 10:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Форма записи</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Комментарий (необязательно)"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/90 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Music" className="text-primary" size={28} />
              <span className="text-xl font-bold">DANCE STUDIO</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
            </div>
            <p className="text-sm text-white/70">© 2024 Dance Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
