from django.db import models

# Create your models here.


class Dish(models.Model):
    name = models.CharField(max_length=255, unique=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
