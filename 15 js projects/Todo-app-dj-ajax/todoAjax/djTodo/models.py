from django.db import models

# Create your models here.


class Task(models.Model):
    title = models.CharField(blank=True, null=True, max_length=200)
    completed = models.BooleanField(blank=True, null=True, default=False)

    def __str__(self):
        return self.title