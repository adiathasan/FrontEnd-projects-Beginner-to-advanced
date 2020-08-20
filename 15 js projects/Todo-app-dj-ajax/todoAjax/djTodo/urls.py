from django.urls import path
from .views import *


urlpatterns = [
    path('', json, name='api'),
    path('task-list/', taskList, name='tasks'),
    path('task-detail/<str:pk>/', taskDetail, name='detail'),
    path('task-create/', taskCreate, name='create'),
    path('task-update/<str:pk>/', taskUpdate, name='update'),
    path('task-delete/<str:pk>/', taskDelete, name='Delete'),
    

]
