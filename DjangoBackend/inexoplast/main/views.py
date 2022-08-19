import telebot
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact

bot = telebot.TeleBot('5116496220:AAHhBGJN_9FYTKx7gwHwW4hDFpQ7QFupBmg')

def home_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        city = request.POST.get('city')
        date = request.POST.get('date')
        time = request.POST.get('time')
        contact = Contact.objects.create(
            name=name,
            phone=phone,
            city=city,
            date=date,
            time=time,
        )
        contact.save()
        msg = f"""
            \nIsm: {name}
            \nTelefon raqam: {phone}
            \nShahar: {city}
            \nSana: {city}
            \nVaqt: {time}
        """
        messages.info(request, 'Muvaffaqiyatli qabul qilindi !')
        bot.send_message('1060158414', msg)
        return redirect('/#contact')
    return render(request, 'index.html')
