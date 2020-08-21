from django.shortcuts import render

# Create your views here.


def homePage(request):
    template = 'frontend/index.html'
    return render(request, template)
