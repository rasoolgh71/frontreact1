from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'task/home.html')

def table(request):
    return render(request,'task/table.html')

def formtest(request):
    return render(request,'task/form.html')