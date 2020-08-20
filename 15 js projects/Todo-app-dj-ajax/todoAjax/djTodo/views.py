from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializers
from .models import Task
# Create your views here.

# def homePage(request):
#     context = {}
#     template = 'index.html'
#     return render(request, template, context)


@api_view(['GET',])
def json(request):
    api_urls = {
        'list': '/task-list/',
        'detail': '/task-detail/<str:pk>/',
        'create': '/task-create/',
        'update': '/task-update/<str:pk>/',
        'delete': '/task-delete/<str:pk>/',

    }
    return Response(api_urls)


@api_view(['GET',])
def taskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializers(tasks, many=True)
    return Response(serializer.data)


@api_view(['GET',])
def taskDetail(request, pk):
    task = get_object_or_404(Task, id=pk)
    # task = Task.objects.get('pk')
    serializer = TaskSerializers(task, many=False)
    return Response(serializer.data)


@api_view(['POST',])
def taskCreate(request):
    form = TaskSerializers(data=request.data)
    if form.is_valid():
        form.save()
    return Response(form.data)


@api_view(['POST',])
def taskUpdate(request, pk):
    obj = get_object_or_404(Task, id=pk)
    form = TaskSerializers(instance=obj, data=request.data)
    if form.is_valid():
        form.save()
    return Response(form.data)


@api_view(['DELETE',])
def taskDelete(request, pk):
    obj = get_object_or_404(Task, id=pk)
    obj.delete()
    return Response('destryed')






